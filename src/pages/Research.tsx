// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
/* eslint-disable react-refresh/only-export-components, react-hooks/exhaustive-deps, react-hooks/rules-of-hooks */
// Research site and Crew, ported from design_handoff_aidress_website/design/ui_kits/website/Research.jsx.
import React from 'react';
import { hrefFor, spaClick } from '../lib/routes';
import { Icon, SectionHeader } from '../components/ds';
import { Band, monoStyle as mono } from '../components/site/Shared';
import { AidressPapers } from '../content/papersContent';
import { AW } from '../data/site';
const C={bg:'var(--ink-deep)',fg:'var(--paper)',mute:'#9a9c95',rule:'#3a3c38'};
function useNarrow(q='(max-width: 760px)'){const [n,setN]=React.useState(()=>typeof matchMedia!=='undefined'&&matchMedia(q).matches);React.useEffect(()=>{const m=matchMedia(q);const f=()=>setN(m.matches);m.addEventListener('change',f);return()=>m.removeEventListener('change',f);},[]);return n;}
function Cover({p,ratio='4 / 3'}){return <div style={{aspectRatio:ratio,overflow:'hidden',background:'#000'}}><img src={p.img} alt={p.title+' cover'} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'transform 700ms var(--ease-resolve)'}}/></div>;}
function Card({p,open}){const [h,setH]=React.useState(false);return <a href={hrefFor('research:'+p.id)} onClick={spaClick(open)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{cursor:'pointer',display:'flex',flexDirection:'column',gap:14,padding:'22px 0 26px',borderTop:'1px solid '+(h?'#F07A5C':C.rule),color:C.fg,transition:'border-color var(--dur-fast)'}}>
  <div style={{display:'flex',gap:12,flexWrap:'wrap',...mono,fontSize:11,color:C.mute}}><span style={{color:'#F07A5C'}}>{p.cat}</span><span>{p.date}</span><span>{p.meta}</span></div>
  <div style={{font:'500 clamp(22px,2.2vw,28px)/1.15 var(--font-sans)',letterSpacing:'-0.025em',textWrap:'balance'}}>{p.title}</div>
  <p style={{margin:0,font:'400 15px/1.5 var(--font-sans)',color:'#c9c9c1'}}>{p.desc}</p>
  <span style={{display:'inline-flex',alignItems:'center',gap:6,...mono,fontSize:11,color:h?'#F07A5C':C.fg}}>Read <Icon name="arrow-right" size={12}/></span></a>;}
function Research({params,go}){
  const D=AW;const nar=useNarrow();
  const id=params&&params.id;const Paper=id&&AidressPapers[id];
  if(Paper)return <Paper onBack={()=>go('research')}/>;
  const [f,...rest]=D.papers;const open=p=>go('research:'+p.id);
  return <div style={{background:C.bg,color:C.fg,minHeight:'100vh'}}>
    <section style={{padding:(nar?'48px':'80px')+' var(--gutter) 48px'}}>
      <div style={{...mono,fontSize:12,color:C.mute}}>Aidress Research</div>
      <h1 style={{margin:'28px 0 0',font:'500 clamp(44px,7.5vw,104px)/0.95 var(--font-sans)',letterSpacing:'-0.055em',maxWidth:1100,textWrap:'balance'}}>A research-backed startup.</h1>
      <p style={{margin:'24px 0 0',font:'400 clamp(17px,1.6vw,21px)/1.45 var(--font-sans)',color:'#c9c9c1',maxWidth:640}}>We test what stops autonomous agents from transacting, publish what we find, and build the infrastructure the evidence points to.</p>
    </section>
    <section style={{padding:'0 var(--gutter) 64px'}}>
      <a href={hrefFor('research:'+f.id)} onClick={spaClick(()=>open(f))} style={{cursor:'pointer',display:'grid',gridTemplateColumns:nar?'1fr':'minmax(0,520px) minmax(0,1fr)',gap:nar?20:48,alignItems:'center',color:C.fg}}>
        <Cover p={f} ratio="4 / 3"/>
        <div style={{display:'flex',flexDirection:'column',gap:18,paddingBottom:8}}>
          <div style={{display:'flex',gap:12,...mono,fontSize:11,color:C.mute}}><span style={{color:'#F07A5C'}}>Featured · {f.cat}</span><span>{f.date}</span></div>
          <div style={{font:'500 clamp(30px,3.4vw,46px)/1.02 var(--font-sans)',letterSpacing:'-0.04em'}}>{f.title}</div>
          <p style={{margin:0,font:'400 17px/1.5 var(--font-sans)',color:'#c9c9c1'}}>{f.desc}</p>
          <div style={{...mono,fontSize:11,color:C.mute}}>{f.authors} · {f.meta}</div>
          <span style={{display:'inline-flex',alignSelf:'flex-start',gap:8,alignItems:'center',...mono,fontSize:12,padding:'12px 16px',background:'var(--vermilion-500)',color:'#212320'}}>Read the white paper <Icon name="arrow-right" size={14}/></span>
        </div>
      </a>
    </section>
    <section style={{padding:'40px var(--gutter)',borderTop:'1px solid '+C.rule,borderBottom:'1px solid '+C.rule}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap',...mono,fontSize:11,color:C.mute}}><span>Validation study · key findings</span><a href={hrefFor('research:validation')} onClick={spaClick(()=>go('research:validation'))} style={{cursor:'pointer',color:C.fg,borderBottom:'1px solid currentColor',paddingBottom:2}}>Read the report ↗</a></div>
      <div style={{display:'grid',gridTemplateColumns:nar?'1fr 1fr':'repeat(4,minmax(0,1fr))',gap:nar?'28px 16px':0,marginTop:28}}>{D.findings.map(([v,l],k)=><div key={l} style={{paddingLeft:!nar&&k?24:0,borderLeft:!nar&&k?'1px solid '+C.rule:'none'}}><div style={{font:'500 clamp(36px,4.5vw,60px)/1 var(--font-sans)',letterSpacing:'-0.045em',color:k===0?'#F07A5C':C.fg}}>{v}</div><div style={{marginTop:10,font:'400 14px/1.4 var(--font-sans)',color:'#c9c9c1',maxWidth:220}}>{l}</div></div>)}</div>
    </section>
    <section style={{padding:'64px var(--gutter) 96px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16}}><h2 style={{margin:0,font:'500 32px/1 var(--font-sans)',letterSpacing:'-0.035em'}}>Publications</h2><span style={{...mono,fontSize:11,color:C.mute}}>{D.papers.length} papers</span></div>
      <div style={{display:'grid',gridTemplateColumns:nar?'1fr':'repeat(3,minmax(0,1fr))',gap:nar?0:28,marginTop:24}}>{rest.map(p=><Card key={p.id} p={p} open={()=>open(p)}/>)}</div>
    </section>
  </div>;
}
function Person({p}){const [n,role,img,li,desc]=p;const [h,setH]=React.useState(false);return <a href={li} target="_blank" rel="noopener" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',flexDirection:'column',gap:10,color:'inherit',minWidth:0}}>
  <div style={{aspectRatio:'1 / 1',overflow:'hidden',background:'var(--stone-section)',maxWidth:180}}><img className="ad-crew-photo" src={img} alt={n} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:h?'none':'grayscale(1)',transition:'filter var(--dur-base)'}}/></div>
  <div style={{...mono,fontSize:10.5,color:role==='Co-Founder'?'var(--vermilion-600)':'var(--text-secondary)'}}>{role}</div>
  <div style={{display:'flex',alignItems:'center',gap:6,font:'500 17px/1.15 var(--font-sans)',letterSpacing:'-0.015em'}}>{n}<Icon name="arrow-up-right" size={13}/></div>
  <div style={{font:'400 13.5px/1.45 var(--font-sans)',color:'var(--text-secondary)'}}>{desc}</div></a>;}
function Crew(){
  const D=AW;const nar=useNarrow();
  return <div>
    <Band>
      <SectionHeader label="Crew" title={<>The people building<br/>the coordination layer.</>}/>
      <div style={{display:'grid',gridTemplateColumns:nar?'repeat(2,minmax(0,1fr))':'repeat(5,minmax(0,1fr))',gap:nar?'28px 16px':24,marginTop:40}}>{[...D.founders,...D.advisors].map(p=><Person key={p[0]} p={p}/>)}</div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap',marginTop:48,paddingTop:24,borderTop:'1px solid var(--border-rule)'}}><div style={{font:'500 22px/1.2 var(--font-sans)',letterSpacing:'-0.02em'}}>Building with us, or want to?</div><a href="mailto:teamaidress@gmail.com" style={{display:'inline-flex',gap:8,alignItems:'center',...mono,fontSize:12,borderBottom:'1px solid currentColor',paddingBottom:4}}>teamaidress@gmail.com <Icon name="arrow-up-right" size={13}/></a></div>
    </Band>
  </div>;
}
export { Research, Crew };
