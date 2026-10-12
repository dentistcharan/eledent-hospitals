import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getMetadataByPath } from "@/lib/metadata";
import Navbar from "./components/Navbar";
import FaqSchema from "./components/FaqSchema";
import HeroSection from "./components/home/hero-section";
import AboutUs from "./components/home/about-us";
import OurSpecialties from "./components/home/our-specialties";
import HealthPatner from "./components/home/health-patner";
import BlogMain from "./components/home/blog";
import Footer from "./components/Footer";
import FacilitiesAccordion from "./components/home/facilities-accordion";
import { getServicesData } from "@/lib/services-api";
import { getSpecialtiesData } from "@/lib/specialties-api";

const MakeAppointment = dynamic(() => import("./components/home/make-appointment"));
const HomeServices = dynamic(() => import("./components/home/home-services"));
const HomeTestimonial = dynamic(() => import("./components/home/home-testimonial"));
const BookingAportment = dynamic(() => import("./components/comman/booking-aportment"));
const AwardsSection = dynamic(() => import("./components/home/award"));
const HomeFaq = dynamic(() => import("./components/home/home-faq"));

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/");
}

export default async function Home() {
  const [services, specialties] = await Promise.all([
    getServicesData(),
    getSpecialtiesData(),
  ]);

  return (
    <div>
      <FaqSchema path="/" />
      <Navbar initialServices={services} />
      <main>
        <HeroSection />
        <AboutUs />
        <OurSpecialties initialData={specialties} />
        <FacilitiesAccordion />
        <MakeAppointment />
        <HomeServices initialServices={services} />
        <HomeTestimonial />
        <HealthPatner />
        <div>
          <BookingAportment />
        </div>
        <BlogMain />
        <AwardsSection />
        <HomeFaq />
        <Footer initialServices={services} />
      </main>
    </div>
  );
}
