"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GTM_ID = "GTM-W49C7DC";
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

export default function DeferredGtm() {
  useEffect(() => {
    let loaded = false;

    window.dataLayer = window.dataLayer || [];

    const loadGtm = () => {
      if (loaded) return;
      loaded = true;

      window.dataLayer?.push({
        "gtm.start": Date.now(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);

      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, loadGtm);
      });
    };

    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, loadGtm, { once: true, passive: true });
    });

    const timer = window.setTimeout(loadGtm, 15000);

    return () => {
      window.clearTimeout(timer);
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, loadGtm);
      });
    };
  }, []);

  return null;
}
