"use client";

import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

const heroImages = [
    { desktop: "/home/home-banner.jpg", mobile: "/home/Eledent-Home-Mob-1.jpg" },
    { desktop: "/home/home-banner-1.jpg", mobile: "/home/Eledent-Home-Mob-2.jpg" },
    { desktop: "/home/home-banner-2.jpg", mobile: "/home/Eledent-Home-Mob-3.jpg" },
    { desktop: "/home/home-banner-3.jpg", mobile: "/home/Eledent-Home-Mob-4.jpg" },
    { desktop: "/home/home-banner-4.jpg", mobile: "/home/Eledent-Home-Mob-5.jpg" },
    { desktop: "/home/eledent-home-6.jpg", mobile: "/home/Eledent-Home-Mob-6.png" },
];

function mobileImageSrcSet(src: string) {
    const encodedSrc = encodeURIComponent(src);
    return [640, 750, 828]
        .map((width) => `/_next/image?url=${encodedSrc}&w=${width}&q=75 ${width}w`)
        .join(", ");
}

export default function HeroSection() {
    const { openModal } = useAppointmentModal();
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        let interval: number | undefined;
        let started = false;

        const startCarousel = () => {
            if (started) return;
            started = true;

            interval = window.setInterval(() => {
                setActiveSlide((current) => (current + 1) % heroImages.length);
            }, 2500);

            window.removeEventListener("pointerdown", startCarousel);
            window.removeEventListener("keydown", startCarousel);
            window.removeEventListener("touchstart", startCarousel);
            window.removeEventListener("scroll", startCarousel);
        };

        window.addEventListener("pointerdown", startCarousel, { passive: true });
        window.addEventListener("keydown", startCarousel, { passive: true });
        window.addEventListener("touchstart", startCarousel, { passive: true });
        window.addEventListener("scroll", startCarousel, { passive: true });

        const fallback = window.setTimeout(startCarousel, 15000);

        return () => {
            window.clearTimeout(fallback);
            if (interval) window.clearInterval(interval);
            window.removeEventListener("pointerdown", startCarousel);
            window.removeEventListener("keydown", startCarousel);
            window.removeEventListener("touchstart", startCarousel);
            window.removeEventListener("scroll", startCarousel);
        };
    }, []);

    const activeImage = heroImages[activeSlide];

    return (
        <div className="my-6 lg:my-12 mx-4 lg:mx-24 lg:mt-40 mt-36">
            <section className="relative z-0 w-full rounded-4xl bg-gray-300 h-[350px] lg:h-[500px] overflow-visible">
                <div className="absolute inset-0 z-10 pointer-events-none" />

                <Link href="/" className="block h-full">
                    <div className="relative z-20 h-full lg:max-w-7xl mx-auto flex items-center justify-center">
                        <div className="relative h-[350px] w-full lg:h-[500px]">
                            <picture key={activeSlide}>
                                <source
                                    media="(max-width: 1023px)"
                                    srcSet={mobileImageSrcSet(activeImage.mobile)}
                                    sizes="100vw"
                                />
                                <Image
                                    src={activeImage.desktop}
                                    alt={`Hero slide ${activeSlide + 1}`}
                                    fill
                                    sizes="100vw"
                                    loading={activeSlide === 0 ? "eager" : "lazy"}
                                    fetchPriority={activeSlide === 0 ? "high" : "auto"}
                                    className="rounded-2xl object-cover object-top"
                                />
                            </picture>
                        </div>
                    </div>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 w-full px-4 z-[999] -bottom-24 lg:-bottom-13">
                    <div className="bg-gray-800/95 backdrop-blur rounded-xl shadow-2xl w-full max-w-5xl mx-auto px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
                        <div className="hidden lg:flex items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <PhoneCall className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Need a Dental Service?</p>
                                    <a
                                        href="tel:+917799619994"
                                        className="text-sm font-semibold text-white transition md:text-lg"
                                    >
                                        +91 7799619994
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 p-2.5 rounded-lg">
                                    <Clock className="w-8 h-8 text-[#484847]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">Visiting Hours</p>
                                    <p className="text-xl font-medium text-white">Mon - Sun 9 AM to 9 PM</p>
                                </div>
                            </div>

                            <button
                                onClick={openModal}
                                className="bg-primary text-white px-8 py-3 rounded-sm font-semibold text-base uppercase tracking-wider transition-all duration-300 hover:opacity-95"
                            >
                                Book Appointment
                            </button>
                        </div>

                        <div className="lg:hidden">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-500 p-2 rounded-lg shrink-0">
                                        <PhoneCall className="w-6 h-6 text-[#484847]" strokeWidth={2.5} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-300">Need a Dental Treatment?</p>
                                        <a
                                            href="tel:+917799619994" className="text-lg font-medium text-white truncate">
                                            Call: 7799619994
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-500 p-2 rounded-lg shrink-0">
                                        <Clock className="w-6 h-6 text-[#484847]" strokeWidth={2.5} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-300">Visiting Hours</p>
                                        <p className="text-base font-medium text-white truncate">
                                            Monday to Sunday, 9 AM to 9 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={openModal}
                                className="mt-4 w-full bg-primary text-white px-6 py-3 rounded-sm font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:opacity-95"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
