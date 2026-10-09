import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsHero from "../components/doctors/doctors-hero";
import DoctorsList from "../components/doctors/doctors-list";
import BookingAportment from "../components/comman/booking-aportment";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://eledenthospitals.com";

export const metadata: Metadata = {
    title: "Our Doctors | Eledent Dental Hospital",
    description: "Meet the experienced dental doctors at Eledent Dental Hospital. Explore our specialists, their expertise, and dental care services to find the right dentist for your needs.",
    alternates: {
        canonical: `${siteUrl}/doctors`,
    },
    openGraph: {
        title: "Our Doctors | Eledent Dental Hospital",
        description: "Meet the experienced dental doctors at Eledent Dental Hospital. Explore our specialists, their expertise, and dental care services to find the right dentist for your needs.",
        url: `${siteUrl}/doctors`,
        siteName: "Eledent Dental Hospitals",
        type: "website",
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
