import React from 'react';
export function Avatar({letter='A',size=48,tone='neutral',ring=false,style}){
  const T={neutral:{bg:'var(--stone-100)',fg:'var(--ink)'},ink:{bg:'var(--ink)',fg:'var(--paper)'},resolved:{bg:'var(--vermilion-500)',fg:'var(--white)'}}[tone];
  return <div style={{width:size,height:size,borderRadius:'50%',background:T.bg,color:T.fg,display:'flex',alignItems:'center',justifyContent:'center',flex:'none',
    font:'500 '+Math.round(size*0.42)+'px/1 var(--font-sans)',border:tone==='neutral'?'1px solid var(--border-default)':'none',
    boxShadow:ring?(tone==='resolved'?'var(--shadow-resolved-ring)':'var(--shadow-node-ring)'):'none',...style}}>{letter}</div>;
}