import React from 'react';
export function Eyebrow({children,tone='muted',style}){
  return <div style={{font:'400 12px/1 var(--font-mono)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:tone==='accent'?'var(--text-accent)':tone==='ink'?'var(--ink)':'var(--text-secondary)',...style}}>{children}</div>;
}