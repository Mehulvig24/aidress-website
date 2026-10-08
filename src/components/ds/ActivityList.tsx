// Ported from design_handoff_aidress_website/design/components (data/ActivityList.jsx). Styles are verbatim.
import React from 'react';

export interface ActivityItem { text: React.ReactNode; time: string; /** vermilion dot — a transaction that resolved */ resolved?: boolean; }
export interface ActivityListProps {
  items: ActivityItem[];
  /** md = side-panel dots · lg = passport rows with hairlines */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}

export function ActivityList({items=[],size='md',style}: ActivityListProps){
  const lg=size==='lg';
  return <div style={{display:'flex',flexDirection:'column',...style}}>
    {items.map((it,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:lg?16:14,minHeight:lg?55:34,borderBottom:lg?'1px solid var(--border-subtle)':'none'}}>
      <span style={{width:lg?26:8,height:lg?26:8,borderRadius:'50%',flex:'none',background:it.resolved?'var(--vermilion-500)':(lg?'var(--stone-100)':'var(--gray-600)'),border:lg&&!it.resolved?'1px solid var(--border-default)':'none'}}/>
      <span style={{flex:1,font:'400 '+(lg?17:14)+'px/1.3 var(--font-sans)',color:'var(--ink)'}}>{it.text}</span>
      <span style={{font:'400 '+(lg?16:13)+'px/1 var(--font-sans)',color:'var(--text-tertiary)',whiteSpace:'nowrap'}}>{it.time}</span>
    </div>)}
  </div>;
}
