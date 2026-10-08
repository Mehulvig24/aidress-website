import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function TextLink({children,direction='forward',size='md',onClick,href,style}){
  const [h,setH]=React.useState(false);
  const back=direction==='back';
  const fs=size==='lg'?18:size==='sm'?13:15;
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',gap:8,cursor:'pointer',
    font:'500 '+fs+'px/1 var(--font-sans)',color:h?'var(--text-accent)':'var(--ink)',textDecoration:'none',transition:'color var(--dur-fast)',...style}}>
    {back&&<Icon name="arrow-left" size={fs+1} style={{transform:h?'translateX(-3px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>}
    <span style={{fontWeight:back?400:500}}>{children}</span>
    {!back&&<Icon name="arrow-right" size={fs} style={{transform:h?'translateX(3px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>}
  </a>;
}