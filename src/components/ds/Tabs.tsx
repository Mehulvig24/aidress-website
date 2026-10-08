// Ported from design_handoff_aidress_website/design/components (navigation/Tabs.jsx). Styles are verbatim.
import React from 'react';

export interface TabItem { value: string; label: string; }
export interface TabsProps {
  items: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Tabs({items=[],value,onChange,size='md',style}: TabsProps){
  return <div role="tablist" style={{display:'flex',gap:size==='lg'?56:40,borderBottom:'1px solid var(--border-subtle)',...style}}>
    {items.map(it=>{const v=typeof it==='string'?it:it.value;const l=typeof it==='string'?it:it.label;const on=v===value;
      return <button key={v} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v)} style={{all:'unset',cursor:'pointer',position:'relative',padding:size==='lg'?'0 0 18px':'0 0 14px',
      font:(on?500:400)+' '+(size==='lg'?18:16)+'px/1 var(--font-sans)',color:on?'var(--ink)':'var(--text-secondary)',transition:'color var(--dur-fast)'}}>{l}
      <span style={{position:'absolute',left:0,right:0,bottom:-1,height:2,background:'var(--ink)',transform:on?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform var(--dur-base) var(--ease-resolve)'}}/></button>;})}
  </div>;
}
