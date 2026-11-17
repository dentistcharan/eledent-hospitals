import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorDetail from "../../components/doctors/doctor-detail";
import { fetchDoctorBySlug } from "@/lib/doctors-api";
import type { Doctor } from "@/lib/doctors-data";
import BookingAportment from "@/app/components/comman/booking-aportment";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = "https://eledenthospitals.com";

const doctorMetadataOverrides: Record<
    string,
    { title: string; description: string }
> = {
    "dr-matham-charan-kumar": {
        title: "Dr. Matham Charan Kumar | Eledent Dental Hospital",
        description:
            "Consult Dr. Matham Charan Kumar, a dentist with 20 years of experience at Eledent Dental Hospital in Kondapur, Hyderabad. Schedule your dental appointment today.",
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const detail = await fetchDoctorBySlug(slug);
    if (!detail) return {};

    const name = detail.seo.title || detail.basicInfo.name;
    const metadataOverride = doctorMetadataOverrides[slug];
    const title = metadataOverride?.title || `${name} | Eledent Dental Hospital`;
    const description = metadataOverride?.description || detail.seo.description;
    const canonicalUrl = `${siteUrl}/doctors/${slug}`;
    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Eledent Dental Hospitals",
            type: "website",
            images: detail.basicInfo.profileImage
                ? [{ url: detail.basicInfo.profileImage, alt: name }]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: detail.basicInfo.profileImage
                ? [detail.basicInfo.profileImage]
                : undefined,
        },
    };
}

export default async function DoctorPage({ params }: Props) {
    const { slug } = await params;
    const detail = await fetchDoctorBySlug(slug);
    if (!detail) notFound();

    const doctor: Doctor = {
        name: detail.seo.title || detail.basicInfo.name,
        education: detail.basicInfo.education,
        post: detail.basicInfo.designation,
        image: detail.basicInfo.profileImage,
        slug: detail.basicInfo.slug,
        experience: detail.basicInfo.experience,
        phone: detail.contactInfo.phone,
        email: detail.contactInfo.email,
        website: detail.contactInfo.website,
        branch: detail.clinicInfo.branch,
        consultationFee: detail.clinicInfo.consultationFee,
        visitingDays: detail.clinicInfo.visitingDays,
        visitingTime: detail.clinicInfo.visitingTime,
        languages: detail.professionalInfo.languages.map((l) => l.name),
        medibuddyDiscount: detail.offers.medibuddyDiscount,
        expertise: detail.professionalInfo.expertise.map((e) => e.name),
    };

    return (
        <div>
            <Navbar />
            <main>
                <DoctorDetail doctor={doctor} />
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
