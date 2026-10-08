// Ported from design_handoff_aidress_website/design/components (site/MachineView.jsx). Styles are verbatim.
import React from 'react';

export interface MachineViewProps {
  /** plain text with markdown links: "[Label](#route)" or "[Label](https://…)" */
  text: string;
  /** called with the route when a "#route" link is clicked */
  onLink?: (route: string) => void;
  /** Port addition: real URL for a "#route" link, so the Machine view's links are crawlable. */
  hrefFor?: (route: string) => string;
  style?: React.CSSProperties;
}

function renderLine(line,onLink,i,hrefFor?){
  const parts=[];const re=/\[([^\]]+)\]\(([^)]+)\)/g;let last=0,m;
  while((m=re.exec(line))){if(m.index>last)parts.push(line.slice(last,m.index));const href=m[2],lab=m[1];
    parts.push(<a key={m.index} href={href.startsWith('#')?(hrefFor?hrefFor(href.slice(1)):href):(hrefFor&&/^(https?:|mailto:)/.test(href)?href:undefined)} onClick={e=>{if(onLink&&href.startsWith('#')){if(e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();onLink(href.slice(1));}}} style={{color:'var(--ink-deep)',textDecoration:'underline',textUnderlineOffset:2,cursor:'pointer'}}>[{lab}]</a>);last=re.lastIndex;}
  if(last<line.length)parts.push(line.slice(last));
  return <div key={i} style={{minHeight:'1.6em'}}>{parts}</div>;
}
export function MachineView({text='',onLink,style,hrefFor}: MachineViewProps){
  return <div style={{background:'var(--white)',color:'var(--ink-deep)',font:'400 13.5px/1.6 var(--font-mono)',padding:'28px var(--gutter) 64px',whiteSpace:'pre-wrap',wordBreak:'break-word',...style}}>
    {text.split('\n').map((l,i)=>renderLine(l,onLink,i,hrefFor))}
  </div>;
}
