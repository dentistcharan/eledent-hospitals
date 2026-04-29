import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsHero from "../components/doctors/doctors-hero";
import DoctorsList from "../components/doctors/doctors-list";

export const metadata: Metadata = {
    title: "Our Doctors | Eledent Dental Hospital",
    description: "Meet our team of experienced dental specialists at Eledent Dental Hospital, Hyderabad.",
};

export default function DoctorsPage() {
    return (
        <div>
            <Navbar />
            <main>
                <DoctorsHero />
                <DoctorsList />
                <Footer />
            </main>
        </div>
    );
}
