export type ServiceItem = {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  title: string;
  description: string;
  slug: string;
};

type ServicesApiResponse = {
  data?: Partial<ServiceItem>[];
};

const SERVICES_URL =
  "https://cms.eledenthospitals.com/wp-json/custom/v1/services";

type WpServicePost = {
  slug?: string;
  modified_gmt?: string;
  modified?: string;
};

export type ServiceSitemapItem = {
  slug: string;
  updatedAt: string;
};

const WP_SERVICES_URL = "https://cms.eledenthospitals.com/wp-json/wp/v2/services";

// Sources the full services CPT (not the curated "featured" list from
// custom/v1/services) so every published/removed service page is reflected
// without a rebuild.
export async function getAllServiceSlugs(): Promise<ServiceSitemapItem[]> {
  const posts: WpServicePost[] = [];

  try {
    for (let page = 1; page <= 50; page += 1) {
      const response = await fetch(
        `${WP_SERVICES_URL}?per_page=100&page=${page}&_fields=slug,modified,modified_gmt`,
        { cache: "no-store" }
      );

      if (response.status === 400 && page > 1) break;
      if (!response.ok) throw new Error(`Services API returned ${response.status}`);

      const batch = (await response.json()) as WpServicePost[];
      posts.push(...batch);
      if (batch.length < 100) break;
    }

    return posts
      .filter((post): post is WpServicePost & { slug: string } => Boolean(post.slug?.trim()))
      .map((post) => ({
        slug: post.slug.trim(),
        updatedAt: post.modified_gmt || post.modified || new Date().toISOString(),
      }));
  } catch (error) {
    console.error("Services API error:", error);
    return [];
  }
}

export async function getServicesData(): Promise<ServiceItem[]> {
  try {
    const response = await fetch(SERVICES_URL, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services (${response.status})`);
    }

    const result: ServicesApiResponse = await response.json();
    const services = Array.isArray(result?.data) ? result.data : [];

    return services
      .map((item, index) => ({
        imageSrc: item.imageSrc?.trim() || "",
        imageAlt:
          item.imageAlt?.trim() ||
          item.title?.trim() ||
          `Service image ${index + 1}`,
        iconSrc: item.iconSrc?.trim() || "",
        title: item.title?.trim() || `Service ${index + 1}`,
        description: item.description?.trim() || "",
        slug: item.slug?.trim() || "",
      }))
      .filter((item) => item.title && item.slug);
  } catch (error) {
    console.error("Services API error:", error);
    return [];
  }
}
