import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function SegmentedControl({options=[],value,onChange,style}){
  return <div role="tablist" style={{display:'inline-flex',gap:12,...style}}>
    {options.map(o=>{const on=o.value===value;return <button key={o.value} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(o.value)}
      style={{display:'inline-flex',alignItems:'center',gap:8,height:36,padding:'0 16px',borderRadius:'var(--radius-sm)',cursor:'pointer',
      background:on?'var(--ink)':'var(--surface-card)',color:on?'var(--paper)':'var(--ink)',border:'1px solid '+(on?'var(--ink)':'var(--border-default)'),
      font:'500 14px/1 var(--font-sans)',transition:'background var(--dur-fast)'}}>
      {o.icon&&<Icon name={o.icon} size={15}/>}{o.label}</button>;})}
  </div>;
}