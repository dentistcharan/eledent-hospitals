export type ApiDoctor = {
  name: string;
  education: string;
  post: string;
  image: string;
  facebook: string;
  instagram: string;
  linkedin: string;
};

export type ApiDoctorDetail = {
  id: number;
  basicInfo: {
    name: string;
    slug: string;
    education: string;
    designation: string;
    experience: string;
    profileImage: string;
  };
  clinicInfo: {
    branch: string;
    consultationFee: string;
    visitingDays: string;
    visitingTime: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  professionalInfo: {
    languages: { name: string }[];
    expertise: { name: string }[];
  };
  offers: {
    medibuddyDiscount: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export function generateDoctorSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function fetchDoctors(): Promise<ApiDoctor[]> {
  try {
    const res = await fetch(
      "https://cms.eledenthospitals.com/wp-json/custom/v2/doctors",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json.data as ApiDoctor[];
  } catch {
    return [];
  }
}

export async function fetchDoctorBySlug(slug: string): Promise<ApiDoctorDetail | null> {
  try {
    const res = await fetch(
      `https://cms.eledenthospitals.com/wp-json/custom/v1/doctor/${slug}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success) return null;
    return json.data as ApiDoctorDetail;
  } catch {
    return null;
  }
}
