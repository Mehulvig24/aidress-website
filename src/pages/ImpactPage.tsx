import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Shell({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06070a] text-white">
      {/* Ambient hero glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at top, rgba(96,165,250,0.16), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 520px)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 520px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-20">
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ background: "linear-gradient(to right, rgba(147,197,253,0.7), transparent)" }} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300/80">{children}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 mt-20 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-2xl font-medium tracking-tight text-white">{children}</h2>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] leading-[1.85] text-white/60">{children}</p>;
}

const LAYERS = [
  { name: "Discovery", note: "Find a trusted service, not a fragmented system." },
  { name: "Identity", note: "Know who's acting, and on whose behalf." },
  { name: "Trust", note: "Credentials and history, not blind faith." },
  { name: "Permissions & Terms", note: "Consent and limits, stated explicitly." },
  { name: "Routing & Audit", note: "Every interaction, verifiable." },
];

const USE_CASES = [
  { title: "Financial inclusion", note: "Simpler access to banks and credit — consent and limits built in, not bolted on." },
  { title: "Smallholder agriculture", note: "Better access to markets, credit, and insurance, while the farmer's agent keeps final say." },
  { title: "Disaster response", note: "Faster relief coordination, less duplication, a clear record of who did what." },
];

export default function ImpactPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>Aidress for Good — Aidress</title>
        <meta name="description" content="The same trust infrastructure that coordinates commercial AI agents can help financial inclusion, smallholder agriculture, and disaster response — safely and accountably." />
      </Helmet>

      {/* Hero */}
      <FadeIn>
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">Aidress for Good</div>
        <h1 className="mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-[2.75rem]">
          <span style={{ background: "linear-gradient(90deg, #fff, #93c5fd)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Trust
          </span>{" "}
          infrastructure doesn't care who's using it.
        </h1>
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-white/60">
          The same protocol that lets agents book freight can let a farmer's agent reach a bank, an NGO,
          or a government service — safely.
        </p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <P>
          Aidress is trust infrastructure for autonomous agents: identity, permissions, and an audit trail
          for every interaction. That's just as useful when the counterparty is a bank or an NGO as when
          it's a freight carrier. There's no separate "social impact" product — it's the same rails,
          applied to a wider set of counterparties.
        </P>
      </FadeIn>

      {/* Five layers */}
      <FadeIn>
        <SectionHeading eyebrow="The backbone">The five layers, applied wider</SectionHeading>
      </FadeIn>
      <div>
        {LAYERS.map(({ name, note }, i) => (
          <FadeIn key={name} delay={0.04 * i}>
            <div
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="w-44 shrink-0 text-sm font-medium text-white/90">{name}</div>
              <div className="text-[14.5px] leading-relaxed text-white/50">{note}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Use cases */}
      <FadeIn>
        <SectionHeading eyebrow="Illustrative">Where it applies</SectionHeading>
      </FadeIn>
      <div>
        {USE_CASES.map((u, i) => (
          <FadeIn key={u.title} delay={0.05 * i}>
            <div
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="w-44 shrink-0 text-sm font-medium text-white/90">{u.title}</div>
              <div className="max-w-md text-[14.5px] leading-relaxed text-white/50">{u.note}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Human agency */}
      <FadeIn>
        <SectionHeading eyebrow="Principles">Human agency, by default</SectionHeading>
        <P>
          Agents should operate with clear identity, explicit authority, defined limits, and a verifiable
          record of what occurred — with a human able to step in at any point. Building those principles
          into the infrastructure layer, rather than leaving them to each integration, is what makes
          autonomous AI usable in places where the cost of getting it wrong is highest.
        </P>
      </FadeIn>

      {/* CTA */}
      <FadeIn className="mt-16">
        <div
          className="relative overflow-hidden rounded-2xl p-6 md:p-9"
          style={{
            border: "1px solid rgba(147,197,253,0.18)",
            background: "linear-gradient(135deg, rgba(96,165,250,0.10), rgba(255,255,255,0.02) 60%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(96,165,250,0.18), transparent 70%)" }}
          />
          <div className="relative">
            <h3 className="mb-2 text-xl font-medium text-white">Design a pilot with Aidress</h3>
            <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-white/60">
              We work with development institutions, governments, impact investors, and technology partners
              to identify high-impact workflows where trusted agent coordination can improve access,
              accountability, and outcomes. Talk to us about a design partnership or pilot.
            </p>
            <a
              href="mailto:teamaidress@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.03] hover:opacity-90"
            >
              Talk to us
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </FadeIn>
    </Shell>
  );
}
