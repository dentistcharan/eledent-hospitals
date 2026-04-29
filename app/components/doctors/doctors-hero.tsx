"use client";
import Image from "next/image";

export default function DoctorsHero() {
    return (
        <div className="lg:my-6 my-4 lg:mx-24 mx-6 lg:mt-40 mt-36">
            <section className="relative z-0 lg:h-[500px] h-[300px] w-full overflow-hidden rounded-3xl">
                <Image
                    src="/about-us/about-us.jpg"
                    alt="Our Doctors banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                  
                    <h1 className="text-white text-4xl md:text-5xl font-semibold">
                        Our Doctors
                    </h1>
                    <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl">
                        Expert Dental Specialists Committed to Your Smile
                    </p>
                </div>
            </section>
        </div>
    );
}
