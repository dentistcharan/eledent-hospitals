"use client";

import Script from "next/script";
import type { FC } from "react";

const BookingBlog: FC = () => {
  return (
    <section>
      <div className="w-full max-w-[440px] z-20">
        <div className="relative rounded-[10px] shadow-2xl overflow-hidden bg-white p-4">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/q8QBSGUnldocQANsAzWU"
            style={{ width: "100%", height: "852px", border: "none", borderRadius: "10px" }}
            id="inline-q8QBSGUnldocQANsAzWU-blog"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Lead Form"
            data-height="852"
            data-layout-iframe-id="inline-q8QBSGUnldocQANsAzWU-blog"
            data-form-id="q8QBSGUnldocQANsAzWU"
            title="Website Lead Form"
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
};

export default BookingBlog;
