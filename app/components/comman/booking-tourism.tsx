"use client";

import Image from "next/image";
import Script from "next/script";
import type { FC } from "react";

const BookingTourism: FC = () => {
  return (
    <section className="lg:pb-20 pb-10 px-4 sm:px-8 lg:px-24 -mt-6">
      <div className="lg:max-w-7xl mx-auto relative">
        <div className="relative bg-[#F37021] lg:rounded-[20px] flex items-center lg:px-10 px-6 overflow-visible">
          <div className="flex justify-center lg:w-[56%] lg:py-16 py-8 relative z-10">
            <div className="text-white max-w-[420px]">
              <p className="text-base mb-3">Eledent Dental Hospitals</p>

              <h2 className="lg:text-4xl text-2xl font-bold leading-tight mb-4">
                Plan Your Dental <br /> Trip With Confidence!
              </h2>

              <p className="text-sm opacity-90 mb-6">
                Travelling for dental treatment should feel clear and well
                planned. Share your concern with our team, and we will help you
                understand the treatment process, expected timeline, and the
                next steps before your visit to Hyderabad.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden">
                  <Image
                    src="/services-main/support.png"
                    alt="Support"
                    fill
                    unoptimized
                    className="object-cover rounded-full p-2"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Call Our</p>
                  <p className="text-lg font-semibold">Patient Care Team</p>
                </div>
              </div>

              <div className="text-[15px] max-w-[300px]">
                <div className="w-full flex justify-between items-center gap-4">
                  <a href="tel:+917799619994" className="hover:underline transition">
                    Call
                  </a>
                  <a href="tel:+917799619994" className="hover:underline transition">
                    +91 7799619994
                  </a>
                </div>

                <hr className="h-[1px] bg-white/70 w-full my-2 border-0" />

                <div className="w-full flex justify-between">
                  <p>Mon–Sun</p>
                  <p>9:00am – 9:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Form */}
          <div className="lg:absolute right-10 top-1/2 lg:-translate-y-1/2 w-[440px] z-20 hidden lg:block">
            <div className="relative rounded-[20px] shadow-2xl overflow-hidden bg-white p-10">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/q8QBSGUnldocQANsAzWU"
                style={{ width: "100%", height: "852px", border: "none", borderRadius: "20px" }}
                id="inline-q8QBSGUnldocQANsAzWU-tourism"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Lead Form"
                data-height="852"
                data-layout-iframe-id="inline-q8QBSGUnldocQANsAzWU-tourism"
                data-form-id="q8QBSGUnldocQANsAzWU"
                title="Website Lead Form"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-[90px] rounded-r-[20px] bg-[#F37021] z-0 pointer-events-none" />
        </div>

        {/* Mobile Form */}
        <div className="z-20 lg:hidden block">
          <div className="bg-white shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/q8QBSGUnldocQANsAzWU"
              style={{ width: "100%", height: "852px", border: "none" }}
              id="inline-q8QBSGUnldocQANsAzWU-tourism-mob"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Lead Form"
              data-height="852"
              data-layout-iframe-id="inline-q8QBSGUnldocQANsAzWU-tourism-mob"
              data-form-id="q8QBSGUnldocQANsAzWU"
              title="Website Lead Form"
            />
          </div>
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
};

export default BookingTourism;
