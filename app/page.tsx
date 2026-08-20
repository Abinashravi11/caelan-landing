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
    url: "/",
    title: "Care Management Software UK | Rostering, eMAR & Care Planning | Caelan",
    description:
      "Caelan is AI-powered care management software for domiciliary care, residential care and supported living — rostering, care planning, eMAR and compliance in one platform.",
  },
  twitter: {
    title: "Care Management Software UK | Rostering, eMAR & Care Planning | Caelan",
    description:
      "Caelan is AI-powered care management software for domiciliary care, residential care and supported living — rostering, care planning, eMAR and compliance in one platform.",
  },
};

export default function Page() {
  return <HomePage />;
}
