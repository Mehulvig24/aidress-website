import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sun, Moon, Search, Shield, CheckCircle, Handshake, Zap, Menu, X } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SearchModal, SearchTrigger } from "./components/SearchModal";
import DocsPage from "./pages/DocsPage";
import {
  WhitePaperPage,
  ValidationReportPage,
  ProtocolArticlePage,
  SystemsArticlePage,
} from "./papers";
import { AuroraText } from "@/components/ui/aurora-text";
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import WorldMap from "@/components/ui/world-map";
import "./index.css";

// ─── Theme ──────────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("aidress-theme") as Theme) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("aidress-theme", theme);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
  );
}

function useTheme() {
  return useContext(ThemeCtx);
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// ─── FadeIn wrapper ─────────────────────────────────────────────────────────────

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
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Logo ───────────────────────────────────────────────────────────────────────

function AidressLogo({
  className = "",
  logoHeight = 44,
}: {
  className?: string;
  logoHeight?: number;
}) {
  const origW = 648,
    origH = 644;
  const contentX = 23,
    contentY = 243,
    contentW = 593,
    contentH = 121;
  const scale = logoHeight / contentH;
  const imgH = Math.round(origH * scale);
  const imgW = Math.round(origW * scale);
  const containerW = Math.round(contentW * scale);
  const offsetTop = -Math.round(contentY * scale);
  const offsetLeft = -Math.round(contentX * scale);

  return (
    <div
      className={`logo-auto ${className}`}
      style={{
        height: logoHeight,
        width: containerW,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <img
        src="/aidresslogo2.png"
        alt="Aidress"
        style={{
          height: imgH,
          width: imgW,
          position: "absolute",
          top: offsetTop,
          left: offsetLeft,
        }}
      />
    </div>
  );
}

// ─── Hero Animated Terminal ─────────────────────────────────────────────────────

function HeroTerminal() {
  const { theme } = useTheme();
  const termColor = theme === "dark" ? "var(--text-muted)" : "#1e293b";
  const accentGreen = theme === "dark" ? "#4ade80" : "#16a34a";
  const accentBlue = theme === "dark" ? "#93c5fd" : "#2563eb";
  const accentYellow = theme === "dark" ? "#facc15" : "#ca8a04";

  return (
    <Terminal
      className="mx-auto bg-[var(--code-bg)] border-[var(--border)]"
    >
      <TypingAnimation
        className="font-mono text-[12px] sm:text-[13px]"
        style={{ color: termColor, whiteSpace: "nowrap" }}
        duration={25}
      >
        {'$ curl -X POST https://api.aidress.ai/match \\'}
      </TypingAnimation>

      <TypingAnimation
        className="font-mono text-[12px] sm:text-[13px]"
        style={{ color: termColor, whiteSpace: "nowrap" }}
        duration={25}
      >
        {'  -d \'{"capabilities": ["freight_booking", "customs"]}\''}
      </TypingAnimation>

      <AnimatedSpan className="font-mono text-[12px] sm:text-[13px] mt-3" style={{ color: accentBlue, whiteSpace: "nowrap" }}>
        <span>{'→ Searching registry...'}</span>
      </AnimatedSpan>

      <AnimatedSpan className="font-mono text-[12px] sm:text-[13px]" style={{ color: accentGreen, whiteSpace: "nowrap" }}>
        <span>{'→ 3 verified agents found'}</span>
      </AnimatedSpan>

      <AnimatedSpan className="font-mono text-[12px] sm:text-[13px] mt-3" style={{ color: termColor, whiteSpace: "nowrap" }}>
        <span>{'[1] freightbot_01   trust: '}<span style={{ color: accentGreen }}>88</span>{'/100  ██████████  '}<span style={{ color: accentGreen }}>PROCEED</span></span>
      </AnimatedSpan>

      <AnimatedSpan className="font-mono text-[12px] sm:text-[13px]" style={{ color: termColor, whiteSpace: "nowrap" }}>
        <span>{'[2] shipchain_01    trust: '}<span style={{ color: accentGreen }}>76</span>{'/100  █████████░  '}<span style={{ color: accentGreen }}>PROCEED</span></span>
      </AnimatedSpan>

      <AnimatedSpan className="font-mono text-[12px] sm:text-[13px]" style={{ color: termColor, whiteSpace: "nowrap" }}>
        <span>{'[3] tradelens_01    trust: '}<span style={{ color: accentYellow }}>71</span>{'/100  ████████░░  '}<span style={{ color: accentGreen }}>PROCEED</span></span>
      </AnimatedSpan>
    </Terminal>
  );
}

// ─── Animated counter ───────────────────────────────────────────────────────────

function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  pulseRed = false,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  pulseRed?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [pulsing, setPulsing] = useState(false);
  const ran = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView || ran.current) return;
    ran.current = true;

    if (prefersReducedMotion || end === 0) {
      setCount(end);
      if (pulseRed) {
        setPulsing(true);
        setTimeout(() => setPulsing(false), 800);
      }
      return;
    }

    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, end, duration, pulseRed]);

  return (
    <span
      ref={ref}
      style={{
        color: pulsing ? "#f87171" : undefined,
        transition: "color 0.4s",
      }}
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Code block with shiki ──────────────────────────────────────────────────────

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const { theme } = useTheme();
  const [html, setHtml] = useState("");

  useEffect(() => {
    let cancelled = false;
    import("shiki")
      .then(async ({ codeToHtml }) => {
        const result = await codeToHtml(code, {
          lang,
          theme:
            theme === "dark" ? "github-dark-dimmed" : "github-light",
        });
        if (!cancelled) setHtml(result);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [code, lang, theme]);

  if (!html) {
    return (
      <pre
        className="font-mono text-[13px] leading-[1.7]"
        style={{ color: "var(--text)" }}
      >
        {code}
      </pre>
    );
  }

  return (
    <div
      className="shiki-wrapper"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const stats = [
  { end: 15, prefix: "$", suffix: "T", label: "B2B spend flowing through AI agents by 2028 (Gartner)" },
  { end: 23, prefix: "", suffix: "", label: "agentic transactions tested across 8 platforms" },
  { end: 0, prefix: "", suffix: "", label: "autonomous completions without human intervention", pulseRed: true },
  { end: 5, prefix: "", suffix: "", label: "coordination layers built into Aidress" },
];

const engineLayersMeta = [
  {
    name: "Discovery",
    icon: Search,
    description: "A universal registry for locating counterparties by function, capability, and intent.",
    status: "live" as const,
  },
  {
    name: "Identity",
    icon: Shield,
    description: "A standardized identity layer defining roles, permissions, endpoints, and capabilities.",
    status: "soon" as const,
  },
  {
    name: "Trust",
    icon: CheckCircle,
    description: "A verification and reputation layer for evaluating legitimacy, history, and reliability.",
    status: "live" as const,
  },
  {
    name: "Terms",
    icon: Handshake,
    description: "A framework for agents to interpret, agree on, and execute structured terms.",
    status: "soon" as const,
  },
  {
    name: "Routing & Settlement",
    icon: Zap,
    description: "A transaction layer to route and settle value using x402 and programmable payment rails.",
    status: "live" as const,
  },
];

const codeSnippets = {
  python: {
    lang: "python",
    code: `pip install aidress-sdk

from aidress_sdk import match

agents = match(["freight_booking", "customs_clearance"])
best = agents[0]  # ranked by trust score`,
  },
  curl: {
    lang: "bash",
    code: `curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "agent_freightbot_01"}'`,
  },
  mcp: {
    lang: "json",
    code: `{
  "mcpServers": {
    "aidress": {
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`,
  },
  systemprompt: {
    lang: "markdown",
    code: `Before transacting with any unknown agent, call:
POST https://api.aidress.ai/verify
Body: {"agent_id": "<counterpart_id>"}

Decision rules:
- trust_score >= 70  → proceed
- trust_score 50–69  → proceed with reduced limits
- trust_score < 50   → abort

Always call POST /review after the transaction completes.`,
  },
};

const missionPosts = [
  {
    category: "WHITE PAPER",
    title: "Agents Without Infrastructure — V1.0",
    description:
      "A foundational paper on why the agentic economy requires a coordination layer for discovery, identity, trust, terms, and routing.",
    meta: "Foundational · 12 min read",
    date: "2025",
    route: "/whitepaper",
    image: "/white paper cover.png",
  },
  {
    category: "VALIDATION REPORT",
    title: "The Coordination Gap in Autonomous Agent Transactions",
    description: "23 runs. 8 platforms. 0 autonomous completions. 79% of failures were protocol gaps, not capability gaps.",
    meta: "Research · 8 min read",
    date: "2025",
    route: "/validation",
    image: "/validation-cover.png",
  },
  {
    category: "PROTOCOL",
    title: "The five layers of agentic communication",
    description: "Discovery, identity, trust, terms, and routing — the protocol stack for agent-to-agent transactions.",
    meta: "6 min read",
    date: "2025",
    route: "/protocol",
    image: "/protocol-cover.png",
  },
  {
    category: "SYSTEMS",
    title: "From isolated agents to independent economic actors",
    description: "Why agents need infrastructure to move from demos to real economic participation.",
    meta: "7 min read",
    date: "2025",
    route: "/systems",
    image: "/systems-cover.png",
  },
];

// ─── Engine Layer Interactive Panels ────────────────────────────────────────────

// ─── Discovery ──────────────────────────────────────────────────────────────

function DiscoveryPanel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref}>
      <pre
        className="text-[13px] leading-relaxed tracking-tight"
        style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span style={{ color: "var(--text-faint)" }}>$</span> aidress search --caps freight_booking{"\n"}
        {"\n"}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <span style={{ color: "var(--text-faint)" }}>searching registry...</span>{"\n"}
          <span style={{ color: "var(--text-faint)" }}>3 agents matched</span>{"\n"}
          {"\n"}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {"  "}<span style={{ color: "var(--text)" }}>freightbot_01</span>{"    "}
          <span style={{ color: "#22c55e" }}>94%</span>{"  "}
          <span style={{ color: "var(--text-faint)" }}>US-WEST  freight_booking, rates</span>{"\n"}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
        >
          {"  "}<span style={{ color: "var(--text)" }}>shipchain_01</span>{"     "}
          <span style={{ color: "var(--accent)" }}>82%</span>{"  "}
          <span style={{ color: "var(--text-faint)" }}>EU       customs, tracking</span>{"\n"}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          {"  "}<span style={{ color: "var(--text)" }}>tradelens_01</span>{"     "}
          <span style={{ color: "var(--accent)" }}>71%</span>{"  "}
          <span style={{ color: "var(--text-faint)" }}>APAC     freight, docs</span>{"\n"}
        </motion.span>
        {"\n"}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          <span style={{ color: "var(--text-faint)" }}>→ select agent or refine query</span>
        </motion.span>
      </pre>
    </div>
  );
}

// ─── Identity ───────────────────────────────────────────────────────────────

function IdentityPanel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Passport-style card */}
      <div
        className="overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* Top band */}
        <div className="px-5 py-2" style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Aidress Agent Identity</span>
        </div>

        <div className="p-5" style={{ backgroundColor: "var(--code-bg)" }}>
          <div className="flex gap-5">
            {/* ID photo area */}
            <div
              className="flex h-24 w-20 shrink-0 items-center justify-center"
              style={{ border: "1px solid var(--border)" }}
            >
              <span className="text-3xl font-light" style={{ color: "var(--text-faint)" }}>F1</span>
            </div>

            {/* Fields — tight, no boxes */}
            <div className="flex-1 space-y-3 text-[13px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div>
                <div className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)" }}>Agent ID</div>
                <div style={{ color: "var(--text)" }}>agent_freightbot_01</div>
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)" }}>Operator</div>
                <div style={{ color: "var(--text)" }}>FreightCo Inc.</div>
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)" }}>Capabilities</div>
                <div style={{ color: "var(--text-muted)" }}>freight_booking · rate_negotiation</div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div
            className="mt-4 flex items-center justify-between pt-3"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span className="text-[10px] tracking-wider" style={{ color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace" }}>
              AID-2025-0847 · agents.freightco.com/v1
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-[11px] font-bold uppercase tracking-wider"
              style={{ color: "#22c55e" }}
            >
              ✓ Verified
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Trust ──────────────────────────────────────────────────────────────────

function TrustPanel() {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setValue(88), 300);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline gap-3">
        <span
          className="text-5xl font-light tabular-nums tracking-tight"
          style={{ color: value >= 70 ? "#22c55e" : "#f59e0b" }}
        >
          {value}
        </span>
        <span className="text-sm" style={{ color: "var(--text-faint)" }}>/100 trust score</span>
      </div>

      <div className="mt-1 h-1 w-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
        <motion.div
          className="h-full"
          initial={{ width: 0 }}
          animate={inView ? { width: "88%" } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          style={{ backgroundColor: "#22c55e" }}
        />
      </div>

      <div className="mt-6 space-y-0" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
        {[
          { check: "Cryptographic signature valid", ok: true },
          { check: "Operator KYB complete", ok: true },
          { check: "142 transactions, 0.7% dispute rate", ok: true },
          { check: "Sanctions screening clear", ok: true },
          { check: "Active for 14 months", ok: true },
        ].map((c, i) => (
          <motion.div
            key={c.check}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="flex items-center gap-3 py-1.5"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span style={{ color: "#22c55e" }}>✓</span>
            <span style={{ color: "var(--text-muted)" }}>{c.check}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-4 text-[13px]"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-faint)" }}
      >
        decision: <span style={{ color: "#22c55e" }}>PROCEED</span>
      </motion.div>
    </div>
  );
}

// ─── Terms ──────────────────────────────────────────────────────────────────

function TermsPanel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref}>
      <div
        className="overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <div className="px-5 py-2.5 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--code-bg)" }}>
          <span className="text-xs uppercase tracking-[0.15em]" style={{ color: "var(--text-faint)" }}>
            Transaction Agreement
          </span>
          <span style={{ color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
            terms_a7f3c
          </span>
        </div>

        <div className="px-5 py-4 space-y-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, backgroundColor: "var(--code-bg)" }}>
          {[
            { clause: "Service", val: "Freight booking, US-West → EU" },
            { clause: "Price", val: "$2,300.00 USD" },
            { clause: "Delivery", val: "6 business days" },
            { clause: "Liability", val: "Capped at $25,000" },
            { clause: "Disputes", val: "Aidress arbitration" },
          ].map((c, i) => (
            <motion.div
              key={c.clause}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex justify-between"
            >
              <span style={{ color: "var(--text-faint)" }}>{c.clause}</span>
              <span style={{ color: "var(--text)" }}>{c.val}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="px-5 py-2.5 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
        >
          <span style={{ color: "var(--text-faint)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
            agent_a ✓ · agent_b ✓
          </span>
          <span style={{ color: "#22c55e", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
            AGREED
          </span>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Routing & Settlement ───────────────────────────────────────────────────

function RoutingPanel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-5">
      {/* Payment rails — styled with brand personality */}
      <div className="space-y-3">
        {[
          {
            name: "x402",
            brandStyle: { fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: "0.05em" } as React.CSSProperties,
            desc: "HTTP 402 · micropayment protocol",
            speed: "~200ms",
            selected: true,
          },
          {
            name: "stripe",
            brandStyle: { fontWeight: 700, letterSpacing: "-0.02em", textTransform: "lowercase" as const } as React.CSSProperties,
            desc: "Card / ACH · traditional settlement",
            speed: "2–3 days",
            selected: false,
          },
          {
            name: "USDC",
            brandStyle: { fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: "0.1em" } as React.CSSProperties,
            desc: "Circle · on-chain stablecoin",
            speed: "~30s",
            selected: false,
          },
        ].map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.2 }}
            className="flex items-center gap-4"
          >
            {/* Line + dot */}
            <div className="flex items-center gap-1 shrink-0">
              <div className="h-px w-8" style={{ backgroundColor: r.selected ? "#22c55e" : "var(--border)" }} />
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: r.selected ? "#22c55e" : "transparent",
                  border: `1.5px solid ${r.selected ? "#22c55e" : "var(--text-faint)"}`,
                }}
              />
            </div>

            {/* Rail info */}
            <div className="flex flex-1 items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <span className="text-base" style={{ ...r.brandStyle, color: r.selected ? "#22c55e" : "var(--text)" }}>
                  {r.name}
                </span>
                {r.selected && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider" style={{ color: "#22c55e" }}>← selected</span>
                )}
                <div className="text-[11px] mt-0.5" style={{ color: "var(--text-faint)" }}>{r.desc}</div>
              </div>
              <span style={{ color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
                {r.speed}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Receipt — minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="pt-3"
        style={{ borderTop: "1px solid var(--border)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--text-faint)" }}
      >
        txn_a7f3c settled · <span style={{ color: "var(--text)" }}>$2,300</span> via x402 · 187ms · <span style={{ color: "#22c55e" }}>complete</span>
      </motion.div>
    </div>
  );
}

const enginePanels = [DiscoveryPanel, IdentityPanel, TrustPanel, TermsPanel, RoutingPanel];

// ─── ASCII Art Heading ──────────────────────────────────────────────────────────

const asciiLines = [
  // INTEGRATE
  "██╗███╗░░░██╗████████╗███████╗░██████╗░██████╗░░█████╗░████████╗███████╗",
  "██║████╗░░██║╚══██╔══╝██╔════╝██╔════╝░██╔══██╗██╔══██╗╚══██╔══╝██╔════╝",
  "██║██╔██╗░██║░░░██║░░░█████╗░░██║░░███╗██████╔╝███████║░░░██║░░░█████╗░░",
  "██║██║╚██╗██║░░░██║░░░██╔══╝░░██║░░░██║██╔══██╗██╔══██║░░░██║░░░██╔══╝░░",
  "██║██║░╚████║░░░██║░░░███████╗╚██████╔╝██║░░██║██║░░██║░░░██║░░░███████╗",
  "╚═╝╚═╝░░╚═══╝░░░╚═╝░░░╚══════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝",
  // spacer
  "",
  // IN MINUTES
  "██╗███╗░░░██╗░░░░███╗░░░███╗██╗███╗░░░██╗██╗░░░██╗████████╗███████╗███████╗",
  "██║████╗░░██║░░░░████╗░████║██║████╗░░██║██║░░░██║╚══██╔══╝██╔════╝██╔════╝",
  "██║██╔██╗░██║░░░░██╔████╔██║██║██╔██╗░██║██║░░░██║░░░██║░░░█████╗░░███████╗",
  "██║██║╚██╗██║░░░░██║╚██╔╝██║██║██║╚██╗██║██║░░░██║░░░██║░░░██╔══╝░░╚════██║",
  "██║██║░╚████║░░░░██║░╚═╝░██║██║██║░╚████║╚██████╔╝░░░██║░░░███████╗███████║",
  "╚═╝╚═╝░░╚═══╝░░░░╚═╝░░░░░╚═╝╚═╝╚═╝░░╚═══╝░╚═════╝░░░░╚═╝░░░╚══════╝╚══════╝",
];

function AsciiHeading() {
  return (
    <pre
      className="select-none font-bold leading-tight overflow-x-auto"
      style={{
        fontFamily: "Menlo, Consolas, monospace",
        fontSize: "clamp(3.5px, 0.95vw, 7px)",
        lineHeight: 1.15,
        letterSpacing: "0.05em",
      }}
      aria-label="INTEGRATE IN MINUTES"
    >
      {asciiLines.map((line, i) => (
        <div key={i} style={{ height: line === "" ? "0.5em" : undefined }}>
          {[...line].map((char, j) => (
            <span
              key={j}
              className={char === "░" ? "ascii-shadow" : "ascii-block"}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </pre>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────────

function Nav() {
  const { theme, toggle } = useTheme();
  const [solid, setSolid] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "#engine", label: "Engine" },
    { href: "#integrate", label: "Integrate" },
    { href: "#logs", label: "Mission Logs" },
    { href: "#crew", label: "Crew" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: `1px solid ${solid ? "var(--border)" : "transparent"}`,
        backgroundColor: solid ? "var(--bg)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Left: logo + page anchors */}
        <div className="flex items-center gap-6">
          <a href="#hero">
            <AidressLogo logoHeight={30} />
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] transition hover:opacity-80" style={{ color: "var(--text-faint)" }}>{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Right: docs + API ref + search + theme + hamburger */}
        <nav className="flex items-center gap-4 lg:gap-5">
          <a href="/docs" className="hidden text-[13px] font-medium transition lg:inline" style={{ color: "var(--text-muted)" }}>Docs</a>
          <a href="/docs/register" className="hidden text-[13px] font-medium transition lg:inline" style={{ color: "var(--text-muted)" }}>API Reference</a>

          <SearchTrigger onClick={() => setSearchOpen(true)} className="hidden lg:flex" />

          <button
            type="button"
            onClick={toggle}
            className="flex items-center justify-center rounded-lg p-2 transition"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger — mobile/tablet only */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center rounded-lg p-2 transition lg:hidden"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
            style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-5 pt-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-[14px] transition"
                  style={{ color: "var(--text-muted)" }}
                >
                  {l.label}
                </a>
              ))}
              <div className="my-2" style={{ borderTop: "1px solid var(--border)" }} />
              <a
                href="/docs"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-[14px] font-medium transition"
                style={{ color: "var(--text)" }}
              >
                Docs
              </a>
              <a
                href="/docs/register"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-[14px] font-medium transition"
                style={{ color: "var(--text)" }}
              >
                API Reference
              </a>
              <div className="my-2" style={{ borderTop: "1px solid var(--border)" }} />
              <button
                type="button"
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-[14px] transition"
                style={{ color: "var(--text-muted)" }}
              >
                <Search size={14} />
                Search docs
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

// ─── Section 1: Hero ────────────────────────────────────────────────────────────

function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-16 text-center"
    >
      {/* World map background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        style={{ opacity: theme === "dark" ? 0.45 : 0.3 }}
      >
        <WorldMap
          dots={[
            { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 51.5074, lng: -0.1278 } },
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 1.3521, lng: 103.8198 } },
            { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: -33.8688, lng: 151.2093 } },
            { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 19.076, lng: 72.8777 } },
            { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: -23.5505, lng: -46.6333 } },
          ]}
          lineColor={theme === "dark" ? "#93c5fd" : "#2563eb"}
        />
      </div>

      {/* Radial fade so map doesn't dominate edges */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, var(--bg) 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Headline */}
        <FadeIn>
          <h1
            className="text-[1.75rem] leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-[68px]"
            style={{ color: "var(--text)" }}
          >
            The{" "}
            <AuroraText
              colors={
                theme === "dark"
                  ? ["#93c5fd", "#60a5fa", "#93c5fd", "#bfdbfe"]
                  : ["#2563eb", "#1d4ed8", "#2563eb", "#3b82f6"]
              }
              speed={0.8}
            >
              coordination
            </AuroraText>{" "}
            layer for the agentic economy
          </h1>
        </FadeIn>

        {/* Subline */}
        <FadeIn delay={0.2}>
          <p
            className="mx-auto mt-6 max-w-lg text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Everyone&apos;s building agents. We&apos;re building the infrastructure they need to transact.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/docs"
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium no-underline transition-all"
              style={{
                backgroundColor: theme === "dark" ? "rgba(255,255,255,0.06)" : "var(--accent)",
                color: theme === "dark" ? "var(--text)" : "#fff",
                border: theme === "dark" ? "1px solid var(--border)" : "1px solid var(--accent)",
              }}
            >
              <span>Read the docs</span>
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              href="mailto:teamaidress@gmail.com"
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium no-underline transition-all"
              style={{
                backgroundColor: "transparent",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <span>Talk to us</span>
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Animated terminal */}
        <FadeIn delay={0.45} className="mt-16 w-full text-left">
          <HeroTerminal />
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 2: Registry Stats ──────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="pt-12 pb-0 md:pt-16">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <FadeIn>
          <h2
            className="text-[1.45rem] font-semibold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem]"
            style={{ color: "var(--text)" }}
          >
            Not a capability gap. A coordination gap.
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed md:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            Today&apos;s agents can reason, plan, and act — but when they need
            to find a counterparty, verify trust, or route value, they hand
            back to a human. Every time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="flex flex-col">
              <span
                className="text-4xl font-light tracking-tight md:text-5xl"
                style={{ color: "var(--accent)" }}
              >
                <AnimatedCounter
                  end={s.end}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  pulseRed={s.pulseRed}
                />
              </span>
              <span
                className="mt-2 text-xs leading-snug md:text-sm"
                style={{ color: "var(--text-faint)" }}
              >
                {s.label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Section 3: Mission Logs ────────────────────────────────────────────────────

function MissionLogsSection() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const featured = missionPosts[0];
  const rest = missionPosts.slice(1);

  // ── Request-access gate ────────────────────────────────────────────────────
  const [gateTarget, setGateTarget] = useState<string | null>(null);
  const [gateName, setGateName] = useState("");
  const [gateEmail, setGateEmail] = useState("");
  const [gateBuilding, setGateBuilding] = useState("");
  const [gateLoading, setGateLoading] = useState(false);
  const [gateError, setGateError] = useState("");

  function openGate(route: string) {
    if (sessionStorage.getItem("aidress_paper_access")) {
      navigate(route);
      return;
    }
    setGateTarget(route);
    setGateError("");
  }

  async function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGateLoading(true);
    setGateError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/teamaidress@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: gateName,
          email: gateEmail,
          building: gateBuilding || "—",
          paper: gateTarget,
          _subject: "New research access request — Aidress",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      sessionStorage.setItem("aidress_paper_access", "1");
      navigate(gateTarget!);
      setGateTarget(null);
    } catch {
      setGateError("Something went wrong. Try again.");
    } finally {
      setGateLoading(false);
    }
  }

  const isDark = theme === "dark";

  return (
    <>
      {/* ── Request-access modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {gateTarget && (
          <motion.div
            key="gate-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setGateTarget(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl p-8"
              style={{
                backgroundColor: isDark ? "var(--bg-card)" : "#fff",
                border: "1px solid var(--border)",
              }}
            >
              {/* Lock icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "#f1f5f9", border: "1px solid var(--border)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-muted)" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>

              <h3 className="text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                Request access
              </h3>
              <p className="mt-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                Leave your details and we'll send the paper straight to your inbox.
              </p>

              <form onSubmit={handleGateSubmit} className="mt-6 flex flex-col gap-3">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
                <input
                  required
                  type="email"
                  placeholder="Work email"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
                <input
                  type="text"
                  placeholder="What are you building? (optional)"
                  value={gateBuilding}
                  onChange={(e) => setGateBuilding(e.target.value)}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />

                {gateError && (
                  <p className="text-xs" style={{ color: "#ef4444" }}>{gateError}</p>
                )}

                <button
                  type="submit"
                  disabled={gateLoading}
                  className="mt-1 w-full rounded-lg py-2.5 text-sm font-medium transition-opacity disabled:opacity-60"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "var(--accent)",
                    color: isDark ? "var(--text)" : "#fff",
                    border: isDark ? "1px solid var(--border)" : "none",
                  }}
                >
                  {gateLoading ? "Sending…" : "Get access →"}
                </button>

                <button
                  type="button"
                  onClick={() => setGateTarget(null)}
                  className="text-xs transition hover:underline"
                  style={{ color: "var(--text-faint)" }}
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="logs" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-faint)", letterSpacing: "0.12em" }}>
            The problem is real &mdash; 23 test runs across 8 platforms, 0 fully autonomous completions
          </p>
        </FadeIn>
        <h2 className="mt-3 text-3xl tracking-tight md:text-5xl" style={{ color: "var(--text)" }}>
          Mission Logs
        </h2>

        {/* Featured white paper — large */}
        <FadeIn className="mt-10">
          <button
            type="button"
            onClick={() => openGate(featured.route)}
            className="group w-full text-left"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[2/1] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(6px)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Request access
              </span>
            </div>
            <h3
              className="mt-4 text-base leading-snug group-hover:underline"
              style={{ color: "var(--text)" }}
            >
              {featured.title}
            </h3>
            <span className="mt-1.5 text-xs" style={{ color: "var(--text-faint)" }}>
              {featured.meta}
            </span>
          </button>
        </FadeIn>

        {/* Rest — 3 column */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {rest.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => openGate(post.route)}
                className="group flex w-full flex-col text-left"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(6px)" }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Request access
                  </span>
                </div>
                <h3
                  className="mt-4 text-sm leading-snug group-hover:underline"
                  style={{ color: "var(--text)" }}
                >
                  {post.title}
                </h3>
                <span className="mt-1.5 text-xs" style={{ color: "var(--text-faint)" }}>
                  {post.meta}
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

// ─── Section 4: Engine (5 Layers) ───────────────────────────────────────────────

function EngineSection() {
  const [active, setActive] = useState(0);
  const layer = engineLayersMeta[active];
  const PanelComponent = enginePanels[active];

  return (
    <section id="engine" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <FadeIn>
        <h2 className="text-3xl tracking-tight md:text-5xl" style={{ color: "var(--text)" }}>
          The Engine
        </h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
          Everything an agent needs to transact with an unknown counterpart &mdash; without a human in the loop.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]">
        {/* Layer selector — minimal, no backgrounds */}
        <div className="flex flex-row gap-0 overflow-x-auto md:flex-col">
          {engineLayersMeta.map((l, i) => (
            <button
              key={l.name}
              type="button"
              onClick={() => setActive(i)}
              className="relative whitespace-nowrap px-4 py-2.5 text-left text-[13px] tracking-wide transition-colors duration-150"
              style={{
                borderLeft: i === active ? "1.5px solid var(--text)" : "1.5px solid transparent",
                color: i === active ? "var(--text)" : "var(--text-faint)",
                fontWeight: i === active ? 500 : 400,
              }}
            >
              {l.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="mb-2 flex items-center gap-3">
              <h3 className="text-lg font-medium" style={{ color: "var(--text)" }}>{layer.name}</h3>
              <span
                className="text-[10px] uppercase tracking-wider"
                style={{
                  color: layer.status === "live" ? "#22c55e" : "var(--text-faint)",
                }}
              >
                {layer.status === "live" ? "Live" : "Coming soon"}
              </span>
            </div>
            <p className="mb-6 text-sm" style={{ color: "var(--text-faint)" }}>{layer.description}</p>
            <PanelComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Section 5: Launch Control ──────────────────────────────────────────────────

type CodeTab = "python" | "curl" | "mcp" | "systemprompt";

function LaunchControlSection() {
  const [tab, setTab] = useState<CodeTab>("python");
  const snippet = codeSnippets[tab];

  return (
    <section id="integrate" className="mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-16">
      <FadeIn>
        <AsciiHeading />
        <p className="mt-3 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
          One API call. Verified identity. Informed decision.
        </p>
      </FadeIn>

      {/* Two cards */}
      <FadeIn delay={0.1} className="mt-7">
        <div className="grid gap-3 md:grid-cols-2">
          {/* Quick Start card */}
          <div
            className="rounded-[10px] p-4 md:p-5"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
          >
            <div
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Quick Start
            </div>
            <ol className="mt-3 space-y-2 text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>1.</span>
                Install the SDK or copy the curl command
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>2.</span>
                <span>Call <code className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>/match</code> to discover trusted agents by capability</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>3.</span>
                <span>Check <code className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>trust_score</code> &mdash; proceed at 70+, caution at 50&ndash;69, abort below 50</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>4.</span>
                <span>Call <code className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>/review</code> after every transaction to build the registry</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>5.</span>
                <span>Add your own agent via <code className="font-mono text-[11px]" style={{ color: "var(--accent)" }}>/register</code></span>
              </li>
            </ol>
          </div>

          {/* The One Call card */}
          <div
            className="rounded-[10px] p-4 md:p-5"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
          >
            <div
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              The One Call
            </div>
            <div className="mt-3">
              <div className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent)" }}>POST</span> https://api.aidress.ai/match
              </div>
              <pre
                className="mt-1.5 overflow-x-auto rounded-md px-2.5 py-2 font-mono text-[11px] leading-relaxed"
                style={{ backgroundColor: "var(--code-bg)", color: "var(--text)" }}
              >
{`{"required_capabilities": ["what you need"]}`}
              </pre>
              <div className="mt-2.5 space-y-0.5 font-mono text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <div><span style={{ color: "var(--text-faint)" }}>&rarr;</span> trust_score &nbsp;&nbsp;<span style={{ color: "var(--text-faint)" }}>0&ndash;100</span></div>
                <div><span style={{ color: "var(--text-faint)" }}>&rarr;</span> verified &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "var(--text-faint)" }}>true | false</span></div>
                <div><span style={{ color: "var(--text-faint)" }}>&rarr;</span> flags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "var(--text-faint)" }}>[]</span></div>
                <div><span style={{ color: "var(--text-faint)" }}>&rarr;</span> routing &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "var(--text-faint)" }}>{"{ protocol, settlement_rail }"}</span></div>
                <div><span style={{ color: "var(--text-faint)" }}>&rarr;</span> capabilities <span style={{ color: "var(--text-faint)" }}>[]</span></div>
              </div>
              <p className="mt-2 text-[10px]" style={{ color: "var(--text-faint)" }}>Returns in &lt;50ms.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Code tabs */}
      <FadeIn delay={0.15} className="mt-4">
        <div
          className="overflow-hidden rounded-[14px]"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
        >
          <div className="flex overflow-x-auto text-sm" style={{ borderBottom: "1px solid var(--border)", WebkitOverflowScrolling: "touch" }}>
            {([
              { key: "python" as CodeTab, label: "Python" },
              { key: "curl" as CodeTab, label: "cURL" },
              { key: "mcp" as CodeTab, label: "MCP" },
              { key: "systemprompt" as CodeTab, label: "System Prompt" },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className="relative shrink-0 px-4 py-3 text-[13px] transition sm:px-5 sm:text-sm"
                style={{
                  color: tab === key ? "var(--text)" : "var(--text-faint)",
                  borderBottom: tab === key ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="p-5 md:p-6">
            <CodeBlock code={snippet.code} lang={snippet.lang} />
            {tab === "mcp" && (
              <p className="mt-3 text-xs" style={{ color: "var(--text-faint)" }}>
                Add to Claude Desktop or Claude Code config. Restart and ask Claude to verify any agent.
              </p>
            )}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="/docs/register" className="inline-flex items-center gap-2 text-sm transition" style={{ color: "var(--accent)" }}>
            Read the full API reference
            <ArrowRight size={14} />
          </a>
          <a
            href="https://api.aidress.ai/.well-known/agent.json"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] transition hover:opacity-70"
            style={{ color: "var(--text-faint)" }}
          >
            For Agents &middot; GET /.well-known/agent.json
            <ArrowRight size={11} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── System Status Strip ────────────────────────────────────────────────────────

function StatusDashes({ density = 8, className = "" }: { density?: number; className?: string }) {
  return (
    <span
      className={`shrink-0 ${className}`}
      style={{
        height: "10px",
        background: `repeating-linear-gradient(
          to right,
          var(--text-faint) 0px,
          var(--text-faint) 1px,
          transparent 1px,
          transparent ${density}px
        )`,
        opacity: 0.4,
      }}
      aria-hidden="true"
    />
  );
}

function SystemStatusStrip() {
  return (
    <div
      className="relative flex items-center overflow-hidden px-5 py-3 font-mono md:px-10"
      style={{ color: "var(--text-faint)" }}
    >
      {/* Block icon */}
      <span
        className="mr-2 h-2.5 w-2 shrink-0"
        style={{ backgroundColor: "var(--text-faint)" }}
        aria-hidden="true"
      />

      {/* System name */}
      <span className="mr-4 shrink-0 text-[11px] -tracking-[0.05em]">
        SYSTEM: AIDRESS PROTOCOL
      </span>

      {/* Dense dashes */}
      <StatusDashes density={4} className="basis-8" />

      {/* Medium dashes — fills space */}
      <StatusDashes density={8} className="min-w-4 flex-1" />

      {/* Sparse dashes */}
      <StatusDashes density={18} className="hidden basis-44 lg:block" />

      {/* Status */}
      <span className="mx-1.5 shrink-0 text-[11px] -tracking-[0.05em]">
        [ STATUS: ONLINE ]
      </span>

      {/* Sparse dashes */}
      <StatusDashes density={18} className="hidden basis-24 md:block" />

      {/* Medium dashes */}
      <StatusDashes density={8} className="hidden basis-44 lg:block" />

      {/* Dense dashes */}
      <StatusDashes density={4} className="hidden basis-10 lg:block" />

      {/* Connection */}
      <span className="ml-1.5 hidden shrink-0 text-[11px] -tracking-[0.05em] md:inline">
        [ CONNECTION: STABLE ]
      </span>
    </div>
  );
}

// ─── Let's Talk CTA ─────────────────────────────────────────────────────────────

function LetsTalkSection() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left: heading + subtitle */}
          <div className="max-w-lg">
            <FadeIn>
              <h2
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "var(--accent)" }}
              >
                Let&apos;s Talk
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base" style={{ color: "var(--text-muted)" }}>
                Whether you&apos;re building agents, infrastructure, or systems &mdash; plug into the layer that connects it all.
              </p>
            </FadeIn>
          </div>

          {/* Right: buttons */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:teamaidress@gmail.com"
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium no-underline transition-all"
                style={{
                  backgroundColor: theme === "dark" ? "rgba(255,255,255,0.06)" : "var(--accent)",
                  color: theme === "dark" ? "var(--text)" : "#fff",
                  border: theme === "dark" ? "1px solid var(--border)" : "1px solid var(--accent)",
                }}
              >
                <span>Start a conversation</span>
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="mailto:teamaidress@gmail.com"
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium no-underline transition-all"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                <span>Become a partner</span>
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Crew ────────────────────────────────────────────────────────────

const crewMembers = [
  {
    name: "Mehul Vig",
    role: "Co-Founder",
    photo: "/mehul.jpg",
    linkedin: "https://www.linkedin.com/in/mehul-vig-462345282/",
    description: "Experience in GTM & product through a stablecoin cross-border payments startup across Southeast Asia. Co-founding Aidress.",
  },
  {
    name: "Kabir Sadani",
    role: "Co-Founder",
    photo: "/kabir.jpg",
    linkedin: "https://www.linkedin.com/in/kabir-sadani-a5a057378/",
    description: "Experience in product design and data-driven systems at Sportz Interactive. Co-founding Aidress.",
  },
  {
    name: "Prashanth Ranganathan",
    role: "Advisor",
    photo: "/prashanth.jpg",
    linkedin: "https://www.linkedin.com/in/prashanthr/",
    description: "Serial founder behind multiple acquisitions by Google, PayPal, and PayU.",
  },
  {
    name: "Milind Sanghavi",
    role: "Advisor",
    photo: "/milind.jpg",
    linkedin: "https://www.linkedin.com/in/milindsanghavi/",
    description: "Founder at Xweave, building the future of global cross border payments rails.",
  },
];

function CrewSection() {
  return (
    <section id="crew" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <FadeIn>
        <h2 className="text-3xl tracking-tight md:text-5xl" style={{ color: "var(--text)" }}>
          The Crew
        </h2>
      </FadeIn>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-8">
        {crewMembers.map((m, i) => (
          <FadeIn key={m.name} delay={i * 0.06}>
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
              <div
                className="mb-3 aspect-square w-full max-w-[120px] overflow-hidden rounded-[10px] sm:max-w-[140px]"
                style={{ border: "1px solid var(--border)" }}
              >
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{m.name}</div>
              <div className="text-xs" style={{ color: "var(--text-faint)" }}>{m.role}</div>
              <div className="mt-0.5 text-xs transition group-hover:underline" style={{ color: "var(--accent)" }}>LinkedIn &#x2197;</div>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--text-faint)" }}>{m.description}</p>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        {/* Left: logo + year */}
        <div className="flex items-center gap-3">
          <AidressLogo logoHeight={20} className="opacity-70" />
          <span className="text-xs" style={{ color: "var(--text-faint)" }}>
            &middot;&nbsp; &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Right: links */}
        <nav className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-faint)" }}>
          <a href="#engine" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>Engine</a>
          <a href="#logs" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>Logs</a>
          <a href="#" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>API</a>
          <span style={{ color: "var(--text-xfaint)" }}>&middot;</span>
          <a href="https://x.com/aidabornnative" target="_blank" rel="noopener noreferrer" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>X</a>
          <a href="https://www.instagram.com/aidress.ai" target="_blank" rel="noopener noreferrer" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>Instagram</a>
          <a href="https://www.linkedin.com/company/aidress" target="_blank" rel="noopener noreferrer" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>LinkedIn</a>
          <a href="mailto:teamaidress@gmail.com" className="transition hover:underline" style={{ color: "var(--text-muted)" }}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

// ─── Home page ──────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Helmet>
        <title>Aidress — The Coordination Layer for the Agentic Economy</title>
        <meta name="description" content="A2A transaction infrastructure across discovery, identity, trust, terms, and routing. The missing coordination layer for autonomous AI agents." />
        <link rel="canonical" href="https://aidress.ai" />
      </Helmet>
      <Nav />
      <main>
        <HeroSection />
        <ProblemSection />
        <StatsSection />
        <EngineSection />
        <LaunchControlSection />
        <SystemStatusStrip />
        <MissionLogsSection />
        <CrewSection />
        <LetsTalkSection />
      </main>
      <Footer />
    </div>
  );
}

// ─── Paper route wrapper ────────────────────────────────────────────────────────

function PaperRoute({ Component }: { Component: React.ComponentType<{ onBack: () => void }> }) {
  const navigate = useNavigate();
  return <Component onBack={() => navigate("/")} />;
}

// ─── App ────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/docs/:slug" element={<DocsPage />} />
            <Route path="/whitepaper" element={<PaperRoute Component={WhitePaperPage} />} />
            <Route path="/validation" element={<PaperRoute Component={ValidationReportPage} />} />
            <Route path="/protocol" element={<PaperRoute Component={ProtocolArticlePage} />} />
            <Route path="/systems" element={<PaperRoute Component={SystemsArticlePage} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
