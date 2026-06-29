"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useMemo, useState } from "react";
import type {
    SpecialtiesData,
    SpecialtyItem,
} from "@/lib/specialties-api";

export default function OurSpecialties({
    initialData,
}: {
    initialData: SpecialtiesData | null;
}) {
    const sectionTitle = initialData?.sectionTitle ?? "Our Specialties";
    const sideImage = initialData?.sideImage ?? "";
    const sideText = initialData?.sideText ?? "";
    const bgImage = initialData?.bgImage ?? "";
    const [services] = useState<SpecialtyItem[]>(initialData?.services ?? []);
    const [activeService, setActiveService] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const loading = false;
    const error = initialData ? "" : "Unable to load specialties right now.";

    const cardsPerSlide = 3;

    const totalSlides = Math.ceil(services.length / cardsPerSlide);

    const visibleServices = useMemo(() => {
        const start = currentSlide * cardsPerSlide;
        return services.slice(start, start + cardsPerSlide);
    }, [services, currentSlide]);

    const active = useMemo(() => services[activeService], [services, activeService]);

    const handleServiceClick = (index: number) => {
        setActiveService(index);
        setCurrentSlide(Math.floor(index / cardsPerSlide));
    };

    const goPrev = () => {
        if (!services.length) return;

        const prevIndex = (activeService - 1 + services.length) % services.length;
        setActiveService(prevIndex);
        setCurrentSlide(Math.floor(prevIndex / cardsPerSlide));
    };

    const goNext = () => {
        if (!services.length) return;

        const nextIndex = (activeService + 1) % services.length;
        setActiveService(nextIndex);
        setCurrentSlide(Math.floor(nextIndex / cardsPerSlide));
    };

    return (
        <section className="relative px-4 pb-4 pt-4 sm:px-6 md:px-8 lg:px-20 lg:pt-24">
            <div className="relative overflow-hidden rounded-3xl py-6 lg:bg-[#f9fbff] lg:px-6 lg:py-10">
                {bgImage && <div className="pointer-events-none absolute -bottom-10 right-0 hidden h-full w-[75%] lg:block">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 75vw, 1px"
                        className="object-cover object-bottom object-right opacity-60"
                    />
                </div>}

                <div className="relative mx-auto max-w-[1240px]">
                    <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-12">
                        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-white shadow-xl sm:h-[360px] lg:h-[700px]">
                            {sideImage ? <Image
                                src={sideImage}
                                alt="Specialties"
                                fill
                                sizes="(min-width: 1024px) 380px, calc(100vw - 2rem)"
                                className="h-full w-full object-cover"
                            /> : null}

                            <div className="absolute bottom-4 left-4 right-4 rounded-[16px] bg-[#e67735] px-4 py-3 text-white sm:bottom-5 sm:left-6 sm:right-6 sm:px-6 sm:py-4 lg:bottom-10 lg:py-5">
                                <p className="text-center text-sm font-medium leading-snug sm:text-lg lg:text-[24px]">
                                    {sideText}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#484847] sm:text-3xl">
                                {sectionTitle}
                            </h2>

                            <div className="mb-6 mt-3 flex items-center gap-3 sm:mb-8">
                                <div className="h-[3px] w-16 bg-[#FF8A3D] sm:w-20" />
                                <div className="h-px flex-1 bg-gray-300" />
                            </div>

                            {loading ? (
                                <div className="py-10 text-base text-gray-500">
                                    Loading specialties...
                                </div>
                            ) : error ? (
                                <div className="py-10 text-base text-red-500">{error}</div>
                            ) : !services.length ? (
                                <div className="py-10 text-base text-gray-500">
                                    No specialties found.
                                </div>
                            ) : (
                                <>
                                    <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px] lg:gap-8">
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold text-[#FF8A3D] sm:text-2xl">
                                                {active?.title}
                                            </h3>

                                            <div className="max-w-[520px] space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-[1.9]">
                                                {active?.description?.map((p, i) => (
                                                    <p key={`${active.title}-${i}`}>{p}</p>
                                                ))}
                                            </div>
                                            <Link
                                                href="/services"
                                                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#2F2F2F] px-5 py-2.5 text-sm text-white sm:text-base"
                                            >

                                                    Read More
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF8A3D] text-black">
                                                        <ChevronRight size={18} />
                                                    </span>

                                            </Link>
                                        </div>

                                        <div className="h-[240px] overflow-hidden rounded-[16px] bg-white shadow-lg sm:h-[300px] lg:h-[320px]">
                                            {active?.detailImage ? (
                                                <Image
                                                    src={active.detailImage}
                                                    alt={active.title}
                                                    width={1000}
                                                    height={1000}
                                                    sizes="(min-width: 1024px) 340px, calc(100vw - 2rem)"
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                                                    No image available
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
                                        {visibleServices.map((service, index) => {
                                            const realIndex =
                                                currentSlide * cardsPerSlide + index;
                                            const isActive = activeService === realIndex;

                                            return (
                                                <button
                                                    key={service._id || `${service.title}-${realIndex}`}
                                                    type="button"
                                                    onClick={() => handleServiceClick(realIndex)}
                                                    className="text-left"
                                                    aria-pressed={isActive}
                                                >
                                                    <div
                                                        className={`relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white shadow-lg ${isActive
                                                            ? "ring-2 ring-[#FF8A3D] ring-offset-2"
                                                            : ""
                                                            }`}
                                                    >
                                                        {service.image ? (
                                                            <Image
                                                                src={service.image}
                                                                alt={service.title}
                                                                fill
                                                                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex h-full items-center justify-center text-sm text-gray-400">
                                                                No image
                                                            </div>
                                                        )}

                                                        {isActive && (
                                                            <div className="absolute inset-0 flex items-center justify-center bg-[#FF8A3D]/60">
                                                                <span className="text-[70px] font-light text-white sm:text-[90px]">
                                                                    +
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <p
                                                        className={`mt-3 text-center text-[8px] font-semibold lg:text-sm ${isActive
                                                            ? "text-[#FF8A3D]"
                                                            : "text-[#3D3D3D]"
                                                            }`}
                                                    >
                                                        {service.title}
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 flex justify-center gap-3">
                                        <button
                                            type="button"
                                            onClick={goPrev}
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white"
                                            aria-label="Previous specialty"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={goNext}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F2F2F] text-white"
                                            aria-label="Next specialty"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>

                                    {totalSlides > 1 && (
                                        <div className="mt-4 flex justify-center gap-2">
                                            {Array.from({ length: totalSlides }).map((_, i) => (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() => {
                                                        setCurrentSlide(i);
                                                        setActiveService(i * cardsPerSlide);
                                                    }}
                                                    className={`h-2.5 w-2.5 rounded-full ${currentSlide === i
                                                        ? "bg-[#FF8A3D]"
                                                        : "bg-gray-300"
                                                        }`}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
