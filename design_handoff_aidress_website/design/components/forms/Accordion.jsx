import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Accordion({items=[],multiple=true,defaultOpen=[],dense=false,style}){
  const [open,setOpen]=React.useState(defaultOpen);
  const toggle=id=>setOpen(o=>o.includes(id)?o.filter(x=>x!==id):(multiple?[...o,id]:[id]));
  return <div style={{display:'flex',flexDirection:'column',...style}}>
    {items.map(it=>{const on=open.includes(it.id);return <div key={it.id} style={{borderBottom:dense?'none':'1px solid var(--border-subtle)'}}>
      <button onClick={()=>toggle(it.id)} style={{all:'unset',boxSizing:'border-box',width:'100%',display:'flex',alignItems:'center',gap:10,cursor:'pointer',
        height:dense?30:52,font:(dense?'400 14px':'500 16px')+'/1 var(--font-sans)',color:'var(--ink)'}}>
        {dense&&<Icon name="chevron-right" size={14} style={{transform:on?'rotate(90deg)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>}
        <span style={{flex:1}}>{it.title}</span>
        {it.meta&&<span style={{font:'400 12px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{it.meta}</span>}
        <Icon name={dense?'chevron-down':(on?'minus':'plus')} size={dense?14:16} color="var(--text-secondary)" style={{transform:dense&&on?'rotate(180deg)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>
      </button>
      <div style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows var(--dur-base) var(--ease-resolve)'}}>
        <div style={{overflow:'hidden'}}><div style={{padding:dense?'4px 0 10px 24px':'0 0 20px',font:'var(--type-small)',color:'var(--text-secondary)'}}>{it.content}</div></div>
      </div>
    </div>;})}
  </div>;
}