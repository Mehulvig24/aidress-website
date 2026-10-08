import React from 'react';
export function Tag({children,mono=false,selected=false,onClick,style}){
  const [h,setH]=React.useState(false);
  const click=!!onClick;
  return <span onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'inline-flex',alignItems:'center',height:26,padding:'0 9px',borderRadius:'var(--radius-sm)',
    background:selected?'var(--ink)':(click&&h?'var(--surface-muted)':'var(--surface-sunken)'),color:selected?'var(--paper)':'var(--ink)',
    border:'1px solid '+(selected?'var(--ink)':'var(--border-subtle)'),font:(mono?'400 11.5px/1 var(--font-mono)':'400 12px/1 var(--font-sans)'),
    cursor:click?'pointer':'default',whiteSpace:'nowrap',transition:'background var(--dur-fast)',...style}}>{children}</span>;
}