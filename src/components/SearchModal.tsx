import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Hash, CornerDownLeft } from "lucide-react";

// ─── Search index ───────────────────────────────────────────────────────────

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

function searchDocs(query: string): SearchEntry[] {
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

// ─── Modal component ────────────────────────────────────────────────────────

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = searchDocs(query);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const go = useCallback(
    (slug: string) => {
      navigate(`/docs/${slug}`);
      onClose();
    },
    [navigate, onClose]
  );

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        go(results[selected].slug);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selected, go, onClose]);

  if (!open) return null;

  // Group results by section
  const grouped: Record<string, typeof results> = {};
  for (const r of results) {
    if (!grouped[r.section]) grouped[r.section] = [];
    grouped[r.section].push(r);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh]" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--docs-bg)", opacity: 0.8 }} />

      {/* Modal */}
      <div
        className="relative w-full max-w-[640px] mx-4 overflow-hidden"
        style={{
          backgroundColor: "var(--docs-bg)",
          border: "1px solid var(--docs-border)",
          borderRadius: "12px",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px var(--docs-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-1" style={{ borderBottom: "1px solid var(--docs-border)" }}>
          <Search size={18} style={{ color: "var(--docs-faint)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[var(--docs-faint)]"
            style={{
              color: "var(--docs-heading)",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: "-0.01em",
            }}
          />
          <kbd
            className="text-[11px] font-medium px-1.5 py-0.5"
            style={{
              color: "var(--docs-faint)",
              backgroundColor: "var(--docs-search-kbd)",
              borderRadius: "4px",
              border: "1px solid var(--docs-border)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="max-h-[400px] overflow-y-auto" style={{ padding: "8px" }}>
            {results.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <div className="text-sm" style={{ color: "var(--docs-faint)" }}>
                  No results for "<span style={{ color: "var(--docs-heading)" }}>{query}</span>"
                </div>
                <div className="mt-1 text-xs" style={{ color: "var(--docs-faint)" }}>
                  Try different keywords or check spelling
                </div>
              </div>
            ) : (
              Object.entries(grouped).map(([section, items]) => (
                <div key={section}>
                  <div
                    className="px-3 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--docs-faint)" }}
                  >
                    {section}
                  </div>
                  {items.map((r) => {
                    const globalIdx = results.indexOf(r);
                    const isActive = globalIdx === selected;
                    return (
                      <button
                        key={r.slug}
                        type="button"
                        onClick={() => go(r.slug)}
                        onMouseEnter={() => setSelected(globalIdx)}
                        className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-all"
                        style={{
                          backgroundColor: isActive ? "var(--docs-accent-bg)" : "transparent",
                          borderRadius: "8px",
                        }}
                      >
                        <div
                          className="flex items-center justify-center shrink-0"
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "6px",
                            backgroundColor: isActive ? "var(--docs-accent-bg)" : "var(--docs-search-kbd)",
                            border: `1px solid ${isActive ? "var(--docs-accent)" : "var(--docs-border)"}`,
                          }}
                        >
                          {r.section === "API Reference" ? (
                            <Hash size={13} style={{ color: isActive ? "var(--docs-accent)" : "var(--docs-faint)", opacity: isActive ? 1 : 0.7 }} />
                          ) : (
                            <FileText size={13} style={{ color: isActive ? "var(--docs-accent)" : "var(--docs-faint)", opacity: isActive ? 1 : 0.7 }} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[13px] font-medium truncate"
                            style={{
                              color: isActive ? "var(--docs-accent)" : "var(--docs-heading)",
                              fontFamily: r.section === "API Reference" ? "'JetBrains Mono', monospace" : "inherit",
                              fontSize: r.section === "API Reference" ? "12px" : "13px",
                            }}
                          >
                            {r.title}
                          </div>
                        </div>
                        {isActive && (
                          <div className="flex items-center gap-1 shrink-0">
                            <CornerDownLeft size={12} style={{ color: "var(--docs-accent)" }} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}

        {/* Empty state — show popular pages */}
        {!query.trim() && (
          <div className="px-2 py-2" style={{ borderTop: "none" }}>
            <div
              className="px-3 pt-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--docs-faint)" }}
            >
              Popular
            </div>
            {[
              { slug: "quickstart", title: "Quickstart", section: "Getting Started" },
              { slug: "verify", title: "POST /verify", section: "API Reference" },
              { slug: "register", title: "POST /register", section: "API Reference" },
              { slug: "trust-scores", title: "Trust Scores", section: "Core Concepts" },
              { slug: "python-sdk", title: "Python SDK", section: "SDKs & Integrations" },
            ].map((r) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => go(r.slug)}
                className="flex w-full items-center gap-3 px-3 py-2 text-left transition-all"
                style={{ borderRadius: "8px" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--docs-accent-bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    backgroundColor: "var(--docs-search-kbd)",
                    border: "1px solid var(--docs-border)",
                  }}
                >
                  {r.section === "API Reference" ? (
                    <Hash size={13} style={{ color: "var(--docs-faint)", opacity: 0.7 }} />
                  ) : (
                    <FileText size={13} style={{ color: "var(--docs-faint)", opacity: 0.7 }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[13px] font-medium truncate"
                    style={{
                      color: "var(--docs-heading)",
                      fontFamily: r.section === "API Reference" ? "'JetBrains Mono', monospace" : "inherit",
                      fontSize: r.section === "API Reference" ? "12px" : "13px",
                    }}
                  >
                    {r.title}
                  </div>
                </div>
                <span className="text-[11px]" style={{ color: "var(--docs-faint)" }}>{r.section}</span>
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderTop: "1px solid var(--docs-border)" }}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--docs-faint)" }}>
              <kbd
                style={{
                  backgroundColor: "var(--docs-search-kbd)",
                  border: "1px solid var(--docs-border)",
                  borderRadius: "3px",
                  padding: "1px 5px",
                  fontSize: "10px",
                  color: "var(--docs-search-kbd-text)",
                }}
              >
                ↑
              </kbd>
              <kbd
                style={{
                  backgroundColor: "var(--docs-search-kbd)",
                  border: "1px solid var(--docs-border)",
                  borderRadius: "3px",
                  padding: "1px 5px",
                  fontSize: "10px",
                  color: "var(--docs-search-kbd-text)",
                }}
              >
                ↓
              </kbd>
              <span className="ml-0.5">navigate</span>
            </span>
            <span className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--docs-faint)" }}>
              <kbd
                style={{
                  backgroundColor: "var(--docs-search-kbd)",
                  border: "1px solid var(--docs-border)",
                  borderRadius: "3px",
                  padding: "1px 5px",
                  fontSize: "10px",
                  color: "var(--docs-search-kbd-text)",
                }}
              >
                ↵
              </kbd>
              <span className="ml-0.5">open</span>
            </span>
          </div>
          <span className="text-[11px]" style={{ color: "var(--docs-faint)" }}>
            {results.length > 0 ? `${results.length} result${results.length > 1 ? "s" : ""}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Search trigger button ──────────────────────────────────────────────────

export function SearchTrigger({ onClick, className }: { onClick: () => void; className?: string }) {
  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClick();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClick]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors ${className || ""}`}
      style={{
        backgroundColor: "var(--docs-search-bg)",
        border: "1px solid var(--docs-search-border)",
        color: "var(--docs-search-text)",
        borderRadius: "8px",
      }}
    >
      <Search size={13} />
      <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>Search</span>
      <kbd
        className="ml-2 text-[10px] font-medium"
        style={{
          backgroundColor: "var(--docs-search-kbd)",
          color: "var(--docs-search-kbd-text)",
          padding: "2px 6px",
          borderRadius: "4px",
          border: "1px solid var(--docs-search-border)",
        }}
      >
        ⌘K
      </kbd>
    </button>
  );
}
