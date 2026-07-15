export type SpecialtyItem = {
  _id?: string | number;
  slug?: string;
  title: string;
  image: string;
  detailImage: string;
  description: string[];
};

export type SpecialtiesData = {
  sectionTitle: string;
  sideImage: string;
  sideText: string;
  bgImage: string;
  services: SpecialtyItem[];
};

type RawSpecialty = {
  _id?: string | number;
  id?: string | number;
  slug?: string;
  urlSlug?: string;
  title?: string;
  image?: string;
  cardImage?: string;
  detailImage?: string;
  detail_image?: string;
  description?: string | string[];
};

type RawSpecialtiesData = {
  sectionTitle?: string;
  section_title?: string;
  sideImage?: string;
  side_image?: string;
  sideText?: string;
  side_text?: string;
  bgImage?: string;
  bg_image?: string;
  services?: RawSpecialty[];
};

type SpecialtiesResponse = {
  data?: RawSpecialtiesData;
} & RawSpecialtiesData;

const SPECIALTIES_URL =
  "https://cms.eledenthospitals.com/wp-json/custom/v2/specialties";

export async function getSpecialtiesData(): Promise<SpecialtiesData | null> {
  try {
    const response = await fetch(SPECIALTIES_URL, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch specialties (${response.status})`);
    }

    const result: SpecialtiesResponse = await response.json();
    const payload = result.data ?? result;
    const services = Array.isArray(payload.services) ? payload.services : [];

    const normalizedServices = services
      .map((item) => ({
        _id: item._id ?? item.id ?? item.title,
        slug: item.slug ?? item.urlSlug ?? "",
        title: item.title ?? "",
        image: item.image ?? item.cardImage ?? "",
        detailImage:
          item.detailImage ?? item.detail_image ?? item.image ?? "",
        description: Array.isArray(item.description)
          ? item.description
          : item.description
            ? [item.description]
            : [],
      }))
      .filter((item) => item.title);

    return {
      sectionTitle:
        payload.sectionTitle ?? payload.section_title ?? "Our Specialties",
      sideImage: payload.sideImage ?? payload.side_image ?? "",
      sideText: payload.sideText ?? payload.side_text ?? "",
      bgImage: payload.bgImage ?? payload.bg_image ?? "",
      services: normalizedServices,
    };
  } catch (error) {
    console.error("Specialties API error:", error);
    return null;
  }
}
