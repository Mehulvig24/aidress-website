// Ported from design_handoff_aidress_website/design/components (core/MediaSlot.jsx). Styles are verbatim.
import React from 'react';

export interface MediaSlotProps {
  /** image URL; omit to render a labelled placeholder */
  src?: string;
  alt?: string;
  /** mono caption shown in empty state, e.g. "Live simulation" */
  label?: string;
  /** CSS aspect-ratio, default 16/9 */
  ratio?: string;
  height?: number | string;
  /** fill with vermilion grain texture instead of stone */
  texture?: boolean;
  style?: React.CSSProperties;
}

export function MediaSlot({src,alt='',label,ratio='16/9',height,texture=false,style}: MediaSlotProps){
  return <div style={{position:'relative',width:'100%',aspectRatio:height?undefined:ratio,height,overflow:'hidden',borderRadius:'var(--radius-xs)',
    background:texture?'var(--gradient-grain)':'var(--surface-sunken)',border:texture||src?'none':'1px solid var(--border-subtle)',...style}}>
    {texture&&<div style={{position:'absolute',inset:0,backgroundImage:'var(--texture-grain)',backgroundSize:'cover'}}/>}
    {src&&<img src={src} alt={alt} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>}
    {!src&&label&&<div style={{position:'absolute',left:12,bottom:10,font:'400 11px/1 var(--font-mono)',letterSpacing:'0.06em',textTransform:'uppercase',color:texture?'var(--paper)':'var(--text-tertiary)'}}>{label}</div>}
  </div>;
}
