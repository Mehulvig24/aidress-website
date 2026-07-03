import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hash, FileText, CornerDownLeft } from "lucide-react";
import { GooeyInput } from "@/components/ui/gooey-input";
import { searchDocs } from "@/components/SearchModal";

type Variant = "docs" | "site";

const THEME: Record<Variant, { surface: string; border: string; text: string; faint: string; accent: string; accentBg: string }> = {
  docs: {
    surface: "var(--docs-callout-bg)",
    border: "var(--docs-border)",
    text: "var(--docs-heading)",
    faint: "var(--docs-faint)",
    accent: "var(--docs-accent)",
    accentBg: "var(--docs-accent-bg)",
  },
  site: {
    surface: "#0b0b0b",
    border: "rgba(255,255,255,0.1)",
    text: "#ffffff",
    faint: "rgba(255,255,255,0.4)",
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.1)",
  },
};

// Literal class strings so Tailwind's build-time scanner picks them up.
const GOOEY_CLASSES: Record<Variant, { trigger: string; input: string; bubbleSurface: string }> = {
  docs: {
    trigger: "!bg-[var(--docs-callout-bg)] !text-[var(--docs-faint)] !ring-1 !ring-[var(--docs-border)] !justify-start",
    input: "!text-[var(--docs-heading)] placeholder:!text-[var(--docs-faint)]",
    bubbleSurface: "!bg-[var(--docs-callout-bg)] !text-[var(--docs-heading)] !ring-1 !ring-[var(--docs-border)]",
  },
  site: {
    trigger: "!bg-[var(--card)] !text-[var(--text-faint)] !ring-1 !ring-[var(--border)] !justify-start",
    input: "!text-[var(--text)] placeholder:!text-[var(--text-faint)]",
    bubbleSurface: "!bg-[var(--card)] !text-[var(--text)] !ring-1 !ring-[var(--border)]",
  },
};

/**
 * Gooey search pill with a live typeahead dropdown (Google-style preview).
 * Click a suggestion or press Enter to jump to the best match.
 */
export function SearchBox({ variant = "docs", className }: { variant?: Variant; className?: string }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const t = THEME[variant];

  const results = useMemo(() => searchDocs(query), [query]);
  const show = open && query.trim().length > 0;

  useEffect(() => setActive(0), [query]);

  function go(slug: string) {
    navigate(`/docs/${slug}`);
    setQuery("");
    setOpen(false);
  }

  return (
    <div ref={rootRef} className={`relative ${className || ""}`}>
      <GooeyInput
        placeholder="Search docs…"
        collapsedWidth={150}
        expandedWidth={variant === "site" ? 230 : 240}
        value={query}
        onValueChange={setQuery}
        onOpenChange={setOpen}
        onSubmit={() => {
          if (results[active]) go(results[active].slug);
          else if (results[0]) go(results[0].slug);
        }}
        classNames={GOOEY_CLASSES[variant]}
      />

      {show && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-[340px] max-w-[85vw] overflow-hidden rounded-xl py-1.5 shadow-2xl"
          style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-[13px]" style={{ color: t.faint }}>
              No results for “<span style={{ color: t.text }}>{query}</span>”
            </div>
          ) : (
            results.map((r, i) => {
              const isActive = i === active;
              const isApi = r.section === "API Reference";
              return (
                <button
                  key={r.slug}
                  type="button"
                  // prevent the gooey input from blurring/collapsing before the click lands
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r.slug)}
                  className="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors"
                  style={{ backgroundColor: isActive ? t.accentBg : "transparent" }}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${t.border}` }}
                  >
                    {isApi ? (
                      <Hash size={13} style={{ color: isActive ? t.accent : t.faint }} />
                    ) : (
                      <FileText size={13} style={{ color: isActive ? t.accent : t.faint }} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="block truncate text-[13px] font-medium"
                      style={{
                        color: isActive ? t.accent : t.text,
                        fontFamily: isApi ? "'JetBrains Mono', monospace" : "inherit",
                        fontSize: isApi ? "12px" : "13px",
                      }}
                    >
                      {r.title}
                    </span>
                    <span className="block truncate text-[11px]" style={{ color: t.faint }}>{r.section}</span>
                  </span>
                  {isActive && <CornerDownLeft size={12} style={{ color: t.accent }} className="shrink-0" />}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
