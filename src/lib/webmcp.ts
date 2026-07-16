import { searchDocs } from "@/components/SearchModal";

// WebMCP is experimental and still shifting shape between drafts — the
// community spec uses document.modelContext.registerTool(), while Chrome's
// early-preview build has been described using navigator.modelContext /
// provideContext(). Feature-detect both; this is a no-op everywhere else.

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: object;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
}

const tools: WebMcpTool[] = [
  {
    name: "verify_agent",
    description: "Look up an AI agent's Aidress trust score, verification status, and flags before transacting with it.",
    inputSchema: {
      type: "object",
      properties: { agent_id: { type: "string", description: "The Aidress agent ID to verify" } },
      required: ["agent_id"],
    },
    execute: async ({ agent_id }) => {
      const res = await fetch("https://api.aidress.ai/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent_id }),
      });
      return res.json();
    },
  },
  {
    name: "search_aidress_docs",
    description: "Search the Aidress documentation for a page matching a query (e.g. an endpoint name, SDK, or concept).",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Search terms" } },
      required: ["query"],
    },
    execute: async ({ query }) => {
      const results = searchDocs(String(query)).slice(0, 5);
      return results.map((r) => ({ title: r.title, section: r.section, url: `https://aidress.ai/docs/${r.slug}` }));
    },
  },
];

export function registerWebMcpTools() {
  try {
    const docModelContext = (document as unknown as { modelContext?: { registerTool: (t: WebMcpTool) => void } }).modelContext;
    if (docModelContext?.registerTool) {
      for (const tool of tools) docModelContext.registerTool(tool);
      return;
    }

    const navModelContext = (navigator as unknown as { modelContext?: { provideContext: (c: { tools: WebMcpTool[] }) => void } }).modelContext;
    if (navModelContext?.provideContext) {
      navModelContext.provideContext({ tools });
    }
  } catch {
    // WebMCP surface present but incompatible with this shape — safe to ignore.
  }
}
