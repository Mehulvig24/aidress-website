import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { founders, advisors, contactEmails, type TeamMember } from "../data/team";

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

function PersonRow({ m }: { m: TeamMember }) {
  return (
    <div className="flex gap-4 border-t py-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div
        className="h-14 w-14 shrink-0 overflow-hidden rounded-lg"
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white/40">
            {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <div className="text-[15px] font-medium text-white">{m.name}</div>
        <div className="text-[13px] text-white/45">{m.role}</div>
        <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">{m.description}</p>
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block text-[13px] text-blue-300 underline underline-offset-2 hover:text-blue-200"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>About — Aidress</title>
        <meta name="description" content="Aidress is the coordination layer for the agentic economy. Company details, founders, advisors, and contact information." />
        <link rel="canonical" href="https://aidress.ai/about" />
      </Helmet>

      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">About</div>
      <h1 className="mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-[2.6rem]">
        Aidress
      </h1>
      <P>
        Aidress builds the coordination layer for the agentic economy — trust infrastructure that lets
        autonomous AI agents discover each other, verify identity, establish trust, agree on terms, and
        route value without a human in the loop.
      </P>

      <H2>Company</H2>
      <div className="text-[15px] leading-[1.85] text-white/60">
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">Legal entity</div>
          <div>Registered in Singapore as Aidress. A Delaware C-corp is in progress.</div>
        </div>
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">Website</div>
          <div><a href="https://aidress.ai" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">aidress.ai</a></div>
        </div>
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">API</div>
          <div><a href="https://api.aidress.ai" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">api.aidress.ai</a></div>
        </div>
      </div>

      <H2>Founders</H2>
      {founders.map((m) => <PersonRow key={m.name} m={m} />)}

      <H2>Advisors</H2>
      {advisors.map((m) => <PersonRow key={m.name} m={m} />)}

      <H2>Contact</H2>
      <div className="text-[15px] leading-[1.85] text-white/60">
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">General</div>
          <div><a href={`mailto:${contactEmails.general}`} className="text-blue-300 underline underline-offset-2 hover:text-blue-200">{contactEmails.general}</a></div>
        </div>
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">Mehul Vig</div>
          <div><a href={`mailto:${contactEmails.mehul}`} className="text-blue-300 underline underline-offset-2 hover:text-blue-200">{contactEmails.mehul}</a></div>
        </div>
        <div className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-40 shrink-0 text-white/40">Kabir Sadani</div>
          <div><a href={`mailto:${contactEmails.kabir}`} className="text-blue-300 underline underline-offset-2 hover:text-blue-200">{contactEmails.kabir}</a></div>
        </div>
      </div>

      <H2>Security</H2>
      <P>
        Report a suspected vulnerability in aidress.ai or api.aidress.ai to{" "}
        <a href={`mailto:${contactEmails.security}`} className="text-blue-300 underline underline-offset-2 hover:text-blue-200">{contactEmails.security}</a>.
        Machine-readable contact details follow RFC 9116 and are published at{" "}
        <a href="/.well-known/security.txt" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">/.well-known/security.txt</a>.
      </P>
      <P>
        Read endpoints require no authentication. Writes are authenticated with an agent bearer key or an
        Ed25519 HTTP Message Signature per RFC 9421 — see{" "}
        <a href="/docs/authentication" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">docs/authentication</a>{" "}
        for the full model. Aidress never custodies funds; settlement is peer-to-peer between counterparties.
      </P>

      <H2>More</H2>
      <ul className="mb-4 ml-4 list-disc space-y-1.5 text-[15px] leading-[1.85] text-white/60">
        <li><a href="/docs" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">Documentation</a></li>
        <li><a href="/whitepaper" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">Whitepaper — Agents Without Infrastructure</a></li>
        <li><a href="/validation" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">Validation report</a></li>
        <li><a href="/impact" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">Aidress for Good</a></li>
        <li><a href="/for-agents" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">For agents</a></li>
        <li><a href="/privacy" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">Privacy policy</a></li>
      </ul>
    </Shell>
  );
}
