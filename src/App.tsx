import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Route,
  Search,
  ShieldCheck,
  User,
} from "lucide-react";
import "./index.css";
import { WhitePaperPage, ValidationReportPage, ProtocolArticlePage, SystemsArticlePage } from "./papers";

type Layer = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
};

type Post = {
  category: string;
  title: string;
  excerpt: string;
  meta: string;
  paperId?: "whitepaper" | "validation" | "protocol" | "systems";
};

type IntegrationTab = "llm" | "hardcoded" | "summary";
type HardcodedMethod = "sdk" | "http" | "workflow";

const layers: Layer[] = [
  {
    name: "Discovery",
    icon: Search,
    blurb:
      "A universal registry for locating counterparties by function, capability, and intent.",
  },
  {
    name: "Identity",
    icon: User,
    blurb:
      "A standardized identity layer defining roles, permissions, endpoints, and capabilities.",
  },
  {
    name: "Trust",
    icon: ShieldCheck,
    blurb:
      "A verification and reputation layer for evaluating legitimacy, history, and reliability.",
  },
  {
    name: "Terms",
    icon: FileText,
    blurb:
      "A framework for agents to interpret, agree on, and execute structured terms.",
  },
  {
    name: "Routing",
    icon: Route,
    blurb:
      "A transaction layer to review routing information and integrate with settlement tools including x402 and programmable payment rails.",
  },
];

const posts: Post[] = [
  {
    category: "White Paper",
    title: "Agents Without Infrastructure — V1.0",
    excerpt:
      "A foundational paper on why the agentic economy requires a coordination layer for discovery, identity, trust, terms, and routing.",
    meta: "White Paper",
    paperId: "whitepaper",
  },
  {
    category: "Validation Report",
    title: "The Coordination Gap in Autonomous Agent Transactions",
    excerpt:
      "23 structured test runs across 8 tools. Zero autonomous completions. 79% of failures were protocol or trust gaps — not capability gaps.",
    meta: "Research · 8 min read",
    paperId: "validation",
  },
  {
    category: "Protocol",
    title: "The five layers of agentic communication",
    excerpt:
      "Discovery, identity, trust, terms, and routing form the minimum stack for machine-native economic interaction.",
    meta: "6 min read",
    paperId: "protocol",
  },
  {
    category: "Systems",
    title: "From isolated agents to independent economic actors",
    excerpt:
      "What changes when agents can search for counterparties, validate trust, negotiate constraints, and execute value transfer autonomously.",
    meta: "7 min read",
    paperId: "systems",
  },
];

const flowSteps = [
  "Query Registry",
  "Discover Agents",
  "Resolve Identity",
  "Evaluate Trust",
  "Agree Terms",
  "Route Value",
];

const LLM_PROMPT = `Before transacting with any external agent or service,
verify them via Aidress:

POST https://api.aidress.ai/verify
{"agent_id": "counterpart_id"}

Use the returned trust_score, flags, and attestations
to make a context-appropriate decision before proceeding.

Register this agent at:
POST https://api.aidress.ai/register`;

const hardcodedMethods: Record<HardcodedMethod, { label: string; code: string }> = {
  sdk: {
    label: "SDK",
    code: `from aidress_sdk import verify

trust = verify(counterpart_id)
if trust["trust_score"] < operator_threshold:
    abort()`,
  },
  http: {
    label: "Direct HTTP",
    code: `import requests

response = requests.post(
    "https://api.aidress.ai/verify",
    json={"agent_id": counterpart_id}
)
trust = response.json()
if trust["trust_score"] < operator_threshold:
    abort()`,
  },
  workflow: {
    label: "Workflow node",
    code: `HTTP Request node:
POST https://api.aidress.ai/verify
Body: {"agent_id": "{{counterpart_id}}"}

IF trust_score < operator_threshold → stop
IF trust_score >= operator_threshold → continue`,
  },
};

const methodDescriptions: Record<HardcodedMethod, string> = {
  sdk: "Simplest. One import, one call.",
  http: "No SDK needed. Works in any language.",
  workflow: "For builders who are not writing code at all.",
};

function AidressLogo({ className = "", logoHeight = 44 }: { className?: string; logoHeight?: number }) {
  // Pixel-exact content bounds measured from the 648×644 RGBA PNG
  const origW = 648, origH = 644;
  const contentX = 23, contentY = 243, contentW = 593, contentH = 121;

  const scale = logoHeight / contentH;
  const imgH  = Math.round(origH * scale);
  const imgW  = Math.round(origW * scale);
  const containerW = Math.round(contentW * scale);
  const offsetTop  = -Math.round(contentY * scale);
  const offsetLeft = -Math.round(contentX * scale);

  return (
    <div
      className={className}
      style={{ height: logoHeight, width: containerW, overflow: "hidden", position: "relative", flexShrink: 0 }}
    >
      <img
        src="/aidresslogo2.png"
        alt="Aidress"
        style={{ height: imgH, width: imgW, position: "absolute", top: offsetTop, left: offsetLeft }}
      />
    </div>
  );
}


function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-10 md:pb-24">
      <div className="mb-3 text-xs uppercase tracking-[0.22em] text-white/40">The Problem</div>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">
        <div className="md:flex-1">
          <h2 className="text-3xl tracking-tight text-white md:text-5xl">
            Agents can act.<br className="hidden md:block" /> They cannot coordinate.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Today's AI agents operate in silos — capable within their own domain, but unable to discover,
            verify, or transact with any counterparty they weren't explicitly configured to reach.
            There is no universal layer for agent identity, trust, or settlement. Without it, every
            cross-agent interaction stops and hands control back to a human.
          </p>
        </div>

        <div className="flex flex-row gap-8 md:flex-col md:gap-7 md:pt-2">
          {[
            { value: "0 / 23", label: "tasks completed autonomously", color: "text-red-400" },
            { value: "79%", label: "failures from protocol or trust gaps", color: "text-yellow-300" },
            { value: "2.6×", label: "avg human interventions per task", color: "text-blue-300" },
          ].map(({ value, label, color }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className={`text-3xl font-light tracking-tight md:text-4xl ${color}`}>{value}</span>
              <span className="mt-1 text-xs leading-snug text-white/40">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function IntegrationSection() {
  const [tab, setTab] = useState<IntegrationTab>("llm");
  const [hardcodedMethod, setHardcodedMethod] = useState<HardcodedMethod>("sdk");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(LLM_PROMPT);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_420px] md:gap-6">
      {/* Left panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
        {/* Tabs */}
        <div className="flex border-b border-white/10 text-xs text-white/60">
          {(
            [
              { key: "llm" as IntegrationTab, label: "LLM agents" },
              { key: "hardcoded" as IntegrationTab, label: "Hardcoded agents" },
              { key: "summary" as IntegrationTab, label: "Summary" },
            ]
          ).map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`px-5 py-3 transition ${
                tab === key
                  ? "border-b-2 border-white text-white"
                  : "hover:text-white/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="p-5 md:p-6">
          {tab === "llm" && (
            <div className="flex flex-col gap-5">
              <p className="text-xs text-white/50">
                LLM agents read instructions at runtime. Paste this into any Claude, GPT, or Gemini system prompt.
              </p>
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-white/80">
                {LLM_PROMPT}
              </pre>
              <div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-xs text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {copied ? "Copied!" : "Copy prompt"}
                </button>
              </div>
            </div>
          )}

          {tab === "hardcoded" && (
            <div className="flex flex-col gap-5">
              <p className="text-xs text-white/50">
                A hardcoded agent executes code — the integration lives in the code itself. Choose a method:
              </p>
              <div className="flex gap-2">
                {(Object.keys(hardcodedMethods) as HardcodedMethod[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setHardcodedMethod(m)}
                    className={`rounded-lg px-3 py-1.5 text-xs transition ${
                      hardcodedMethod === m
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {hardcodedMethods[m].label}
                  </button>
                ))}
              </div>
              <pre className="whitespace-pre-wrap rounded-xl bg-black/40 p-4 font-mono text-sm leading-relaxed text-white/80">
                {hardcodedMethods[hardcodedMethod].code}
              </pre>
              <p className="text-xs text-white/50">{methodDescriptions[hardcodedMethod]}</p>
            </div>
          )}

          {tab === "summary" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.16em] text-white/50">
                    <th className="pb-3 pr-6 font-normal">Method</th>
                    <th className="pb-3 pr-6 font-normal">LLM Agent</th>
                    <th className="pb-3 font-normal">Hardcoded Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { method: "System prompt", llm: "✓ only method", hard: "✗ agent can't read it" },
                    { method: "SDK", llm: "✗ not needed", hard: "✓ method 1" },
                    { method: "Direct HTTP", llm: "✗ not needed", hard: "✓ method 2" },
                    { method: "Workflow node", llm: "✗ not needed", hard: "✓ method 3" },
                  ].map((row) => (
                    <tr key={row.method}>
                      <td className="py-3 pr-6 font-mono text-xs text-white/70">{row.method}</td>
                      <td className={`py-3 pr-6 text-xs ${row.llm.startsWith("✓") ? "text-blue-300" : "text-white/30"}`}>
                        {row.llm}
                      </td>
                      <td className={`py-3 text-xs ${row.hard.startsWith("✓") ? "text-blue-300" : "text-white/30"}`}>
                        {row.hard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Right panels */}
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-white/50">
            Quick Start
          </div>
          <ol className="flex flex-col gap-2 font-mono text-sm text-white/80">
            <li>1. Choose your agent type (LLM or hardcoded)</li>
            <li>2. Pick your integration method</li>
            <li>3. POST /verify before every transaction</li>
            <li>4. Use trust_score + flags to decide</li>
            <li>5. POST /register to list your agent</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-white/50">
            The One Call
          </div>
          <pre className="whitespace-pre-wrap font-mono text-sm text-white/80">{`POST https://api.aidress.ai/verify\n{"agent_id": "counterpart_id"}`}</pre>
          <div className="mt-4 flex flex-col gap-1.5 font-mono text-sm">
            {[
              { label: "trust_score", value: "0–100" },
              { label: "verified", value: "true | false" },
              { label: "flags", value: "[]" },
              { label: "routing", value: "{ endpoint, protocol }" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3">
                <span className="text-white/40">→ {label}</span>
                <span className="text-white/70">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">Works with any agent type. Returns in &lt;50ms.</p>
        </div>
      </div>
    </div>
  );
}


export default function PactWebsiteConcept() {
  const [page, setPage] = useState<"home" | "whitepaper" | "validation" | "protocol" | "systems">("home");
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, -100]);
  const yGrid = useTransform(scrollY, [0, 500], [0, -40]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const marquee = useMemo(() => [...flowSteps, ...flowSteps], []);

  const driftX = (mouse.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) / 30;
  const driftY = (mouse.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) / 30;
  const slowX = driftX * 0.3;
  const slowY = driftY * 0.3;
  const midX = driftX * 0.6;
  const midY = driftY * 0.6;
  const fastX = driftX;
  const fastY = driftY;

  if (page === "whitepaper") return <WhitePaperPage onBack={() => setPage("home")} />;
  if (page === "validation") return <ValidationReportPage onBack={() => setPage("home")} />;
  if (page === "protocol") return <ProtocolArticlePage onBack={() => setPage("home")} />;
  if (page === "systems") return <SystemsArticlePage onBack={() => setPage("home")} />;

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#06070a] text-white selection:bg-white/20"
      onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
        setMouse({ x: event.clientX, y: event.clientY });
      }}
    >
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div
          className="absolute h-[420px] w-[420px] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(147,197,253,0.14), rgba(147,197,253,0.02) 45%, transparent 70%)",
            left: mouse.x - 210,
            top: mouse.y - 210,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(72,120,255,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%)]" />
      </div>

      <div className="relative z-10">
        <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${headerSolid ? "border-b border-white/10 bg-[#06070a]/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}>
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-6 lg:px-10">
            <div className="flex items-center gap-3">
              <AidressLogo logoHeight={36} />
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex lg:gap-8">
              <a href="#problem" className="transition hover:text-white">The Problem</a>
              <a href="#layers" className="transition hover:text-white">The Engine</a>
              <a href="#team" className="transition hover:text-white">The Crew</a>
              <a href="#blog" className="transition hover:text-white">Mission Logs</a>
            </nav>
            <a href="#reach" className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white transition hover:border-white hover:bg-white hover:text-black md:px-5 md:py-2 md:text-sm">
              Reach Us
            </a>
          </div>
        </header>

        <main className="pt-14 md:pt-16">
          <section className="relative overflow-hidden pb-16 pt-20 md:pb-28 md:pt-28">
            <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2">
              <motion.div style={{ y: yBg, x: slowX, translateY: slowY }} className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[140px]" />
              <motion.div style={{ y: yGrid, x: midX, translateY: midY }} className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:60px_60px]" />
              <motion.div
                style={{ x: fastX, translateY: fastY }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-400/25 blur-[120px]"
              />
              <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-5xl text-[2.4rem] leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-7xl lg:text-8xl"
              >
                <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  The Agentic Economy Launch:
                </span>
                <br />
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white"
                >
                  From Theory to Fact
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 mt-4 max-w-xl md:mt-6 md:max-w-2xl"
              >
                <div className="text-base leading-relaxed text-blue-300 md:text-lg">
                  A2A transaction infrastructure throughout its 5 layers: discovery, identity, trust, terms, and routing.
                </div>
              </motion.div>
            </div>
          </section>

          <section className="overflow-hidden py-6 md:py-10">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex w-max gap-6 whitespace-nowrap px-4 text-xs text-white/80 md:gap-10 md:px-10 md:text-sm"
            >
              {marquee.map((step, index) => (
                <div key={`${step}-${index}`} className="flex items-center gap-3">
                  <span>{step}</span>
                  <ArrowRight className="h-4 w-4 text-blue-300" />
                </div>
              ))}
            </motion.div>
          </section>

          <ProblemSection />

          <section id="layers" className="mx-auto max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
            <div className="mb-10">
              <h2 className="text-4xl tracking-tight text-blue-300 md:text-6xl">The Engine</h2>
              <p className="mt-3 max-w-2xl text-white/80">The core primitives connected as a single interaction pipeline.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const step = index + 1;
                return (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute -top-1 left-1/2 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300 xl:flex"
                      initial={{ scale: 0.5, opacity: 0.3 }}
                      whileInView={{ scale: [0.5, 1.2, 1], opacity: [0.3, 1, 0.8] }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    />
                    <motion.div whileHover={{ y: -6 }} className="h-full">
                      <SurfaceCard className="h-full">
                        <div className="p-5">
                          <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-300 text-xs font-semibold text-black">{step}</div>
                            <Icon className="h-4 w-4 text-blue-300" />
                          </div>
                          <div className="mb-2 text-base font-medium text-blue-300">{layer.name}</div>
                          <p className="text-sm leading-relaxed text-white/80">{layer.blurb}</p>
                        </div>
                      </SurfaceCard>
                    </motion.div>
                    {index !== layers.length - 1 ? (
                      <motion.div
                        className="absolute right-[-18px] top-9 hidden text-white/30 xl:flex"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        →
                      </motion.div>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section id="team" className="mx-auto max-w-7xl px-4 pb-12 md:px-10">
            <div className="mb-8">
              <h2 className="text-2xl tracking-tight text-blue-300 md:text-4xl">The Crew</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
              {[
                { name: "Mehul Vig", initials: "MV", photo: "/mehul.jpg", role: "Co-Founder", bio: "Previously at stablecoin cross-border payments startup across Southeast Asia. Co-founding Aidress.", linkedin: "https://www.linkedin.com/in/mehul-vig-462345282/", gradient: "from-blue-500/30 to-blue-300/10" },
                { name: "Kabir Sadani", initials: "KS", photo: "/kabir.jpg", role: "Co-Founder", bio: "Designing agent-native infrastructure for autonomous transactions.", linkedin: "https://www.linkedin.com/in/kabir-sadani-a5a057378/", gradient: "from-indigo-500/30 to-purple-300/10" },
                { name: "Prashanth Ranganathan", initials: "PR", photo: "/prashanth.jpg", role: "Board Member", bio: "Serial founder behind multiple acquisitions by Google, PayPal, and PayU.", linkedin: "https://www.linkedin.com/in/prashanthr/", gradient: "from-slate-500/30 to-slate-300/10" },
                { name: "Milind Sanghavi", initials: "MS", photo: "/milind.jpg", role: "Board Member", bio: "Founder of XWeave, building next-gen financial rails.", linkedin: "https://www.linkedin.com/in/milindsanghavi/", gradient: "from-slate-500/30 to-slate-300/10" },
              ].map((person, index) => (
                <motion.div key={person.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -4 }} className="flex flex-col">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="mb-4 block">
                    <div className={`aspect-square w-full overflow-hidden rounded-2xl border border-white/10 ${person.photo ? "" : `bg-gradient-to-br ${person.gradient} flex items-center justify-center`}`}>
                      {person.photo
                        ? <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                        : <span className="text-3xl font-light tracking-wide text-white/50 md:text-4xl">{person.initials}</span>
                      }
                    </div>
                  </a>
                  <div className="text-sm font-medium text-white">{person.name}</div>
                  <div className="mb-1 text-xs text-white/50">{person.role}</div>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="mb-2 text-[10px] text-blue-300/50 transition hover:text-blue-300">LinkedIn ↗</a>
                  <p className="text-xs leading-relaxed text-white/50">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="blog" className="mx-auto max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="text-4xl tracking-tight md:text-6xl">Mission Logs</h2>
              <div className="hidden text-sm text-white/55 md:block">Architecture notes, protocol thinking, and system design.</div>
            </div>
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
              <button type="button" onClick={() => posts[0].paperId && setPage(posts[0].paperId)} className="text-left lg:col-span-2">
                <motion.div whileHover={{ scale: 1.01 }} className="h-full cursor-pointer">
                  <SurfaceCard className="h-full overflow-hidden">
                    <div className="flex h-28 w-full items-center justify-center bg-gradient-to-br from-blue-400/20 to-white/5 text-sm text-white/30 md:h-48">White Paper</div>
                    <div className="flex h-full flex-col p-6">
                      <div className="mb-2 text-xs uppercase tracking-[0.16em] text-white/60">{posts[0].category}</div>
                      <h3 className="mb-3 text-2xl text-blue-300">{posts[0].title}</h3>
                      <p className="flex-grow text-sm leading-relaxed text-white/80">{posts[0].excerpt}</p>
                      <div className="mt-5 flex items-center justify-between text-sm text-white/55">
                        <span>{posts[0].meta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </SurfaceCard>
                </motion.div>
              </button>
              <div className="grid h-full gap-4 md:grid-rows-3">
                {posts.slice(1, 4).map((post) => (
                  <motion.div
                    key={post.title}
                    whileHover={{ y: -3 }}
                    className={`h-full ${post.paperId ? "cursor-pointer" : ""}`}
                    onClick={() => post.paperId && setPage(post.paperId)}
                  >
                    <SurfaceCard className="h-full">
                      <div className="flex h-full flex-col p-4">
                        <div className="mb-1 text-xs uppercase tracking-[0.16em] text-white/60">{post.category}</div>
                        <h3 className="mb-2 text-sm text-blue-300">{post.title}</h3>
                        <div className="mt-auto flex items-center justify-between text-xs text-white/55">
                          <span>{post.meta}</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </SurfaceCard>
                  </motion.div>
                ))}
              </div>
            </div>
            {posts.slice(4).length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {posts.slice(4).map((post) => (
                  <motion.div key={post.title} whileHover={{ y: -3 }} className="h-full">
                    <SurfaceCard className="h-full">
                      <div className="flex h-full flex-col p-5">
                        <div className="mb-2 text-xs uppercase tracking-[0.16em] text-white/60">{post.category}</div>
                        <h3 className="mb-2 text-base text-blue-300">{post.title}</h3>
                        <p className="flex-grow text-xs leading-relaxed text-white/75">{post.excerpt}</p>
                        <div className="mt-4 flex items-center justify-between text-xs text-white/55">
                          <span>{post.meta}</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </SurfaceCard>
                  </motion.div>
                ))}
              </div>
            )}
          </section>

          <section id="terminal" className="mx-auto max-w-6xl px-4 pb-16 md:px-10">
            <div className="mb-8">
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-white/50">Integrate in minutes</div>
              <h2 className="text-3xl tracking-tight text-blue-300 md:text-5xl">Launch Control</h2>
            </div>
            <IntegrationSection />
          </section>

          <section id="reach" className="relative overflow-hidden border-t border-white/10 py-14 md:py-20">
            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
                <div>
                  <h2 className="text-3xl tracking-tight text-blue-300 md:text-6xl">Let's Talk</h2>
                  <p className="mt-4 max-w-md text-white/70">
                    Whether you're building agents, infrastructure, or systems — plug into the layer that connects it all.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/40 transition focus:border-blue-300 focus:outline-none"
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button type="button" className="flex-1 rounded-xl bg-white py-3 text-sm font-medium text-black transition hover:bg-white/90 active:scale-95">Start a conversation</button>
                    <button type="button" className="flex-1 rounded-xl border border-white/20 py-3 text-sm transition hover:border-white active:scale-95">Become a partner</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#06070a]">
          <div className="mx-auto max-w-7xl px-4 md:px-10">
            <div className="flex flex-col items-center justify-between gap-3 py-4 text-[10px] text-white/60 sm:flex-row md:text-xs">
              <div className="flex items-center gap-3">
                <AidressLogo logoHeight={24} className="opacity-60" />
                <span className="text-white/30">•</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
              <div className="flex items-center gap-5">
                <a href="#layers" className="transition hover:text-white">Engine</a>
                <a href="#blog" className="transition hover:text-white">Logs</a>
                <a href="#terminal" className="transition hover:text-white">API</a>
                <span className="text-white/30">•</span>
                <span className="cursor-pointer transition hover:text-white">X</span>
                <span className="cursor-pointer transition hover:text-white">LinkedIn</span>
                <span className="cursor-pointer transition hover:text-white">Email</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
