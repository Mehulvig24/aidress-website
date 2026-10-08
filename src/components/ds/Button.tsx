// Ported from design_handoff_aidress_website/design/components (core/Button.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

export interface ButtonProps {
  /** primary = ink fill (default CTA) · secondary = 1px ink outline · accent = vermilion, only for a resolving action (Connect, Verify) · ghost = text */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** sm 32 · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: IconName;
  /** usually 'arrow-right' — nudges 2px on hover */
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const SIZES={sm:{h:32,fs:13,px:14,gap:6,ic:14},md:{h:40,fs:14,px:20,gap:8,ic:16},lg:{h:48,fs:15,px:28,gap:10,ic:16}};
export function Button({variant='primary',size='md',iconLeft,iconRight,fullWidth=false,disabled=false,children,onClick,type='button',style,...rest}: ButtonProps){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const V={
    primary:{bg:h?'var(--black)':'var(--ink)',fg:'var(--paper)',bd:'transparent'},
    secondary:{bg:h?'var(--surface-sunken)':'var(--surface-card)',fg:'var(--ink)',bd:'var(--ink)'},
    accent:{bg:h?'var(--vermilion-600)':'var(--vermilion-500)',fg:'var(--white)',bd:'transparent'},
    ghost:{bg:h?'var(--surface-sunken)':'transparent',fg:h?'var(--text-accent)':'var(--ink)',bd:'transparent'},
  }[variant]||{};
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:s.gap,height:s.h,padding:variant==='ghost'?'0 '+(s.px/2)+'px':'0 '+s.px+'px',
    font:'500 '+s.fs+'px/1 var(--font-sans)',letterSpacing:'-0.005em',background:V.bg,color:V.fg,border:'1px solid '+V.bd,borderRadius:'var(--radius-sm)',
    cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,transform:p&&!disabled?'translateY(1px)':'none',
    transition:'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),transform var(--dur-instant)',whiteSpace:'nowrap',...style}} {...rest}>
    {iconLeft&&<Icon name={iconLeft} size={s.ic}/>}
    {children}
    {iconRight&&<Icon name={iconRight} size={s.ic} style={{transform:h&&!disabled?'translateX(2px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>}
  </button>;
}
