// Ported from design_handoff_aidress_website/design/components (site/IndustryTile.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';

export interface IndustryTileProps {
  /** photo node (e.g. an <image-slot>) — takes precedence over src */
  media?: React.ReactNode;
  src?: string;
  title: string;
  /** one specific coordination use case */
  description: React.ReactNode;
  /** mono chip over the photo, e.g. "LOG-01" */
  code?: string;
  /** selected/featured — vermilion title + underline */
  active?: boolean;
  /** photo height px, default 250 */
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function IndustryTile({media,src,title,description,code,active=false,height=250,onClick,style}: IndustryTileProps){
  const [h,setH]=React.useState(false);const on=active||h;
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',flexDirection:'column',cursor:onClick?'pointer':'default',borderBottom:'1px solid '+(on?'var(--vermilion-500)':'var(--border-subtle)'),boxShadow:on?'inset 0 -1px 0 var(--vermilion-500)':'none',transition:'border-color var(--dur-base),box-shadow var(--dur-base)',...style}}>
    <div style={{position:'relative',height,overflow:'hidden',background:'var(--stone-section)'}}>
      {media||(src&&<img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>)}
      {code&&<span style={{position:'absolute',top:12,left:12,font:'400 11px/1 var(--font-mono)',padding:'5px 7px',background:'var(--paper)',color:'var(--ink-deep)',pointerEvents:'none'}}>{code}</span>}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:24}}>
      <span style={{font:'400 26px/1 var(--font-sans)',letterSpacing:'-0.02em',color:on?'var(--vermilion-500)':'var(--ink-deep)',transition:'color var(--dur-base)'}}>{title}</span>
      <Icon name="arrow-up-right" size={26} strokeWidth={1.25} color={on?'var(--vermilion-500)':'var(--ink-deep)'} style={{transform:h?'translate(2px,-2px)':'none',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>
    </div>
    <p style={{margin:'16px 0 22px',font:'400 15px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>{description}</p>
  </div>;
}
