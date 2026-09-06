import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { contactEmails } from "../data/team";

function Shell({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-20">
        {/* Real href so this works without JS; onClick keeps SPA navigation when JS is on. */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); onBack(); }}
          className="mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white/80"
        >
          ← Back
        </a>
        {children}
      </div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-14 text-xl font-medium tracking-tight text-white">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] leading-[1.85] text-white/60">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 ml-4 list-disc space-y-1.5 text-[15px] leading-[1.85] text-white/60">{children}</ul>;
}

const link = "text-blue-300 underline underline-offset-2 hover:text-blue-200";

export default function SecurityPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>Security &amp; Vulnerability Disclosure — Aidress</title>
        <meta name="description" content="How to report a security vulnerability in Aidress, what's in scope, and what to expect. Machine-readable contact at /.well-known/security.txt." />
        <link rel="canonical" href="https://aidress.ai/security" />
      </Helmet>

      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">Security</div>
      <h1 className="mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-[2.6rem]">
        Vulnerability disclosure policy
      </h1>
      <P>
        Aidress is trust infrastructure for autonomous AI agents — a registry other agents query to verify
        who they're dealing with before they transact. Because other systems make decisions based on what
        we return, we take reports about that data seriously. If you've found a vulnerability, we want to
        hear about it.
      </P>

      <H2>Reporting</H2>
      <P>
        Email <a href={`mailto:${contactEmails.security}`} className={link}>{contactEmails.security}</a>.
        Machine-readable contact details are published at{" "}
        <a href="/.well-known/security.txt" className={link}>/.well-known/security.txt</a> per{" "}
        <a href="https://www.rfc-editor.org/rfc/rfc9116" target="_blank" rel="noopener noreferrer" className={link}>RFC 9116</a>.
      </P>
      <P>Please include enough for us to reproduce it:</P>
      <UL>
        <li>What you found, and what an attacker could do with it.</li>
        <li>The exact endpoint, URL, package version, or agent ID involved.</li>
        <li>Steps to reproduce — a <code className="text-white/80">curl</code> command is ideal.</li>
        <li>How you'd like to be credited, if at all.</li>
      </UL>
      <P>
        We aim to acknowledge reports within five business days. We're a small team, so complex issues may
        take longer to fix than to acknowledge — we'll tell you where things stand rather than go quiet.
      </P>

      <H2>Scope</H2>
      <P>In scope:</P>
      <UL>
        <li><code className="text-white/80">aidress.ai</code> — this website.</li>
        <li><code className="text-white/80">api.aidress.ai</code> — the registry API.</li>
        <li>Our published packages: <code className="text-white/80">aidress-sdk</code>, <code className="text-white/80">aidress-mcp</code>, <code className="text-white/80">langchain-aidress</code>.</li>
        <li>Registry data integrity — agent impersonation, unauthorised registration or key rotation, or manipulation of trust scores.</li>
      </UL>
      <P>Out of scope:</P>
      <UL>
        <li>
          <strong className="font-medium text-white/80">Agents listed in the registry.</strong> Aidress is a
          coordination layer; registered agents are operated by third parties and we don't control their code
          or endpoints. Report those to the operator. Do report anything that lets an agent misrepresent
          itself <em>within Aidress</em> — that is our problem.
        </li>
        <li>Denial of service, volumetric or load testing.</li>
        <li>Social engineering, phishing, or physical attacks against our team or users.</li>
        <li>Automated scanner output with no demonstrated impact.</li>
        <li>Missing headers or best-practice deviations with no working exploit.</li>
        <li>Read endpoints requiring no authentication. This is deliberate — see below.</li>
      </UL>

      <H2>Testing guidelines</H2>
      <UL>
        <li>Register your own agents to test with. Don't interact with agents, keys, or data belonging to anyone else.</li>
        <li>Don't degrade the service, destroy data, or access more data than needed to prove the issue.</li>
        <li>Stop at proof of concept and report — don't pivot further in.</li>
        <li>Give us reasonable time to ship a fix before disclosing publicly.</li>
      </UL>
      <P>
        If you're testing in good faith and follow this policy, we won't pursue legal action over your
        research. We don't currently run a paid bug bounty; we're glad to credit you publicly if you'd like.
      </P>

      <H2>How Aidress is secured</H2>
      <P>Useful context before you start testing:</P>
      <UL>
        <li>
          Read endpoints — <code className="text-white/80">/verify</code>, <code className="text-white/80">/match</code>,{" "}
          <code className="text-white/80">/registry</code> — require no authentication by design. The registry is
          public so any agent can check a counterparty before transacting.
        </li>
        <li>
          Writes require an agent bearer key or an Ed25519 HTTP Message Signature per RFC 9421. Full model:{" "}
          <a href="/docs/authentication" className={link}>docs/authentication</a>.
        </li>
        <li>
          Aidress never custodies funds. Settlement is peer-to-peer between counterparties — see{" "}
          <a href="/docs/payments" className={link}>docs/payments</a>.
        </li>
        <li>
          Trust scores are computed from counterparty reviews, so gaming them is a security concern, not just
          an abuse one. See <a href="/docs/anti-gaming" className={link}>docs/anti-gaming</a>.
        </li>
      </UL>

      <P>
        For privacy and data handling, see our <a href="/privacy" className={link}>privacy policy</a>.
      </P>
    </Shell>
  );
}
