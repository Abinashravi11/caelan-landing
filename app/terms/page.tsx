import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Caelan",
  description: "Terms and conditions for use of the caelan.care website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "/terms",
    title: "Terms & Conditions | Caelan",
    description: "Terms and conditions for use of the caelan.care website.",
  },
  twitter: {
    title: "Terms & Conditions | Caelan",
    description: "Terms and conditions for use of the caelan.care website.",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-800">
      <a
        href="/"
        className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        &larr; Back to Caelan
      </a>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Terms &amp; Conditions &mdash; Website Use
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        <strong>Last updated: 19 August 2026</strong>
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">1. Who we are</h2>
      <p className="mb-4 leading-relaxed">
        This website (caelan.care) is operated by <strong>Excellence Digital Solutions Ltd</strong>,
        trading as <strong>Caelan</strong>, a company registered in England and Wales (company
        number <strong>15046952</strong>), with its registered office at 15 Clayburn Circle,
        Basildon, England, SS14 1PZ, United Kingdom.
      </p>
      <p className="mb-4 leading-relaxed">
        Contact: rosie.kavanagh@caelan.care &middot; +44 (0)1268 203030
      </p>
      <p className="mb-4 leading-relaxed">
        By using this website you accept these terms. If you do not accept them, please do not use
        the site.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        2. What these terms cover
      </h2>
      <p className="mb-4 leading-relaxed">
        These terms govern your use of this website only.{" "}
        <strong>They do not govern use of the Caelan software platform</strong>, which is provided
        to care organisations under a separate written agreement between Excellence Digital
        Solutions Ltd and each customer. If there is any conflict between these terms and a
        customer agreement, the customer agreement prevails.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">3. Use of the website</h2>
      <p className="mb-4 leading-relaxed">You agree to use this website lawfully and not to:</p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          Attempt to gain unauthorised access to the site, its servers, or any connected systems
        </li>
        <li>Introduce viruses or other malicious material</li>
        <li>
          Copy, scrape, or reproduce the site&apos;s content for commercial purposes without our
          written permission
        </li>
        <li>Use the contact form to send unlawful, offensive, or misleading material</li>
      </ul>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">4. Intellectual property</h2>
      <p className="mb-4 leading-relaxed">
        The Caelan name, logo, and all content on this website (including text, graphics, and
        design) are owned by or licensed to Excellence Digital Solutions Ltd. You may view and
        print pages for your own reference, but no other use is permitted without our written
        consent.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        5. Information on this site
      </h2>
      <p className="mb-4 leading-relaxed">
        The content of this website is provided for general information about our products and
        services. It is not professional, legal, regulatory, or clinical advice. While we take care
        to keep the site accurate and up to date, we make no warranties that the content is
        complete, accurate, or current, and features described may change as the product develops.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">6. Liability</h2>
      <p className="mb-4 leading-relaxed">
        Nothing in these terms excludes or limits our liability for death or personal injury caused
        by negligence, fraud, or any other liability that cannot be excluded by law.
      </p>
      <p className="mb-4 leading-relaxed">
        Subject to that, we are not liable for any loss or damage arising from your use of (or
        inability to use) this website or your reliance on its content. Use of the Caelan platform
        itself is governed by the applicable customer agreement, including its own liability
        provisions.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">7. Links to other sites</h2>
      <p className="mb-4 leading-relaxed">
        This website may contain links to third-party websites. We have no control over their
        content and accept no responsibility for them.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">8. Privacy</h2>
      <p className="mb-4 leading-relaxed">
        Personal data collected through this website is handled in accordance with our{" "}
        <a href="/privacy-policy" className="underline hover:no-underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">9. Changes to these terms</h2>
      <p className="mb-4 leading-relaxed">
        We may revise these terms at any time by updating this page. The &quot;Last updated&quot;
        date shows the current version.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">10. Governing law</h2>
      <p className="mb-4 leading-relaxed">
        These terms are governed by the law of England and Wales, and the courts of England and
        Wales have exclusive jurisdiction over any dispute arising from them.
      </p>
    </main>
  );
}
