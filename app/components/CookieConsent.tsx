"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "caelan-cookie-consent";
const GA_MEASUREMENT_ID = "G-5VCC29HNTJ";

/** Dispatch this on window to reopen the banner (used by the footer link). */
export const OPEN_COOKIE_PREFERENCES_EVENT = "caelan:open-cookie-preferences";

type Consent = "granted" | "denied";

function readStoredConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    // Storage can be unavailable (private mode, blocked storage). Treat as undecided.
    return null;
  }
}

/** Best-effort removal of the cookies Google Analytics sets, on withdrawal. */
function clearAnalyticsCookies() {
  const domain = window.location.hostname;
  const parent = domain.split(".").slice(-2).join(".");

  document.cookie
    .split("; ")
    .map((entry) => entry.split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
    .forEach((name) => {
      for (const scope of [domain, "." + parent]) {
        document.cookie = name + "=; path=/; domain=" + scope + "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);

  // Read the stored choice after mount so server and client render the same markup.
  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  // Let the footer link reopen the banner.
  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
  }, []);

  const choose = useCallback(
    (value: Consent) => {
      const previous = readStoredConsent();

      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // If we cannot persist the choice we still honour it for this page view.
      }

      setConsent(value);
      setVisible(false);

      // Analytics already running and now withdrawn: clear its cookies and reload,
      // since the loaded gtag script cannot be unloaded in place.
      if (value === "denied" && previous === "granted") {
        clearAnalyticsCookies();
        window.location.reload();
      }
    },
    [],
  );

  const buttonBase =
    "min-w-[7.5rem] rounded-full px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie preferences"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b1522]/95 px-6 py-5 text-white backdrop-blur"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-gray-200">
              We use cookies that are strictly necessary for this site to work, and Google Analytics
              cookies that help us understand how visitors use it. Analytics cookies are only set if
              you accept. Read our{" "}
              <a href="/privacy-policy" className="underline hover:no-underline">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className={buttonBase + " bg-white/10 hover:bg-white/20"}
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className={buttonBase + " bg-white text-gray-900 hover:bg-gray-200"}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
