import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorDetail from "../../components/doctors/doctor-detail";
import { fetchDoctors, fetchDoctorBySlug, generateDoctorSlug } from "@/lib/doctors-api";
import type { Doctor } from "@/lib/doctors-data";
import BookingAportment from "@/app/components/comman/booking-aportment";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const doctors = await fetchDoctors();
    return doctors.map((d) => ({ slug: generateDoctorSlug(d.name) }));
}

const siteUrl = "https://eledenthospitals.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const detail = await fetchDoctorBySlug(slug);
    if (!detail) return {};

    const name = detail.seo.title || detail.basicInfo.name;
    return {
        title: `${name} | Eledent Dental Hospital`,
        description: detail.seo.description,
        alternates: {
            canonical: `${siteUrl}/doctors/${slug}`,
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
