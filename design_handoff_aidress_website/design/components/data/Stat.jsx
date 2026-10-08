import React from 'react';
export function Stat({value,label,size='md',accent=false,style}){
  const vs=size==='lg'?32:size==='sm'?22:26;
  return <div style={{display:'flex',flexDirection:'column',gap:size==='lg'?10:8,...style}}>
    <div style={{font:'600 '+vs+'px/1 var(--font-sans)',letterSpacing:'-0.02em',color:accent?'var(--text-accent)':'var(--ink)',fontVariantNumeric:'tabular-nums'}}>{value}</div>
    <div style={{font:'400 '+(size==='lg'?17:13)+'px/1.2 var(--font-sans)',color:'var(--text-secondary)'}}>{label}</div>
  </div>;
}
export function StatRow({stats=[],size='md',dividers=true,style}){
  return <div style={{display:'flex',...style}}>
    {stats.map((s,i)=><div key={i} style={{flex:size==='lg'?1:'none',paddingLeft:i?(size==='lg'?40:28):0,paddingRight:size==='lg'?0:28,borderLeft:dividers&&i?'1px solid var(--border-subtle)':'none'}}>
      <Stat {...s} size={size}/></div>)}
  </div>;
}