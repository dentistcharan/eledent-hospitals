import BookingAportment from "@/app/components/comman/booking-aportment";
import Footer from "@/app/components/Footer";
import LocationAbout from "@/app/components/location/location-about";
import LocationFaq from "@/app/components/location/location-faq";
import LocationGallery from "@/app/components/location/location-gallery";
import LocationHero from "@/app/components/location/location-hero";
import LocationServices from "@/app/components/location/location-services";
import LocationTrust from "@/app/components/location/location-trust";
import Navbar from "@/app/components/Navbar";
import { getLocationBySlug } from "@/lib/location-api";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function LocationPage({ params }: Props) {
  const location = await getLocationBySlug(params.slug);

  if (!location) notFound();

  return (
    <div>
      <Navbar />
      <main>
        <LocationHero
          city={location.heroTitle}
          subtitle={location.heroSubtitle}
          bannerSrc={location.heroBannerSrc}
        />

        <LocationAbout location={location} />

        <LocationServices services={location.services} />

        <LocationTrust
          city={location.city}
          trustHeading={location.trustHeading}
          trustCards={location.trustCards.map((c) => ({ ...c, variant: c.variant as any }))}
        />

        <BookingAportment />

        <LocationGallery gallery={location.gallery} />

        <LocationFaq
          faqs={location.faqs}
          introText={location.faqIntroText}
        />
      </main>
      <Footer />
    </div>
  );
}