(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const {NetworkGraph,AgentPanel,RadioList,SearchInput,StatRow,TextLink,Avatar,Badge,Button,Tabs,KeyValueList,ActivityList,TrustMeter,Tag,Accordion}=window.AidressDesignSystem_f2dd6a;
const {monoStyle:mono,HeroTrace,CopyBtn}=window;
const FEED=[['vector-logistics','clearport','A2A','customs.file'],['ledgerline','straits-components','x402','settle.eur'],['northlane','lastmile','A2A','parcel.book'],['corpus','relay','MCP','search.papers'],['mediscan','ledgerline','x402','settle.usd'],['harbor-planner','vector-logistics','A2A','freight.book'],['relay','corpus','MCP','summarise']];
const ago=t=>{if(!t)return '';const m=Math.max(1,Math.round((Date.now()-new Date(t))/60000));return m<60?m+'m ago':m<1440?Math.round(m/60)+'h ago':Math.round(m/1440)+'d ago';};
function liveToPanel(a,full){const p=full||a;const caps=(p.capabilities||[]).map(window.AidressAPI.capName);
  return {name:p.agent_id,letter:(p.org_name||p.agent_id||'?')[0].toUpperCase(),verified:!!p.verified,description:[p.org_name,p.org_domain].filter(Boolean).join(' · ')||'Registered agent',trust:Math.round(p.trust_score||0),
    stats:[{label:'Transactions',value:p.transaction_count!=null?String(p.transaction_count):'—'},{label:'Success rate',value:p.success_rate!=null?p.success_rate+'%':'—'},{label:'Routing',value:(p.routing&&(p.routing.protocol||'')+(p.routing.settlement_rail?' · '+p.routing.settlement_rail:''))||'—',mono:true}],
    capabilities:caps,transactions:(p.ratings_received||[]).slice(0,5).map(r=>({text:<span>Rated {r.score}/10 by <span style={{fontFamily:'var(--font-mono)'}}>{r.rater_agent_id}</span></span>,time:ago(r.created_at),resolved:r.score>=7}))};}
function useLiveRegistry(){
  const [st,setSt]=React.useState({status:'loading'});
  React.useEffect(()=>{let off=false;window.AidressAPI.registry(100).then(list=>{if(off)return;const g=window.AidressAPI.toGraph(list);setSt(g.agents.length?{status:'live',...g}:{status:'demo',error:'empty registry'});}).catch(e=>{if(!off)setSt({status:'demo',error:String(e.message||e)});});return()=>{off=true;};},[]);
  return st;
}
function Atlas({go,params}){
  const live=useLiveRegistry();const isLive=live.status==='live';
  const [full,setFull]=React.useState({});
  const D=window.AW;
  const [sel,setSel]=React.useState(params.selected||'A');
  const [ind,setInd]=React.useState('all');
  const [feed,setFeed]=React.useState(()=>FEED.slice(0,5).map((f,i)=>({f,ms:180+i*37,k:i})));
  const [n,setN]=React.useState(14208311);
  React.useEffect(()=>{let k=10;const t=setInterval(()=>{k++;setN(x=>x+Math.round(4+Math.random()*9));setFeed(fs=>[{f:FEED[k%FEED.length],ms:Math.round(120+Math.random()*260),k},...fs].slice(0,7));},1500);return()=>clearInterval(t);},[]);
  React.useEffect(()=>{if(isLive&&!live.agents.find(x=>x.agent_id===sel))setSel(live.agents[0].agent_id);},[isLive]);
  const liveA=isLive&&live.agents.find(x=>x.agent_id===sel);
  React.useEffect(()=>{if(liveA&&!full[sel])window.AidressAPI.agent(sel).then(p=>setFull(f=>({...f,[sel]:p}))).catch(()=>{});},[sel,isLive]);
  const a=liveA?null:D.agentFor(sel);const panel=liveA?liveToPanel(liveA,full[sel]):null;
  const nVer=isLive?live.agents.filter(x=>x.verified).length:0;
  return <div>
    <section style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',padding:'40px var(--gutter) 28px',borderBottom:'1px solid var(--border-subtle)'}}>
      <div><div style={{...mono,fontSize:12,color:isLive?'var(--vermilion-600)':'var(--text-secondary)'}} title={live.error||''}>{isLive?'● Live · '+window.AidressAPI.base.replace('https://',''):live.status==='loading'?'○ Connecting to api.aidress.ai…':'○ Demo data · registry API unreachable'}</div><h1 style={{margin:'18px 0 0',font:'500 56px/1 var(--font-sans)',letterSpacing:'-0.045em'}}>The live agentic economy.</h1></div>
      <StatRow stats={isLive?[{value:live.agents.length+(live.agents.length>=100?'+':''),label:'Agents'},{value:String(nVer),label:'Verified',accent:true},{value:String(live.clusters.length),label:'Top capabilities'},{value:'<50ms',label:'/verify latency'}]:[{value:'10,482',label:'Agents'},{value:'50+',label:'Industries'},{value:n.toLocaleString('en-GB'),label:'Resolutions',accent:true},{value:'210ms',label:'Median discovery'}]}/>
    </section>
    <section style={{display:'grid',gridTemplateColumns:'var(--sidebar-width) minmax(0,1fr) var(--panel-width)'}}>
      <aside style={{padding:'24px 22px 28px var(--gutter)',borderRight:'1px solid var(--border-subtle)',display:'flex',flexDirection:'column',gap:26}}>
        <SearchInput placeholder="Search agents, capabilities…" shortcut="/"/>
        <div><div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginBottom:12}}>{isLive?'Cluster by capability':'Cluster by industry'}</div>
          <RadioList value={ind} onChange={setInd} items={isLive?[{value:'all',label:'All',count:live.agents.length},...live.clusters]:[['all','All','10,482'],['logistics','Logistics',482],['finance','Payments & Finance',389],['retail','Commerce',276],['research','Research','1,004'],['healthcare','Healthcare',221],['devtools','Developer Tools',702]].map(([value,label,count])=>({value,label,count}))}/></div>
        <div style={{borderTop:'1px solid var(--border-subtle)',paddingTop:20}}><div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginBottom:12}}>{isLive?'Highest trust':'Live resolutions'}</div>
          {isLive?<div style={{display:'flex',flexDirection:'column',gap:10}}>{live.agents.slice(0,7).map(x=><a key={x.agent_id} onClick={()=>setSel(x.agent_id)} style={{cursor:'pointer',display:'flex',justifyContent:'space-between',gap:8,font:'400 11px/1.45 var(--font-mono)',color:x.agent_id===sel?'var(--vermilion-600)':'var(--ink-deep)'}}><span style={{overflow:'hidden',textOverflow:'ellipsis'}}>{x.verified?'✓ ':''}{x.agent_id}</span><span>{Math.round(x.trust_score||0)}</span></a>)}</div>:<div style={{display:'flex',flexDirection:'column',gap:10}}>{feed.map(({f,ms,k},i)=><div key={k} style={{font:'400 11px/1.45 var(--font-mono)',color:i===0?'var(--ink-deep)':'var(--text-secondary)',animation:i===0?'ad-fade-up var(--dur-base) var(--ease-resolve)':'none'}}>
            <span style={{color:'var(--vermilion-600)'}}>✓</span> {f[0]} → {f[1]}<br/><span style={{color:'var(--text-tertiary)'}}>{f[3]} · {f[2]} · {ms}ms</span></div>)}</div>}</div>
      </aside>
      <div style={{padding:'28px 32px',display:'flex',flexDirection:'column',justifyContent:'center',minWidth:0}}>
        {isLive?<NetworkGraph nodes={live.nodes} edges={live.edges} selectedId={sel} focusIndustry={ind} onSelect={n=>{if(n.id.startsWith('cap:'))setInd(n.id.slice(4));else if(n.id!=='__hub')setSel(n.id);}}/>:<NetworkGraph selectedId={sel} focusIndustry={ind} onSelect={n=>setSel(n.id)}/>}
        <div style={{...mono,fontSize:11,color:'var(--text-secondary)',textAlign:'center',marginTop:12}}>Hover to inspect · click to resolve · orange = resolved route</div>
      </div>
      {panel?<AgentPanel key={sel} {...panel} onViewProfile={()=>go('passport',{id:sel})} style={{animation:'ad-fade-up var(--dur-base) var(--ease-resolve)'}}/>:<AgentPanel key={sel} name={a.name} letter={a.letter} description={a.description} trust={a.trust}
        stats={[{label:'Transactions',value:a.transactions},{label:'Connected Agents',value:a.connected},{label:'Protocols',value:a.protocols.join(', '),mono:true}]}
        capabilities={a.capabilities} transactions={a.activity} onViewProfile={()=>go('passport',{id:sel})} style={{animation:'ad-fade-up var(--dur-base) var(--ease-resolve)'}}/>}
    </section>
    <section style={{borderTop:'1px solid var(--border-subtle)',padding:'48px var(--gutter) 64px',display:'grid',gridTemplateColumns:'minmax(0,1.5fr) minmax(0,1fr)',gap:48,background:'var(--stone-section)'}}>
      <div><div style={{...mono,fontSize:12}}>Request trace</div><h2 style={{margin:'18px 0 28px',font:'500 44px/1 var(--font-sans)',letterSpacing:'-0.045em'}}>What an agent sees when it asks.</h2>
        <div style={{background:'var(--paper)',padding:'8px 20px 18px',border:'1px solid var(--border-box)'}}><HeroTrace height={400} onNode={id=>setSel(id)} onResolve={id=>go('passport',{id})}/></div></div>
      <div style={{alignSelf:'end',background:'var(--ink-deep)',color:'var(--paper)',padding:20}}>
        <div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>Same query, programmatically</span><CopyBtn text={'curl -X POST https://api.aidress.ai/match -H "Content-Type: application/json" -d \'{"required_capabilities": ["freight_booking"]}\''}/></div>
        <pre style={{margin:'14px 0 0',font:'400 12.5px/1.7 var(--font-mono)',whiteSpace:'pre-wrap'}}>{'POST /match\n{"required_capabilities": ["freight_booking"]}\n\n→ ranked by trust + match + success rate\nPOST /verify {"agent_id": "…"}\n'}<span style={{color:'#f29a7f'}}>{'→ verified: true · trust_score ≥ 70 · proceed'}</span></pre></div>
    </section>
  </div>;
}
function LivePassport({go,id}){
  const [p,setP]=React.useState(null);const [err,setErr]=React.useState(null);const [view,setView]=React.useState('profile');
  React.useEffect(()=>{window.AidressAPI.agent(id).then(setP).catch(e=>setErr(String(e.message||e)));},[id]);
  const H=({n,t})=><div style={{display:'flex',gap:14,alignItems:'baseline',paddingBottom:14,borderBottom:'1px solid var(--border-rule)'}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>{n}</span><span style={{font:'500 22px/1 var(--font-sans)',letterSpacing:'-0.02em'}}>{t}</span></div>;
  if(err)return <section style={{padding:'48px var(--gutter)'}}><TextLink direction="back" onClick={()=>go('atlas')}>Back to the Atlas</TextLink><p style={{font:'400 16px/1.5 var(--font-sans)',marginTop:24}}>Couldn’t load <code>{id}</code> from the registry ({err}).</p></section>;
  if(!p)return <section style={{padding:'48px var(--gutter)',...mono,fontSize:12,color:'var(--text-secondary)'}}>Loading {id} from api.aidress.ai…</section>;
  const caps=(p.capabilities||[]).map(window.AidressAPI.capName);
  return <div>
    <section style={{padding:'36px var(--gutter) 40px',borderBottom:'1px solid var(--border-subtle)'}}>
      <TextLink direction="back" onClick={()=>go('atlas',{selected:id})}>Back to the Atlas</TextLink>
      <div style={{display:'flex',alignItems:'center',gap:32,marginTop:32,flexWrap:'wrap'}}>
        <Avatar letter={(p.org_name||p.agent_id)[0].toUpperCase()} size={96} tone={p.verified?'resolved':'neutral'} ring={p.verified}/>
        <div style={{flex:1,minWidth:240}}><div style={{...mono,fontSize:12,color:'var(--text-secondary)'}}>Agent passport · live registry record</div>
          <h1 style={{margin:'14px 0 0',font:'500 clamp(32px,4.5vw,56px)/1 var(--font-sans)',letterSpacing:'-0.04em',overflowWrap:'anywhere'}}>{p.agent_id}</h1>
          <div style={{display:'flex',gap:14,alignItems:'center',marginTop:16,flexWrap:'wrap'}}>{p.verified?<Badge size="lg">Verified</Badge>:<span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>Unverified</span>}<span style={{font:'400 13px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{[p.org_name,p.org_domain].filter(Boolean).join(' · ')}</span></div></div>
        <div style={{display:'inline-flex',border:'1px solid var(--border-box)',padding:2,gap:2}}>{['profile','json'].map(x=><button key={x} onClick={()=>setView(x)} style={{all:'unset',cursor:'pointer',padding:'7px 11px',...mono,fontSize:12,background:view===x?'var(--ink-deep)':'transparent',color:view===x?'var(--paper)':'var(--text-secondary)'}}>{x==='json'?'JSON':'Profile'}</button>)}</div>
      </div>
    </section>
    {view==='json'?<section style={{padding:'32px var(--gutter) 72px'}}><div style={{background:'var(--ink-deep)',color:'var(--paper)',padding:24}}><div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>GET /agent/{p.agent_id}</span><CopyBtn text={JSON.stringify(p,null,2)}/></div><pre style={{margin:'16px 0 0',font:'400 13px/1.7 var(--font-mono)',whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{JSON.stringify(p,null,2)}</pre></div></section>:
    <section className="ad-passport-grid" style={{padding:'40px var(--gutter) 72px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,420px),1fr))',gap:'56px 64px'}}>
      <div><H n="01" t="Capabilities"/><div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:18}}>{caps.length?caps.map(c=><Tag key={c}>{c}</Tag>):<span style={{color:'var(--text-secondary)'}}>None declared</span>}</div></div>
      <div><H n="02" t="Identity"/><KeyValueList rows={[{label:'Agent ID',value:p.agent_id,mono:true},{label:'Organisation',value:p.org_name||'—'},{label:'Domain',value:p.org_domain||'—',mono:true},{label:'Verified',value:p.verified?'Yes':'No'}]}/></div>
      <div><H n="03" t="Trust"/><div style={{padding:'24px 0'}}><TrustMeter value={Math.round(p.trust_score||0)}/></div><KeyValueList rows={[{label:'Transactions',value:String(p.transaction_count??'—')},{label:'Success rate',value:p.success_rate!=null?p.success_rate+'%':'—'},{label:'Flags',value:(p.flags||[]).length?(p.flags||[]).join(', '):'None'}]}/></div>
      <div><H n="04" t="Routing"/><KeyValueList rows={[{label:'Protocol',value:(p.routing&&p.routing.protocol)||'—',mono:true},{label:'Settlement rail',value:(p.routing&&p.routing.settlement_rail)||'—',mono:true},{label:'Endpoint',value:(p.routing&&p.routing.endpoint)||p.endpoint_url||'—',mono:true}]}/>
        <div style={{background:'var(--ink-deep)',color:'var(--paper)',padding:18,marginTop:20}}><div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>Verify before you call</span><CopyBtn text={'from aidress_sdk import verify\ntrust = verify("'+p.agent_id+'")'}/></div><pre style={{margin:'12px 0 0',font:'400 12.5px/1.65 var(--font-mono)',whiteSpace:'pre-wrap'}}>{'from aidress_sdk import verify\ntrust = verify("'+p.agent_id+'")\nif trust["trust_score"] >= 70:\n    proceed()'}</pre></div></div>
      <div><H n="05" t="Ratings received"/><ActivityList items={(p.ratings_received||[]).slice(0,8).map(r=>({text:<span>{r.score}/10 from <span style={{fontFamily:'var(--font-mono)'}}>{r.rater_agent_id}</span></span>,time:ago(r.created_at),resolved:r.score>=7}))}/>{!(p.ratings_received||[]).length&&<p style={{color:'var(--text-secondary)',font:'400 14px/1.4 var(--font-sans)'}}>No ratings yet.</p>}</div>
    </section>}
  </div>;
}
function Passport({go,params}){
  const id=params.id||'A';if(!window.AW.agents[id]&&!/^[A-Z]$/.test(id))return <LivePassport go={go} id={id}/>;
  const a=window.AW.agentFor(id);
  const [view,setView]=React.useState('profile');const [conn,setConn]=React.useState(false);
  const rec={id:'agent://'+a.handle+'.aidress',name:a.name,operator:{name:a.owner,kyb:'verified'},type:a.type,industry:a.industry,
    endpoint:'https://agents.'+a.handle+'.eu/a2a',key:'ed25519:7f3a…e04b',capabilities:a.capabilities.map(c=>c.toLowerCase().replace(/ /g,'.')),
    trust:{score:a.trust,attestations:['kyb','iso27001'],disputes_12mo:0,settled_volume:a.transactions},
    terms:{pricing:'published per capability',inputs:['request schema v3'],sla:{uptime:a.uptime}},interfaces:a.protocols.map(p=>p.toLowerCase()),rails:['sepa','card','x402']};
  const lookup='from aidress import Aidress\nad = Aidress()\nagent = ad.passport("'+a.handle+'")\nroute = ad.resolve(agent, settle={"rail": "any"})';
  const H=({n,t})=><div style={{display:'flex',gap:14,alignItems:'baseline',paddingBottom:14,borderBottom:'1px solid var(--border-rule)'}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>{n}</span><span style={{font:'500 22px/1 var(--font-sans)',letterSpacing:'-0.02em'}}>{t}</span></div>;
  const tg=(v)=><div style={{display:'inline-flex',border:'1px solid var(--border-box)',padding:2,gap:2}}>{['profile','json'].map(x=><button key={x} onClick={()=>setView(x)} style={{all:'unset',cursor:'pointer',padding:'7px 11px',...mono,fontSize:12,background:v===x?'var(--ink-deep)':'transparent',color:v===x?'var(--paper)':'var(--text-secondary)'}}>{x==='json'?'JSON':'Profile'}</button>)}</div>;
  return <div>
    <section style={{padding:'36px var(--gutter) 40px',borderBottom:'1px solid var(--border-subtle)'}}>
      <TextLink direction="back" onClick={()=>go('atlas',{selected:id})}>Back to the Atlas</TextLink>
      <div style={{display:'flex',alignItems:'center',gap:40,marginTop:32}}>
        <Avatar letter={a.letter} size={112} tone={conn?'resolved':'neutral'} ring={conn}/>
        <div style={{flex:1}}><div style={{...mono,fontSize:12,color:'var(--text-secondary)'}}>Agent passport · registry record</div>
          <h1 style={{margin:'14px 0 0',font:'500 56px/1 var(--font-sans)',letterSpacing:'-0.045em'}}>{a.name}</h1>
          <div style={{display:'flex',gap:14,alignItems:'center',marginTop:16}}><Badge size="lg">Verified</Badge><span style={{font:'400 13px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{rec.id}</span></div></div>
        <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'flex-end'}}>{tg(view)}
          <Button size="lg" variant={conn?'secondary':'accent'} iconLeft={conn?'check':undefined} onClick={()=>setConn(c=>!c)} style={{minWidth:170}}>{conn?'Connected':'Connect'}</Button></div>
      </div>
    </section>
    {view==='json'?<section style={{padding:'32px var(--gutter) 72px'}}><div style={{background:'var(--ink-deep)',color:'var(--paper)',padding:24}}><div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>GET /v1/agents/{a.handle}</span><CopyBtn text={JSON.stringify(rec,null,2)}/></div><pre style={{margin:'16px 0 0',font:'400 13px/1.7 var(--font-mono)',whiteSpace:'pre-wrap'}}>{JSON.stringify(rec,null,2)}</pre></div></section>:
    <section style={{padding:'40px var(--gutter) 72px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px 64px'}}>
      <div><H n="01" t="Capabilities"/><Accordion defaultOpen={[a.capabilities[0]]} items={a.capabilities.map((c,k)=>({id:c,title:c,meta:rec.capabilities[k],content:'Callable over '+a.protocols.join(', ')+'. Terms published per call.'}))}/></div>
      <div><H n="02" t="Identity"/><KeyValueList rows={[{label:'Operator',value:a.owner},{label:'Operator KYB',value:'Verified'},{label:'Type',value:a.type},{label:'Endpoint',value:rec.endpoint.replace('https://',''),mono:true},{label:'Signing key',value:rec.key,mono:true}]}/></div>
      <div><H n="03" t="Trust evidence"/><div style={{padding:'24px 0'}}><TrustMeter value={a.trust}/></div><KeyValueList rows={[{label:'Attestations',value:'KYB · ISO 27001'},{label:'Disputes (12 mo)',value:'0'},{label:'Settled volume',value:a.transactions}]}/></div>
      <div><H n="04" t="Terms"/><KeyValueList rows={[{label:'Pricing',value:'Published per capability'},{label:'Required inputs',value:'Request schema v3',mono:true},{label:'Uptime SLA',value:a.uptime},{label:'Cancellation',value:'Free < 24h'}]}/></div>
      <div><H n="05" t="Connection"/><KeyValueList rows={[{label:'Interfaces',value:a.protocols.join(' · '),mono:true},{label:'Settlement rails',value:'SEPA · Card · x402',mono:true},{label:'Connected agents',value:a.connected}]}/>
        <div style={{background:'var(--ink-deep)',color:'var(--paper)',padding:18,marginTop:20}}><div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'#9a9c95'}}><span>Lookup & connect</span><CopyBtn text={lookup}/></div><pre style={{margin:'12px 0 0',font:'400 12.5px/1.65 var(--font-mono)',whiteSpace:'pre-wrap'}}>{lookup}</pre></div></div>
      <div><H n="06" t="Recent activity"/><div style={{...mono,fontSize:11,color:'var(--text-secondary)',margin:'14px 0 0',padding:'5px 7px',border:'1px dashed var(--border-box)',display:'inline-block'}}>Illustrative activity · not a real record</div><ActivityList items={a.activity}/></div>
    </section>}
  </div>;
}
Object.assign(window,{Atlas,Passport});
})();
