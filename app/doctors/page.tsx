import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsHero from "../components/doctors/doctors-hero";
import DoctorsList from "../components/doctors/doctors-list";
import BookingAportment from "../components/comman/booking-aportment";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://eledenthospitals.com";
const featuredImage = `${siteUrl}/about-us/about-us.jpg`;

export const metadata: Metadata = {
    title: "Our Doctors | Eledent Dental Hospital",
    description: "Meet the experienced dentists at Eledent Dental Hospital, Hyderabad. Explore our specialists and their expertise to find the right dentist for your needs.",
    alternates: {
        canonical: `${siteUrl}/doctors`,
    },
    openGraph: {
        title: "Our Doctors | Eledent Dental Hospital",
        description: "Meet the experienced dentists at Eledent Dental Hospital, Hyderabad. Explore our specialists and their expertise to find the right dentist for your needs.",
        url: `${siteUrl}/doctors`,
        siteName: "Eledent Dental Hospitals",
        type: "website",
        images: [
            {
                url: featuredImage,
                width: 1568,
                height: 420,
                alt: "Our Doctors at Eledent Dental Hospital",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Doctors | Eledent Dental Hospital",
        description: "Meet the experienced dentists at Eledent Dental Hospital, Hyderabad. Explore our specialists and their expertise to find the right dentist for your needs.",
        images: [featuredImage],
    },
};

export default function DoctorsPage() {
    return (
        <div>
            <Navbar />
            <main>
                <DoctorsHero />
                <DoctorsList />
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
