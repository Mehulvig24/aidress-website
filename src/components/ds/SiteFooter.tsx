// Ported from design_handoff_aidress_website/design/components (site/SiteFooter.jsx). Styles are verbatim.
import React from 'react';

export interface FooterLink { label: string; to?: string; }
export interface SiteFooterProps {
  columns: { title: string; links: (string | FooterLink)[] }[];
  onNavigate?: (to: string) => void;
  note?: string;
  style?: React.CSSProperties;
}

export function SiteFooter({columns=[],onNavigate,note='© 2026 Aidress',style}: SiteFooterProps){
  return <footer style={{background:'var(--ink-deep)',color:'var(--paper)',padding:'64px var(--gutter) 32px',...style}}>
    <div style={{display:'grid',gridTemplateColumns:'1.4fr repeat('+columns.length+',1fr)',gap:32}}>
      <div style={{font:'700 28px/1 var(--font-sans)',letterSpacing:'-0.035em'}}>AIDRESS</div>
      {columns.map(c=><div key={c.title} style={{display:'flex',flexDirection:'column',gap:12}}>
        <div style={{font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',color:'var(--gray-400)',marginBottom:6}}>{c.title}</div>
        {c.links.map(l=>{const lab=typeof l==='string'?l:l.label;const to=typeof l==='string'?null:l.to;return <a key={lab} onClick={()=>to&&onNavigate&&onNavigate(to)} style={{font:'400 14px/1.2 var(--font-sans)',color:'var(--paper)',cursor:'pointer'}}>{lab}</a>;})}
      </div>)}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',marginTop:72,paddingTop:20,borderTop:'1px solid #3a3c38',font:'400 12px/1 var(--font-mono)',color:'var(--gray-400)',textTransform:'uppercase'}}><span>{note}</span><span>Orange = resolved</span></div>
  </footer>;
}
