import type { MetadataRoute } from "next";
import { fetchDoctors, generateDoctorSlug } from "@/lib/doctors-api";
import { getLocations } from "@/lib/location-api";
import { getAllServiceSlugs } from "@/lib/services-api";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://eledenthospitals.com/"
).replace(/\/$/, "");

// This route is backed by live CMS inventories. Keep it dynamic so a newly
// published service or location can appear without rebuilding the website.
export const dynamic = "force-dynamic";
export const revalidate = 0;

// CORE / STATIC PAGES
const staticPages = [
  { route: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { route: "/about-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { route: "/contact-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { route: "/facility", changeFrequency: "monthly" as const, priority: 0.7 },
  { route: "/technology", changeFrequency: "monthly" as const, priority: 0.7 },
  { route: "/blogs", changeFrequency: "weekly" as const, priority: 0.7 },
  { route: "/doctors", changeFrequency: "weekly" as const, priority: 0.8 },
  { route: "/dental-tourism", changeFrequency: "monthly" as const, priority: 0.7 },
  { route: "/guided-biofilm-therapy-gbt", changeFrequency: "monthly" as const, priority: 0.7 },
  { route: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
  { route: "/terms-and-conditions", changeFrequency: "yearly" as const, priority: 0.3 },
  { route: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { route: "/corporate-tie-ups", changeFrequency: "monthly" as const, priority: 0.9 },
];

type BlogSitemapItem = {
  slug: string;
  updatedAt: string;
  changeFrequency: "monthly";
  priority: number;
};

type WpPost = {
  slug?: string;
  modified_gmt?: string;
  modified?: string;
};

async function getBlogs(): Promise<BlogSitemapItem[]> {
  const posts: WpPost[] = [];

  try {
    // WordPress limits a request to 100 posts, so keep fetching pages until the
    // final partial page. Newly published posts are then included automatically.
    for (let page = 1; page <= 20; page += 1) {
      const response = await fetch(
        `https://cms.eledenthospitals.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified,modified_gmt`,
        { cache: "no-store" }
      );

      if (response.status === 400 && page > 1) break;
      if (!response.ok) throw new Error(`Blog API returned ${response.status}`);

      const batch = (await response.json()) as WpPost[];
      posts.push(...batch);
      if (batch.length < 100) break;
    }

    const blogs = posts
      .filter((post): post is WpPost & { slug: string } => Boolean(post.slug?.trim()))
      .map((post) => ({
        slug: post.slug.trim(),
        updatedAt: post.modified_gmt || post.modified || new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));

    return blogs;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, doctors, services, cmsLocations] = await Promise.all([
    getBlogs(),
    fetchDoctors(),
    getAllServiceSlugs(),
    getLocations(),
  ]);

  const locationSlugs = cmsLocations.map((location) => location.slug);

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = locationSlugs.map((location) => ({
    url: `${baseUrl}/${location}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: blog.changeFrequency,
    priority: blog.priority,
  }));

  const doctorEntries: MetadataRoute.Sitemap = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${generateDoctorSlug(doctor.name)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const allEntries = [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...blogEntries,
    ...doctorEntries,
  ];

  const uniqueEntries = Array.from(
    new Map(allEntries.map((entry) => [entry.url, entry])).values()
  );

  return uniqueEntries;
}
