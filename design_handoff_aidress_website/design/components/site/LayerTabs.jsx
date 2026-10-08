import React from 'react';
export function LayerTabs({items=[],value=0,onChange,tone='light',style}){
  const n=items.length||1;
  return <div role="tablist" style={{position:'relative',display:'grid',gridTemplateColumns:'repeat('+n+',minmax(0,1fr))',borderBottom:'1px solid var(--border-rule)',...style}}>
    {items.map((it,i)=>{const on=i===value;return <button key={i} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(i)}
      style={{all:'unset',cursor:'pointer',display:'flex',flexDirection:'column',gap:22,padding:'0 12px 22px 0'}}>
      <span style={{font:'400 13px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{String(i+1).padStart(2,'0')}</span>
      <span style={{font:'400 20px/1.1 var(--font-sans)',letterSpacing:'-0.01em',color:on?'var(--vermilion-500)':(tone==='dark'?'var(--paper)':'var(--ink-deep)'),transition:'color var(--dur-base)'}}>{typeof it==='string'?it:it.label}</span>
    </button>;})}
    <span style={{position:'absolute',left:(value/n*100)+'%',width:(100/n)+'%',bottom:-1,height:3,background:'var(--vermilion-500)',transition:'left var(--dur-slow) var(--ease-resolve)'}}/>
  </div>;
}