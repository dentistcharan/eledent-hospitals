"use client";
import Image from "next/image";
import { DOCTORS, type Doctor } from "@/lib/doctors-data";

function DoctorCard({ doctor }: { doctor: Doctor }) {
    const initials = doctor.name
        .replace("Dr. ", "")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image area */}
            <div className="relative h-64 w-full bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
                {doctor.image ? (
                    <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold text-orange-300">{initials}</span>
                    </div>
                )}

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-[#f47200]/90 py-3 flex items-center justify-center gap-4">
                    {doctor.facebook && (
                        <a href={doctor.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    )}
                    {doctor.instagram && (
                        <a href={doctor.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                    )}
                    {doctor.linkedin && (
                        <a href={doctor.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Info area */}
            <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900 leading-tight">
                    {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-[#f47200] font-semibold uppercase tracking-wide">
                    {doctor.post}
                </p>
                <div className="mt-3 flex items-start gap-2">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f47200]" />
                    </span>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {doctor.education}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function DoctorsList() {
    return (
        <section className="w-full bg-white py-6 lg:py-6 mb-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">

                <div className="text-center mb-10 lg:mb-14">
                    <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-sm font-semibold tracking-[0.14em] text-white">
                        Expert Team
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                        Meet Our Specialist Doctors
                    </h2>
                    <p className="mt-3 max-w-3xl mx-auto text-sm text-slate-600 leading-relaxed">
                        Our team of experienced dental specialists is dedicated to providing you with the highest quality of care across all dental disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DOCTORS.map((doctor, idx) => (
                        <DoctorCard key={idx} doctor={doctor} />
                    ))}
                </div>

            </div>
        </section>
    );
}
