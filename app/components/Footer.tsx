import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import {
    getServicesData,
    type ServiceItem,
} from "@/lib/services-api";

type FooterLink = {
    name: string;
    href: string;
};

type ApiItem = {
    id?: number | string;
    name?: string;
    title?: string;
    slug?: string;
    link?: string;
    url?: string;
    href?: string;
    post_name?: string;
    post_title?: string;
    service_name?: string;
};

function toSlug(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function normalizeServices(data: unknown): FooterLink[] {
    const response = data as {
        data?: ApiItem[];
        services?: ApiItem[];
    };
    const list: ApiItem[] = Array.isArray(data)
        ? data
        : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.services)
                ? response.services
                : [];

    return list
        .map((service) => {
            const name = String(
                service.name ||
                service.title ||
                service.service_name ||
                service.post_title ||
                ""
            ).trim();

            if (!name) return null;

            const direct =
                (typeof service.href === "string" && service.href) ||
                (typeof service.link === "string" && service.link) ||
                (typeof service.url === "string" && service.url);

            let href = "";
            if (direct) {
                try {
                    href = new URL(direct).pathname || direct;
                } catch {
                    href = direct;
                }
            } else {
                const slug = String(
                    service.slug || service.post_name || toSlug(name)
                ).trim();
                href = `/services/${slug}`;
            }

            return { name, href };
        })
        .filter((item): item is FooterLink => item !== null)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export default async function Footer({
    initialServices,
}: {
    initialServices?: ServiceItem[];
}): Promise<JSX.Element> {
    const services = initialServices ?? await getServicesData();
    const servicesItems = normalizeServices(services).slice(0, 10);
    const loading = false;

    const quickLinks: FooterLink[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Doctors", href: "/doctors" },
        { name: "Dental Tourism", href: "/dental-tourism" },
        { name: "Technology", href: "/technology" },
        { name: "Facilities", href: "/facility" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms And Conditions", href: "/terms-and-conditions" },
        { name: "Blogs", href: "/blogs" },
    ];

    const locations: FooterLink[] = [
        { name: "Kondapur", href: "/kondapur" },
        { name: "Kukatpally", href: "/kukatpally" },
        { name: "Manikonda", href: "/manikonda" },
        { name: "Banjara Hills", href: "/banjara-hills" },
        { name: "Kompally", href: "/kompally" },
    ];

    const phoneNumber = "+917799619994";

    return (
        <footer className="relative w-full">
            <div className="bg-gradient-to-b from-[#e46d2b] to-[#E87733] text-white">
                <div className="mx-auto max-w-[1300px] px-4 pt-8 sm:px-6">
                    <div className="grid grid-cols-1 items-center gap-10 pb-6 sm:grid-cols-2">
                        <div>
                            <Link href="/" className="inline-flex items-start">
                                <Image
                                    src="/home/White-Logo.webp"
                                    alt="Eledent"
                                    width={220}
                                    height={80}
                                    className="w-[150px] sm:w-[180px]"
                                />
                            </Link>
                        </div>

                        <div className="text-right text-white lg:block hidden">
                            <h3 className="text-lg font-medium leading-snug">
                                <Link href="/">© 2026 ELEDENT HOSPITALS LLP.</Link> All rights reserved.
                            </h3>
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-white lg:block hidden" />
                </div>

                <div className="mx-auto max-w-[1250px] px-4 lg:py-10 py-10 pt-0 lg:pt-10 sm:px-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <h3 className="text-xl font-semibold opacity-90">Services</h3>

                            <ul className="mt-4 space-y-3 text-[15px] leading-5">
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, i) => (
                                        <li key={i} className="text-white/70">
                                            Loading...
                                        </li>
                                    ))
                                ) : servicesItems.length ? (
                                    servicesItems.map((item) => (
                                        <li
                                            key={item.href + item.name}
                                            className="flex gap-2"
                                        >
                                            <span className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                                            <Link
                                                href={item.href}
                                                className="break-words hover:underline hover:underline-offset-4"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-white/80">Services not loaded</li>
                                )}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold opacity-90">Quick Links</h3>

                            <ul className="mt-4 space-y-3 text-[15px] leading-5">
                                {quickLinks.map((item) => (
                                    <li key={item.href + item.name} className="flex gap-2">
                                        <span className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                                        <Link
                                            href={item.href}
                                            className="break-words hover:underline hover:underline-offset-4"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold opacity-90">Our Locations</h3>

                            <ul className="mt-4 space-y-3 text-[15px] leading-5">
                                {locations.map((item) => (
                                    <li key={item.href + item.name} className="flex gap-2">
                                        <span className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                                        <Link
                                            href={item.href}
                                            className="break-words hover:underline hover:underline-offset-4"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold opacity-90">Contact Us</h3>

                            <div className="mt-4 space-y-2 text-[15px] leading-5">
                                <div className="opacity-95">09:00 AM To 09:00 PM</div>

                                <a
                                    href="mailto:contact@eledenthospitals.com"
                                    className="block break-words opacity-95 hover:underline hover:underline-offset-4"
                                >
                                    contact@eledenthospitals.com
                                </a>

                                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                                    <PhoneCall className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                                    <a href={`tel:${phoneNumber}`} className="hover:underline">
                                        +91 7799619994
                                    </a>
                                </span>
                            </div>

                            <div className="mt-4 flex items-center gap-2 mb-5">
                                <a
                                    href="https://www.facebook.com/EledentHospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                >
                                    <Image
                                        src="/home/facebook.png"
                                        alt="Facebook"
                                        className="h-3 w-3 sm:h-6 sm:w-6"
                                        width={24}
                                        height={24}
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com/eledenthospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                >
                                    <Image
                                        src="/home/instagram.png"
                                        alt="Instagram"
                                        className="h-3 w-3 sm:h-6 sm:w-6"
                                        width={24}
                                        height={24}
                                    />
                                </a>

                                <a
                                    href="https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="grid h-8 w-8 place-items-center rounded-[5px] bg-white"
                                >
                                    <Image
                                        src="/home/youtube.png"
                                        alt="YouTube"
                                        className="h-3 w-3 sm:h-6 sm:w-6"
                                        width={24}
                                        height={24}
                                    />
                                </a>

                            </div>

                            <div>
                                <h3 className="text-xl font-semibold opacity-90"> Accreditation </h3>

                                <Link href="/" className="z-50 ">
                                    <Image
                                        src="/NABH-logo.png"
                                        alt="Eledent logo"
                                        className="w-10 lg:w-24"
                                        width={96}
                                        height={101}
                                    />


                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#e46d2b] to-[#E87733] py-4 text-center text-white lg:mb-0 mb-16">
                    <h3 className="text-base leading-snug">
                        <Link href="/">© 2026 ELEDENT HOSPITALS LLP.</Link> All rights reserved.
                    </h3>
                </div>
            </div>
        </footer>
    );
}
