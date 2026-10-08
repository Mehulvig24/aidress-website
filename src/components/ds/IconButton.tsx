// Ported from design_handoff_aidress_website/design/components (core/IconButton.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

export interface IconButtonProps {
  icon: IconName;
  /** accessible label + tooltip */
  label: string;
  variant?: 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** ink fill for toggled state */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function IconButton({icon,label,variant='ghost',size='md',active=false,onClick,style}: IconButtonProps){
  const [h,setH]=React.useState(false);
  const d=size==='sm'?28:size==='lg'?44:36;
  const bg=active?'var(--ink)':variant==='outline'?(h?'var(--surface-sunken)':'var(--surface-card)'):(h?'var(--surface-muted)':'transparent');
  return <button aria-label={label} title={label} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:0,background:bg,color:active?'var(--paper)':'var(--ink)',
    border:variant==='outline'?'1px solid var(--border-default)':'1px solid transparent',borderRadius:'var(--radius-sm)',cursor:'pointer',transition:'background var(--dur-fast)',...style}}>
    <Icon name={icon} size={size==='sm'?14:size==='lg'?20:16}/>
  </button>;
}
