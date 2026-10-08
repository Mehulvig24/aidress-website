// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
/* eslint-disable react-refresh/only-export-components, react-hooks/exhaustive-deps */
// The site shell, ported from design_handoff_aidress_website/design/ui_kits/website/SiteApp.jsx:
// header (5 tabs + hover dropdowns), search (/), dark mode, Human/Machine, mobile menu, machineText().
// The mock kept the route in localStorage; here it is the URL (src/lib/routes.ts, ROUTES.md), so
// back/forward work and every page is linkable. Pages still receive go(name, params) as in the mock.
import React from 'react';
import { hrefFor, spaClick } from './lib/routes';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { NavBar, ModeToggle, MachineView, SearchInput, Icon } from './components/ds';
import { BigFooter } from './components/site/BigFooter';
import { AW } from './data/site';
import { AidressDocs } from './content/docsContent';
import { Home } from './pages/Home';
import { Industries, IndustryDetail, ScopedRegistries, AtlasSoon } from './pages/Industry';
import { Atlas, Passport } from './pages/Atlas';
import { Developers } from './pages/Developers';
import { Docs } from './pages/Docs';
import { Research, Crew } from './pages/Research';
import { Impact } from './pages/Impact';
import { ForAgents } from './pages/ForAgents';
import { PrivacyPage } from './pages/PrivacyPage';
import { SecurityPage } from './pages/SecurityPage';
import { NotFound } from './pages/NotFound';
import { RouteHead } from './seo/RouteHead';
import { machineText } from './lib/machineText';
import { parseRouteName, pathToRoute, routeToPath, setGlobalGo, withSlash, type Route } from './lib/routes';
import { registerWebMcpTools } from './lib/webmcp';

const SITE={home:'main',industries:'main',industry:'main',scoped:'main',crew:'main',developers:'main',docs:'main',impact:'main',atlas:'atlas',passport:'atlas',research:'research'};
const MAIN_LINKS=['Platform','Industries','Developers','Research','Company'];
const MAIN_TO={Platform:'home',Industries:'industries',Developers:'developers',Research:'research',Company:'crew'};
const docSlug=re=>{try{for(const g of AidressDocs.sidebarNav)for(const i of g.items)if(re.test(i.label))return 'docs:'+i.slug;}catch(e){}return 'docs';};
const MENUS=()=>({Platform:[['Five layers','home'],['Atlas','atlas']],Developers:[['Overview','developers'],['Docs','docs'],['Quickstart',docSlug(/quick/i)],['API reference',docSlug(/api/i)],['MCP server',docSlug(/mcp/i)],['GitHub ↗','ext:https://github.com/Aidress-ai/Aidress']],Company:[['Aidress for Good','impact'],['Crew','crew'],['Contact','ext:mailto:teamaidress@gmail.com']]});
const nav=(go,k)=>{if(k.startsWith('ext:')){window.open(k.slice(4),'_blank');return;}go(MAIN_TO[k]||k);};
const PAGES=[['Five layers','Platform','home'],['Atlas','Platform','atlas'],['Agent passport','Platform','passport'],['Developers','Developers','developers'],['Docs','Developers','docs'],['Research','Resources','research'],['Aidress for Good','Company','impact'],['Crew','Company','crew'],['Industries','Industries','industries'],['Scoped registries','Industries','scoped']];
function searchIndex(){const D=AW;return [...PAGES,...Object.values(D.industries).map(i=>[i.title,'Industry','industry:'+i.id]),...Object.keys(D.agents).map(k=>[D.agents[k].name+' · agent://'+D.agents[k].handle,'Agent','passport:'+k]),...['A2A','MCP','x402','HTTP'].map(p=>[p+' protocol','Protocol','docs']),...D.papers.map(p=>[p.title,'Research','research:'+p.id]),...AidressDocs.sidebarNav.flatMap(g=>g.items.map(i=>[i.label,'Docs · '+g.title,'docs:'+i.slug]))];}
function SiteSearch({go,onClose}){
  const [q,setQ]=React.useState('');
  const all=React.useMemo(searchIndex,[]);const res=(q?all.filter(r=>(r[0]+' '+r[1]).toLowerCase().includes(q.toLowerCase())):all.slice(0,8)).slice(0,8);
  React.useEffect(()=>{const k=e=>{if(e.key==='Escape')onClose();};addEventListener('keydown',k);setTimeout(()=>{const i=document.querySelector('#ad-search input');i&&i.focus();},30);return()=>removeEventListener('keydown',k);},[]);
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,background:'var(--overlay-scrim)',display:'flex',justifyContent:'center',alignItems:'flex-start',paddingTop:110}}>
    <div id="ad-search" onClick={e=>e.stopPropagation()} style={{width:'min(640px,92vw)',background:'var(--surface-card)',border:'1px solid var(--ink)',boxShadow:'0 20px 60px rgba(22,22,22,.18)'}}>
      <div style={{padding:12,borderBottom:'1px solid var(--border-subtle)'}}><SearchInput size="lg" value={q} onChange={setQ} placeholder="Search agents, industries, protocols or pages…"/></div>
      <div style={{maxHeight:380,overflowY:'auto'}}>{res.length?res.map(([l,c,to])=><a key={l+to} href={hrefFor(to)} onClick={spaClick(()=>{go(to);onClose();})} style={{display:'flex',justifyContent:'space-between',gap:16,padding:'12px 18px',cursor:'pointer',borderBottom:'1px solid var(--border-subtle)',font:'400 15px/1.3 var(--font-sans)'}}><span>{l}</span><span style={{font:'400 11px/1.3 var(--font-mono)',textTransform:'uppercase',color:'var(--text-secondary)'}}>{c}</span></a>):<div style={{padding:18,font:'400 14px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>No results for “{q}”.</div>}</div>
    </div></div>;
}
const pill=(dark)=>({all:'unset',cursor:'pointer',boxSizing:'border-box',display:'inline-flex',alignItems:'center',gap:8,height:34,padding:'0 10px',font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',whiteSpace:'nowrap',color:dark?'var(--paper)':'var(--ink-deep)',border:'1px solid '+(dark?'#444':'var(--border-box)')});
const ls={get:k=>{try{return localStorage.getItem(k);}catch(e){return null;}},set:(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}}};
const PAGE_FOR={home:Home,industries:Industries,industry:IndustryDetail,scoped:ScopedRegistries,crew:Crew,developers:Developers,docs:Docs,impact:Impact,research:Research,'for-agents':ForAgents,privacy:PrivacyPage,security:SecurityPage,notfound:NotFound};
/** Pages whose body the mock authors dark (the dark-mode invert treats them as already dark). */
export const AUTHORED_DARK=(name,mode)=>SITE[name]==='research'&&mode==='human';

// Shell, with no Router of its own. The browser entry wraps this in BrowserRouter; the build-time
// prerenderer wraps it in StaticRouter. Keep them in sync.
export function AppRoutes(){
  const location=useLocation();const navigate=useNavigate();
  const route:Route=React.useMemo(()=>pathToRoute(location.pathname,location.search),[location.pathname,location.search]);
  const [mode,setMode]=React.useState(()=>ls.get('aidress-site-mode')||'human');
  const go=React.useCallback((name,params={})=>{navigate(routeToPath(parseRouteName(name,params)));window.scrollTo({top:0});},[navigate]);
  setGlobalGo(go);
  const [theme,setTheme]=React.useState(()=>ls.get('aidress-site-theme')||'light');const [sOpen,setSOpen]=React.useState(false);const [menu,setMenu]=React.useState(false);
  React.useEffect(()=>{registerWebMcpTools();},[]);
  // A slash-less URL (e.g. a shared link to /industries) is shown as its canonical slashed form.
  React.useEffect(()=>{if(route.name!=='notfound'&&location.pathname!==withSlash(location.pathname))navigate(withSlash(location.pathname)+location.search+location.hash,{replace:true});},[location.pathname]);
  React.useEffect(()=>{const k=e=>{if(e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();setSOpen(true);}};addEventListener('keydown',k);return()=>removeEventListener('keydown',k);},[]);
  const setM=m=>{setMode(m);ls.set('aidress-site-mode',m);};
  const site=SITE[route.name]||'main';
  const atlasSoon=AW.flags&&!AW.flags.atlasLive;
  const S=route.name==='atlas'?(atlasSoon?AtlasSoon:Atlas):route.name==='passport'?(atlasSoon?AtlasSoon:Passport):PAGE_FOR[route.name]||Home;
  const dark=site==='research'&&mode==='human';
  // Research is authored dark; every other page light. Invert whichever one disagrees with the saved theme so the mode is identical everywhere.
  React.useEffect(()=>{const inv=(theme==='dark')!==dark;document.documentElement.dataset.theme=inv?'dark':'light';ls.set('aidress-site-theme',theme);},[theme,dark]);
  const extra=<div style={{display:'flex',gap:8,alignItems:'center'}}><button aria-label="Search" onClick={()=>setSOpen(true)} style={pill(dark)}><Icon name="search" size={14}/><span className="ad-hide-mobile">Search <span style={{opacity:.55}}>/</span></span></button><button aria-label="Toggle dark mode" onClick={()=>setTheme(theme==='dark'?'light':'dark')} style={pill(dark)}><span style={{width:10,height:10,borderRadius:'50%',border:'1.5px solid currentColor',background:theme==='dark'?'currentColor':'transparent',flex:'none'}}></span><span className="ad-hide-mobile">{theme==='dark'?'Light':'Dark'}</span></button><span className="ad-hide-mobile" style={{display:'contents'}}><ModeToggle value={mode} onChange={setM} tone={dark?'dark':'light'}/></span><button className="ad-mobile-only" aria-label="Menu" onClick={()=>setMenu(true)} style={pill(dark)}>Menu</button></div>;
  let header;
  if(site==='atlas') header=<NavBar logo={dark?'/assets/logo-mark-paper.png':'/assets/logo-mark-ink.png'} sticky sub="Atlas" links={['Network','Passports','Developers','aidress.ai ↗']} active={route.name==='passport'?'Passports':'Network'} onNavigate={l=>l==='aidress.ai ↗'?go('home'):l==='Developers'?go('developers'):l==='Passports'?go('passport',{id:'A'}):go('atlas')} hrefFor={l=>l==='aidress.ai ↗'?'/':l==='Developers'?hrefFor('developers'):l==='Passports'?hrefFor('passport',{id:'A'}):hrefFor('atlas')} homeHref="/" onHome={()=>go('home')} extra={extra} search={false} cta="Register Agent" onCta={()=>go('developers')}/>;
  else if(site==='research') header=<NavBar logo={dark?'/assets/logo-mark-paper.png':'/assets/logo-mark-ink.png'} sticky tone={dark?'dark':'light'} sub="Research" links={['Publications','White paper','aidress.ai ↗']} active={route.params&&route.params.id==='whitepaper'?'White paper':'Publications'} onNavigate={l=>l==='aidress.ai ↗'?go('home'):l==='White paper'?go('research:whitepaper'):go('research')} hrefFor={l=>l==='aidress.ai ↗'?'/':l==='White paper'?hrefFor('research:whitepaper'):hrefFor('research')} homeHref="/" onHome={()=>go('home')} extra={extra} search={false} cta={null}/>;
  else header=<NavBar logo={dark?'/assets/logo-mark-paper.png':'/assets/logo-mark-ink.png'} sticky links={MAIN_LINKS} active={{home:'Platform',industries:'Industries',industry:'Industries',scoped:'Industries',crew:'Company',developers:'Developers',docs:'Developers',impact:'Company'}[route.name]} menus={MENUS()} onNavigate={k=>nav(go,k)} hrefFor={k=>k.startsWith('ext:')?k.slice(4):hrefFor(MAIN_TO[k]||k)} homeHref="/" onHome={()=>go('home')} extra={extra} search={false} cta="Connect agent" onCta={()=>go('developers')}/>;
  return <div style={{width:'100%',minHeight:'100vh',background:dark?'var(--ink-deep)':'var(--paper)'}}>
    <RouteHead route={route}/>
    {header}
    {mode==='machine'?<MachineView text={machineText(route)} onLink={to=>go(to)} hrefFor={to=>hrefFor(to)}/>:
    <main key={route.name+JSON.stringify(route.params)} style={{animation:'ad-fade-up var(--dur-slow) var(--ease-resolve)'}}><S go={go} params={route.params||{}}/></main>}
    {mode==='human'&&site!=='atlas'&&<BigFooter go={go}/>}
    {menu&&<div style={{position:'fixed',inset:0,zIndex:120,background:'var(--paper)',display:'flex',flexDirection:'column',padding:'18px 20px 28px',overflowY:'auto'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:40}}><span style={{display:'flex',alignItems:'center',gap:10,font:'700 22px/1 var(--font-sans)',letterSpacing:'-0.035em'}}><img src="/assets/logo-mark-ink.png" alt="" className="ad-noflip" style={{width:24,height:24,objectFit:'contain'}}/>AIDRESS</span><button onClick={()=>setMenu(false)} style={pill(false)}>Close</button></div>
      <nav style={{display:'flex',flexDirection:'column',marginTop:24,borderTop:'1px solid var(--border-rule)'}}>{MAIN_LINKS.map(x=>{const it=MENUS()[x];return <div key={x} style={{padding:'16px 0',borderBottom:'1px solid var(--border-rule)'}}><a href={hrefFor(MAIN_TO[x])} onClick={spaClick(()=>{setMenu(false);go(MAIN_TO[x]);})} style={{font:'500 26px/1 var(--font-sans)',letterSpacing:'-0.03em',cursor:'pointer'}}>{x}</a>{it&&<div style={{display:'flex',flexWrap:'wrap',gap:'8px 16px',marginTop:12}}>{it.map(([t,k])=><a key={t} href={k.startsWith('ext:')?k.slice(4):hrefFor(k)} onClick={spaClick(()=>{setMenu(false);nav(go,k);})} style={{font:'400 14px/1.2 var(--font-sans)',color:'var(--text-secondary)',cursor:'pointer'}}>{t}</a>)}</div>}</div>;})}</nav>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:24}}><button onClick={()=>setTheme(theme==='dark'?'light':'dark')} style={pill(false)}>{theme==='dark'?'Light mode':'Dark mode'}</button><button onClick={()=>{setM(mode==='human'?'machine':'human');setMenu(false);}} style={pill(false)}>{mode==='human'?'Machine view':'Human view'}</button></div>
      <button onClick={()=>{setMenu(false);go('developers');}} style={{all:'unset',cursor:'pointer',marginTop:'auto',textAlign:'center',padding:'16px',background:'var(--vermilion-500)',color:'#fff',font:'500 17px/1 var(--font-sans)'}}>Connect agent</button>
    </div>}
    {sOpen&&<SiteSearch go={go} onClose={()=>setSOpen(false)}/>}
  </div>;
}

export default function App(){
  return <BrowserRouter><AppRoutes/></BrowserRouter>;
}
