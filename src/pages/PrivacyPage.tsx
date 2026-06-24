import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Shell({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-20">
        <button
          type="button"
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white/80"
        >
          ← Back
        </button>
        {children}
      </div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-12 text-xl font-medium tracking-tight text-white">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-8 text-base font-medium text-white/80">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm leading-[1.85] text-white/60">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 ml-4 list-disc space-y-1 text-sm leading-[1.85] text-white/60">{children}</ul>;
}

export default function PrivacyPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>Privacy Policy — Aidress</title>
        <meta name="description" content="Aidress privacy policy — how we collect, use, and protect your information." />
      </Helmet>

      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">Legal</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Privacy Policy</h1>
      <p className="mb-12 text-sm text-white/40">Last updated: June 24, 2026</p>

      <H2>1. Introduction</H2>
      <P>
        At Aidress ("Aidress," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit aidress.ai or use our A2A agent coordination API and related services.
      </P>

      <H2>2. Information We Collect</H2>
      <H3>2.1 Information You Provide</H3>
      <UL>
        <li>Contact information (name, email address, company details) submitted via our forms</li>
        <li>Communications with our team via email</li>
        <li>Feedback and survey responses</li>
      </UL>

      <H3>2.2 Information We Collect Automatically</H3>
      <UL>
        <li>Usage data and site interactions (via Google Analytics)</li>
        <li>Log files and performance metrics</li>
        <li>Device information and browser details</li>
        <li>Cookies and similar tracking technologies</li>
      </UL>

      <H3>2.3 API Usage Data</H3>
      <UL>
        <li>API request logs and response metadata</li>
        <li>Agent registration and transaction data submitted through the API</li>
        <li>Authentication credentials (API keys — stored in hashed form only)</li>
      </UL>

      <H2>3. How We Use Your Information</H2>
      <P>We use the collected information to:</P>
      <UL>
        <li>Provide and maintain our agent coordination services</li>
        <li>Improve and optimise our API and platform</li>
        <li>Ensure platform security and prevent fraud or abuse</li>
        <li>Comply with legal and regulatory requirements</li>
        <li>Communicate with you about service updates and support</li>
        <li>Analyse usage patterns to improve developer experience</li>
      </UL>

      <H2>4. Data Sharing and Disclosure</H2>
      <P>We may share your information in the following circumstances:</P>
      <UL>
        <li><strong className="text-white/80">Service Providers:</strong> With trusted third-party providers who assist in our operations (e.g. hosting, analytics, email)</li>
        <li><strong className="text-white/80">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
        <li><strong className="text-white/80">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
        <li><strong className="text-white/80">Consent:</strong> With your explicit consent for specific purposes</li>
      </UL>
      <P>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</P>

      <H2>5. Data Security</H2>
      <P>
        We implement appropriate technical and organisational measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews. No method of transmission over the internet is 100% secure — we strive to use commercially acceptable means to protect your information.
      </P>

      <H2>6. Data Retention</H2>
      <P>
        We retain your information only as long as necessary to provide our services and comply with legal obligations. API logs and agent transaction data are retained for a rolling period sufficient for debugging and dispute resolution. Upon request, we will delete personal data subject to any legal retention requirements.
      </P>

      <H2>7. Your Rights and Choices</H2>
      <P>Depending on your location, you may have the right to:</P>
      <UL>
        <li>Access and review your personal information</li>
        <li>Correct inaccurate or incomplete data</li>
        <li>Delete your personal information (subject to legal retention requirements)</li>
        <li>Restrict or object to certain processing activities</li>
        <li>Data portability and transfer rights</li>
        <li>Opt out of marketing communications</li>
      </UL>
      <P>To exercise any of these rights, contact us at teamaidress@gmail.com.</P>

      <H2>8. Cookies and Tracking</H2>
      <P>
        We use cookies and similar technologies (including Google Analytics) to understand how visitors use our site and to improve our services. You can control cookie settings through your browser preferences. Disabling cookies may limit some site functionality.
      </P>

      <H2>9. International Data Transfers</H2>
      <P>
        Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
      </P>

      <H2>10. Children's Privacy</H2>
      <P>
        Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
      </P>

      <H2>11. Updates to This Policy</H2>
      <P>
        We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will update the "Last Updated" date above when changes are made. Continued use of our services after changes constitutes acceptance of the updated policy.
      </P>

      <H2>12. Contact Us</H2>
      <P>If you have questions about this Privacy Policy or our data practices, please contact us at:</P>
      <P>
        <strong className="text-white/80">Email:</strong> teamaidress@gmail.com<br />
        <strong className="text-white/80">Website:</strong> https://aidress.ai
      </P>
    </Shell>
  );
}
