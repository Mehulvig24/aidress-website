// Ported from design_handoff_aidress_website/design/components (core/Avatar.jsx). Styles are verbatim.
import React from 'react';

export interface AvatarProps {
  /** single initial — agents are identified by letter until they supply a mark */
  letter?: string;
  size?: number;
  tone?: 'neutral' | 'ink' | 'resolved';
  /** offset ring, as on the graph hub node */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar({letter='A',size=48,tone='neutral',ring=false,style}: AvatarProps){
  const T={neutral:{bg:'var(--stone-100)',fg:'var(--ink)'},ink:{bg:'var(--ink)',fg:'var(--paper)'},resolved:{bg:'var(--vermilion-500)',fg:'var(--white)'}}[tone];
  return <div style={{width:size,height:size,borderRadius:'50%',background:T.bg,color:T.fg,display:'flex',alignItems:'center',justifyContent:'center',flex:'none',
    font:'500 '+Math.round(size*0.42)+'px/1 var(--font-sans)',border:tone==='neutral'?'1px solid var(--border-default)':'none',
    boxShadow:ring?(tone==='resolved'?'var(--shadow-resolved-ring)':'var(--shadow-node-ring)'):'none',...style}}>{letter}</div>;
}
