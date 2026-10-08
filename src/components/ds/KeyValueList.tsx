// Ported from design_handoff_aidress_website/design/components (data/KeyValueList.jsx). Styles are verbatim.
import React from 'react';

export interface KeyValueRow { label: React.ReactNode; value: React.ReactNode; /** mono value for IDs, protocols, hashes */ mono?: boolean; accent?: boolean; }
export interface KeyValueListProps {
  rows: KeyValueRow[];
  /** md 40px rows (panels) · lg 56px rows (passport, metrics) */
  size?: 'md' | 'lg';
  /** label column width */
  split?: string;
  /** value alignment — right for compact side panels */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}

export function KeyValueList({rows=[],size='md',split='45%',align='left',style}: KeyValueListProps){
  const lg=size==='lg';
  return <div style={{display:'flex',flexDirection:'column',...style}}>
    {rows.map((r,i)=><div key={i} style={{display:'grid',gridTemplateColumns:split+' 1fr',alignItems:'center',minHeight:lg?56:40,borderBottom:'1px solid var(--border-subtle)',gap:12}}>
      <div style={{font:'400 '+(lg?17:14)+'px/1.3 var(--font-sans)',color:'var(--text-secondary)'}}>{r.label}</div>
      <div style={{font:r.mono?('400 '+(lg?15:13)+'px/1.3 var(--font-mono)'):('400 '+(lg?17:14)+'px/1.3 var(--font-sans)'),color:r.accent?'var(--text-accent)':'var(--ink)',textAlign:align,fontVariantNumeric:'tabular-nums'}}>{r.value}</div>
    </div>)}
  </div>;
}
