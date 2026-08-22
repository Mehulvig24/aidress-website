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

// Breaks out of the narrow content column to a wider width, for the photo grid.
function Wide({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
      <div className="mx-auto max-w-5xl px-6 md:px-10">{children}</div>
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
  { name: "Discovery", commercial: "Find the right agent or service.", social: "Reach trusted services, not a fragmented system." },
  { name: "Identity", commercial: "Verify the agent and its operator.", social: "Establish who's acting, and who's accountable." },
  { name: "Trust", commercial: "Use credentials, attestations, history.", social: "Reduce fraud, impersonation, unsafe delegation." },
  { name: "Permissions & Terms", commercial: "Define authority, limits, conditions.", social: "Preserve consent, spending limits, human control." },
  { name: "Routing & Audit", commercial: "Execute, and keep a record.", social: "Improve transparency across institutions." },
];

const USE_CASES = [
  {
    img: "/images/impact/agriculture.jpg",
    tag: "Agriculture",
    title: "Smallholder agriculture",
    impact: "Better access to markets, credit, and insurance — while the farmer's agent keeps final say.",
  },
  {
    img: "/images/impact/finance.jpg",
    tag: "Finance",
    title: "Financial inclusion",
    impact: "Simpler access to banks and credit, with consent and limits built into the workflow.",
  },
  {
    img: "/images/impact/disaster.jpg",
    tag: "Response",
    title: "Disaster response",
    impact: "Faster relief coordination, less duplication, a clear record of who did what.",
  },
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
          Aidress is trust infrastructure for autonomous agents — identity, permissions, and an audit trail
          for every interaction, whether the counterparty is a freight carrier or a government service. There's
          no separate "social impact" product: the same rails just mean broader inclusion, clearer accountability,
          and one shared way for institutions to coordinate.
        </P>
      </FadeIn>

      {/* Five layers */}
      <FadeIn>
        <SectionHeading eyebrow="The backbone">The five layers, applied wider</SectionHeading>
      </FadeIn>
      <div>
        {LAYERS.map(({ name, commercial, social }, i) => (
          <FadeIn key={name} delay={0.04 * i}>
            <div
              className="py-4"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="mb-1.5 text-sm font-medium text-white/90">{name}</div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
                <div className="text-[13.5px] leading-relaxed text-white/45">
                  <span className="text-white/30">Commercial —</span> {commercial}
                </div>
                <div className="text-[13.5px] leading-relaxed text-white/45">
                  <span className="text-blue-300/60">Social —</span> {social}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Use cases — photo grid */}
      <FadeIn>
        <SectionHeading eyebrow="Illustrative">Where it applies</SectionHeading>
      </FadeIn>
      <Wide>
        <div className="grid gap-3 sm:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <FadeIn key={u.title} delay={0.06 * i}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={u.img}
                  alt={u.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 75%)" }}
                />
                <div className="absolute left-3.5 top-3.5 font-mono text-[11px] text-white/60">0{i + 1}</div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-300/90">{u.tag}</div>
                  <div className="text-[15px] font-medium text-white">{u.title}</div>
                  <div className="mt-1 text-[12.5px] leading-relaxed text-white/60">{u.impact}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Wide>

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
