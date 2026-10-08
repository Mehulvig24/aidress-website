// Ported from design_handoff_aidress_website/design/components (core/Eyebrow.jsx). Styles are verbatim.
import React from 'react';

export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: 'muted' | 'ink' | 'accent';
  style?: React.CSSProperties;
}

export function Eyebrow({children,tone='muted',style}: EyebrowProps){
  return <div style={{font:'400 12px/1 var(--font-mono)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:tone==='accent'?'var(--text-accent)':tone==='ink'?'var(--ink)':'var(--text-secondary)',...style}}>{children}</div>;
}
