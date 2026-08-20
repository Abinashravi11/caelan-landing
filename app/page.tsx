import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Care Management Software UK | Rostering, eMAR & Care Planning | Caelan",
  description:
    "Caelan is AI-powered care management software for domiciliary care, residential care and supported living — rostering, care planning, eMAR and compliance in one platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Caelan",
    locale: "en_GB",
    url: "/",
    title: "Care Management Software UK | Rostering, eMAR & Care Planning | Caelan",
    description:
      "Caelan is AI-powered care management software for domiciliary care, residential care and supported living — rostering, care planning, eMAR and compliance in one platform.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care Management Software UK | Rostering, eMAR & Care Planning | Caelan",
    description:
      "Caelan is AI-powered care management software for domiciliary care, residential care and supported living — rostering, care planning, eMAR and compliance in one platform.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <HomePage />;
}
