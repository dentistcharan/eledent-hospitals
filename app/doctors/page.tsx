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
    description: "Meet our team of experienced dental specialists at Eledent Dental Hospital, Hyderabad.",
    alternates: {
        canonical: `${siteUrl}/doctors`,
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
