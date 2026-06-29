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

export async function getServicesData(): Promise<ServiceItem[]> {
  try {
    const response = await fetch(SERVICES_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
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
