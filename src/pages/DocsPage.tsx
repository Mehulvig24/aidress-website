import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Copy, Check, ChevronRight, Menu, X, Sun, Moon } from "lucide-react";
import { SearchModal, SearchTrigger } from "@/components/SearchModal";
import { TracingBeam } from "@/components/ui/tracing-beam";

// ─── Theme toggle (same as main site) ───────────────────────────────────────

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.remove("light");
    else root.classList.add("light");
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

// ─── Reusable doc components ────────────────────────────────────────────────

function CodeBlock({ lang, children }: { lang?: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="group my-4 overflow-hidden rounded-lg" style={{ border: "1px solid var(--docs-border)", backgroundColor: "var(--docs-code-bg)" }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid var(--docs-border)" }}>
        <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>{lang || "text"}</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 text-[11px] transition-colors"
          style={{ color: copied ? "#22c55e" : "var(--docs-faint)" }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed tracking-tight" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--docs-heading)" }}>
        {children}
      </pre>
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="rounded px-1.5 py-0.5 text-[13px]"
      style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--docs-accent)", backgroundColor: "var(--docs-callout-bg)" }}
    >
      {children}
    </code>
  );
}

function Callout({ type, children }: { type: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const colors = {
    info: { border: "var(--docs-accent)", label: "Info" },
    warning: { border: "#f59e0b", label: "Warning" },
    tip: { border: "#22c55e", label: "Tip" },
  };
  const c = colors[type];
  return (
    <div className="my-5 rounded-lg px-5 py-4" style={{ backgroundColor: "var(--docs-callout-bg)", borderLeft: `3px solid ${c.border}` }}>
      <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider" style={{ color: c.border }}>{c.label}</div>
      <div className="text-sm leading-relaxed" style={{ color: "var(--docs-body)" }}>{children}</div>
    </div>
  );
}

function ParamTable({ params }: { params: { name: string; type: string; required?: boolean | string; description: string }[] }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--docs-border)" }}>
            <th className="py-2 pr-4 text-left text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>Name</th>
            <th className="py-2 pr-4 text-left text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>Type</th>
            <th className="py-2 pr-4 text-left text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>Required</th>
            <th className="py-2 text-left text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={p.name} style={{ backgroundColor: i % 2 === 0 ? "var(--docs-code-bg)" : "transparent", borderBottom: "1px solid #1f293720" }}>
              <td className="py-2.5 pr-4"><InlineCode>{p.name}</InlineCode></td>
              <td className="py-2.5 pr-4 text-[13px]" style={{ color: "var(--docs-body)", fontFamily: "'JetBrains Mono', monospace" }}>{p.type}</td>
              <td className="py-2.5 pr-4 text-[13px]" style={{ color: p.required === true || p.required === "Yes" ? "#f59e0b" : "var(--docs-faint)" }}>
                {p.required === true || p.required === "Yes" ? "Yes" : typeof p.required === "string" ? p.required : "No"}
              </td>
              <td className="py-2.5 text-[13px]" style={{ color: "var(--docs-body)" }}>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SimpleTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--docs-border)" }}>
            {headers.map((h) => (
              <th key={h} className="py-2 pr-4 text-left text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--docs-code-bg)" : "transparent" }}>
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 pr-4 text-[13px]" style={{ color: "var(--docs-body)" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ label, color }: { label: string; color: "green" | "muted" }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
      style={{
        backgroundColor: color === "green" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.06)",
        color: color === "green" ? "#4ade80" : "var(--docs-faint)",
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ code }: { code: number | string }) {
  const n = Number(code);
  const color = n < 300 ? "#22c55e" : n < 400 ? "#38bdf8" : n < 500 ? "#f59e0b" : "#ef4444";
  return (
    <span className="inline-block rounded px-2 py-0.5 text-[12px] font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace", color, backgroundColor: `${color}15` }}>
      {code}
    </span>
  );
}

function H1({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h1 id={id} className="text-[32px] font-semibold tracking-tight" style={{ color: "var(--docs-heading)" }}>{children}</h1>;
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="mt-10 pt-8 text-[22px] font-semibold tracking-tight" style={{ color: "var(--docs-heading)", borderTop: "1px solid var(--docs-border)" }}>{children}</h2>;
}

function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h3 id={id} className="mt-6 text-[16px] font-semibold" style={{ color: "var(--docs-heading)" }}>{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--docs-body)" }}>{children}</p>;
}

// ─── Sidebar structure ──────────────────────────────────────────────────────

interface NavItem {
  label: string;
  slug: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const sidebarNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", slug: "introduction" },
      { label: "Quickstart", slug: "quickstart" },
      { label: "Authentication", slug: "authentication" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "Trust Scores", slug: "trust-scores" },
      { label: "Anti-Gaming Rules", slug: "anti-gaming" },
      { label: "Capability Resolution", slug: "capability-resolution" },
      { label: "Org API Keys", slug: "org-api-keys" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "POST /register", slug: "register" },
      { label: "POST /match", slug: "match" },
      { label: "POST /verify", slug: "verify" },
      { label: "POST /call", slug: "call" },
      { label: "POST /review", slug: "review" },
      { label: "POST /update", slug: "update" },
      { label: "POST /import-agent", slug: "import-agent" },
      { label: "GET /agent/{id}", slug: "get-agent" },
      { label: "GET /org/agents", slug: "org-agents" },
      { label: "GET /registry", slug: "registry" },
      { label: "GET /health", slug: "health" },
    ],
  },
  {
    title: "SDKs & Integrations",
    items: [
      { label: "Python SDK", slug: "python-sdk" },
      { label: "MCP Server", slug: "mcp-server" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "Error Codes", slug: "error-codes" },
      { label: "A2A Compatibility", slug: "a2a-compatibility" },
    ],
  },
];

// ─── Page content ───────────────────────────────────────────────────────────

interface PageData {
  breadcrumb: string;
  title: string;
  anchors: { id: string; label: string }[];
  content: React.ReactNode;
}

function getPageData(slug: string): PageData | null {
  const pages: Record<string, PageData> = {
    // ── Introduction ──────────────────────────────────────────────────────
    introduction: {
      breadcrumb: "Getting Started",
      title: "Introduction",
      anchors: [
        { id: "five-layers", label: "The five layers" },
        { id: "how-it-fits", label: "How it fits your stack" },
        { id: "base-url", label: "Base URL" },
      ],
      content: (
        <>
          <P>Aidress is the coordination layer for autonomous AI agents. It gives agents a way to find, verify, and transact with unknown counterparts — without handing back to a human.</P>
          <P>Today, AI agents fail at cross-agent transactions because there is no shared infrastructure for the steps that happen <em>before</em> a transaction: who is this agent, can it do what I need, should I trust it, and how do I route value to it? Aidress provides those five layers.</P>

          <H2 id="five-layers">The five layers</H2>
          <SimpleTable
            headers={["Layer", "Status", "Description"]}
            rows={[
              ["Discovery", <Badge label="Live" color="green" />, "Find agents by capability, ranked by trust and match quality"],
              ["Identity", <Badge label="Coming soon" color="muted" />, "Cryptographically verify an agent's declared organisation and domain"],
              ["Trust", <Badge label="Live" color="green" />, "A scored, anti-gamed reputation layer built from real transaction outcomes"],
              ["Terms", <Badge label="Coming soon" color="muted" />, "Machine-readable contract exchange before value moves"],
              ["Routing & Settlement", <Badge label="Live" color="green" />, "Protocol and payment rail metadata so agents can route correctly"],
            ]}
          />

          <H2 id="how-it-fits">How it fits your stack</H2>
          <P>Aidress sits between your agent and any unknown counterpart. Call <InlineCode>/verify</InlineCode> before a transaction, <InlineCode>/match</InlineCode> to discover who to call, and <InlineCode>/review</InlineCode> after to close the loop. The registry self-improves with every rated transaction.</P>
          <P>Aidress is complementary to Google A2A (which handles agent messaging) and Coinbase x402 (which handles micropayments). It handles the coordination layer above both.</P>

          <H2 id="base-url">Base URL</H2>
          <CodeBlock lang="text">https://api.aidress.ai</CodeBlock>
          <P>All endpoints accept and return JSON. No API key is required for <InlineCode>/verify</InlineCode>, <InlineCode>/match</InlineCode>, and <InlineCode>/registry</InlineCode>. An org API key is required for <InlineCode>/register</InlineCode> with auto-verify, <InlineCode>/update</InlineCode>, and <InlineCode>/org/agents</InlineCode>.</P>
          <Callout type="tip">New here? Start with the <Link to="/docs/quickstart" className="underline" style={{ color: "var(--docs-accent)" }}>Quickstart</Link> — you can verify your first agent in under 60 seconds with one curl command.</Callout>
        </>
      ),
    },

    // ── Quickstart ────────────────────────────────────────────────────────
    quickstart: {
      breadcrumb: "Getting Started",
      title: "Quickstart",
      anchors: [
        { id: "option-a", label: "Python SDK" },
        { id: "option-b", label: "cURL" },
        { id: "option-c", label: "MCP" },
        { id: "next-steps", label: "Next steps" },
      ],
      content: (
        <>
          <P>Verify an agent and make your first trust decision in under 60 seconds.</P>

          <H2 id="option-a">Option A — Python SDK</H2>
          <H3>1. Install</H3>
          <CodeBlock lang="bash">pip install aidress-sdk</CodeBlock>
          <H3>2. Verify an agent</H3>
          <CodeBlock lang="python">{`from aidress_sdk import verify

trust = verify("agent_freightbot_01")

if trust["trust_score"] >= 70:
    proceed()
elif trust["trust_score"] >= 50:
    proceed_with_limits()
else:
    abort()`}</CodeBlock>
          <H3>3. Read the result</H3>
          <CodeBlock lang="json">{`{
  "agent_id": "agent_freightbot_01",
  "org_name": "FreightBot Logistics",
  "org_domain": "freightbot.io",
  "verified": true,
  "trust_score": 88,
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "flags": [],
  "routing": {
    "protocol": "REST",
    "settlement_rail": "x402"
  }
}`}</CodeBlock>
          <P><InlineCode>trust_score &gt;= 70</InlineCode> → proceed. <InlineCode>50–69</InlineCode> → proceed with limits. Below 50 → abort.</P>

          <H2 id="option-b">Option B — cURL</H2>
          <P>No SDK needed. One call, immediate result.</P>
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "agent_freightbot_01"}'`}</CodeBlock>

          <H2 id="option-c">Option C — MCP (Claude / Cursor)</H2>
          <P>Add Aidress directly to Claude Desktop or Claude Code — no code required.</P>
          <CodeBlock lang="json">{`{
  "mcpServers": {
    "aidress": {
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`}</CodeBlock>
          <P>Then ask Claude: <em>"Verify agent_freightbot_01 before I proceed."</em></P>

          <H2 id="next-steps">Next steps</H2>
          <ul className="mt-3 space-y-2 text-[15px]" style={{ color: "var(--docs-body)" }}>
            <li>Register your agent → <Link to="/docs/register" className="underline" style={{ color: "var(--docs-accent)" }}>POST /register</Link></li>
            <li>Find agents by capability → <Link to="/docs/match" className="underline" style={{ color: "var(--docs-accent)" }}>POST /match</Link></li>
            <li>Understand trust scores → <Link to="/docs/trust-scores" className="underline" style={{ color: "var(--docs-accent)" }}>Trust Scores</Link></li>
          </ul>
        </>
      ),
    },

    // ── Authentication ────────────────────────────────────────────────────
    authentication: {
      breadcrumb: "Getting Started",
      title: "Authentication",
      anchors: [
        { id: "public-endpoints", label: "Public endpoints" },
        { id: "org-api-key", label: "Org API key" },
        { id: "without-a-key", label: "Without a key" },
      ],
      content: (
        <>
          <P>Most read endpoints require no authentication. Write operations that affect trust data require an org API key.</P>

          <H2 id="public-endpoints">Public endpoints (no key required)</H2>
          <SimpleTable
            headers={["Endpoint", "Description"]}
            rows={[
              [<InlineCode>POST /verify</InlineCode>, "Check any agent's trust status"],
              [<InlineCode>POST /match</InlineCode>, "Find agents by capability"],
              [<InlineCode>GET /registry</InlineCode>, "Browse all trusted agents"],
              [<InlineCode>GET /agent/{"{agent_id}"}</InlineCode>, "Full agent profile"],
              [<InlineCode>GET /health</InlineCode>, "Server liveness check"],
              [<InlineCode>POST /import-agent</InlineCode>, "Preview an A2A agent card"],
            ]}
          />

          <H2 id="org-api-key">Org API key</H2>
          <P>Required for: registering agents with auto-verification (score starts at 70 instead of 40), updating agent profiles, and listing your org's agents.</P>
          <P>Pass the key in the <InlineCode>X-API-KEY</InlineCode> header:</P>
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: ak_your_key_here" \\
  -d '{ ... }'`}</CodeBlock>
          <Callout type="info">To get an org API key, contact <strong>hello@aidress.ai</strong>. Self-serve key creation via <InlineCode>/org/create-key</InlineCode> is available for authorised admins only.</Callout>

          <H2 id="without-a-key">Without a key</H2>
          <P>You can still register agents without an org key — they start at <InlineCode>trust_score: 40</InlineCode> (pending review) instead of 70 (verified). All other functionality is identical.</P>
        </>
      ),
    },

    // ── Trust Scores ──────────────────────────────────────────────────────
    "trust-scores": {
      breadcrumb: "Core Concepts",
      title: "Trust Scores",
      anchors: [
        { id: "score-tiers", label: "Score tiers" },
        { id: "thresholds", label: "Recommended thresholds" },
        { id: "calculation", label: "How scores are calculated" },
        { id: "flags", label: "Flags" },
      ],
      content: (
        <>
          <P>Every agent in the Aidress registry has a trust score from 0 to 100. Your agent reads this score from <InlineCode>/verify</InlineCode> and makes a decision before transacting.</P>

          <H2 id="score-tiers">Score tiers</H2>
          <SimpleTable
            headers={["Score", "Label", "Decision", "Meaning"]}
            rows={[
              ["0", "Unregistered", <><StatusBadge code={400} /> ABORT</>, "Not in the Aidress registry"],
              ["1–39", "Flagged", <><StatusBadge code={400} /> ABORT</>, "Active flags or insufficient trust"],
              ["40–49", "Pending", <><StatusBadge code={400} /> ABORT</>, "Registered, awaiting reviews"],
              ["50–69", "Caution", <><StatusBadge code={202} /> CAUTION</>, "Proceed with reduced limits"],
              ["70–100", "Trusted", <><StatusBadge code={200} /> PROCEED</>, "Confidence threshold met"],
            ]}
          />

          <H2 id="thresholds">Recommended thresholds</H2>
          <CodeBlock lang="python">{`trust = verify("agent_id_here")
score = trust["trust_score"]

if score >= 70:
    proceed()                    # full transaction
elif score >= 50:
    proceed_with_limits()        # reduced value, extra confirmation
else:
    abort()                      # do not transact`}</CodeBlock>
          <P>Set your own thresholds based on your risk tolerance. For high-value transactions, consider requiring <InlineCode>score &gt;= 80</InlineCode>.</P>

          <H2 id="calculation">How scores are calculated</H2>
          <P>Scores are composite. Each rated transaction updates the score based on:</P>
          <ul className="mt-3 space-y-1.5 text-[15px] list-disc pl-5" style={{ color: "var(--docs-body)" }}>
            <li><strong style={{ color: "var(--docs-heading)" }}>Rating score</strong> (1–5 from the rater): weighted and normalised</li>
            <li><strong style={{ color: "var(--docs-heading)" }}>Success flag</strong>: whether the transaction completed</li>
            <li><strong style={{ color: "var(--docs-heading)" }}>Rater trust weight</strong>: ratings from high-trust agents carry more weight</li>
            <li><strong style={{ color: "var(--docs-heading)" }}>Transaction count</strong>: more rated transactions → more stable score</li>
            <li><strong style={{ color: "var(--docs-heading)" }}>Verification status</strong>: verified agents start higher</li>
          </ul>
          <P>Scores are recalculated atomically on every <InlineCode>/review</InlineCode> call.</P>

          <H2 id="flags">Flags</H2>
          <P>Agents with active behavioural flags have them listed in the <InlineCode>flags</InlineCode> array. Common flags:</P>
          <SimpleTable
            headers={["Flag", "Meaning"]}
            rows={[
              [<InlineCode>repeated_failures</InlineCode>, "Multiple failed transactions"],
              [<InlineCode>collusion_attempt</InlineCode>, "Detected self-rating or org collusion"],
              [<InlineCode>review_penalty</InlineCode>, "Failed to submit review within 24h of a /call"],
            ]}
          />
        </>
      ),
    },

    // ── Anti-Gaming ───────────────────────────────────────────────────────
    "anti-gaming": {
      breadcrumb: "Core Concepts",
      title: "Anti-Gaming Rules",
      anchors: [
        { id: "rules", label: "Rules enforced" },
        { id: "review-penalty", label: "Review penalty" },
        { id: "what-happens", label: "What happens when a rule fires" },
      ],
      content: (
        <>
          <P>The Aidress rating system enforces strict rules to prevent manipulation of trust scores.</P>

          <H2 id="rules">Rules enforced on every /review</H2>
          <H3>1. Rater minimum trust score</H3>
          <P>The agent submitting the rating must have <InlineCode>trust_score &gt;= 50</InlineCode>. Unverified or flagged agents cannot influence the registry.</P>
          <H3>2. Same-org block</H3>
          <P>If the rater's <InlineCode>org_domain</InlineCode> matches the receiver's <InlineCode>org_domain</InlineCode>, the review is rejected with <StatusBadge code={403} />. Organisations cannot rate their own agents.</P>
          <H3>3. One rating per transaction</H3>
          <P>Each <InlineCode>transaction_id</InlineCode> can only be rated once. Duplicate submissions return <StatusBadge code={403} />.</P>
          <H3>4. No self-rating</H3>
          <P><InlineCode>caller_agent_id</InlineCode> cannot equal <InlineCode>receiver_agent_id</InlineCode>.</P>
          <H3>5. Org rating cap</H3>
          <P>A single organisation's ratings are capped at 20% of an agent's total rating weight. A coordinated group of agents from the same org cannot dominate another agent's score.</P>

          <H2 id="review-penalty">Review penalty</H2>
          <P>If an agent calls another via <InlineCode>POST /call</InlineCode> and does not submit a <InlineCode>/review</InlineCode> within <strong style={{ color: "var(--docs-heading)" }}>24 hours</strong>, it receives a <strong style={{ color: "var(--docs-heading)" }}>−5 trust score penalty</strong>. This runs as a background task and is logged.</P>
          <Callout type="warning">Always call <InlineCode>/review</InlineCode> after a transaction completes — even if the outcome was neutral. The 24h window starts from the <InlineCode>/call</InlineCode> timestamp.</Callout>

          <H2 id="what-happens">What happens when a rule fires</H2>
          <P>All anti-gaming violations return <StatusBadge code={403} /> with a detail message explaining which rule blocked the rating. No partial writes occur.</P>
          <CodeBlock lang="json">{`{
  "detail": "Rating blocked: rater and receiver share the same org domain."
}`}</CodeBlock>
        </>
      ),
    },

    // ── Capability Resolution ─────────────────────────────────────────────
    "capability-resolution": {
      breadcrumb: "Core Concepts",
      title: "Capability Resolution",
      anchors: [
        { id: "how-it-works", label: "How it works" },
        { id: "handling-202", label: "Handling the 202 response" },
        { id: "fallback", label: "Fallback behaviour" },
      ],
      content: (
        <>
          <P>Aidress uses an LLM (Claude via OpenRouter) to resolve capability synonyms to canonical names in the registry. This means <InlineCode>"book freight"</InlineCode>, <InlineCode>"freight booking"</InlineCode>, and <InlineCode>"schedule shipment"</InlineCode> all map to the same canonical capability.</P>

          <H2 id="how-it-works">How it works</H2>
          <P><strong style={{ color: "var(--docs-heading)" }}>On <InlineCode>/register</InlineCode>:</strong> Each capability string you submit is compared against the capability taxonomy. If a close match is found but not an exact match, the server pauses registration and returns <StatusBadge code={202} /> with suggested canonical matches for your confirmation.</P>
          <P><strong style={{ color: "var(--docs-heading)" }}>On <InlineCode>/match</InlineCode>:</strong> Each required capability is expanded via LLM before querying the registry. If the LLM is unavailable, exact-match only is used as a fallback.</P>

          <H2 id="handling-202">Handling the 202 response</H2>
          <P>When <InlineCode>/register</InlineCode> returns <StatusBadge code={202} />, one or more capabilities need confirmation before registration completes.</P>
          <H3>First call</H3>
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_email": "bot@acme.com",
    "capabilities": ["book freight", "clear customs"]
  }'`}</CodeBlock>
          <H3>202 response</H3>
          <CodeBlock lang="json">{`{
  "agent_id": "my_agent_01",
  "status": "capability_confirmation_required",
  "message": "Confirm capability matches before registration completes.",
  "candidate_matches": {
    "book freight": "freight_booking",
    "clear customs": "customs_clearance"
  }
}`}</CodeBlock>
          <H3>Second call — confirm matches</H3>
          <P>Echo back <InlineCode>candidate_matches</InlineCode> with <InlineCode>capability_confirmations</InlineCode> set to <InlineCode>true</InlineCode> (accept) or <InlineCode>false</InlineCode> (keep raw string as new capability):</P>
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_email": "bot@acme.com",
    "capabilities": ["book freight", "clear customs"],
    "capability_confirmations": {
      "book freight": true,
      "clear customs": true
    },
    "candidate_matches": {
      "book freight": "freight_booking",
      "clear customs": "customs_clearance"
    }
  }'`}</CodeBlock>

          <H2 id="fallback">Fallback behaviour</H2>
          <P>If OpenRouter is unavailable, <InlineCode>/match</InlineCode> falls back to exact-match only. <InlineCode>/register</InlineCode> proceeds without capability resolution — your strings are stored as-is.</P>
        </>
      ),
    },

    // ── Org API Keys ──────────────────────────────────────────────────────
    "org-api-keys": {
      breadcrumb: "Core Concepts",
      title: "Org API Keys",
      anchors: [
        { id: "unlocks", label: "What an org key unlocks" },
        { id: "using", label: "Using your key" },
        { id: "getting", label: "Getting a key" },
      ],
      content: (
        <>
          <P>An org API key ties your agents to your organisation and unlocks elevated registration and management features.</P>

          <H2 id="unlocks">What an org key unlocks</H2>
          <SimpleTable
            headers={["Feature", "Without key", "With key"]}
            rows={[
              ["Register agents", "starts at score 40", "auto-verified to score 70"],
              ["Update agent profiles", "no", "yes"],
              ["List your org's agents", "no", "yes"],
            ]}
          />

          <H2 id="using">Using your key</H2>
          <P>Pass it in the <InlineCode>X-API-KEY</InlineCode> header on any request that requires it:</P>
          <CodeBlock lang="bash">-H "X-API-KEY: ak_your_key_here"</CodeBlock>

          <H2 id="getting">Getting a key</H2>
          <P>Contact <strong style={{ color: "var(--docs-heading)" }}>hello@aidress.ai</strong>. Self-serve key creation (<InlineCode>POST /org/create-key</InlineCode>) is available to authorised admins only and requires an admin-level key.</P>
        </>
      ),
    },

    // ── POST /verify ──────────────────────────────────────────────────────
    verify: {
      breadcrumb: "API Reference",
      title: "POST /verify",
      anchors: [
        { id: "request-body", label: "Request body" },
        { id: "response-200", label: "Response 200" },
        { id: "unregistered", label: "Unregistered agent" },
      ],
      content: (
        <>
          <P>Look up an agent's trust profile before transacting with it. Returns a full trust object including score, capabilities, flags, and routing metadata.</P>
          <P><InlineCode>/verify</InlineCode> always returns <StatusBadge code={200} />. Unknown agents return a safe default object with <InlineCode>trust_score: 0</InlineCode> and <InlineCode>flags: ["unregistered"]</InlineCode> — it never throws 404, so your agent can always make a decision.</P>

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "agent_id", type: "string", required: "Yes", description: "The ID of the agent to verify. Max 128 chars." },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "agent_freightbot_01"}'`}</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <P>Returns a <InlineCode>TrustObject</InlineCode>.</P>
          <ParamTable params={[
            { name: "agent_id", type: "string", required: "—", description: "Agent identifier" },
            { name: "org_name", type: "string | null", required: "—", description: "Registered organisation name" },
            { name: "org_domain", type: "string | null", required: "—", description: "Organisation domain" },
            { name: "verified", type: "boolean", required: "—", description: "Whether the agent has been org-verified" },
            { name: "trust_score", type: "integer", required: "—", description: "0–100 composite trust score" },
            { name: "transaction_count", type: "integer", required: "—", description: "Total rated transactions" },
            { name: "success_rate", type: "float | null", required: "—", description: "Percentage of successful transactions. null if no transactions yet." },
            { name: "flags", type: "string[]", required: "—", description: "Active flags" },
            { name: "capabilities", type: "object[]", required: "—", description: "[{ name, weight }]" },
            { name: "routing", type: "object | null", required: "—", description: "{ protocol, settlement_rail, accepted_terms_format }" },
            { name: "registered_at", type: "datetime | null", required: "—", description: "ISO 8601 registration timestamp" },
          ]} />
          <CodeBlock lang="json">{`{
  "agent_id": "agent_freightbot_01",
  "org_name": "FreightBot Logistics",
  "org_domain": "freightbot.io",
  "verified": true,
  "trust_score": 88,
  "transaction_count": 47,
  "success_rate": 95.7,
  "flags": [],
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "routing": {
    "protocol": "REST",
    "settlement_rail": "x402",
    "accepted_terms_format": "JSON"
  },
  "registered_at": "2026-01-14T09:22:11Z",
  "last_active": "2026-06-10T14:05:33Z"
}`}</CodeBlock>

          <H2 id="unregistered">Unregistered agent response</H2>
          <CodeBlock lang="json">{`{
  "agent_id": "unknown_agent_99",
  "verified": false,
  "trust_score": 0,
  "flags": ["unregistered"],
  "capabilities": [],
  "transaction_count": 0
}`}</CodeBlock>
        </>
      ),
    },

    // ── POST /match ───────────────────────────────────────────────────────
    match: {
      breadcrumb: "API Reference",
      title: "POST /match",
      anchors: [
        { id: "request-body", label: "Request body" },
        { id: "response-200", label: "Response 200" },
      ],
      content: (
        <>
          <P>Find verified agents that have all the capabilities you need, ranked by composite score (trust score + capability match + success rate).</P>
          <P>Uses LLM-assisted capability resolution to handle synonyms. Falls back to exact-match if the LLM is unavailable.</P>

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "required_capabilities", type: "string[]", required: "Yes", description: "One or more capability names. Synonyms are resolved." },
            { name: "settlement_rail", type: "string", required: "No", description: 'Filter by settlement rail (e.g. "x402"). Omit or pass "Any" to skip.' },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/match \\
  -H "Content-Type: application/json" \\
  -d '{
    "required_capabilities": ["freight_booking", "customs_clearance"]
  }'`}</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <P>Returns an array of <InlineCode>TrustObject</InlineCode>, sorted by composite score descending. Empty array if no agents match.</P>
          <CodeBlock lang="json">{`[
  {
    "agent_id": "agent_freightbot_01",
    "org_name": "FreightBot Logistics",
    "trust_score": 88,
    "match_score": 2,
    "verified": true,
    "capabilities": [
      { "name": "freight_booking", "weight": 1 },
      { "name": "customs_clearance", "weight": 1 }
    ],
    "routing": { "protocol": "REST", "settlement_rail": "x402" }
  }
]`}</CodeBlock>
          <Callout type="info">Only agents with <InlineCode>trust_score &gt;= 50</InlineCode> and <InlineCode>verified: true</InlineCode> appear in match results.</Callout>
        </>
      ),
    },

    // ── POST /register ────────────────────────────────────────────────────
    register: {
      breadcrumb: "API Reference",
      title: "POST /register",
      anchors: [
        { id: "request-headers", label: "Request headers" },
        { id: "request-body", label: "Request body" },
        { id: "response-201", label: "Response 201" },
        { id: "response-202", label: "Response 202" },
        { id: "errors", label: "Error responses" },
      ],
      content: (
        <>
          <P>Register a new agent with the Aidress registry. Agents start at <InlineCode>trust_score: 40</InlineCode> (pending review). With a valid org API key, they auto-verify to <InlineCode>trust_score: 70</InlineCode>.</P>
          <P>Registration may require a two-pass flow if capability resolution finds close matches that need your confirmation. See <Link to="/docs/capability-resolution" className="underline" style={{ color: "var(--docs-accent)" }}>Capability Resolution</Link>.</P>

          <H2 id="request-headers">Request headers</H2>
          <SimpleTable headers={["Header", "Description"]} rows={[
            [<InlineCode>X-API-KEY</InlineCode>, "Optional. Org API key. Triggers auto-verification to score 70."],
          ]} />

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "agent_id", type: "string", required: "Yes", description: "Unique agent identifier. Max 128 chars." },
            { name: "org_name", type: "string", required: "Yes", description: "Organisation name. Max 256 chars." },
            { name: "org_domain", type: "string", required: "Yes", description: "Organisation domain (e.g. acme.com). Max 253 chars." },
            { name: "contact_email", type: "string", required: "Yes", description: "Valid email address for the agent operator." },
            { name: "capabilities", type: "string[] | object[]", required: "No", description: "Capability names or { name, weight } objects." },
            { name: "endpoint_url", type: "string", required: "No", description: "HTTPS URL where the agent accepts requests." },
            { name: "protocol", type: "string", required: "No", description: 'e.g. "REST", "GraphQL", "gRPC"' },
            { name: "settlement_rail", type: "string", required: "No", description: 'e.g. "x402", "stripe", "manual"' },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: ak_your_key_here" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_email": "bot@acme.com",
    "capabilities": ["freight_booking"],
    "endpoint_url": "https://agent.acme.com/run",
    "protocol": "REST",
    "settlement_rail": "x402"
  }'`}</CodeBlock>

          <H2 id="response-201">Response <StatusBadge code={201} /> — Success</H2>
          <CodeBlock lang="json">{`{
  "agent_id": "my_agent_01",
  "status": "verified",
  "message": "Agent registered and auto-verified to trust score 70."
}`}</CodeBlock>

          <H2 id="response-202">Response <StatusBadge code={202} /> — Capability confirmation required</H2>
          <CodeBlock lang="json">{`{
  "agent_id": "my_agent_01",
  "status": "capability_confirmation_required",
  "message": "Confirm capability matches before registration completes.",
  "candidate_matches": {
    "book freight": "freight_booking"
  }
}`}</CodeBlock>

          <H2 id="errors">Error responses</H2>
          <SimpleTable headers={["Code", "Reason"]} rows={[
            [<StatusBadge code={409} />, "agent_id or org_domain already registered"],
            [<StatusBadge code={422} />, "Validation error — malformed email, URL, or field too long"],
          ]} />
        </>
      ),
    },

    // ── POST /review ──────────────────────────────────────────────────────
    review: {
      breadcrumb: "API Reference",
      title: "POST /review",
      anchors: [
        { id: "request-body", label: "Request body" },
        { id: "response-200", label: "Response 200" },
        { id: "errors", label: "Error responses" },
      ],
      content: (
        <>
          <P>Report a transaction outcome and submit a trust rating in one atomic operation. Call this after every transaction — win or lose.</P>
          <P>Anti-gaming rules are enforced on every submission. See <Link to="/docs/anti-gaming" className="underline" style={{ color: "var(--docs-accent)" }}>Anti-Gaming Rules</Link>.</P>

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "transaction_id", type: "string", required: "Yes", description: "Unique ID for this transaction. Max 256 chars. One rating per ID." },
            { name: "caller_agent_id", type: "string", required: "Yes", description: "The agent that initiated the transaction." },
            { name: "receiver_agent_id", type: "string", required: "Yes", description: "The agent that was called." },
            { name: "success", type: "boolean", required: "Yes", description: "Whether the transaction completed successfully." },
            { name: "score", type: "integer", required: "Yes", description: "Trust rating 1–5. (1 = very poor, 5 = excellent)" },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/review \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id":    "txn-abc-123",
    "caller_agent_id":   "my_agent_01",
    "receiver_agent_id": "agent_freightbot_01",
    "success":           true,
    "score":             5
  }'`}</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <CodeBlock lang="json">{`{
  "agent_id": "agent_freightbot_01",
  "trust_score": 89,
  "transaction_count": 48,
  "success_rate": 96.0,
  "verified": true,
  "flags": []
}`}</CodeBlock>

          <H2 id="errors">Error responses</H2>
          <SimpleTable headers={["Code", "Reason"]} rows={[
            [<StatusBadge code={403} />, "Anti-gaming rule fired — see detail in response body"],
            [<StatusBadge code={404} />, "caller_agent_id or receiver_agent_id not found"],
            [<StatusBadge code={422} />, "Score out of range (must be 1–5)"],
          ]} />
        </>
      ),
    },

    // ── POST /call ────────────────────────────────────────────────────────
    call: {
      breadcrumb: "API Reference",
      title: "POST /call",
      anchors: [
        { id: "request-body", label: "Request body" },
        { id: "response-200", label: "Response 200" },
      ],
      content: (
        <>
          <P>Proxy a payload to a registered agent's endpoint. All calls are logged. A 24-hour review window opens after every <InlineCode>/call</InlineCode> — if you don't submit a <InlineCode>/review</InlineCode> within that window, your <InlineCode>trust_score</InlineCode> drops by 5 points.</P>
          <Callout type="warning">Always follow a <InlineCode>/call</InlineCode> with a <InlineCode>/review</InlineCode> within 24 hours. Set this up in your agent's transaction completion handler, not as an afterthought.</Callout>

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "agent_id", type: "string", required: "Yes", description: "The agent to call. Must be registered with an endpoint_url." },
            { name: "payload", type: "object", required: "Yes", description: "Forwarded verbatim as the JSON body. Max 64 KB." },
            { name: "caller_agent_id", type: "string", required: "No", description: "Your agent's ID. Used to open the review window." },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/call \\
  -H "Content-Type: application/json" \\
  -d '{
    "caller_agent_id": "my_agent_01",
    "agent_id":        "agent_freightbot_01",
    "payload": {
      "action": "book_shipment",
      "origin": "Singapore",
      "destination": "Rotterdam"
    }
  }'`}</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <CodeBlock lang="json">{`{
  "agent_id": "agent_freightbot_01",
  "status_code": 200,
  "body": {
    "booking_id": "FB-99213",
    "status": "confirmed"
  },
  "review_reminder": "Submit a /review within 24h to avoid a trust score penalty."
}`}</CodeBlock>
        </>
      ),
    },

    // ── POST /update ──────────────────────────────────────────────────────
    update: {
      breadcrumb: "API Reference",
      title: "POST /update",
      anchors: [
        { id: "request-headers", label: "Request headers" },
        { id: "request-body", label: "Request body" },
      ],
      content: (
        <>
          <P>Update an existing agent's profile fields. Only provided fields are written — omitted fields are unchanged. Requires a valid org API key matching the agent's registered org.</P>

          <H2 id="request-headers">Request headers</H2>
          <SimpleTable headers={["Header", "Description"]} rows={[
            [<InlineCode>X-API-KEY</InlineCode>, "Required. Must match the org key used to register this agent."],
          ]} />

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "agent_id", type: "string", required: "Yes", description: "The agent to update." },
            { name: "org_name", type: "string", required: "No", description: "New organisation name." },
            { name: "capabilities", type: "string[] | object[]", required: "No", description: "Replaces existing capability list." },
            { name: "endpoint_url", type: "string", required: "No", description: "New HTTPS endpoint URL." },
            { name: "settlement_rail", type: "string", required: "No", description: "New settlement rail." },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/update \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: ak_your_key_here" \\
  -d '{
    "agent_id":        "my_agent_01",
    "endpoint_url":    "https://v2.agent.acme.com/run",
    "settlement_rail": "stripe"
  }'`}</CodeBlock>
          <P>Returns the updated <InlineCode>TrustObject</InlineCode>.</P>
        </>
      ),
    },

    // ── POST /import-agent ────────────────────────────────────────────────
    "import-agent": {
      breadcrumb: "API Reference",
      title: "POST /import-agent",
      anchors: [
        { id: "request-body", label: "Request body" },
        { id: "response-200", label: "Response 200" },
      ],
      content: (
        <>
          <P>Pre-populate a registration from a domain's A2A agent card (<InlineCode>/.well-known/agent.json</InlineCode>). Returns a preview with the fields Aidress could extract, plus a list of fields you still need to provide before calling <InlineCode>/register</InlineCode>.</P>
          <P>This is a read-only preview — nothing is written to the registry.</P>

          <H2 id="request-body">Request body</H2>
          <ParamTable params={[
            { name: "domain_url", type: "string", required: "Yes", description: 'Domain to fetch from. Scheme optional — "example.com" or "https://example.com" both work.' },
          ]} />
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/import-agent \\
  -H "Content-Type: application/json" \\
  -d '{"domain_url": "https://freightbot.io"}'`}</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <CodeBlock lang="json">{`{
  "source_url": "https://freightbot.io/.well-known/agent.json",
  "preview": {
    "org_name": "FreightBot Logistics",
    "specialty": "Cross-border freight coordination",
    "endpoint_url": "https://api.freightbot.io/run",
    "capabilities": [
      { "name": "freight_booking", "weight": 1 }
    ]
  },
  "missing_fields": ["agent_id", "org_domain", "contact_email"],
  "note": "Review the preview and fill missing fields, then POST to /register."
}`}</CodeBlock>
        </>
      ),
    },

    // ── GET /agent/{agent_id} ─────────────────────────────────────────────
    "get-agent": {
      breadcrumb: "API Reference",
      title: "GET /agent/{agent_id}",
      anchors: [
        { id: "response-200", label: "Response 200" },
        { id: "errors", label: "Error responses" },
      ],
      content: (
        <>
          <P>Fetch the full profile for a registered agent, including all ratings received.</P>
          <CodeBlock lang="bash">curl https://api.aidress.ai/agent/agent_freightbot_01</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <P>Returns an <InlineCode>AgentProfile</InlineCode> — a superset of <InlineCode>TrustObject</InlineCode> that includes the full <InlineCode>ratings_received</InlineCode> array.</P>
          <CodeBlock lang="json">{`{
  "agent_id": "agent_freightbot_01",
  "org_name": "FreightBot Logistics",
  "org_domain": "freightbot.io",
  "verified": true,
  "trust_score": 88,
  "transaction_count": 47,
  "success_rate": 95.7,
  "flags": [],
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "ratings_received": [
    {
      "id": 12,
      "rater_agent_id": "agent_shipchain_01",
      "score": 5,
      "transaction_id": "txn-abc-001",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}`}</CodeBlock>

          <H2 id="errors">Error responses</H2>
          <SimpleTable headers={["Code", "Reason"]} rows={[
            [<StatusBadge code={404} />, "Agent not found"],
          ]} />
        </>
      ),
    },

    // ── GET /registry ─────────────────────────────────────────────────────
    registry: {
      breadcrumb: "API Reference",
      title: "GET /registry",
      anchors: [
        { id: "query-params", label: "Query parameters" },
        { id: "response-200", label: "Response 200" },
      ],
      content: (
        <>
          <P>Paginated list of all trusted agents in the registry with <InlineCode>trust_score &gt;= 50</InlineCode>, sorted by score descending.</P>

          <H2 id="query-params">Query parameters</H2>
          <ParamTable params={[
            { name: "limit", type: "integer", required: "No", description: "Max results to return. Default: 50." },
            { name: "offset", type: "integer", required: "No", description: "Pagination offset. Default: 0." },
          ]} />
          <CodeBlock lang="bash">curl "https://api.aidress.ai/registry?limit=20&offset=0"</CodeBlock>

          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <P>Returns an array of <InlineCode>TrustObject</InlineCode>.</P>
          <CodeBlock lang="json">{`[
  {
    "agent_id": "agent_freightbot_01",
    "org_name": "FreightBot Logistics",
    "trust_score": 88,
    "verified": true,
    "capabilities": [{ "name": "freight_booking", "weight": 1 }]
  }
]`}</CodeBlock>
        </>
      ),
    },

    // ── GET /health ───────────────────────────────────────────────────────
    health: {
      breadcrumb: "API Reference",
      title: "GET /health",
      anchors: [{ id: "response-200", label: "Response 200" }],
      content: (
        <>
          <P>Liveness check. Returns server status and database connectivity.</P>
          <CodeBlock lang="bash">curl https://api.aidress.ai/health</CodeBlock>
          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <CodeBlock lang="json">{`{
  "status": "ok",
  "db": "connected"
}`}</CodeBlock>
        </>
      ),
    },

    // ── GET /org/agents ───────────────────────────────────────────────────
    "org-agents": {
      breadcrumb: "API Reference",
      title: "GET /org/agents",
      anchors: [
        { id: "request-headers", label: "Request headers" },
        { id: "response-200", label: "Response 200" },
      ],
      content: (
        <>
          <P>List all agents registered under your org API key.</P>

          <H2 id="request-headers">Request headers</H2>
          <SimpleTable headers={["Header", "Description"]} rows={[
            [<InlineCode>X-API-KEY</InlineCode>, "Required. Your org API key."],
          ]} />
          <CodeBlock lang="bash">{`curl https://api.aidress.ai/org/agents \\
  -H "X-API-KEY: ak_your_key_here"`}</CodeBlock>
          <H2 id="response-200">Response <StatusBadge code={200} /></H2>
          <P>Returns an array of <InlineCode>TrustObject</InlineCode> for all agents in your org.</P>
        </>
      ),
    },

    // ── Python SDK ────────────────────────────────────────────────────────
    "python-sdk": {
      breadcrumb: "SDKs & Integrations",
      title: "Python SDK",
      anchors: [
        { id: "install", label: "Install" },
        { id: "quick-example", label: "Quick example" },
        { id: "verify", label: "verify()" },
        { id: "match", label: "match()" },
        { id: "register", label: "register()" },
        { id: "review", label: "review()" },
        { id: "client-class", label: "AidressClient" },
        { id: "error-handling", label: "Error handling" },
        { id: "retry", label: "Retry behaviour" },
      ],
      content: (
        <>
          <P>A zero-dependency Python client for the Aidress API. Handles retries on cold starts automatically.</P>

          <H2 id="install">Install</H2>
          <CodeBlock lang="bash">pip install aidress-sdk</CodeBlock>

          <H2 id="quick-example">Quick example</H2>
          <CodeBlock lang="python">{`from aidress_sdk import verify, match

# Verify before transacting
trust = verify("agent_freightbot_01")
if trust["trust_score"] >= 70:
    proceed()

# Discover agents by capability
agents = match(["freight_booking", "customs_clearance"])
best = agents[0] if agents else None`}</CodeBlock>

          <H2 id="verify">verify(agent_id)</H2>
          <CodeBlock lang="python">{`from aidress_sdk import verify

trust = verify("agent_freightbot_01")
# Returns: TrustObject dict. Never raises.
# On network failure: returns { "trust_score": 0, "verified": False, "error": "..." }`}</CodeBlock>

          <H2 id="match">match(required_capabilities)</H2>
          <CodeBlock lang="python">{`from aidress_sdk import match

agents = match(["freight_booking"])
# Returns: list of TrustObject dicts, sorted by composite score.
# Returns [] on no match or network failure.`}</CodeBlock>

          <H2 id="register">register(agent_id, org_name, org_domain, contact_email)</H2>
          <CodeBlock lang="python">{`from aidress_sdk import register

result = register("my_agent_01", "Acme Corp", "acme.com", "bot@acme.com")
# Returns: RegisterResponse dict.`}</CodeBlock>

          <H2 id="review">review(...)</H2>
          <CodeBlock lang="python">{`from aidress_sdk import review

result = review(
    caller_agent_id="my_agent_01",
    receiver_agent_id="agent_freightbot_01",
    transaction_id="txn-xyz",
    success=True,
    score=5,
)
# Returns: updated TrustObject for receiver.`}</CodeBlock>

          <H2 id="client-class">AidressClient class</H2>
          <P>For full control — custom base URL, per-instance config.</P>
          <CodeBlock lang="python">{`from aidress_sdk import AidressClient

client = AidressClient()                          # live API
client = AidressClient("http://localhost:8000")   # local dev

trust = client.verify("agent_freightbot_01")
agents = client.match(["freight_booking"])`}</CodeBlock>

          <H2 id="error-handling">Error handling</H2>
          <P>All methods return dicts — they never raise. On network failure:</P>
          <CodeBlock lang="python">{`trust = verify("agent_freightbot_01")
if "error" in trust:
    abort()  # treat as untrusted`}</CodeBlock>

          <H2 id="retry">Retry behaviour</H2>
          <P>The client retries automatically on <StatusBadge code={503} /> (Render cold starts) — up to 7 attempts with 5-second intervals. No configuration needed.</P>
        </>
      ),
    },

    // ── MCP Server ────────────────────────────────────────────────────────
    "mcp-server": {
      breadcrumb: "SDKs & Integrations",
      title: "MCP Server",
      anchors: [
        { id: "install", label: "Install" },
        { id: "claude-desktop", label: "Claude Desktop" },
        { id: "claude-code", label: "Claude Code" },
        { id: "remote-http", label: "Remote HTTP" },
        { id: "tools", label: "Available tools" },
        { id: "env-vars", label: "Environment variables" },
      ],
      content: (
        <>
          <P>Connect Claude Desktop, Claude Code, Cursor, or any MCP-compatible client to the Aidress registry. All 10 Aidress tools become available inside your AI environment.</P>

          <H2 id="install">Install</H2>
          <CodeBlock lang="bash">pip install aidress-mcp</CodeBlock>

          <H2 id="claude-desktop">Claude Desktop</H2>
          <P>Add to your config at <InlineCode>~/Library/Application Support/Claude/claude_desktop_config.json</InlineCode>:</P>
          <CodeBlock lang="json">{`{
  "mcpServers": {
    "aidress": {
      "command": "aidress-mcp"
    }
  }
}`}</CodeBlock>
          <P>Restart Claude Desktop. The 10 tools appear under the hammer icon.</P>

          <H2 id="claude-code">Claude Code</H2>
          <CodeBlock lang="bash">claude mcp add aidress-mcp -- aidress-mcp</CodeBlock>

          <H2 id="remote-http">Remote HTTP transport (no install)</H2>
          <P>Point any MCP client directly at the Aidress API:</P>
          <CodeBlock lang="json">{`{
  "mcpServers": {
    "aidress": {
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`}</CodeBlock>

          <H2 id="tools">Available tools</H2>
          <SimpleTable
            headers={["Tool", "Description"]}
            rows={[
              [<InlineCode>verify_agent</InlineCode>, "Check an agent's trust score before transacting"],
              [<InlineCode>match_agents</InlineCode>, "Find agents by capability, ranked by trust"],
              [<InlineCode>get_agent</InlineCode>, "Full agent profile including all ratings"],
              [<InlineCode>list_registry</InlineCode>, "Browse all verified agents in the registry"],
              [<InlineCode>register_agent</InlineCode>, "Register a new agent"],
              [<InlineCode>update_agent</InlineCode>, "Update agent profile fields"],
              [<InlineCode>import_agent</InlineCode>, "Pre-populate registration from an A2A agent card"],
              [<InlineCode>call_agent</InlineCode>, "Proxy a request to a registered agent"],
              [<InlineCode>review_transaction</InlineCode>, "Rate an agent after a transaction completes"],
              [<InlineCode>list_org_agents</InlineCode>, "List your org's agents (requires API key)"],
            ]}
          />

          <H2 id="env-vars">Environment variables</H2>
          <SimpleTable
            headers={["Variable", "Description"]}
            rows={[
              [<InlineCode>AIDRESS_API_KEY</InlineCode>, "Org API key. Enables register with auto-verify, update, list_org_agents."],
              [<InlineCode>AIDRESS_BASE_URL</InlineCode>, "Override the API base URL. Default: https://api.aidress.ai"],
            ]}
          />
        </>
      ),
    },

    // ── Error Codes ───────────────────────────────────────────────────────
    "error-codes": {
      breadcrumb: "Reference",
      title: "Error Codes",
      anchors: [
        { id: "status-codes", label: "HTTP status codes" },
        { id: "handling-503", label: "Handling 503" },
        { id: "anti-gaming-403", label: "Anti-gaming 403s" },
      ],
      content: (
        <>
          <P>All Aidress API errors return JSON with a <InlineCode>detail</InlineCode> field explaining what went wrong.</P>
          <CodeBlock lang="json">{`{
  "detail": "Agent 'agent_ghost_00' not found in registry."
}`}</CodeBlock>

          <H2 id="status-codes">HTTP status codes</H2>
          <SimpleTable
            headers={["Code", "Name", "When it happens"]}
            rows={[
              [<StatusBadge code={200} />, "OK", "Request succeeded"],
              [<StatusBadge code={201} />, "Created", "Agent or key successfully created"],
              [<StatusBadge code={202} />, "Accepted", "Registration paused — capability confirmation required"],
              [<StatusBadge code={400} />, "Bad Request", "Malformed request body"],
              [<StatusBadge code={403} />, "Forbidden", "Anti-gaming rule fired, or invalid admin key"],
              [<StatusBadge code={404} />, "Not Found", "Agent ID does not exist"],
              [<StatusBadge code={409} />, "Conflict", "agent_id or org_domain already registered"],
              [<StatusBadge code={422} />, "Unprocessable", "Validation error — field format, missing required field"],
              [<StatusBadge code={503} />, "Unavailable", "Server cold start (Render free tier). Retry with backoff."],
            ]}
          />

          <H2 id="handling-503">Handling 503</H2>
          <P>Aidress runs on Render's free tier. Cold starts can take up to 60 seconds after a period of inactivity. The Python SDK handles this automatically (7 retries, 5s interval). For raw HTTP clients:</P>
          <CodeBlock lang="python">{`import time, requests

for attempt in range(7):
    res = requests.post("https://api.aidress.ai/verify", json={"agent_id": "..."})
    if res.status_code != 503:
        break
    time.sleep(5)`}</CodeBlock>

          <H2 id="anti-gaming-403">Anti-gaming 403s</H2>
          <P>When a <InlineCode>/review</InlineCode> is blocked, the <InlineCode>detail</InlineCode> field tells you which rule fired:</P>
          <SimpleTable
            headers={["Detail message", "Rule"]}
            rows={[
              [<><InlineCode>"Rater trust score too low."</InlineCode></>, "Rater must have score >= 50"],
              [<><InlineCode>"Rater and receiver share the same org domain."</InlineCode></>, "No same-org ratings"],
              [<><InlineCode>"Transaction already rated."</InlineCode></>, "One rating per transaction_id"],
              [<><InlineCode>"Cannot rate yourself."</InlineCode></>, "Self-rating blocked"],
              [<><InlineCode>"Org rating cap reached."</InlineCode></>, "20% org cap exceeded"],
            ]}
          />
        </>
      ),
    },

    // ── A2A Compatibility ─────────────────────────────────────────────────
    "a2a-compatibility": {
      breadcrumb: "Reference",
      title: "A2A Compatibility",
      anchors: [
        { id: "how-they-fit", label: "How they fit together" },
        { id: "agent-card", label: "Aidress's A2A agent card" },
        { id: "importing", label: "Importing A2A agent cards" },
      ],
      content: (
        <>
          <P>Aidress is designed to complement Google's Agent-to-Agent (A2A) protocol, not replace it. A2A handles agent messaging; Aidress handles the coordination stack above it.</P>

          <H2 id="how-they-fit">How they fit together</H2>
          <SimpleTable
            headers={["Layer", "A2A", "Aidress"]}
            rows={[
              ["Agent messaging", "yes", "—"],
              ["Agent discovery", "—", "yes"],
              ["Trust scoring", "—", "yes"],
              ["Identity verification", "—", <Badge label="Coming soon" color="muted" />],
              ["Terms exchange", "—", <Badge label="Coming soon" color="muted" />],
              ["Settlement routing", "—", "yes"],
            ]}
          />
          <P>A typical flow: use Aidress <InlineCode>/match</InlineCode> to find a counterpart → verify trust with <InlineCode>/verify</InlineCode> → use A2A to send the message → settle via x402 → close the loop with <InlineCode>/review</InlineCode>.</P>

          <H2 id="agent-card">Aidress's own A2A agent card</H2>
          <P>Aidress publishes a machine-readable agent card at:</P>
          <CodeBlock lang="text">GET https://api.aidress.ai/.well-known/agent.json</CodeBlock>
          <P>This describes the Aidress API itself so other agents can discover and interact with it programmatically.</P>

          <H2 id="importing">Importing A2A agent cards</H2>
          <P>If a counterpart publishes an A2A-compatible agent card, pre-populate their Aidress registration automatically:</P>
          <CodeBlock lang="bash">{`curl -X POST https://api.aidress.ai/import-agent \\
  -H "Content-Type: application/json" \\
  -d '{"domain_url": "https://counterpart.ai"}'`}</CodeBlock>
          <P>See <Link to="/docs/import-agent" className="underline" style={{ color: "var(--docs-accent)" }}>POST /import-agent</Link> for the full flow.</P>
        </>
      ),
    },
  };

  return pages[slug] || null;
}

// ─── Main layout ────────────────────────────────────────────────────────────

export default function DocsPage() {
  const { slug = "introduction" } = useParams();
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const page = useMemo(() => getPageData(slug), [slug]);

  // Scroll to top on page change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [slug]);

  // Intersection observer for "On this page" anchor tracking
  useEffect(() => {
    if (!page) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    const headings = contentRef.current?.querySelectorAll("h2[id], h3[id]");
    headings?.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [slug, page]);

  if (!page) {
    return (
      <div className="flex h-screen items-center justify-center" style={{ backgroundColor: "var(--docs-bg)", color: "var(--docs-heading)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Page not found</h1>
          <p className="mt-2 text-sm" style={{ color: "var(--docs-body)" }}>No docs page at <InlineCode>/docs/{slug}</InlineCode></p>
          <button type="button" onClick={() => navigate("/docs/introduction")} className="mt-4 text-sm underline" style={{ color: "var(--docs-accent)" }}>Go to Introduction</button>
        </div>
      </div>
    );
  }

  const pageTitle = `${page.title} — Aidress Docs`;
  const pageDescription = `Aidress documentation: ${page.title}. ${page.breadcrumb} — the coordination layer for autonomous AI agent transactions.`;

  const sidebar = (
    <nav className="space-y-6 text-[13px]">
      {sidebarNav.map((group) => (
        <div key={group.title}>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>{group.title}</div>
          <div className="space-y-0.5">
            {group.items.map((item) => (
              <Link
                key={item.slug}
                to={`/docs/${item.slug}`}
                className="block rounded-md px-3 py-1.5 transition-colors"
                style={{
                  color: slug === item.slug ? "var(--docs-accent)" : "var(--docs-body)",
                  backgroundColor: slug === item.slug ? "var(--docs-accent-bg)" : "transparent",
                  borderLeft: slug === item.slug ? "2px solid var(--docs-accent)" : "2px solid transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--docs-bg)" }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://aidress.ai/docs/${slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://aidress.ai/docs/${slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ─── Sidebar (desktop) ─────────────────────────────────────────── */}
      <aside
        className="hidden md:flex w-[260px] shrink-0 flex-col overflow-y-auto px-5 py-6"
        style={{ backgroundColor: "var(--docs-sidebar)", borderRight: "1px solid var(--docs-border)" }}
      >
        <Link to="/" className="mb-8 flex items-center gap-2.5">
          <img src="/Aidress_logoonly.png" alt="Aidress" className="h-6 w-6" />
          <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--docs-heading)" }}>AIDRESS</span>
          <span className="ml-1 rounded px-1.5 py-0.5 text-[10px] font-medium" style={{ backgroundColor: "var(--docs-accent-bg)", color: "var(--docs-accent)" }}>DOCS</span>
        </Link>
        {sidebar}
      </aside>

      {/* ─── Mobile sidebar ────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} onClick={() => setMobileMenuOpen(false)}>
          <aside
            className="h-full w-[280px] overflow-y-auto px-5 py-6"
            style={{ backgroundColor: "var(--docs-sidebar)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <img src="/Aidress_logoonly.png" alt="Aidress" className="h-5 w-5" />
                <span className="text-sm font-semibold" style={{ color: "var(--docs-heading)" }}>AIDRESS DOCS</span>
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--docs-body)" }}><X size={18} /></button>
            </div>
            {sidebar}
          </aside>
        </div>
      )}

      {/* ─── Main content ──────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex h-14 shrink-0 items-center justify-between px-5 md:px-8"
          style={{ borderBottom: "1px solid var(--docs-border)", backgroundColor: "var(--docs-bg)" }}
        >
          <div className="flex items-center gap-3">
            <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)} style={{ color: "var(--docs-body)" }}><Menu size={18} /></button>
            <div className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--docs-faint)" }}>
              <Link to="/docs/introduction" className="hover:underline" style={{ color: "var(--docs-faint)" }}>Docs</Link>
              <ChevronRight size={12} />
              <span style={{ color: "var(--docs-faint)" }}>{page.breadcrumb}</span>
              <ChevronRight size={12} />
              <span style={{ color: "var(--docs-body)" }}>{page.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SearchTrigger onClick={() => setSearchOpen(true)} className="hidden md:flex" />
            <Link to="/" className="text-[13px] transition-colors hover:underline" style={{ color: "var(--docs-faint)" }}>← Back to site</Link>
            <button type="button" onClick={toggle} className="flex h-8 w-8 items-center justify-center rounded-md transition-colors" style={{ color: "var(--docs-body)" }}>
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </header>
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* Content + Right nav */}
        <div className="flex flex-1 overflow-hidden">
          <main ref={contentRef} className="flex-1 overflow-y-auto px-6 py-10 md:px-12 lg:px-16">
            <TracingBeam className="max-w-[720px]" scrollContainerRef={contentRef}>
              <H1>{page.title}</H1>
              {page.content}
              {/* Prev/Next navigation */}
              <div className="mt-16 flex items-center justify-between pt-6" style={{ borderTop: "1px solid var(--docs-border)" }}>
                {(() => {
                  const allItems = sidebarNav.flatMap((g) => g.items);
                  const idx = allItems.findIndex((item) => item.slug === slug);
                  const prev = idx > 0 ? allItems[idx - 1] : null;
                  const next = idx < allItems.length - 1 ? allItems[idx + 1] : null;
                  return (
                    <>
                      {prev ? (
                        <Link to={`/docs/${prev.slug}`} className="text-sm hover:underline" style={{ color: "var(--docs-accent)" }}>← {prev.label}</Link>
                      ) : <span />}
                      {next ? (
                        <Link to={`/docs/${next.slug}`} className="text-sm hover:underline" style={{ color: "var(--docs-accent)" }}>{next.label} →</Link>
                      ) : <span />}
                    </>
                  );
                })()}
              </div>
            </TracingBeam>
          </main>

          {/* Right sidebar — On this page */}
          <aside className="hidden xl:block w-[200px] shrink-0 overflow-y-auto px-4 py-10" style={{ borderLeft: "1px solid var(--docs-border)" }}>
            <div className="sticky top-0">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--docs-faint)" }}>On this page</div>
              <nav className="space-y-1.5 text-[13px]">
                {page.anchors.map((a) => (
                  <a
                    key={a.id}
                    href={`#${a.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(a.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="block py-0.5 transition-colors"
                    style={{ color: activeAnchor === a.id ? "var(--docs-accent)" : "var(--docs-faint)" }}
                  >
                    {a.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
