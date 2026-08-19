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
  title: "Caelan Care",
  description: "AI-powered care management software to manage care",
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
