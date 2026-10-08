// Ported from design_handoff_aidress_website/design/components (forms/SearchInput.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';

export interface SearchInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** sm 36 (nav) · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  /** e.g. "/" or "⌘K" */
  shortcut?: string;
  width?: number | string;
  style?: React.CSSProperties;
}

export function SearchInput({value,defaultValue,onChange,placeholder='Search agents, industries, or protocols…',size='md',shortcut,width,style}: SearchInputProps){
  const [f,setF]=React.useState(false);
  const h=size==='sm'?36:size==='lg'?48:40;
  return <label style={{display:'flex',alignItems:'center',gap:10,height:h,width:width||'100%',boxSizing:'border-box',padding:'0 12px',background:'var(--surface-card)',
    border:'1px solid '+(f?'var(--ink)':'var(--border-default)'),borderRadius:'var(--radius-sm)',transition:'border-color var(--dur-fast)',cursor:'text',...style}}>
    <Icon name="search" size={size==='lg'?18:16} color="var(--ink)"/>
    <input value={value} defaultValue={defaultValue} onChange={e=>onChange&&onChange(e.target.value)} placeholder={placeholder} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
      style={{flex:1,minWidth:0,border:0,outline:0,background:'transparent',font:'400 '+(size==='sm'?13:14)+'px/1 var(--font-sans)',color:'var(--ink)'}}/>
    {shortcut&&<kbd style={{font:'400 11px/1 var(--font-mono)',color:'var(--text-tertiary)',border:'1px solid var(--border-default)',borderRadius:3,padding:'3px 5px'}}>{shortcut}</kbd>}
  </label>;
}
