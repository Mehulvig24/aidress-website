import React from 'react';
function renderLine(line,onLink,i){
  const parts=[];const re=/\[([^\]]+)\]\(([^)]+)\)/g;let last=0,m;
  while((m=re.exec(line))){if(m.index>last)parts.push(line.slice(last,m.index));const href=m[2],lab=m[1];
    parts.push(<a key={m.index} href={href.startsWith('#')?href:undefined} onClick={e=>{if(onLink&&href.startsWith('#')){e.preventDefault();onLink(href.slice(1));}}} style={{color:'var(--ink-deep)',textDecoration:'underline',textUnderlineOffset:2,cursor:'pointer'}}>[{lab}]</a>);last=re.lastIndex;}
  if(last<line.length)parts.push(line.slice(last));
  return <div key={i} style={{minHeight:'1.6em'}}>{parts}</div>;
}
export function MachineView({text='',onLink,style}){
  return <div style={{background:'var(--white)',color:'var(--ink-deep)',font:'400 13.5px/1.6 var(--font-mono)',padding:'28px var(--gutter) 64px',whiteSpace:'pre-wrap',wordBreak:'break-word',...style}}>
    {text.split('\n').map((l,i)=>renderLine(l,onLink,i))}
  </div>;
}