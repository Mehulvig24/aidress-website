// Ported from design_handoff_aidress_website/design/components (cards/LayerCard.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';
import { MediaSlot } from './MediaSlot';

export interface LayerCardProps {
  title: string;
  description: React.ReactNode;
  media?: string;
  /** mono caption in the empty media slot, e.g. "L1" */
  index?: string;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function LayerCard({title,description,media,index,onClick,active=false,style}: LayerCardProps){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',flexDirection:'column',gap:12,padding:11,background:'var(--surface-card)',
    border:'1px solid '+(active?'var(--ink)':h?'var(--border-default)':'var(--border-subtle)'),borderRadius:'var(--radius-xs)',cursor:onClick?'pointer':'default',boxShadow:h?'var(--shadow-hover)':'none',
    transition:'box-shadow var(--dur-base),border-color var(--dur-base)',boxSizing:'border-box',...style}}>
    <MediaSlot src={media} ratio="5/2" label={index}/>
    <div style={{display:'flex',gap:8,alignItems:'flex-start',padding:'0 2px 6px'}}>
      <div style={{flex:1}}>
        <div style={{font:'600 15px/1.2 var(--font-sans)',color:'var(--ink)'}}>{title}</div>
        <div style={{font:'400 13.5px/1.4 var(--font-sans)',color:'var(--text-secondary)',marginTop:5}}>{description}</div>
      </div>
      <Icon name="arrow-right" size={14} style={{marginTop:2,transform:h?'translateX(3px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>
    </div>
  </div>;
}
