// Shared layout for the legal pages (/privacy, /terms). Pre-redesign body styling, kept as-is:
// classes are served by src/styles/legal.css, not Tailwind.
import React, { useEffect } from "react";

export function Shell({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="ad-legal min-h-screen bg-[#06070a] text-white">
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

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-12 text-xl font-medium tracking-tight text-white">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-8 text-base font-medium text-white/80">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm leading-[1.85] text-white/60">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 ml-4 list-disc space-y-1 text-sm leading-[1.85] text-white/60">{children}</ul>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-white/80">{children}</strong>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="underline text-white/80 hover:text-white">{children}</a>;
}

/** Shared header for every legal page. */
export function LegalHeader({ title, updated }: { title: string; updated: string }) {
  return (
    <>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">Legal</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h1>
      <p className="mb-12 text-sm text-white/40">Last updated: {updated}</p>
    </>
  );
}

export const LEGAL_ENTITY = "Aidress Pte. Ltd.";
export const LEGAL_CONTACT = "teamaidress@gmail.com";
