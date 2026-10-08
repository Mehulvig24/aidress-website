// Ported from design_handoff_aidress_website/design/components (cards/IndustryCard.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';
import { MediaSlot } from './MediaSlot';

export interface IndustryCardProps {
  title: string;
  /** e.g. "482 Agents" */
  agents: React.ReactNode;
  /** before → after, e.g. "4h → 18s" — turns vermilion on hover */
  metric: React.ReactNode;
  /** image URL; empty renders a stone placeholder */
  media?: string;
  /** sm = six-up home row · lg = 3-col industry grid */
  size?: 'sm' | 'lg';
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function IndustryCard({title,agents,metric,media,size='sm',onClick,style}: IndustryCardProps){
  const [h,setH]=React.useState(false);
  const lg=size==='lg';
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'flex',flexDirection:'column',gap:lg?20:18,padding:lg?'28px 28px 24px':'20px 18px 18px',
    background:'var(--surface-card)',border:'1px solid '+(h?'var(--border-default)':'var(--border-subtle)'),borderRadius:'var(--radius-sm)',boxShadow:h?'var(--shadow-hover)':'none',cursor:onClick?'pointer':'default',
    transition:'box-shadow var(--dur-base) var(--ease-resolve),border-color var(--dur-base)',boxSizing:'border-box',...style}}>
    {lg?<MediaSlot src={media} ratio="12/5"/>:<MediaSlot src={media} ratio="3/2" style={{width:78}}/>}
    <div style={{display:'flex',alignItems:'flex-end',gap:12}}>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:lg?10:7}}>
        <div style={{font:'600 '+(lg?22:16)+'px/1.15 var(--font-sans)',letterSpacing:'-0.015em',color:'var(--ink)'}}>{title}</div>
        <div style={{font:'400 '+(lg?19:14)+'px/1.3 var(--font-sans)',color:'var(--text-secondary)'}}>{agents}</div>
        <div style={{font:(lg?'400 19px':'500 14px')+'/1.3 var(--font-sans)',color:h?'var(--text-accent)':(lg?'var(--text-secondary)':'var(--ink)'),transition:'color var(--dur-base)'}}>{metric}</div>
      </div>
      <Icon name="arrow-right" size={lg?20:14} style={{marginBottom:3,transform:h?'translateX(3px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>
    </div>
  </div>;
}
