"use client";

import { PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useAppointmentModal } from "@/app/context/AppointmentModalContext";

import "swiper/css";

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

    return (
        <div className="my-6 lg:my-12 mx-4 lg:mx-24 lg:mt-40 mt-36">
            <section className="relative z-0 w-full rounded-4xl bg-gray-300 h-[350px] lg:h-[500px] overflow-visible">
                <div className="absolute inset-0 z-10 pointer-events-none" />

                <Link href="/" className="block h-full">
                    <div className="relative z-20 h-full lg:max-w-7xl mx-auto flex items-center justify-center">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            loop={true}
                            speed={900}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            allowTouchMove={true}
                            className="h-full w-full"
                        >
                            {heroImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative h-[350px] lg:h-[500px] w-full">
                                        <picture>
                                            <source
                                                media="(max-width: 1023px)"
                                                srcSet={mobileImageSrcSet(image.mobile)}
                                                sizes="100vw"
                                            />
                                            <Image
                                                src={image.desktop}
                                                alt={`Hero slide ${index + 1}`}
                                                fill
                                                sizes="(max-width: 1023px) 100vw, calc(100vw - 12rem)"
                                                loading={index === 0 ? "eager" : "lazy"}
                                                fetchPriority={index === 0 ? "high" : "auto"}
                                                className="object-cover object-top rounded-2xl"
                                            />
                                        </picture>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
