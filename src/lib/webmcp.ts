// Docs search index for the search_aidress_docs tool (moved from the pre-redesign SearchModal).
interface SearchEntry {
  slug: string;
  title: string;
  section: string;
  keywords: string;
}

const searchIndex: SearchEntry[] = [
  { slug: "introduction", title: "Introduction", section: "Getting Started", keywords: "introduction getting started five layers base url overview what is aidress coordination" },
  { slug: "quickstart", title: "Quickstart", section: "Getting Started", keywords: "quickstart start verify python sdk curl mcp claude install 60 seconds first agent" },
  { slug: "authentication", title: "Authentication", section: "Getting Started", keywords: "authentication auth api key X-API-KEY header public endpoints org key" },
  { slug: "trust-scores", title: "Trust Scores", section: "Core Concepts", keywords: "trust score 0 100 tiers thresholds calculation flags rating proceed abort caution" },
  { slug: "anti-gaming", title: "Anti-Gaming Rules", section: "Core Concepts", keywords: "anti gaming rules rater minimum self rating same org block duplicate review penalty collusion" },
  { slug: "capability-resolution", title: "Capability Resolution", section: "Core Concepts", keywords: "capability resolution llm synonym canonical 202 confirmation match register freight booking" },
  { slug: "org-api-keys", title: "Org API Keys", section: "Core Concepts", keywords: "org api key auto verify score 70 register update list agents management" },
  { slug: "verify", title: "POST /verify", section: "API Reference", keywords: "post verify agent trust score capabilities flags routing lookup check unregistered" },
  { slug: "match", title: "POST /match", section: "API Reference", keywords: "post match find agents capabilities required settlement rail ranked composite score discover" },
  { slug: "register", title: "POST /register", section: "API Reference", keywords: "post register new agent org name domain email capabilities endpoint 201 202 409" },
  { slug: "review", title: "POST /review", section: "API Reference", keywords: "post review transaction rating score success anti gaming 403 trust update" },
  { slug: "call", title: "POST /call", section: "API Reference", keywords: "post call proxy payload endpoint 24 hour review window penalty" },
  { slug: "update", title: "POST /update", section: "API Reference", keywords: "post update agent profile fields capabilities endpoint settlement rail org key" },
  { slug: "import-agent", title: "POST /import-agent", section: "API Reference", keywords: "post import agent a2a well known agent json domain preview missing fields" },
  { slug: "get-agent", title: "GET /agent/{id}", section: "API Reference", keywords: "get agent profile ratings received full lookup 404" },
  { slug: "registry", title: "GET /registry", section: "API Reference", keywords: "get registry list all agents paginated limit offset trusted" },
  { slug: "health", title: "GET /health", section: "API Reference", keywords: "get health liveness check status ok db connected" },
  { slug: "org-agents", title: "GET /org/agents", section: "API Reference", keywords: "get org agents list api key organization" },
  { slug: "python-sdk", title: "Python SDK", section: "SDKs & Integrations", keywords: "python sdk pip install aidress verify match register review client class error handling retry" },
  { slug: "mcp-server", title: "MCP Server", section: "SDKs & Integrations", keywords: "mcp server claude desktop code cursor tools remote http transport environment variables" },
  { slug: "error-codes", title: "Error Codes", section: "Reference", keywords: "error codes 200 201 202 400 403 404 409 422 503 detail handling retry" },
  { slug: "a2a-compatibility", title: "A2A Compatibility", section: "Reference", keywords: "a2a compatibility google agent to agent messaging discovery import agent card well known" },
];

export function searchDocs(query: string): SearchEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const terms = q.split(/\s+/);

  return searchIndex
    .map((entry) => {
      const haystack = `${entry.title} ${entry.section} ${entry.keywords}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) score++;
        if (entry.title.toLowerCase().includes(term)) score += 3;
        if (entry.slug.includes(term)) score += 2;
      }
      return { ...entry, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

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
