// Ported from design_handoff_aidress_website/design/components (site/SectionHeader.jsx). Styles are verbatim.
import React from 'react';

export interface SectionHeaderProps {
  /** "01" — rendered as "01 / LABEL" in mono caps */
  index?: string;
  label?: string;
  /** right-aligned mono caps line, e.g. "One registry. Five layers." */
  tagline?: string;
  title: React.ReactNode;
  /** grey paragraph, right column, bottom-aligned with the headline */
  lead?: React.ReactNode;
  tone?: 'light' | 'dark';
  /** lg 64px · md 48px · sm 36px headline */
  size?: 'lg' | 'md' | 'sm';
  style?: React.CSSProperties;
}

export function SectionHeader({index,label,tagline,title,lead,tone='light',size='lg',style}: SectionHeaderProps){
  const dark=tone==='dark';
  const fg=dark?'var(--paper)':'var(--ink-deep)';const mute=dark?'var(--gray-400)':'var(--text-secondary)';
  const fs=size==='lg'?64:size==='md'?48:36;
  return <div style={{display:'flex',flexDirection:'column',gap:size==='lg'?44:32,...style}}>
    {(index||label||tagline)&&<div style={{display:'flex',justifyContent:'space-between',gap:24,font:'400 14px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em',color:fg}}>
      <span>{index?index+' / ':''}{label}</span>{tagline&&<span>{tagline}</span>}</div>}
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.4fr) minmax(0,1fr)',gap:48,alignItems:'end'}}>
      <h2 style={{margin:0,font:'500 '+fs+'px/0.98 var(--font-sans)',letterSpacing:'-0.05em',color:fg,textWrap:'balance'}}>{title}</h2>
      {lead&&<p style={{margin:0,justifySelf:'end',maxWidth:400,font:'400 16px/1.5 var(--font-sans)',color:mute,textWrap:'pretty'}}>{lead}</p>}
    </div>
  </div>;
}
