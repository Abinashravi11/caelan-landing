import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caelan.care"),
  title: "Caelan | AI-Powered Care Management Software",
  description:
    "Caelan is AI-powered care management software for care providers in the UK.",
  openGraph: {
    type: "website",
    siteName: "Caelan",
    locale: "en_GB",
    url: "https://caelan.care",
    title: "Caelan | AI-Powered Care Management Software",
    description:
      "Caelan is AI-powered care management software for care providers in the UK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caelan | AI-Powered Care Management Software",
    description:
      "Caelan is AI-powered care management software for care providers in the UK.",
  },
  verification: {
    google: "SPVj-SRHH6I1zn0A38_unWpPNT2rMn4nLcGwgfiuW4Q",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
