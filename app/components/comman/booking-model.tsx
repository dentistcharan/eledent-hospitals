"use client";

import Script from "next/script";
import type { FC } from "react";

type BookingModelProps = {
  closeModal: () => void;
};

const BookingModel: FC<BookingModelProps> = ({ closeModal }) => {
  return (
    <section className="relative px-0 lg:px-24">
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute -top-2 lg:right-22 right-0 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105"
      >
        ✕
      </button>

      <div className="w-full max-w-[440px] z-20">
        <div className="relative rounded-[20px] shadow-2xl overflow-hidden bg-white" style={{ maxHeight: "85vh" }}>
          <div className="overflow-y-auto p-10" style={{ maxHeight: "85vh" }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/g9UP2RHABDwv3bR6mzYP"
            style={{ width: "100%", height: "852px", border: "none", borderRadius: "20px" }}
            id="inline-g9UP2RHABDwv3bR6mzYP"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Lead Pop-Up Form"
            data-height="852"
            data-layout-iframe-id="inline-g9UP2RHABDwv3bR6mzYP"
            data-form-id="g9UP2RHABDwv3bR6mzYP"
            title="Website Lead Pop-Up Form"
          />
          </div>
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
};

export default BookingModel;
