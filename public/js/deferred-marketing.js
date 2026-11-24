(function () {
  "use strict";

  window.dataLayer = window.dataLayer || [];

  var loaded = false;
  var interactionEvents = ["pointerdown", "touchstart", "keydown"];

  function appendScript(src) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadMarketing() {
    if (loaded) return;
    loaded = true;

    interactionEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, loadMarketing);
    });

    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    appendScript("https://www.googletagmanager.com/gtm.js?id=GTM-W49C7DC");

    if (!window.oaiq) {
      var queue = function () {
        queue.q.push(arguments);
      };
      queue.q = [];
      window.oaiq = queue;
    }
    window.oaiq("init", {
      pixelId: "4bFkRNsGsTDskfdoNsRwLJ",
      debug: false,
    });
    appendScript("https://bzrcdn.openai.com/sdk/oaiq.min.js");
  }

  function loadDeferredEmbeds() {
    document.querySelectorAll("[data-deferred-src]").forEach(function (element) {
      if (!element.getAttribute("src")) {
        element.setAttribute("src", element.getAttribute("data-deferred-src"));
      }
      element.removeAttribute("data-deferred-src");
    });
  }

  interactionEvents.forEach(function (eventName) {
    window.addEventListener(eventName, loadMarketing, {
      once: true,
      passive: true,
    });
    window.addEventListener(eventName, loadDeferredEmbeds, {
      once: true,
      passive: true,
    });
  });

  window.setTimeout(loadMarketing, 30000);
})();
