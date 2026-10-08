// Ported from design_handoff_aidress_website/design/components (site/ModeToggle.jsx). Styles are verbatim.
import React from 'react';

export interface ModeToggleProps {
  value?: 'human' | 'machine';
  onChange?: (value: 'human' | 'machine') => void;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}

export function ModeToggle({value='human',onChange,tone='light',style}: ModeToggleProps){
  const opt=v=>{const on=v===value;return <button key={v} onClick={()=>onChange&&onChange(v)} style={{all:'unset',cursor:'pointer',padding:'6px 9px',font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.04em',
    background:on?(tone==='dark'?'var(--paper)':'var(--ink-deep)'):'transparent',color:on?(tone==='dark'?'var(--ink-deep)':'var(--paper)'):'var(--text-secondary)',transition:'background var(--dur-fast)'}}>{v}</button>;};
  return <div style={{display:'inline-flex',border:'1px solid '+(tone==='dark'?'#444':'var(--border-box)'),padding:2,gap:2,...style}}>{opt('human')}{opt('machine')}</div>;
}
