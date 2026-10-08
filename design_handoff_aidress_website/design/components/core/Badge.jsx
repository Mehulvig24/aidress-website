import React from 'react';
import { Icon } from './Icon.jsx';
export function Badge({tone='resolved',size='md',icon,children,style}){
  const T={resolved:{bg:'var(--vermilion-50)',fg:'var(--vermilion-700)',ic:'var(--vermilion-500)',di:'circle-check'},
    neutral:{bg:'var(--surface-muted)',fg:'var(--ink)',ic:'var(--ink)',di:null},
    pending:{bg:'var(--surface-sunken)',fg:'var(--text-secondary)',ic:'var(--gray-500)',di:'refresh-cw'},
    inverse:{bg:'var(--ink)',fg:'var(--paper)',ic:'var(--vermilion-400)',di:'circle-check'}}[tone];
  const ic=icon===null?null:(icon||T.di);
  const lg=size==='lg';
  return <span style={{display:'inline-flex',alignItems:'center',gap:lg?8:5,height:lg?32:22,padding:lg?'0 12px':'0 7px',background:T.bg,color:T.fg,
    borderRadius:'var(--radius-sm)',font:'500 '+(lg?16:12)+'px/1 var(--font-sans)',whiteSpace:'nowrap',...style}}>
    {ic&&<Icon name={ic} size={lg?18:13} color={T.ic} strokeWidth={2}/>}{children}
  </span>;
}