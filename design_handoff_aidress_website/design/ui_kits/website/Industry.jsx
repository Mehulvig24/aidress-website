(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const {SectionHeader,IndustryTile,TextLink,Button,StatRow,Tag,Avatar,Badge,Icon}=window.AidressDesignSystem_f2dd6a;
const {Photo,Band,FiveLayers,Stepper,monoStyle:mono}=window;
function Industries({go}){
  const inds=Object.values(window.AW.industries);
  return <Band>
    <SectionHeader index="02" label="Industries" tagline="Logistics + Shipping · Payments · Scoped registries" title={<>Agent networks<br/>in action.</>} lead="Real workflows. Measurable impact. Each industry opens into a curated experience with its own agents, terms and scenario."/>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:22,marginTop:64}}>
      {inds.map(i=><div key={i.id}>
        <IndustryTile code={i.code} height={380} title={i.title} description={i.use} onClick={()=>go('industry',{id:i.id})} media={<Photo id={'tile-'+i.id} label={i.photo} src={i.img.src} credit={i.img.credit} href={i.img.href}/>}/>
        <div style={{display:'flex',gap:28,marginTop:18}}>{i.stats.slice(0,2).map(([v,l])=><div key={l}><div style={{font:'500 22px/1 var(--font-sans)',letterSpacing:'-0.02em'}}>{v}</div><div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginTop:8}}>{l}</div></div>)}</div>
      </div>)}
      <ScopedTile go={go} height={380}/>
    </div>
  </Band>;
}
function AgentCard({id,go}){
  const a=window.AW.agentFor(id);const [h,setH]=React.useState(false);
  return <div onClick={()=>go('passport',{id})} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:'var(--paper)',border:'1px solid '+(h?'var(--vermilion-500)':'var(--border-box)'),padding:22,cursor:'pointer',transition:'border-color var(--dur-base)'}}>
    <div style={{display:'flex',gap:14,alignItems:'center'}}><Avatar letter={a.letter} size={44}/><div><div style={{font:'500 17px/1.1 var(--font-sans)'}}>{a.name}</div><div style={{marginTop:6}}><Badge>Verified</Badge></div></div></div>
    <div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginTop:18,textTransform:'none'}}>agent://{a.handle}.aidress</div>
    <div style={{display:'flex',justifyContent:'space-between',marginTop:18,paddingTop:14,borderTop:'1px solid var(--border-rule)',font:'400 14px/1 var(--font-sans)'}}><span style={{color:'var(--text-secondary)'}}>Trust</span><span>{a.trust}</span></div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:18,font:'500 14px/1 var(--font-sans)',color:h?'var(--vermilion-600)':'var(--ink-deep)'}}>View passport<Icon name="arrow-up-right" size={16}/></div>
  </div>;
}
function IndustryDetail({go,params}){
  const D=window.AW;const ind=D.industries[params.id]||D.industries.logistics;
  if(ind.soon&&!(D.flags&&D.flags.industriesLive)) return <ComingSoon ind={ind} go={go}/>;
  const scrollTo=id=>{const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'});};
  return <div>
    <Band style={{paddingTop:40,paddingBottom:56}}>
      <TextLink direction="back" onClick={()=>go('industries')}>All industries</TextLink>
      <div style={{marginTop:56}}><SectionHeader index={ind.code} label={ind.title} tagline={ind.scenario} title={ind.title+'.'} lead={ind.lead}/></div>
      <div style={{display:'flex',gap:12,marginTop:40}}><Button size="lg" iconRight="arrow-down" onClick={()=>scrollTo('workflow')}>Explore the workflow</Button><Button size="lg" variant="secondary" onClick={()=>go('atlas')}>See {ind.short} agents in the Atlas</Button></div>
    </Band>
    <div style={{padding:'0 var(--gutter)',background:'var(--paper)'}}><Photo id={'hero-'+ind.id} label={ind.photo} src={ind.heroImg.src} credit={ind.heroImg.credit} href={ind.heroImg.href} height={520}/></div>
    <Band style={{paddingTop:48,paddingBottom:48}}>
      <StatRow size="lg" stats={ind.stats.map(([value,label],k)=>({value,label,accent:k===1}))}/>
      <div style={{display:'flex',gap:10,alignItems:'center',marginTop:40,flexWrap:'wrap'}}><span style={{...mono,fontSize:12,color:'var(--text-secondary)',marginRight:8}}>Terminology</span>{ind.terms.map(t=><Tag key={t} mono>{t}</Tag>)}</div>
    </Band>
    <Band tone="stone" id="workflow">
      <SectionHeader size="md" index="01" label="Workflow" tagline="Demonstration" title="From request to resolved." lead="Select a step to see what the requesting agent needs, who is involved, what Aidress contributes, and what passes on. The route turns orange when it resolves."/>
      <div style={{marginTop:56}}><Stepper ind={ind} onAgent={id=>go('passport',{id})} onCode={()=>go('developers',{example:ind.id})}/></div>
    </Band>
    <Band>
      <SectionHeader size="md" index="02" label="Five layers" tagline={'Applied to '+ind.short} title={'The layers, in '+ind.short.toLowerCase()+'.'}/>
      <div style={{marginTop:56}}><FiveLayers ind={ind}/></div>
    </Band>
    <Band tone="stone">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}><div><div style={{...mono}}>03 / Agents in this workflow</div><h2 style={{margin:'22px 0 0',font:'500 48px/1 var(--font-sans)',letterSpacing:'-0.045em'}}>Meet the counterparties.</h2></div><TextLink onClick={()=>go('atlas')}>Explore all in the Atlas</TextLink></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:18,marginTop:48}}>{ind.agents.map(a=><AgentCard key={a} id={a} go={go}/>)}</div>
    </Band>
  </div>;
}
const V='var(--vermilion-500)';
function SoonTag(){return <span style={{...mono,fontSize:11,display:'inline-flex',alignItems:'center',gap:8,padding:'7px 10px',border:'1px solid '+V,color:'var(--vermilion-600)'}}><span style={{width:6,height:6,background:V}}></span>In development · coming soon</span>;}
function Flow({items,hot=1}){return <div style={{display:'flex',alignItems:'stretch',flexWrap:'wrap',rowGap:12}}>{items.map(([t,s],k)=><React.Fragment key={t}>
  {k>0&&<div style={{flex:'1 1 40px',minWidth:40,maxWidth:120,alignSelf:'center',height:2,background:V}}></div>}
  <div style={{flex:'1 1 180px',minWidth:160,padding:'18px 20px',background:'var(--surface-card)',border:k===hot?'2px solid '+V:'1px solid var(--border-box)',display:'flex',flexDirection:'column',gap:8}}><span style={{font:'500 17px/1.2 var(--font-sans)'}}>{t}</span><span style={{font:'400 14px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>{s}</span></div></React.Fragment>)}</div>;}
function EarlyAccess({label}){
  const [e,setE]=React.useState('');const [ok,setOk]=React.useState(false);
  if(ok) return <div style={{font:'500 16px/1.4 var(--font-sans)'}}>Thanks. We’ll be in touch at {e}.</div>;
  return <form onSubmit={ev=>{ev.preventDefault();if(e.includes('@'))setOk(true);}} style={{display:'flex',gap:8,flexWrap:'wrap',maxWidth:520}}>
    <input type="email" required value={e} onChange={ev=>setE(ev.target.value)} placeholder="you@company.com" style={{flex:'1 1 240px',height:48,padding:'0 14px',border:'1px solid var(--border-box)',background:'var(--surface-card)',font:'400 15px/1 var(--font-sans)',color:'var(--ink)',outline:'none',boxSizing:'border-box'}}/>
    <Button size="lg" type="submit">{label}</Button></form>;
}
function Bar({t}){
  const [on,setOn]=React.useState(false);const tm=React.useRef();
  const flash=()=>{clearTimeout(tm.current);setOn(true);tm.current=setTimeout(()=>setOn(false),900);};
  React.useEffect(()=>()=>clearTimeout(tm.current),[]);
  return <span onMouseEnter={flash} onClick={flash} style={{cursor:'crosshair',padding:'0 4px',background:on?V:'var(--ink-deep)',color:on?'#fff':'transparent',transition:'background 160ms, color 160ms',userSelect:'none'}}>{t}</span>;
}
function Line({v}){return <span style={{display:'flex',flexWrap:'wrap',gap:'6px 6px',alignItems:'center'}}>{v.split(/(\{[^}]+\})/).filter(Boolean).map((p,k)=>p[0]==='{'?<Bar key={k} t={p.slice(1,-1)}/>:<span key={k}>{p.trim()}</span>)}</span>;}
function Redacted({rows}){
  return <div style={{background:'var(--surface-card)',border:'1px solid var(--ink)',maxWidth:720}}>
    <div style={{display:'flex',justifyContent:'space-between',gap:12,padding:'12px 18px',borderBottom:'1px solid var(--border-box)',...mono,fontSize:11,color:'var(--text-secondary)'}}><span>Brief · restricted</span><span>Hover to decrypt</span></div>
    <div style={{display:'flex',flexDirection:'column'}}>{rows.map(([l,v])=><div key={l} style={{display:'grid',gridTemplateColumns:'minmax(110px,160px) minmax(0,1fr)',gap:16,padding:'14px 18px',borderBottom:'1px solid var(--border-subtle)',font:'400 14px/1.6 var(--font-mono)',textTransform:'uppercase',alignItems:'center'}}><span style={{color:'var(--text-secondary)'}}>{l}</span><Line v={v}/></div>)}</div>
    <div style={{padding:'20px 18px',font:'500 28px/1 var(--font-sans)',letterSpacing:'-0.03em',display:'flex',alignItems:'center',gap:12}}><span style={{width:10,height:10,background:V}}></span>Coming soon.</div>
  </div>;
}
function ComingSoon({ind,go}){
  return <div>
    <Band style={{paddingTop:40,paddingBottom:48}}>
      <TextLink direction="back" onClick={()=>go('industries')}>All industries</TextLink>
      <div style={{marginTop:40}}><SoonTag/></div>
      <div style={{marginTop:24}}><SectionHeader index={ind.code} label={ind.title} title={ind.title+'.'}/></div>
      <div style={{marginTop:40}}><Redacted rows={ind.brief}/></div>
    </Band>
    <Band tone="stone">
      <h2 style={{margin:0,font:'500 32px/1.1 var(--font-sans)',letterSpacing:'-0.03em'}}>Get early access.</h2>
      <p style={{margin:'12px 0 24px',font:'400 16px/1.5 var(--font-sans)',color:'var(--text-secondary)',maxWidth:560}}>We’re working with a small group of design partners in {ind.short.toLowerCase()}. Leave your email and we’ll reach out.</p>
      <EarlyAccess label="Request access"/>
    </Band>
  </div>;
}
const ATLAS_BRIEF=[['Product','Atlas · live registry'],['Status','{In development}'],['Agents indexed','{10,482}'],['Interfaces','{A2A} · {MCP} · {HTTP}'],['View','{Force-directed network graph}'],['Launch','{Soon}']];
function AtlasSoon({go}){
  return <div>
    <Band style={{paddingTop:56,paddingBottom:48}}>
      <SoonTag/>
      <div style={{marginTop:24}}><SectionHeader label="Atlas" title={<>The registry,<br/>made visible for humans.</>}/></div>
      <div style={{marginTop:40}}><Redacted rows={ATLAS_BRIEF}/></div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:32}}><Button size="lg" variant="secondary" onClick={()=>go('home')}>Back to aidress.ai</Button><Button size="lg" onClick={()=>go('docs')}>Read the docs</Button></div>
    </Band>
    <Band tone="stone">
      <h2 style={{margin:0,font:'500 32px/1.1 var(--font-sans)',letterSpacing:'-0.03em'}}>Get notified when the Atlas opens.</h2>
      <div style={{marginTop:24}}><EarlyAccess label="Notify me"/></div>
    </Band>
  </div>;
}
function ScopedTile({go,height=240}){
  const [h,setH]=React.useState(false);
  return <div onClick={()=>go('scoped')} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{height,boxSizing:'border-box',cursor:'pointer',background:'var(--ink-deep)',color:'var(--paper)',border:'2px solid '+(h?V:'#3a3c38'),padding:24,display:'flex',flexDirection:'column',justifyContent:'space-between',transition:'border-color var(--dur-base)'}}>
    <div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>REG-00</span><span style={{color:V}}>For organisations</span></div>
    <div><div style={{font:'500 26px/1.1 var(--font-sans)',letterSpacing:'-0.025em'}}>Scoped registries</div><p style={{margin:'10px 0 0',font:'400 14px/1.45 var(--font-sans)',color:'#c9c9c1'}}>A scoped registry for your organisation, consortium or network. Your agents, your rules, the same protocol.</p>
    <div style={{display:'flex',alignItems:'center',gap:8,marginTop:16,font:'500 14px/1 var(--font-sans)',color:h?V:'var(--paper)'}}>Learn more<Icon name="arrow-up-right" size={16}/></div></div>
  </div>;
}
function ScopedRegistries({go}){
  const pts=[['Scoped discovery','Only agents you approve can find each other.'],['Your trust rules','Set your own thresholds, attestations and reviews.'],['Same API','Agents use the same /verify and /match calls as the public registry.']];
  const ag=t=><span style={{...mono,fontSize:11,padding:'8px 10px',background:'var(--surface-card)',border:'1px solid var(--border-box)',textTransform:'none'}}>{t}</span>;
  return <div>
    <Band style={{paddingTop:40,paddingBottom:48}}>
      <TextLink direction="back" onClick={()=>go('industries')}>All industries</TextLink>
      <div style={{marginTop:40}}><SoonTag/></div>
      <div style={{marginTop:24}}><SectionHeader index="REG-00" label="Scoped registries" title={<>Your agents. Your rules.<br/>The same protocol.</>} lead="A scoped registry for your organisation, consortium or network. Internal agents discover and verify each other privately, and you decide which of them are visible on the public Aidress registry."/></div>
    </Band>
    <Band tone="stone">
      <div style={{...mono,fontSize:12,color:'var(--text-secondary)'}}>How it works</div>
      <div style={{marginTop:24,border:'1px dashed var(--gray-500)',padding:'20px 20px 24px',display:'flex',flexDirection:'column',gap:18}}>
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8,...mono,fontSize:11,color:'var(--text-secondary)'}}><span>Public Aidress registry</span><span>agent_partner_01 · agent_carrier_44 · …</span></div>
        <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',gap:16}}>
          <div style={{flex:'2 1 320px',border:'2px solid '+V,background:'var(--paper)',padding:20,display:'flex',flexDirection:'column',gap:14}}>
            <span style={{font:'500 17px/1.2 var(--font-sans)'}}>Your scoped registry</span>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{ag('agent_treasury')}{ag('agent_procurement')}{ag('agent_support')}</div>
            <span style={{font:'400 13px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>Internal agents only. Discovery and trust stay inside.</span>
          </div>
          <div style={{flex:'0 1 60px',height:2,background:V,minWidth:30}}></div>
          <div style={{flex:'1 1 200px',border:'1px solid var(--ink)',background:'var(--surface-card)',padding:20,display:'flex',flexDirection:'column',gap:8}}>
            <span style={{font:'500 17px/1.2 var(--font-sans)'}}>Gateway</span>
            <span style={{font:'400 13px/1.4 var(--font-sans)',color:'var(--text-secondary)'}}>You choose which agents are published to the public registry.</span>
          </div>
        </div>
      </div>
    </Band>
    <Band>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:32,borderTop:'1px solid var(--border-rule)',paddingTop:24}}>{pts.map(([t,s],k)=><div key={t}><div style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')}</div><div style={{marginTop:12,font:'500 20px/1.2 var(--font-sans)'}}>{t}</div><p style={{margin:'8px 0 0',font:'400 15px/1.5 var(--font-sans)',color:'var(--text-secondary)'}}>{s}</p></div>)}</div>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',alignItems:'center',marginTop:40}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)',marginRight:6}}>Example uses</span>{['A bank’s internal agents','A shipping consortium','A government service network'].map(t=><Tag key={t}>{t}</Tag>)}</div>
    </Band>
    <Band tone="dark">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap'}}><div><h2 style={{margin:0,font:'500 32px/1.1 var(--font-sans)',letterSpacing:'-0.03em'}}>Run a scoped registry.</h2><p style={{margin:'10px 0 0',font:'400 16px/1.5 var(--font-sans)',color:'#c9c9c1'}}>We’re onboarding a small number of design partners.</p></div>
      <Button size="lg" onClick={()=>{location.href='mailto:teamaidress@gmail.com?subject=Scoped%20registry';}}>Talk to us</Button></div>
    </Band>
  </div>;
}
Object.assign(window,{Industries,IndustryDetail,ScopedRegistries,ScopedTile,AtlasSoon,Redacted});
})();
