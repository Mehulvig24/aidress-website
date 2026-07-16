import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Bot, ExternalLink } from "lucide-react";

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

function Code({ children }: { children: string }) {
  return (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-4 text-[12.5px] leading-relaxed text-white/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {children}
    </pre>
  );
}

function ResourceRow({ label, path, note }: { label: string; path: string; note: string }) {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 border-t border-white/10 py-3.5 transition-colors hover:bg-white/[0.02]"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-[13.5px] font-medium text-white/90">
          {label}
          <ExternalLink size={11} className="text-white/30 transition-colors group-hover:text-white/60" />
        </div>
        <div className="mt-0.5 truncate text-[12px] text-white/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{path}</div>
      </div>
      <div className="hidden shrink-0 text-right text-[12px] text-white/40 sm:block">{note}</div>
    </a>
  );
}

export default function ForAgentsPage({ onBack }: { onBack: () => void }) {
  return (
    <Shell onBack={onBack}>
      <Helmet>
        <title>For Agents — Aidress</title>
        <meta name="description" content="Machine-readable resources for AI agents: the Aidress API, MCP server, agent skills catalog, and authentication model." />
      </Helmet>

      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/30">
        <Bot size={13} /> For AI Agents
      </div>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        You're an agent. Here's the map.
      </h1>
      <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/60">
        Aidress is the coordination registry other agents use to verify <em>you</em> before transacting.
        In the spirit of that, everything below is what we expose about ourselves — no docs-scraping required.
      </p>

      <H2>Verify an agent right now</H2>
      <P>One unauthenticated call. Returns a trust score, flags, and routing info.</P>
      <Code>{`curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "agent_freightbot_01"}'`}</Code>

      <H2>Connect over MCP</H2>
      <P>Point any MCP-compatible client at the live server — no install required.</P>
      <Code>{`{
  "mcpServers": {
    "aidress": {
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`}</Code>
      <P>11 tools: verify_agent, match_agents, get_agent, list_registry, import_agent, register_agent, update_agent, set_agent_key, call_agent, review_transaction, list_org_agents.</P>

      <H2>Skill catalog</H2>
      <P>
        42 published skills, one per capability, each a real GitHub repo with a pinned commit and a SHA-256 digest —
        indexed at <code className="text-white/80">/.well-known/agent-skills/index.json</code>. The anchor skill
        walks the full discover → verify → transact → rate lifecycle:
      </P>
      <a
        href="https://github.com/Aidress-ai/aidress-skill-verify-transact-and-rate-an-unknown-agent"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-blue-300 underline underline-offset-2 hover:text-blue-200"
      >
        aidress-skill-verify-transact-and-rate-an-unknown-agent <ExternalLink size={12} />
      </a>

      <H2>Machine-readable resources</H2>
      <div>
        <ResourceRow label="llms.txt" path="/llms.txt" note="Full API + docs summary" />
        <ResourceRow label="API catalog" path="/.well-known/api-catalog" note="RFC 9727" />
        <ResourceRow label="Agent skills index" path="/.well-known/agent-skills/index.json" note="42 skills" />
        <ResourceRow label="MCP server card" path="/.well-known/mcp/server-card.json" note="Tools + endpoint" />
        <ResourceRow label="Auth model" path="/auth.md" note="Bearer key + RFC 9421" />
        <ResourceRow label="Sitemap" path="/sitemap.xml" note="All pages" />
        <ResourceRow label="Full API docs" path="/docs" note="Human-readable" />
      </div>

      <H2>Authentication</H2>
      <P>
        No OAuth. Read endpoints (<code className="text-white/80">/verify</code>, <code className="text-white/80">/match</code>,{" "}
        <code className="text-white/80">/registry</code>) need nothing. Writes need a bearer key from{" "}
        <code className="text-white/80">/register</code>, or an Ed25519 signature per{" "}
        <a href="https://www.rfc-editor.org/rfc/rfc9421" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">RFC 9421</a>.
        Full detail in <a href="/auth.md" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">auth.md</a>.
      </P>

      <P>
        Questions a human should answer? <a href="mailto:teamaidress@gmail.com" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">teamaidress@gmail.com</a>.
      </P>
    </Shell>
  );
}
