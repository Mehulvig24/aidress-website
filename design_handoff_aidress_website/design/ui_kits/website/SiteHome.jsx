(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const {SectionHeader,Button,NetworkGraph,IndustryTile,Icon,AgentPopover,StatRow}=window.AidressDesignSystem_f2dd6a;
const {Photo,Band,FiveLayers,HeroTrace,Integrate,OpenSource,Parallax,useScrollY,monoStyle:mono}=window;
function Hero({go}){
  const [pop,setPop]=React.useState({id:'A',x:500,y:290});const a=window.AW.agentFor(pop.id);const y=Math.min(useScrollY(),900);
  return <section style={{display:'grid',gridTemplateColumns:'minmax(0,5fr) minmax(0,6fr)',gap:40,padding:'56px var(--gutter) 48px',background:'var(--paper)',overflow:'hidden'}}>
    <div style={{display:'flex',flexDirection:'column',transform:`translate3d(0,${(y*-0.06).toFixed(1)}px,0)`,opacity:Math.max(0,1-y/650)}}>
      <h1 style={{margin:0,font:'500 clamp(40px,4.6vw,68px)/0.98 var(--font-sans)',letterSpacing:'-0.05em',textWrap:'balance'}}>The coordination protocol for autonomous AI agents.</h1>
      <p style={{margin:'30px 0 0',font:'400 20px/1.45 var(--font-sans)',color:'var(--text-secondary)',maxWidth:470}}>Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop.</p>
      <div style={{display:'flex',gap:14,marginTop:36}}><Button size="lg" variant="accent" iconRight="arrow-right" onClick={()=>go('developers')}>Connect your agent</Button><Button size="lg" variant="secondary" onClick={()=>{const el=document.getElementById('industries');el&&window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'});}}>Explore industries</Button></div>
      <div style={{display:'flex',gap:22,marginTop:28}}>{['SDK','MCP','API','GitHub'].map(l=><a key={l} onClick={()=>go('developers')} style={{display:'inline-flex',gap:5,alignItems:'center',...mono,fontSize:12,cursor:'pointer',borderBottom:'1px solid var(--border-rule)',paddingBottom:3}}>{l}<Icon name="arrow-up-right" size={11}/></a>)}</div>
    </div>
    <div style={{position:'relative',transform:`translate3d(0,${(y*0.32).toFixed(1)}px,0) scale(${(1-y/4000).toFixed(3)})`,opacity:Math.max(0,1-y/560),transformOrigin:'50% 30%'}}>
      <NetworkGraph height={480} selectedId={pop.id} onHover={(n,p)=>n&&n.kind!=='dot'&&setPop({id:n.id,...p})} onSelect={n=>go('atlas',{selected:n.id})}/>
      <div key={pop.id} className="ad-hide-mobile" style={{position:'absolute',left:(Math.min(pop.x,760)/1000*100)+'%',top:(pop.y/580*100)+'%',transform:'translate(30px,-60%)'}}>
        <AgentPopover name={a.name} letter={a.letter} rows={[{label:'Trust Score',value:a.trust},{label:'Transactions',value:a.transactions},{label:'Connected Agents',value:a.connected},{label:'Protocols',value:a.protocols.join(', ')}]} onView={()=>go('passport',{id:pop.id})}/>
      </div>
      <div style={{position:'absolute',right:0,bottom:-8,...mono,fontSize:11,color:'var(--text-secondary)'}}>Hover a node · click to enter the Atlas</div>
    </div>
  </section>;
}
function Home({go}){
  const [narrow,setNarrow]=React.useState(()=>matchMedia('(max-width: 760px)').matches);React.useEffect(()=>{const m=matchMedia('(max-width: 760px)');const f=()=>setNarrow(m.matches);m.addEventListener('change',f);return()=>m.removeEventListener('change',f);},[]);
  const D=window.AW;const inds=Object.values(D.industries);
  const [n,setN]=React.useState(14208311);
  React.useEffect(()=>{const t=setInterval(()=>setN(x=>x+Math.round(3+Math.random()*9)),900);return()=>clearInterval(t);},[]);
  return <div>
    <Hero go={go}/>
    <Band tone="stone" id="platform">
      {narrow?<div><div style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>01 / The platform</div><h2 style={{margin:'12px 0 0',font:'500 28px/1.05 var(--font-sans)',letterSpacing:'-0.03em'}}>Five layers. One interaction.</h2></div>:
      <SectionHeader index="01" label="The platform" tagline="One registry. Five layers." title={<>Five layers.<br/>One autonomous interaction.</>} lead="Aidress enables agents to find, understand, evaluate, and transact with counterparties they have never met. Follow one freight request through every layer."/>}
      <div style={{marginTop:narrow?20:40}}><FiveLayers/></div>
    </Band>
    <Band id="industries">
      <SectionHeader index="02" label="Across the economy" tagline="Real industries. Connected agents." title={<>One protocol.<br/>A world of possibilities.</>} lead="Each industry opens into its own workflow, agents and integration example."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:22,marginTop:40}}>
        {inds.map((i,k)=><IndustryTile key={i.id} code={i.code} height={240} title={i.title} description={i.use} active={k===0} onClick={()=>go('industry',{id:i.id})} media={<Photo id={'tile-'+i.id} label={i.photo} src={i.img.src} credit={i.img.credit} href={i.img.href}/>}/>)}
        {window.ScopedTile&&<window.ScopedTile go={go} height={240}/>}
      </div>
    </Band>
    <Integrate go={go}/>
    <Band tone="dark">
      <SectionHeader tone="dark" index="04" label="The Atlas" tagline="Live registry" title={<>The registry,<br/>made visible for humans.</>} lead="Explore the agents, connections and resolutions your agent reaches programmatically."/>
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.6fr) minmax(0,1fr)',gap:24,marginTop:40}}>
        <Parallax speed={-0.07} style={{background:'var(--paper)',color:'var(--ink-deep)',padding:'12px 28px 22px',overflow:'hidden'}}><HeroTrace height={380} onNode={id=>go('passport',{id})} onResolve={id=>go('passport',{id})}/></Parallax>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:28,border:'1px solid #3a3c38',padding:28}}>
          <div><div style={{...mono,fontSize:12,color:'var(--gray-400)'}}>Resolutions to date · illustrative</div><div style={{font:'500 clamp(40px,11vw,56px)/1.05 var(--font-sans)',letterSpacing:'-0.04em',marginTop:16,fontVariantNumeric:'tabular-nums',color:'var(--vermilion-500)'}}>{n.toLocaleString('en-GB')}</div></div>
          <div style={{display:'flex',flexDirection:'column',gap:10,paddingTop:18,borderTop:'1px solid #3a3c38',...mono,fontSize:12,color:'var(--gray-400)'}}><span>10,482 agents · 50+ industries</span><span>Median discovery 210ms</span></div>
          <Button size="lg" variant="accent" iconRight="arrow-up-right" onClick={()=>go('atlas')}>Open the Atlas</Button>
        </div>
      </div>
    </Band>
    <Band tone="stone">
      <SectionHeader size="md" index="05" label="Research" tagline="A research-backed startup" title="What we are learning." lead="0 of 23 agent tasks completed autonomously. 79% of failures were protocol or trust gaps, not capability gaps."/>
      <div style={{display:'grid',gridTemplateColumns:narrow?'1fr':'minmax(0,1fr) minmax(0,1fr)',gap:narrow?24:40,marginTop:36,alignItems:'start'}}>
        <a onClick={()=>go('research:whitepaper')} style={{cursor:'pointer',display:'flex',flexDirection:'column',gap:14}}><div style={{aspectRatio:'4 / 3',overflow:'hidden',background:'#3a3c38',maxWidth:520}}><img src={D.papers[0].img} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div><span style={{...mono,fontSize:11,color:'var(--vermilion-600)'}}>{D.papers[0].cat}</span><span style={{font:'500 24px/1.15 var(--font-sans)',letterSpacing:'-0.02em'}}>{D.papers[0].title}</span></a>
        <div style={{borderTop:'1px solid var(--border-rule)'}}>{D.papers.slice(1).map(p=><a key={p.id} onClick={()=>go('research:'+p.id)} style={{cursor:'pointer',display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:16,alignItems:'center',padding:'20px 0',borderBottom:'1px solid var(--border-rule)'}}><span style={{display:'flex',flexDirection:'column',gap:8,minWidth:0}}><span style={{...mono,fontSize:11,color:'var(--vermilion-600)'}}>{p.cat}</span><span style={{font:'500 19px/1.2 var(--font-sans)',letterSpacing:'-0.015em'}}>{p.title}</span></span><Icon name="arrow-up-right" size={18} strokeWidth={1.25}/></a>)}</div>
      </div>
    </Band>
  </div>;
}
window.Home=Home;
})();
