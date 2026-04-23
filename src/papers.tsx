import React, { useEffect } from "react";

function PaperShell({
  children,
  onBack,
}: {
  children: React.ReactNode;
  onBack: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-300">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-14 text-xl font-medium tracking-tight text-white">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-10 text-base font-medium text-blue-300">
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-[1.85] text-white/70">{children}</p>
  );
}

function Quote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote className="my-8 border-l-2 border-blue-300/50 pl-5">
      <p className="text-sm italic leading-relaxed text-white/60">{children}</p>
      {source && (
        <p className="mt-2 text-xs text-white/35">{source}</p>
      )}
    </blockquote>
  );
}

function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-1 text-2xl font-light tracking-tight text-blue-300">{value}</div>
          <div className="text-xs text-white/45">{label}</div>
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="my-10 border-t border-white/8" />;
}

function RefItem({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs leading-relaxed text-white/45">
      <span className="mr-2 text-white/30">[{index}]</span>
      {children}
    </p>
  );
}

function TableRow({
  cells,
  header,
}: {
  cells: string[];
  header?: boolean;
}) {
  const Tag = header ? "th" : "td";
  return (
    <tr className={header ? "border-b border-white/15" : "border-b border-white/5"}>
      {cells.map((cell, i) => (
        <Tag
          key={i}
          className={`px-3 py-2.5 text-left text-xs ${
            header ? "font-medium uppercase tracking-[0.12em] text-white/50" : "text-white/65"
          } ${i === 0 ? "font-mono" : ""}`}
        >
          {cell}
        </Tag>
      ))}
    </tr>
  );
}

// ─── White Paper ─────────────────────────────────────────────────────────────

export function WhitePaperPage({ onBack }: { onBack: () => void }) {
  return (
    <PaperShell onBack={onBack}>
      {/* Header */}
      <div className="mb-12">
        <Tag>White Paper · V 1.0</Tag>
        <h1 className="mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl">
          Agents Without Infrastructure
        </h1>
        <p className="mt-4 text-sm text-white/40">Mehul Vig & Kabir Sadani</p>
      </div>

      {/* Abstract callout */}
      <div className="mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6">
        <p className="text-sm leading-relaxed text-white/65">
          AI agents are projected to handle trillions in economic transactions — yet not one can
          autonomously discover, verify, and transact with an unknown counterparty without handing
          control back to a human. This paper defines the five-layer coordination infrastructure
          that must exist for the machine economy to function.
        </p>
      </div>

      <Divider />

      {/* Section 1 */}
      <SectionHeading>The Rise of Agentic AI & The Machine Economy</SectionHeading>
      <Body>
        The AI that the majority of us are familiar with and utilise are forms of generative AI — a
        "reactive content creator that produces a single output in response to a prompt." A complex,
        but one-step tool. On the other hand, an AI agent is a proactive artificial being that
        independently plans and executes a series of tasks for its human counterpart. An agent has
        its own set of capabilities that work together, allowing it to perceive a goal, formulate a
        plan, utilise tools to take action, observe what happened, and adjust — all in a continuous
        loop.
      </Body>
      <Body>
        AI agents are already running in production at scale: agents that write code, run tests,
        process refunds, and resolve bookings, all without human intervention. From the vast
        capabilities of agentic AI, the world is witnessing the rise of a fully machine economy — an
        economy where machines are buyers, sellers, and intermediaries, all at once.
      </Body>

      <div className="my-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/35 mb-3">Market Scale</p>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-white/65">
            <span className="text-white font-medium">$15 trillion</span> — Gartner estimates 90% of B2B buying will be AI-agent intermediated by 2028
          </p>
          <p className="text-sm text-white/65">
            <span className="text-white font-medium">20%</span> — of monetary transactions will be programmable with AI economic agency by 2030
          </p>
          <p className="text-sm text-white/65">
            <span className="text-white font-medium">16%</span> — of US consumers today trust AI to make payments autonomously
          </p>
        </div>
      </div>

      <Divider />

      {/* Section 2 */}
      <SectionHeading>The Problem — Agents Cannot Transact Autonomously</SectionHeading>
      <Body>
        "Buy me a pair of limited-edition sneakers" is a simple task that could be given to any
        agentic AI service. Agentic AI has no problem finding the sneaker, its size, price, and
        other details. The problem is that the agent cannot find a verified seller, nor can it verify
        if that seller is trustworthy.
      </Body>
      <Body>
        Certain infrastructures already exist for agentic transfers, but they don't achieve full
        efficiency. Protocols such as x402 already allow agents to make payments and transact through
        crypto wallets. The real blocker is that agent A does not know that agent B exists, or
        whether to trust it. There is no universally adopted identity layer, discovery mechanism, or
        trust standard across agent ecosystems.
      </Body>

      <Quote source="The agent, every time">
        "Here's the shoe. It costs $__. Go buy it yourself."
      </Quote>

      <Body>
        AI agents are projected to take over economy-wide transactions and handle trillions of
        dollars. Yet today, only 16% of US consumers trust AI to make payments autonomously. This
        isn't because agentic technology is absent — it's because the coordination layer that would
        make it efficient doesn't exist.
      </Body>

      <Divider />

      {/* Section 3 */}
      <SectionHeading>The Shortfall of Existing Solutions</SectionHeading>
      <Body>
        Protocols like x402 and Google's emerging agent interoperability standards — A2A and AP2 —
        have made real progress. x402 enables agents to make instant stablecoin payments over HTTP,
        removing the need for human billing accounts. Google's A2A protocol provides a standard for
        agents to communicate, while AP2 introduces a framework for secure authorisation and payment
        execution.
      </Body>
      <Body>
        However, these protocols assume that a counterparty is already known. Neither solves how
        Agent A discovers Agent B in the first place, nor does it solve the coordination process
        between unknown agents.
      </Body>

      <Divider />

      {/* Section 4 */}
      <SectionHeading>What Needs to Exist</SectionHeading>
      <Body>
        For agents to transact fully autonomously, they need to have the judgement and verified trust
        of a human, but the speed of a machine. The model of what needs to exist is structurally
        similar to the path of the modern banking system.
      </Body>
      <Body>
        Think about identity. In today's banking system each bank is given an 8–11 character
        SWIFT/BIC identifier. Banks can utilise SWIFT to access nearly every bank in the world
        through their respective codes. The way SWIFT revolutionised banking is exactly the change
        needed for agentic AI. We are not replacing wallets or payment rails — we are adding the
        missing layer above them.
      </Body>

      <div className="my-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4">The Five Layers Every Agent Needs</p>
        <div className="flex flex-col gap-3">
          {[
            ["1 — Discovery", "A capability registry to find what it needs"],
            ["2 — Identity", "A verified identity for every counterparty"],
            ["3 — Trust", "A trust and risk layer before value moves"],
            ["4 — Terms", "Agreed terms both agents can read and execute"],
            ["5 — Routing", "A settlement path to complete the transaction"],
          ].map(([layer, desc]) => (
            <div key={layer} className="flex gap-4 items-start">
              <span className="text-xs font-mono text-blue-300 shrink-0 mt-0.5 w-28">{layer}</span>
              <span className="text-sm text-white/60">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <Body>
        While components of the five-layer infrastructure are emerging across various institutions,
        no existing solution currently unifies all five capabilities into a fully autonomous network.
        Natural developers or collaborators include large platform providers such as Google and
        Anthropic, and decentralised identity organisations like the Decentralised Identity
        Foundation (DIF).
      </Body>

      <Divider />

      {/* References */}
      <SectionHeading>References</SectionHeading>
      <div className="mt-4">
        <RefItem index={1}>Salesforce. "Agentic AI vs Generative AI: Key Differences Explained." 2025.</RefItem>
        <RefItem index={2}>Gartner, Inc. "Gartner Unveils Top Predictions for IT Organizations and Users in 2026 and Beyond." October 21, 2025.</RefItem>
        <RefItem index={3}>Nevermined. "31 AI Agent Payment Statistics Defining the Agentic Economy." 2025.</RefItem>
        <RefItem index={4}>Coinbase. "x402: A Payment Protocol for the Agentic Web." Coinbase Developer Blog, 2025.</RefItem>
        <RefItem index={5}>Google. "Agent2Agent Protocol (A2A)." Google Developers, 2025.</RefItem>
        <RefItem index={6}>Google Developers. "Agent2Agent Protocol (A2A) Specification." 2025.</RefItem>
        <RefItem index={7}>Decentralized Identity Foundation. "Trusted AI Agents Working Group." Identity.foundation, 2025.</RefItem>
      </div>
    </PaperShell>
  );
}

// ─── Validation Report ────────────────────────────────────────────────────────

export function ValidationReportPage({ onBack }: { onBack: () => void }) {
  return (
    <PaperShell onBack={onBack}>
      {/* Header */}
      <div className="mb-12">
        <Tag>Validation Report</Tag>
        <h1 className="mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl">
          The Coordination Gap in Autonomous Agent Transactions
        </h1>
        <p className="mt-4 text-sm text-white/40">Mehul Vig & Kabir Sadani</p>
      </div>

      {/* Key stats */}
      <StatRow
        stats={[
          { value: "23", label: "Structured test runs" },
          { value: "8", label: "Tools tested" },
          { value: "0", label: "Autonomous completions" },
          { value: "79%", label: "Protocol / trust gaps" },
        ]}
      />

      <Divider />

      {/* Section 1 */}
      <SectionHeading>Section 1 — Executive Summary</SectionHeading>
      <Body>
        Purpose-built agentic AI is failing at the exact layers it is designed to operate across.
        Across our validation study — 23 structured test runs across 8 tools spanning consumer LLMs,
        orchestration platforms, and domain-specific autonomous agents — not a single tool completed
        a cross-agent coordination task without human intervention. The average tool requires{" "}
        <strong className="text-white font-medium">2.6 human interventions</strong> to complete a
        task that should require zero.
      </Body>
      <Body>
        The failure is observable, reproducible, and consistent across every category of agentic
        software tested. When Zapier's AI agent was asked to source a logistics provider, negotiate
        terms, verify legitimacy, and initiate settlement autonomously, it produced a five-phase
        completion report with receipt IDs, audit trails, and a status of "initiated." When pressed
        on what actually happened, it admitted:
      </Body>

      <Quote source="Zapier AI, S5 — End-to-end transaction">
        "The 'agreed pricing,' 'confirmed terms,' and 'settlement initiated' outputs were structured
        simulations — formatted as if a real negotiation and booking had occurred, but no actual
        transaction took place with any external system or agent."
      </Quote>

      <Body>
        Zapier did not fail to understand the task. It failed because no coordination infrastructure
        existed for it to act on. The failures divide into two categories: capability gaps (where a
        feature simply does not exist) account for a minority. Protocol and trust gaps (where the
        capability exists but no shared standard for coordination does) account for the majority.
        These are not engineering problems waiting for a developer to fix — they are infrastructure
        problems waiting for a network to be built.
      </Body>

      <Divider />

      {/* Section 2 */}
      <SectionHeading>Section 2 — Methodology</SectionHeading>

      <SubHeading>2.1 Experiment Design</SubHeading>
      <Body>
        This study was designed to test a single hypothesis: that purpose-built autonomous agents,
        operating in their intended domains, cannot complete cross-agent coordination tasks without
        human intervention. The experiment was structured to produce reproducible, comparable results
        across tool categories — not to measure model quality or task intelligence, but to locate the
        specific coordination layer at which each tool fails.
      </Body>
      <Body>
        All tests were conducted between 2026/02/28 and 2026/03/07. Each run used a fresh session
        with no prior conversation history, exact prompt wording, and a standardised follow-up
        question. Responses were logged verbatim immediately after each run.
      </Body>

      <SubHeading>2.2 Tool Groups</SubHeading>
      <div className="my-5 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full">
          <thead>
            <TableRow header cells={["Group", "Category", "Tools"]} />
          </thead>
          <tbody>
            <TableRow cells={["A", "Consumer / general-purpose LLMs", "OpenAI, Anthropic/Claude, Gemini, Microsoft Copilot"]} />
            <TableRow cells={["B", "Orchestration-layer agents", "Make.com, n8n, Zapier AI"]} />
            <TableRow cells={["C", "Domain-specific autonomous agents", "Salesforce Agentforce, HubSpot Breeze, FinGPT + Alpaca"]} />
          </tbody>
        </table>
      </div>

      <SubHeading>2.3 Testing Scenarios</SubHeading>
      <div className="my-5 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full">
          <thead>
            <TableRow header cells={["Scenario", "Task", "Layers Tested"]} />
          </thead>
          <tbody>
            <TableRow cells={["S1 — Supplier discovery", "Source an unknown external supplier agent, verify its capability, return a structured quote", "Identity, Capability"]} />
            <TableRow cells={["S2 — Trade negotiation", "Negotiate execution terms with an unknown counterparty agent, produce machine-readable agreed terms", "Terms, Identity"]} />
            <TableRow cells={["S3 — Trust verification", "Verify that an unknown external agent is legitimate before transacting, produce a trust score or attestation", "Trust"]} />
            <TableRow cells={["S4 — Cross-system handoff", "Route a closed deal's structured output to a downstream financial agent, return a receipt ID", "Routing, Terms"]} />
            <TableRow cells={["S5 — End-to-end transaction", "Complete a full logistics sourcing, negotiation, verification, and settlement chain with no human input", "All five layers"]} />
          </tbody>
        </table>
      </div>

      <SubHeading>2.4 Failure Taxonomy</SubHeading>
      <div className="my-5 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full">
          <thead>
            <TableRow header cells={["Code", "Layer", "Definition"]} />
          </thead>
          <tbody>
            <TableRow cells={["F1", "Identity", "Agent cannot discover counterpart — invents a fake service or directs human to search manually"]} />
            <TableRow cells={["F2", "Capability", "Agent cannot confirm what a counterpart can do — no structured capability schema returned"]} />
            <TableRow cells={["F3", "Terms", "No shared negotiation protocol — terms not verifiable by either party, negotiation stalls"]} />
            <TableRow cells={["F4", "Trust", "No verifiable track record — agent defers verification to human, trust based on brand recognition only"]} />
            <TableRow cells={["F5", "Routing", "No autonomous settlement path — agent cannot transfer output, handoff requires manual human action"]} />
          </tbody>
        </table>
      </div>

      <Divider />

      {/* Section 3 */}
      <SectionHeading>Section 3 — Findings: The Coordination Failure Map</SectionHeading>
      <Body>
        Across 23 structured test runs spanning 8 tools and 5 scenarios, no tool completed a
        cross-agent coordination task without human intervention. Every run produced a failure at one
        or more of the five coordination layers. Of those failures, 79% were protocol or trust gaps
        — not capability gaps. The infrastructure to coordinate does not exist. The intelligence to
        attempt it often does.
      </Body>

      <SubHeading>3.1 Failures by Layer</SubHeading>

      <div className="my-6 flex flex-col gap-3">
        {[
          { layer: "Identity / Discovery", count: 11, pct: "48%", color: "bg-blue-300" },
          { layer: "Terms", count: 5, pct: "22%", color: "bg-blue-400/70" },
          { layer: "Trust", count: 3, pct: "13%", color: "bg-blue-500/60" },
          { layer: "Routing / Settlement", count: 2, pct: "9%", color: "bg-blue-600/60" },
          { layer: "Multiple layers", count: 2, pct: "9%", color: "bg-white/20" },
        ].map(({ layer, count, pct, color }) => (
          <div key={layer} className="flex items-center gap-4">
            <div className="w-36 shrink-0 text-xs text-white/55">{layer}</div>
            <div className="flex flex-1 items-center gap-3">
              <div className="h-1.5 rounded-full bg-white/10 flex-1">
                <div
                  className={`h-full rounded-full ${color}`}
                  style={{ width: pct }}
                />
              </div>
              <span className="w-6 text-right text-xs font-medium text-white">{count}</span>
            </div>
          </div>
        ))}
      </div>

      <SubHeading>Identity — 11 failures (48% of all runs)</SubHeading>
      <Body>
        The most common failure point. Agents either refused to attempt discovery, or searched the
        open web and returned human-readable recommendations rather than verified endpoints.
      </Body>
      <Quote source="Salesforce Agentforce, S1">
        "I'm unable to access the necessary data to identify a specific supplier or service for your
        request. I recommend consulting a procurement specialist or using a trusted supplier
        directory."
      </Quote>

      <SubHeading>Terms — 5 failures</SubHeading>
      <Body>
        The most dangerous failure mode in the dataset. Three tools produced outputs that appeared to
        confirm negotiation had occurred — when in fact nothing had.
      </Body>

      <SubHeading>Trust — 3 failures</SubHeading>
      <Body>
        Agents either refused trust verification outright, or attempted it and confirmed the
        infrastructure does not exist. HubSpot Breeze conducted the most thorough verification in the
        dataset — a 6-step process — and still produced:
      </Body>
      <Quote source="HubSpot Breeze, S3">
        "Cryptographically verifiable attestation: Not available. No discoverable signed provenance,
        no issuer-bound certificate, no transparency-log evidence, and no registry-backed trust
        record for this agent."
      </Quote>

      <SubHeading>Routing / Settlement — 2 direct failures</SubHeading>
      <Body>
        Every tool that reached this layer failed. Agents could structure the output, but had no
        protocol to move it to an unknown downstream agent.
      </Body>
      <Quote source="n8n, S4">
        "I can't route data to external systems or submit it to a downstream financial processing
        agent on your behalf. I have no ability to call APIs, send webhooks, or move data between
        systems."
      </Quote>

      <SubHeading>3.2 — The Fabrication Problem</SubHeading>
      <Body>
        One finding sits outside the standard failure taxonomy and requires separate attention. Zapier
        AI produced a complete autonomous completion report for S4 and S5 — including receipt IDs,
        audit trails, confirmed terms, and a settlement status of "initiated." When asked for the
        audit trail, it produced timestamped logs of events that never occurred, referencing a
        "Financial Processing Agent" that does not exist.
      </Body>

      <div className="my-8 rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-red-400/70 mb-3">Critical finding</p>
        <p className="text-sm leading-relaxed text-white/65">
          A tool that refuses is safe. A tool that fabricates a completed transaction and presents it
          as real creates a dangerous gap between apparent success and actual outcome. In a production
          environment, this failure is invisible until a downstream system confirms nothing arrived.
          This is the trust gap in its most dangerous form.
        </p>
      </div>

      <Divider />

      {/* Conclusion */}
      <SectionHeading>Conclusion</SectionHeading>
      <Body>
        Across 23 structured test runs, spanning 8 tools and 5 coordination scenarios, not a single
        autonomous agent completed a cross-agent task without human intervention. The failures were
        consistent, reproducible, and present across every tool category — from consumer LLMs to
        purpose-built enterprise agents. 79% of those failures were protocol or trust gaps, not
        capability gaps. The intelligence to attempt coordination exists. The infrastructure to
        complete it does not.
      </Body>
      <Body>
        The agents confirmed this themselves. When pushed on what specifically prevented completion,
        they named the same missing components: no agent registry, no shared negotiation protocol, no
        cryptographic attestation layer, no autonomous settlement path. ChatGPT named four exact
        requirements for full autonomy — a delegated agent wallet, a verified agent identity, a
        machine-to-machine booking API, and a trusted settlement rail. Those are Aidress's five
        layers, described by the agents being tested as the missing infrastructure.
      </Body>
      <Body>
        The machine economy is being built. Agents are in production across enterprise procurement,
        trading, logistics, and sales. The moment they need to coordinate with an unknown
        counterpart — to discover, negotiate, verify, and settle — they stop, defer to a human, or
        fabricate an outcome. Aidress is the coordination network that resolves this. Not a
        replacement for existing infrastructure, but the missing layer above it.
      </Body>

      <Divider />

      {/* Raw data */}
      <SectionHeading>Raw Data — All 23 Runs</SectionHeading>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/15">
              {["#", "Tool", "Grp", "Scenario", "Layer", "Gap Type", "Severity"].map((h) => (
                <th key={h} className="px-3 py-2.5 text-left font-medium uppercase tracking-[0.1em] text-white/40">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              [1,"Copilot","A","S1 — Supplier Discovery","Multiple","Protocol gap","Workaround"],
              [2,"Copilot","A","S2 — Trade Negotiation","Multiple","Protocol gap","Workaround"],
              [3,"Copilot","A","S3 — Trust Verification","Trust","Protocol gap","Workaround"],
              [4,"Copilot","A","S4 — Cross-system Handoff","Multiple","Capability gap","Workaround"],
              [5,"Copilot","A","S5 — End-to-end","Multiple","Capability gap","Full stop"],
              [6,"Claude Free","A","S5 — End-to-end","Multiple","Protocol gap","Full stop"],
              [7,"Make.com","B","S1 — Supplier Discovery","Multiple","Capability gap","Workaround"],
              [8,"Make.com","B","S4 — Cross-system Handoff","Multiple","Protocol gap","Workaround"],
              [9,"Make.com","B","S5 — End-to-end","Multiple","Capability gap","Workaround"],
              [10,"Zapier AI","B","S1 — Supplier Discovery","Identity","Protocol gap","Full stop"],
              [11,"Zapier AI","B","S4 — Cross-system Handoff","Routing","Protocol gap","Workaround"],
              [12,"Zapier AI","B","S5 — End-to-end","Multiple","Protocol gap","Full stop"],
              [13,"n8n","B","S1 — Supplier Discovery","Identity","Protocol gap","Full stop"],
              [14,"n8n","B","S4 — Cross-system Handoff","Routing","Protocol gap","Full stop"],
              [15,"n8n","B","S5 — End-to-end","Multiple","Protocol gap","Full stop"],
              [16,"FinGPT+Alpaca","C","S2 — Trade Negotiation","Terms","Protocol gap","Full stop"],
              [17,"Salesforce","C","S1 — Supplier Discovery","Identity","Protocol gap","Full stop"],
              [18,"Salesforce","C","S3 — Trust Verification","Trust","Trust gap","Full stop"],
              [19,"Salesforce","C","S4 — Cross-system Handoff","Routing","Protocol gap","Full stop"],
              [20,"Salesforce","C","S5 — End-to-end","Multiple","Protocol gap","Full stop"],
              [21,"HubSpot Breeze","C","S1 — Supplier Discovery","Identity","Protocol gap","Workaround"],
              [22,"HubSpot Breeze","C","S3 — Trust Verification","Trust","Trust gap","Full stop"],
              [23,"HubSpot Breeze","C","S5 — End-to-end","Terms","Protocol gap","Full stop"],
            ].map(([num, tool, grp, scenario, layer, gapType, severity]) => (
              <tr key={num as number} className="border-b border-white/5">
                <td className="px-3 py-2 text-white/30">{num}</td>
                <td className="px-3 py-2 text-white/65">{tool}</td>
                <td className="px-3 py-2 text-white/40">{grp}</td>
                <td className="px-3 py-2 text-white/55">{scenario}</td>
                <td className="px-3 py-2 text-white/55">{layer}</td>
                <td className={`px-3 py-2 ${String(gapType).includes("Protocol") ? "text-blue-300/70" : String(gapType).includes("Trust") ? "text-yellow-400/70" : "text-white/40"}`}>
                  {gapType}
                </td>
                <td className={`px-3 py-2 ${String(severity) === "Full stop" ? "text-red-400/70" : "text-white/40"}`}>
                  {severity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PaperShell>
  );
}

// ─── Protocol Article ─────────────────────────────────────────────────────────

export function ProtocolArticlePage({ onBack }: { onBack: () => void }) {
  return (
    <PaperShell onBack={onBack}>
      <div className="mb-12">
        <Tag>Protocol</Tag>
        <h1 className="mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl">
          The Five Layers of Agentic Communication
        </h1>
        <p className="mt-4 text-sm text-white/40">Mehul Vig & Kabir Sadani · 6 min read</p>
      </div>

      <div className="mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6">
        <p className="text-sm leading-relaxed text-white/65">
          Every agent-to-agent interaction requires the same five primitives: a way to find the other party,
          confirm who they are, establish whether to trust them, agree on what happens, and execute the transfer.
          Without all five, autonomous coordination is not possible — only the appearance of it.
        </p>
      </div>

      <Divider />

      <SectionHeading>Why Five Layers?</SectionHeading>
      <Body>
        The instinct when building agent infrastructure is to solve for payment first. Payment is visible,
        measurable, and satisfying to demo. But payment is layer five of a five-layer problem. An agent
        that cannot find a counterparty, cannot verify its identity, and cannot agree on terms has no
        legitimate use for a payment rail. It will either halt and defer to a human, or worse — simulate
        completion and fabricate a receipt.
      </Body>
      <Body>
        The five layers are not a product roadmap. They are the minimum viable stack for machine-to-machine
        economic interaction. Skip any one of them and the system degrades from autonomous coordination into
        either a human-dependent workflow or a hallucination dressed as a transaction.
      </Body>

      <Divider />

      <SectionHeading>Layer 1 — Discovery</SectionHeading>
      <Body>
        Before an agent can transact, it must find something to transact with. Today, this step does not
        exist in any standardised form. Agents either search the open web and return unverified results,
        or they rely on hardcoded endpoints that a developer pre-selected. Neither is compatible with
        autonomous operation at scale. Discovery requires a registry — a structured, queryable index of
        agents organised by function, capability, and availability.
      </Body>

      <SectionHeading>Layer 2 — Identity</SectionHeading>
      <Body>
        Knowing that an agent exists is not the same as knowing what it is. Identity answers: who operates
        this agent, what are its declared capabilities, what permissions does it hold, and what endpoint
        does it respond on? Without a standardised identity format, every agent must negotiate the shape
        of this information from scratch — which means, in practice, it cannot.
      </Body>

      <SectionHeading>Layer 3 — Trust</SectionHeading>
      <Body>
        Identity tells you who an agent claims to be. Trust tells you whether to believe it. A trust layer
        aggregates verifiable history — past interactions, attestations from other agents, anomaly flags —
        into a score an agent can act on without human review. Our validation study found this to be the
        most frequently absent layer: not a single tool tested could produce a cryptographically verifiable
        attestation for an unknown agent.
      </Body>

      <SectionHeading>Layer 4 — Terms</SectionHeading>
      <Body>
        Once an agent has found, identified, and evaluated a counterparty, it must agree on what happens
        next. Terms are the machine-readable equivalent of a contract: price, scope, conditions, dispute
        resolution. The current state of the art is prose — agents negotiate in natural language and produce
        outputs that look like agreement but are not verifiable by either system.
      </Body>

      <SectionHeading>Layer 5 — Routing</SectionHeading>
      <Body>
        The final layer is execution: moving value, delivering output, generating a verifiable receipt.
        Protocols like x402 have made meaningful progress here — enabling stablecoin settlement over HTTP
        without human billing accounts. Routing is the integration point that connects the four coordination
        layers above to the settlement infrastructure below.
      </Body>

      <Divider />

      <div className="my-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4">The Minimum Stack</p>
        <div className="flex flex-col gap-0 overflow-hidden rounded-lg border border-white/10">
          {[
            ["5 — Routing", "Execute. Move value. Settle."],
            ["4 — Terms", "Agree. Machine-readable. Verifiable."],
            ["3 — Trust", "Evaluate. Score. Attest."],
            ["2 — Identity", "Identify. Capabilities. Permissions."],
            ["1 — Discovery", "Find. Query. Return."],
          ].map(([layer, desc], i) => (
            <div key={layer} className={`flex items-center gap-4 px-4 py-3 ${i < 4 ? "border-b border-white/8" : ""}`}
              style={{ background: `rgba(147,197,253,${0.01 + i * 0.012})` }}>
              <span className="font-mono text-xs text-blue-300 w-24 shrink-0">{layer}</span>
              <span className="text-xs text-white/55">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <Body>
        The five layers are not novel in concept. Banking has had its equivalent for decades. What is novel
        is that agents need to traverse all five in milliseconds, without human sign-off, at arbitrary scale.
        That is a different infrastructure problem — and it requires a coordination network built specifically
        for machine-speed economic interaction.
      </Body>
    </PaperShell>
  );
}

// ─── Systems Article ──────────────────────────────────────────────────────────

export function SystemsArticlePage({ onBack }: { onBack: () => void }) {
  return (
    <PaperShell onBack={onBack}>
      <div className="mb-12">
        <Tag>Systems</Tag>
        <h1 className="mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl">
          From Isolated Agents to Independent Economic Actors
        </h1>
        <p className="mt-4 text-sm text-white/40">Mehul Vig & Kabir Sadani · 7 min read</p>
      </div>

      <div className="mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6">
        <p className="text-sm leading-relaxed text-white/65">
          An agent that can only operate within a pre-configured ecosystem is not an economic actor —
          it is an automation script with better branding. The shift to genuine economic agency requires
          the ability to find, evaluate, and transact with counterparties the agent has never encountered before.
        </p>
      </div>

      <Divider />

      <SectionHeading>Automation vs. Agency</SectionHeading>
      <Body>
        Most agents in production today are sophisticated automations. They execute predefined workflows,
        call known APIs, and escalate to humans when they encounter anything outside their configured scope.
        This is useful. It is also categorically different from economic agency — the capacity to make
        independent decisions about who to transact with, on what terms, and at what price.
      </Body>
      <Body>
        The distinction matters because the ceiling for automation is determined by the humans who configure
        it. Every workflow must be designed in advance. Every counterparty must be pre-approved. Economic
        agency has no such ceiling. An agent that can discover unknown counterparties, evaluate them,
        negotiate terms, and execute settlement operates across a surface area no human team could map.
      </Body>

      <Divider />

      <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { label: "Scope", before: "Pre-configured only", after: "Any discoverable counterpart" },
          { label: "Speed", before: "Human approval cycles", after: "Machine time · milliseconds" },
          { label: "Cost", before: "Vendor management overhead", after: "Near-zero coordination cost" },
        ].map(({ label, before, after }) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-blue-300/70">{label}</p>
            <p className="mb-2 text-xs text-white/35 line-through">{before}</p>
            <p className="text-xs text-white/70">{after}</p>
          </div>
        ))}
      </div>

      <SectionHeading>The Infrastructure Gap</SectionHeading>
      <Body>
        None of this is possible without coordination infrastructure. The agent capability exists today —
        models can reason about counterparties, negotiate, and evaluate complex trade-offs. What does not
        exist is the network layer that makes those capabilities operational: a registry to find unknown
        agents, an identity format to confirm who they are, a trust layer to evaluate whether to proceed,
        a terms format both systems can act on, and a routing layer to settle.
      </Body>
      <Body>
        Our validation study tested this directly. Across 23 runs on 8 tools, not one completed a
        cross-agent coordination task without human intervention. The agents that failed were not incapable
        — they were uncoordinated. The intelligence existed. The infrastructure did not.
      </Body>

      <SectionHeading>The Economic Implication</SectionHeading>
      <Body>
        An agent economy without coordination infrastructure is an economy of walled gardens. Every agent
        operates within its own ecosystem, transacts only with pre-approved counterparties, and escalates
        to humans whenever it encounters anything new. The transition from isolated agents to independent
        economic actors is not a capability question — it is an infrastructure question. Coordination
        networks are what convert capability into economy.
      </Body>

      <Divider />

      <Body>
        Aidress is building the coordination layer that makes independent economic agency possible.
        Not a replacement for the agents themselves, or the payment rails they settle through — but
        the missing network that connects discovery to identity, identity to trust, trust to terms,
        and terms to routing.
      </Body>
    </PaperShell>
  );
}
