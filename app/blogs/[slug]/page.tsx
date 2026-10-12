import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetailsHero from "@/app/components/blog-details/blog-details-hero";
import BlogDetailsAbout from "@/app/components/blog-details/blog-details-about";
import BlogDetailsFaq from "@/app/components/blog-details/blog-details-faq";
import { notFound } from "next/navigation";
import { getMetadataByPath } from "@/lib/metadata";


type RecentArticle = {
  id: number;
  title: string;
  image: string;
  href: string;
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type FaqSection = {
  tag: string;
  heading: string;
  description: string;
  backgroundImage: string;
  items: FaqItem[];
};

type RawBlogApiResponse = {
  data: {
    content: string;
    image: string;
    faqSection: FaqSection;
  };
};

type WpPost = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url?: string;
    }>;
  };
};

type WpSeoPost = {
  excerpt?: { rendered?: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
    og_image?: Array<{ url?: string }>;
    twitter_title?: string;
    twitter_description?: string;
  };
};

const CMS_URL = "https://cms.eledenthospitals.com";

function stripHtml(html: string) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(html: string) {
  return html
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8211;/gi, "-")
    .replace(/&#8212;/gi, "-");
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function extractFirstParagraph(html: string) {
  const match = html.match(/<(p|span)[^>]*>(.*?)<\/(p|span)>/i);
  return match?.[2] ? stripHtml(decodeHtml(match[2])) : "";
}

function trimDescription(value: string, maxLength = 155) {
  const clean = stripHtml(decodeHtml(value));
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, maxLength).replace(/\s+\S*$/, "").trim();
}

async function getWpSeoPost(slug: string): Promise<WpSeoPost | null> {
  try {
    const query = new URLSearchParams({
      slug,
      _fields: "excerpt,yoast_head_json",
    });
    const res = await fetch(`${CMS_URL}/wp-json/wp/v2/posts?${query}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const posts = (await res.json()) as WpSeoPost[];
    return posts[0] ?? null;
  } catch (error) {
    console.error("Failed to fetch blog SEO metadata:", error);
    return null;
  }
}

async function getRawBlogData(slug: string) {
  try {
    const res = await fetch(
      `${CMS_URL}/wp-json/custom/v1/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const json: RawBlogApiResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

async function getRecentBlogs(currentSlug: string): Promise<RecentArticle[]> {
  try {
    const res = await fetch(

      "https://cms.eledenthospitals.com/wp-json/wp/v2/posts?per_page=8&_embed",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    const posts: WpPost[] = await res.json();

    return posts
      .filter((post) => post.slug !== currentSlug)
      .slice(0, 6)
      .map((post) => ({
        id: post.id,
        title: stripHtml(post.title?.rendered || ""),
        href: `/blogs/${post.slug}`,
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      }));
  } catch (error) {
    console.error("Failed to fetch recent blogs:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const path = `/blogs/${slug}`;
  const [metadata, seoPost, rawBlogData] = await Promise.all([
    getMetadataByPath(path),
    getWpSeoPost(slug),
    getRawBlogData(slug),
  ]);

  if (!rawBlogData) {
    return {
      title: "Blog Not Found - Eledent Dental Hospitals",
      description: "The requested blog could not be found.",
    };
  }

  const yoast = seoPost?.yoast_head_json;
  const description =
    yoast?.description?.trim() ||
    trimDescription(seoPost?.excerpt?.rendered || "") ||
    trimDescription(extractFirstParagraph(rawBlogData.content)) ||
    "Read expert dental insights, treatment guidance, and oral health information from Eledent Dental Hospitals.";
  const title =
    yoast?.title?.trim() ||
    `${slugToTitle(slug)} - Eledent Dental Hospitals`;
  const canonicalUrl = `https://eledenthospitals.com${path}`;
  const image = yoast?.og_image?.[0]?.url || rawBlogData.image || undefined;

  return {
    ...metadata,
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      ...metadata.openGraph,
      title: yoast?.og_title?.trim() || title,
      description,
      url: canonicalUrl,
      images: image ? [{ url: image }] : metadata.openGraph?.images,
    },
    twitter: {
      ...metadata.twitter,
      title: yoast?.twitter_title?.trim() || yoast?.og_title?.trim() || title,
      description,
      images: image ? [image] : metadata.twitter?.images,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [rawBlogData, recentArticles] = await Promise.all([
    getRawBlogData(slug),
    getRecentBlogs(slug),
  ]);

  if (!rawBlogData) {
    notFound();
  }

  const hero = {
    title: slugToTitle(slug),
    image: rawBlogData.image || "/blog/blog-image.png",
  };

  const faqSection = rawBlogData.faqSection;

  return (
    <div>
      <Navbar />
      <main>
        <BlogDetailsHero hero={hero} />
        <BlogDetailsAbout
          htmlContent={rawBlogData.content}
          recentArticles={recentArticles}
        />
        {faqSection?.items?.length > 0 ? (
          <BlogDetailsFaq faqSection={faqSection} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
