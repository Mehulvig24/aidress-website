import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, Fingerprint, ShieldCheck, FileCheck, Route, ArrowRight } from "lucide-react";

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

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm leading-[1.85] text-white/60">{children}</p>;
}

const LAYERS = [
  { icon: Search, name: "Discovery", note: "Finding a trusted service shouldn't require navigating a fragmented system." },
  { icon: Fingerprint, name: "Identity", note: "Who's acting, and on whose behalf — matters as much for a citizen's agent as a freight bot." },
  { icon: ShieldCheck, name: "Trust", note: "Credentials and history reduce fraud and impersonation, especially where the counterparty can't verify itself." },
  { icon: FileCheck, name: "Permissions & Terms", note: "Consent, spending limits, and privacy boundaries stay explicit — never assumed." },
  { icon: Route, name: "Routing & Audit", note: "Every interaction leaves a verifiable record, across organisations that don't otherwise share one." },
];

const USE_CASES = [
  {
    title: "Financial inclusion",
    flow: "Citizen / SME agent ↔ bank ↔ microfinance ↔ government systems",
    note: "Simpler access to services with consent, identity, and transaction limits built into the workflow, not bolted on after.",
  },
  {
    title: "Smallholder agriculture",
    flow: "Farmer agent ↔ advisory ↔ marketplace ↔ bank ↔ insurer",
    note: "Better access to markets, credit, and insurance — while the farmer's agent keeps final authority.",
  },
  {
    title: "Disaster response",
    flow: "Citizen ↔ government ↔ NGO ↔ logistics ↔ payment agents",
    note: "Faster coordination of relief, less duplication, and a clear audit trail of who did what.",
  },
];

export default function ImpactPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>Aidress for Good — Aidress</title>
        <meta name="description" content="The same trust infrastructure that coordinates commercial AI agents can help financial inclusion, smallholder agriculture, and disaster response — safely and accountably." />
      </Helmet>

      <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">Aidress for Good</div>
      <h1 className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Trust infrastructure doesn't care who's using it.
      </h1>
      <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/60">
        The same protocol that lets agents book freight can let a farmer's agent reach a bank, an NGO,
        or a government service — safely.
      </p>

      <P>
        Aidress is trust infrastructure for autonomous agents: identity, permissions, and an audit trail
        for every interaction. That's just as useful when the counterparty is a bank or an NGO as when
        it's a freight carrier. There's no separate "social impact" product — it's the same rails,
        applied to a wider set of counterparties.
      </P>

      <H2>The five layers, applied wider</H2>
      <div className="space-y-5">
        {LAYERS.map(({ icon: Icon, name, note }) => (
          <div key={name} className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <Icon size={15} className="text-blue-300" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-sm font-medium text-white/90">{name}</div>
              <div className="mt-0.5 text-sm leading-relaxed text-white/50">{note}</div>
            </div>
          </div>
        ))}
      </div>

      <H2>Where it applies</H2>
      <div className="space-y-4">
        {USE_CASES.map((u) => (
          <div key={u.title} className="rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-sm font-medium text-white/90">{u.title}</div>
            <div className="mt-1.5 font-mono text-[11.5px] text-white/35">{u.flow}</div>
            <div className="mt-2.5 text-sm leading-relaxed text-white/55">{u.note}</div>
          </div>
        ))}
      </div>

      <H2>Human agency, by default</H2>
      <P>
        Agents should operate with clear identity, explicit authority, defined limits, and a verifiable
        record of what occurred — with a human able to step in at any point. Building those principles
        into the infrastructure layer, rather than leaving them to each integration, is what makes
        autonomous AI usable in places where the cost of getting it wrong is highest.
      </P>

      <div className="mt-14 rounded-2xl p-6 md:p-8" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
        <h3 className="mb-2 text-lg font-medium text-white">Design a pilot with Aidress</h3>
        <p className="mb-5 text-sm leading-relaxed text-white/55">
          We work with development institutions, governments, impact investors, and technology partners
          to identify high-impact workflows where trusted agent coordination can improve access,
          accountability, and outcomes. Talk to us about a design partnership or pilot.
        </p>
        <a
          href="mailto:teamaidress@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
        >
          Talk to us
          <ArrowRight size={14} />
        </a>
      </div>
    </Shell>
  );
}
