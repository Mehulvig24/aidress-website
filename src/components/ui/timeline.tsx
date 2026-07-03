import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

/**
 * Docs-themed timeline (adapted from Aceternity UI).
 * Sticky date on the left, content on the right, a subtle vertical rail with
 * dots down the middle. Themed with --docs-* CSS variables. Neon-style spacing.
 */
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative mt-6">
      {/* Vertical rail */}
      <div
        className="absolute bottom-2 left-[5px] top-2 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--docs-border) 6%, var(--docs-border) 94%, transparent)",
        }}
      />

      {data.map((item, index) => (
        <div key={index} className="relative flex gap-5 pb-14 md:gap-8">
          {/* Dot */}
          <div
            className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full"
            style={{ backgroundColor: "var(--docs-accent)", boxShadow: "0 0 0 4px var(--docs-bg)" }}
          />

          {/* Sticky date (desktop) */}
          <time
            className="sticky top-24 hidden h-fit w-[120px] shrink-0 pl-8 text-[13px] font-medium uppercase tracking-wide md:block"
            style={{ color: "var(--docs-faint)" }}
          >
            {item.title}
          </time>

          {/* Content */}
          <div className="min-w-0 flex-1 pl-8 md:pl-0">
            <time
              className="mb-3 block text-[12px] font-medium uppercase tracking-wide md:hidden"
              style={{ color: "var(--docs-faint)" }}
            >
              {item.title}
            </time>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
