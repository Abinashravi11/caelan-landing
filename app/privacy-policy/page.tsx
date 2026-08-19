import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Caelan",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-800">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mb-10 text-sm text-gray-500">
        <strong>Last updated: 19 August 2026</strong>
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">1. Who we are</h2>
      <p className="mb-4 leading-relaxed">
        Caelan is a trading name of <strong>Excellence Digital Solutions Ltd</strong>, a company
        registered in England and Wales (company number <strong>15046952</strong>).
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          <strong>Registered office:</strong> 15 Clayburn Circle, Basildon, England, SS14 1PZ,
          United Kingdom
        </li>
        <li>
          <strong>Trading address:</strong> Office 1, Church Walk House, Great Oaks, Basildon
          SS14 1GJ, United Kingdom
        </li>
        <li>
          <strong>ICO registration number:</strong> ZC105718
        </li>
        <li>
          <strong>Contact:</strong> rosie.kavanagh@caelan.care &middot; +44 (0)1268 203030
        </li>
      </ul>
      <p className="mb-4 leading-relaxed">
        Excellence Digital Solutions Ltd is the data controller for personal data collected
        through this website. This policy explains what we collect, why, and your rights.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        2. What data we collect through this website
      </h2>
      <p className="mb-4 leading-relaxed">
        When you use the &quot;Get in Touch&quot; form, we collect:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your company name (if you choose to provide it)</li>
        <li>The content of your message</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        We also collect limited technical data automatically (such as IP address, browser type,
        and pages visited) through standard web server logs and any analytics tools in use.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        3. Why we collect it and our lawful basis
      </h2>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 pr-4 font-semibold">Purpose</th>
              <th className="py-2 pr-4 font-semibold">Data used</th>
              <th className="py-2 font-semibold">Lawful basis (UK GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 align-top">Responding to your enquiry</td>
              <td className="py-2 pr-4 align-top">Name, email, company, message</td>
              <td className="py-2 align-top">
                Legitimate interests (responding to a contact you initiated)
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 align-top">
                Following up about our products and services where you have expressed interest
              </td>
              <td className="py-2 pr-4 align-top">Name, email, company</td>
              <td className="py-2 align-top">
                Legitimate interests / consent where required
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 align-top">
                Website security, performance and improvement
              </td>
              <td className="py-2 pr-4 align-top">Technical/log data</td>
              <td className="py-2 align-top">Legitimate interests</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 leading-relaxed">
        We do not sell your personal data, and we do not use it for automated decision-making
        that produces legal or similarly significant effects.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        4. The Caelan platform (for care providers)
      </h2>
      <p className="mb-4 leading-relaxed">
        Our care management software processes information about care provider staff and the
        people they support, including health and care records. For that data,{" "}
        <strong>
          the care provider is the data controller and Excellence Digital Solutions Ltd acts as a
          data processor
        </strong>
        , processing it only on the provider&apos;s instructions under a written agreement. If you
        are a member of staff or a person receiving care and have questions about your data in the
        Caelan platform, please contact your care provider in the first instance.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">5. Who we share data with</h2>
      <p className="mb-4 leading-relaxed">We share personal data only with:</p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          <strong>Service providers</strong> who help us run the website and our business (such as
          website hosting and email providers), under contracts that protect your data
        </li>
        <li>
          <strong>Professional advisers</strong> (such as accountants or lawyers) where necessary
        </li>
        <li>
          <strong>Authorities</strong> where we are legally required to do so
        </li>
      </ul>
      <p className="mb-4 leading-relaxed">
        Where any service provider processes data outside the UK, we ensure appropriate safeguards
        are in place (such as UK adequacy regulations or International Data Transfer Agreements).
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        6. How long we keep your data
      </h2>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          <strong>Enquiry data:</strong> kept for up to 24 months after our last contact with you,
          then deleted, unless you become a customer (in which case data is kept for the duration
          of the relationship and as required afterwards for legal and accounting purposes).
        </li>
        <li>
          <strong>Technical/log data:</strong> kept for up to 12 months.
        </li>
      </ul>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">7. Your rights</h2>
      <p className="mb-4 leading-relaxed">Under UK GDPR you have the right to:</p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          <strong>Access</strong> the personal data we hold about you
        </li>
        <li>
          <strong>Rectify</strong> inaccurate data
        </li>
        <li>
          <strong>Erase</strong> your data in certain circumstances
        </li>
        <li>
          <strong>Restrict</strong> or <strong>object to</strong> our processing
        </li>
        <li>
          <strong>Data portability</strong> in certain circumstances
        </li>
        <li>
          <strong>Withdraw consent</strong> at any time, where processing is based on consent
        </li>
      </ul>
      <p className="mb-4 leading-relaxed">
        To exercise any of these rights, email <strong>rosie.kavanagh@caelan.care</strong>. We will
        respond within one month.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">8. Complaints</h2>
      <p className="mb-4 leading-relaxed">
        If you are unhappy with how we handle your data, please contact us first so we can try to
        resolve it. You also have the right to complain to the Information Commissioner&apos;s
        Office (ICO): ico.org.uk &middot; 0303 123 1113.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">9. Cookies</h2>
      <p className="mb-4 leading-relaxed">
        This website uses cookies that are strictly necessary for it to function, and Google
        Analytics cookies that help us understand how visitors use the site (pages visited,
        approximate location, device type). Google Analytics data is aggregated and does not
        directly identify you. We are implementing a consent mechanism for analytics cookies; you
        can also block or delete cookies through your browser settings at any time.
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold text-gray-900">
        10. Changes to this policy
      </h2>
      <p className="mb-4 leading-relaxed">
        We may update this policy from time to time. The &quot;Last updated&quot; date at the top
        shows the current version. Significant changes will be highlighted on this page.
      </p>
    </main>
  );
}
