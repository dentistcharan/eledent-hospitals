"use client";

import Script from "next/script";
import type { JSX } from "react";

export default function BookingOverlapSection(): JSX.Element {
    return (
        <section className="w-full bg-white py-2">
            <div className="mx-auto max-w-7xl px-6">
                {/* OUTER WRAP */}
                <div className="relative overflow-hidden rounded-[22px] bg-[#f6f8fc] shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)]">

                    <div className="pointer-events-none absolute left-0 top-0 h-10 w-full bg-white" />
                    <div className="pointer-events-none absolute left-0 bottom-0 h-10 w-full bg-white" />

                    <div className="pointer-events-none absolute right-10 top-16 hidden h-[360px] w-[140px] rounded-[18px] bg-[#f47200] lg:block" />

                    <div className="relative px-6 py-14">
                        <div className="relative mx-auto max-w-6xl">
                            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-0">
                                <div className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[18px] bg-[#f47200] px-10 py-12 text-white shadow-[0_18px_40px_-28px_rgba(244,114,0,0.9)]">
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/12 blur-3xl" />
                                    <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

                                    <p className="text-[11px] font-semibold tracking-[0.26em] text-white/80">BOOKING</p>

                                    <h2 className="mt-3 text-[30px] font-semibold leading-tight">
                                        Book Your Care
                                        <br />
                                        Appointment Now
                                    </h2>

                                    <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/85">
                                        Aute auctor at parturient neque mattis odio. Convallis nunc eget scelerisque
                                        nunc maecenas volutpat.
                                        <br />
                                        Condimentum auctor porta fermentum nulla.
                                    </p>

                                    <div className="mt-7 flex items-center gap-3">
                                        <div className="grid h-10 w-10 place-items-center rounded-full bg-black/25">
                                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                                                <path
                                                    d="M8.2 4.8c.8-.8 2.2-.8 3 0l1 1c.6.6.6 1.6 0 2.2l-.7.7c.9 1.7 2.2 3 3.9 3.9l.7-.7c.6-.6 1.6-.6 2.2 0l1 1c.8.8.8 2.2 0 3-.6.6-1.4.9-2.3.8-6.5-.8-11.8-6.1-12.6-12.6-.1-.9.2-1.7.8-2.3Z"
                                                    stroke="currentColor"
                                                    strokeWidth={1.6}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold tracking-[0.22em] text-white/75">SUPPORT</p>
                                            <p className="mt-1 text-[14px] font-semibold">24/7 Emergency Call</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-4 text-[13px] text-white/90">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="font-medium">Mon - Fri</span>
                                            <span className="font-medium">8.00am - 6.00pm</span>
                                        </div>
                                        <div className="h-px w-full bg-white/25" />
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="font-medium">Sat - Sun</span>
                                            <span className="font-medium">9.00am - 4.00pm</span>
                                        </div>
                                    </div>
                                </div>

                                {/* IFRAME FORM CARD (OVERLAP) */}
                                <div
                                    className="
                    relative z-20 w-full max-w-[560px] rounded-[18px] bg-white overflow-hidden
                    shadow-[0_22px_70px_-45px_rgba(15,23,42,0.45)]
                    lg:-ml-16
                  "
                                >
                                    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-[20px] bg-sky-100/60 blur-2xl" />
                                    <iframe
                                        src="https://api.leadconnectorhq.com/widget/form/q8QBSGUnldocQANsAzWU"
                                        style={{ width: "100%", height: "852px", border: "none", borderRadius: "18px" }}
                                        id="inline-q8QBSGUnldocQANsAzWU-homecare"
                                        data-layout="{'id':'INLINE'}"
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Website Lead Form"
                                        data-height="852"
                                        data-layout-iframe-id="inline-q8QBSGUnldocQANsAzWU-homecare"
                                        data-form-id="q8QBSGUnldocQANsAzWU"
                                        title="Website Lead Form"
                                    />
                                </div>
                            </div>

                            <div className="pointer-events-none mx-auto mt-8 hidden h-10 w-[560px] rounded-full bg-slate-200/60 blur-xl lg:block" />
                        </div>
                    </div>
                </div>
            </div>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </section>
    );
}
