// Ported from design_handoff_aidress_website/design/components (navigation/NavBar.jsx). Styles are verbatim.
import React from 'react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';

export interface NavBarProps {
  links?: string[];
  /** active route — underlined in vermilion (orange = active route) */
  active?: string;
  onNavigate?: (link: string) => void;
  onHome?: () => void;
  /** logo mark image URL shown left of the AIDRESS wordmark (use the paper mark on dark tone) */
  logo?: string;
  /** CTA label; null hides */
  cta?: string | null;
  onCta?: () => void;
  /** hover dropdowns: { [link]: [label, key][] } — picking calls onNavigate(key) */
  menus?: Record<string, [string, string][]>;
  search?: boolean;
  /** glass background + sticky */
  sticky?: boolean;
  /** sub-brand after the wordmark in vermilion mono, e.g. "Atlas", "Research" */
  sub?: string;
  /** node rendered before the search (e.g. <ModeToggle/>) */
  extra?: React.ReactNode;
  /** dark = ink header for sub-sites (Research) */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
  /** Port addition: real URL for a link or menu key, so the nav is crawlable. Clicks still call onNavigate. */
  hrefFor?: (key: string) => string | undefined;
  /** Port addition: real URL for the logo (onHome still handles the click). */
  homeHref?: string;
}

/** Plain clicks run fn in-app; modifier / middle clicks open the href normally. */
const spa=(href,fn)=>e=>{if(!href){fn&&fn();return;}if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();fn&&fn();};
const DEFAULT_LINKS=['Atlas','Technology','Research','About','Docs'];
export function NavBar({logo,links=DEFAULT_LINKS,active,onNavigate,onHome,cta='Register Agent',onCta,menus={},search=true,sticky=false,sub,extra,tone='light',style,hrefFor,homeHref}: NavBarProps){
  const dark=tone==='dark';
  return <header style={{height:'var(--nav-height)',display:'flex',alignItems:'center',gap:32,padding:'0 var(--gutter)',borderBottom:'1px solid var(--border-subtle)',
    background:dark?'var(--ink-deep)':sticky?'var(--surface-glass)':'var(--surface-page)',borderBottomColor:dark?'#3a3c38':undefined,backdropFilter:sticky?'var(--blur-glass)':undefined,position:sticky?'sticky':'relative',top:0,zIndex:20,boxSizing:'border-box',...style}}>
    <a href={homeHref} onClick={spa(homeHref,onHome)} aria-label="Aidress home" style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',flex:'none'}}>{logo&&<img src={logo} alt="" className="ad-noflip" style={{width:26,height:26,objectFit:'contain',display:'block',flex:'none'}}/>}<span style={{font:'700 22px/1 var(--font-sans)',letterSpacing:'-0.035em',color:dark?'var(--paper)':'var(--ink)'}}>AIDRESS</span>{sub&&<span style={{font:'400 13px/1 var(--font-mono)',textTransform:'uppercase',color:'var(--vermilion-500)'}}>/ {sub}</span>}</a>
    <nav data-ad-nav="links" style={{flex:1,display:'flex',justifyContent:'center',gap:4}}>
      {links.map(l=><NavLink key={l} label={l} on={l===active} dark={dark} items={menus[l]} hrefFor={hrefFor} onPick={k=>onNavigate&&onNavigate(k)} onClick={()=>onNavigate&&onNavigate(l)}/>)}
    </nav>
    {extra}
    {search&&<SearchInput size="sm" width={280}/>}
    {cta&&<span data-ad-nav="cta" style={{display:'contents'}}><Button size="sm" onClick={onCta} style={{height:34}}>{cta}</Button></span>}
  </header>;
}
function NavLink({label,on,dark,onClick,items,onPick,hrefFor}: any){
  const href=hrefFor&&hrefFor(label);
  const [h,setH]=React.useState(false);
  return <a href={href} onClick={spa(href,onClick)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',height:'var(--nav-height)',display:'flex',alignItems:'center',padding:'0 16px',cursor:'pointer',
    font:(on?500:400)+' 13px/1 var(--font-sans)',color:dark?(on||h?'var(--paper)':'var(--gray-400)'):(on||h?'var(--ink)':'var(--gray-700)')}}>{label}
    <span style={{position:'absolute',left:16,right:16,bottom:-1,height:2,background:'var(--vermilion-500)',transform:on?'scaleX(1)':'scaleX(0)',transition:'transform var(--dur-base) var(--ease-resolve)'}}/>
    {items&&<span style={{marginLeft:6,fontSize:9,opacity:.6}}>▾</span>}
    {items&&h&&<div onClick={e=>e.stopPropagation()} style={{position:'absolute',top:'100%',left:4,minWidth:180,display:'flex',flexDirection:'column',padding:6,background:dark?'var(--ink-deep)':'var(--surface-card)',border:'1px solid '+(dark?'#3a3c38':'var(--border-box)'),boxShadow:'0 12px 32px rgba(22,22,22,.12)',zIndex:30}}>
      {items.map(([t,k])=><DropItem key={t} t={t} dark={dark} href={hrefFor&&hrefFor(k)} onClick={()=>{setH(false);onPick(k);}}/>)}</div>}</a>;
}
function DropItem({t,dark,onClick,href}: any){const [h,setH]=React.useState(false);return <a href={href} onClick={e=>{e.stopPropagation();spa(href,onClick)(e);}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{padding:'9px 10px',font:'400 13px/1.2 var(--font-sans)',whiteSpace:'nowrap',cursor:'pointer',color:dark?'var(--paper)':'var(--ink)',background:h?(dark?'#2c2e2a':'var(--stone-100)'):'transparent'}}>{t}</a>;}
