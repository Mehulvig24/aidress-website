(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const {LayerTabs}=window.AidressDesignSystem_f2dd6a;
const mono={font:'400 13px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em'};
const V='#e94a27',INK='#212320',BOX='#92968c',RULE='#c9c9c1',PAPER='#f3f2ee';
const ease='cubic-bezier(.2,.8,.2,1)';
const fade=k=>({animation:`ad-fade-up 420ms ${ease} ${k*130}ms both`});

// ---------- Hero / Atlas request trace ----------
const CANDS=[
 {id:'A',h:'vector-logistics',x:640,y:190,ok:true,why:['trust 98.7','€1,840 · 9 days']},
 {id:'logistics',h:'harbor-planner',x:720,y:330,fail:2,why:'terms: 14 days > limit'},
 {id:'n3',h:'northsea-reefer',x:560,y:400,fail:1,why:'trust 81 < 95'},
 {id:'n4',h:'atlantic-freight',x:800,y:120,fail:1,why:'KYB missing'},
 {id:'customs',h:'clearport',x:860,y:260,fail:2,why:'terms: no insurance'},
 {id:'n6',h:'coldchain-eu',x:520,y:110,fail:2,why:'terms: €2,600 > budget'}];
const DOTS=[[400,70],[450,250],[380,460],[470,500],[620,500],[700,470],[900,420],[940,160],[760,40],[610,300],[880,520],[330,160],[300,380],[960,330],[680,80],[500,320],[420,380],[780,230]];
const EDGES=[[0,1],[1,9],[2,15],[3,4],[5,6],[6,12],[7,13],[8,14],[9,15],[10,6],[11,0],[12,2],[13,7],[16,2],[17,13],[17,9]];
const PH=['Discover','Trust','Terms','Route'];
const LOG=['discover(cap=freight.book.reefer, lane=NLRTM→USCHI) → 6 agents with this capability','evaluate(min_trust=95, kyb) → 2 fail trust · 4 remain','terms(price ≤ €2,000, transit ≤ 10d, insured) → 1 accepted','route → agent://vector-logistics.aidress · a2a · sepa · 212ms'];
function HeroTrace({height=560,onResolve,onNode,caption=true,phase}){
  const [p0,setP]=React.useState(0);const p=phase!=null?phase:p0;const [pause,setPause]=React.useState(false);const [hov,setHov]=React.useState(null);
  React.useEffect(()=>{if(pause||phase!=null)return;const t=setTimeout(()=>setP(x=>(x+1)%4),p===3?3600:2300);return()=>clearTimeout(t);},[p,pause]);
  const R={x:170,y:290};
  return <div onMouseEnter={()=>setPause(true)} onMouseLeave={()=>setPause(false)} style={{position:'relative'}}>
    <svg viewBox="0 0 1000 560" style={{width:'100%',height,display:'block'}}>
      {EDGES.map(([a,b],k)=><line key={k} x1={DOTS[a][0]} y1={DOTS[a][1]} x2={DOTS[b][0]} y2={DOTS[b][1]} stroke={RULE} strokeWidth="1"/>)}
      {DOTS.map(([x,y],k)=><circle key={k} cx={x} cy={y} r="4" fill={PAPER} stroke={BOX}/>)}
      {CANDS.map((c,k)=>{const win=p===3&&c.ok;const dim=c.fail&&p>=c.fail;return <line key={'l'+k+p} x1={R.x+60} y1={R.y} x2={c.x} y2={c.y} pathLength="1" strokeDasharray="1" stroke={win?V:dim?RULE:BOX} strokeWidth={win?2:1} style={{animation:p===0?`ad-dash 700ms ${ease} ${k*90}ms both`:win?`ad-dash 800ms ${ease} both`:'none',transition:'stroke 300ms'}}/>;})}
      {CANDS.map((c,k)=>{const lit=true;const win=p===3&&c.ok;const fail=c.fail&&p>=c.fail;const h=hov===c.id;
        return <g key={c.id} style={{cursor:'pointer'}} onMouseEnter={()=>setHov(c.id)} onMouseLeave={()=>setHov(null)} onClick={()=>onNode&&onNode(c.id)}>
          {win&&<circle cx={c.x} cy={c.y} r="30" fill="none" stroke={V} strokeWidth="1" opacity=".5"/>}
          <circle cx={c.x} cy={c.y} r={lit?20:6} fill={win?V:lit?'#fff':PAPER} stroke={win?V:fail?RULE:lit?INK:BOX} strokeWidth="1" style={{transition:'all 400ms '+ease}}/>
          {lit&&<text x={c.x} y={c.y+4} textAnchor="middle" style={{font:'500 12px var(--font-sans)',fill:win?'#fff':fail?BOX:INK}}>{c.h[0].toUpperCase()}</text>}
          {lit&&<text x={c.x} y={c.y+38} textAnchor="middle" style={{font:'400 11px var(--font-mono)',fill:win?V:fail?BOX:INK}}>{c.h}</text>}
          {(fail||(c.ok&&p>=1))&&<text key={'t'+p} x={c.x} y={c.y-30} textAnchor="middle" style={{font:'400 10.5px var(--font-mono)',fill:c.ok?V:BOX,...fade(0)}}>{c.ok?'✓ '+c.why[p>=2?1:0]:'✕ '+c.why}</text>}
        </g>;})}
      <rect x={R.x-60} y={R.y-34} width="120" height="68" fill={INK}/>
      <text x={R.x} y={R.y-6} textAnchor="middle" style={{font:'400 11px var(--font-mono)',fill:PAPER,letterSpacing:'.04em'}}>PLANNING AGENT</text>
      <text x={R.x} y={R.y+14} textAnchor="middle" style={{font:'400 11px var(--font-mono)',fill:p===3?V:'#9a9c95'}}>{p===3?'resolved':'requesting…'}</text>
      {p===0&&<g style={fade(0)}><rect x={R.x-60} y={R.y+52} width="228" height="44" fill="#fff" stroke={BOX}/><text x={R.x-48} y={R.y+71} style={{font:'400 11px var(--font-mono)',fill:INK}}>cap=freight.book.reefer</text><text x={R.x-48} y={R.y+87} style={{font:'400 11px var(--font-mono)',fill:BOX}}>lane NLRTM→USCHI · by Fri</text></g>}
      {p===0&&<circle cx={R.x+60} cy={R.y} r="6" fill={V}><animate attributeName="r" values="6;40" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;0" dur="1.4s" repeatCount="indefinite"/></circle>}
      {p===3&&<g style={fade(1)} onClick={()=>onResolve&&onResolve('A')} cursor="pointer"><rect x="600" y="228" width="232" height="26" fill={PAPER} stroke={V}/><text x="612" y="245" style={{font:'400 11px var(--font-mono)',fill:V}}>RESOLVED · VIEW PASSPORT ↗</text></g>}
    </svg>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid var(--border-rule)'}}>
      {PH.map((l,k)=><button key={l} onClick={()=>{setP(k);setPause(true);}} style={{all:'unset',cursor:'pointer',padding:'12px 10px 0 0',position:'relative'}}>
        <span style={{position:'absolute',top:-2,left:0,height:3,width:k===p?'100%':'0%',background:V,transition:k===p?`width ${p===3?3600:2300}ms linear`:'none'}}/>
        <span style={{...mono,fontSize:11,color:k===p?'var(--vermilion-600)':k<p?'var(--ink-deep)':'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')} {l}</span></button>)}
    </div>
    {caption&&<div key={p} style={{marginTop:12,font:'400 12px/1.4 var(--font-mono)',color:'var(--text-secondary)',...fade(0)}}>{LOG[p]}</div>}
  </div>;
}

// ---------- Layer diagrams ----------
function Frame({children}){return <div style={{background:'var(--paper)',border:'1px solid var(--border-box)',padding:24,minHeight:300,display:'flex',flexDirection:'column',gap:14}}>{children}</div>;}
function Row({k,children,accent,style}){return <div style={{display:'grid',gridTemplateColumns:'28px minmax(0,1fr) auto',alignItems:'center',gap:14,padding:'11px 0',borderBottom:'1px solid var(--border-subtle)',...fade(k),...style}}>{children}</div>;}
const mm={font:'400 12.5px/1.3 var(--font-mono)'};
function Bar({v,max=1,accent,k=0,marker}){return <div style={{position:'relative',height:6,background:'var(--stone-section)',width:160}}>
  <div style={{position:'absolute',inset:0,width:(v/max*100)+'%',background:accent?V:INK,transformOrigin:'left',animation:`ad-grow 700ms ${ease} ${k*130+150}ms both`}}/>
  {marker!=null&&<div style={{position:'absolute',left:(marker/max*100)+'%',top:-5,bottom:-5,width:1,background:V}}/>}</div>;}
function Discovery(){
  const need='freight.book.reefer';
  const rows=[['vector-logistics',['freight.book.reefer','customs.file'],true],['harbor-planner',['freight.book.reefer','route.plan'],true],['clearport',['customs.file','hs.classify'],false],['ledgerline',['payment.settle','fx.quote'],false],['northsea-reefer',['freight.book.reefer'],true]];
  return <Frame>
    <div style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>Your agent needs</span><span style={{...mm,padding:'8px 12px',background:INK,color:PAPER}}>{need}</span><span style={{...mm,color:'var(--text-secondary)'}}>on lane NLRTM→USCHI</span></div>
    <div style={{...mono,fontSize:11,color:'var(--text-secondary)',display:'grid',gridTemplateColumns:'minmax(0,0.9fr) minmax(0,1.4fr) 80px',gap:14,paddingTop:6}}><span>Registered agent</span><span>Published capabilities</span><span style={{textAlign:'right'}}>Match</span></div>
    <div>{rows.map(([h,caps,ok],k)=><div key={h} style={{display:'grid',gridTemplateColumns:'minmax(0,0.9fr) minmax(0,1.4fr) 80px',gap:14,alignItems:'center',padding:'11px 0',borderBottom:'1px solid var(--border-subtle)',opacity:ok?1:.45,...fade(k+1)}}>
      <span style={{...mm}}>{h}</span>
      <span style={{display:'flex',gap:6,flexWrap:'wrap'}}>{caps.map(c=><span key={c} style={{...mm,fontSize:11.5,padding:'4px 7px',border:'1px solid '+(c===need?V:'var(--border-box)'),color:c===need?'var(--vermilion-600)':'var(--text-secondary)',background:'#fff'}}>{c}</span>)}</span>
      <span style={{...mono,fontSize:11,textAlign:'right',color:ok?'var(--vermilion-600)':'var(--text-secondary)'}}>{ok?'✓ Match':'—'}</span></div>)}</div>
    <div style={{...mm,color:'var(--text-secondary)',...fade(7)}}>Matched on what agents can do, not on who they are. <span style={{color:'var(--vermilion-600)'}}>3 of 5 match.</span></div>
  </Frame>;
}
function Identity(){
  const f=[['id','agent://vector-logistics.aidress'],['operator','Vector Logistics Ltd'],['operator_kyb','verified · 2026-02-11'],['endpoint','agents.vectorlog.eu/a2a'],['key','ed25519:7f3a…e04b']];
  return <Frame><div style={{display:'flex',gap:16,alignItems:'center',paddingBottom:12,borderBottom:'1px solid var(--border-box)'}}><div style={{width:48,height:48,borderRadius:'50%',border:'1px solid '+V,display:'grid',placeItems:'center',font:'500 20px var(--font-sans)'}}>V</div><div><div style={{font:'500 18px/1.1 var(--font-sans)'}}>Vector Logistics</div><div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginTop:6}}>Agent passport</div></div></div>
    <div>{f.map(([k,v],i)=><Row key={k} k={i+1}><span style={{...mm,color:V}}>✓</span><span style={{...mm,color:'var(--text-secondary)'}}>{k}</span><span style={{...mm}}>{v}</span></Row>)}</div></Frame>;
}
function Trust(){
  const r=[['Trust score','98.7','≥ 95',98.7,100,95],['Disputes (12 mo)','0','= 0',null],['KYB attestation','present','required',null],['ISO 27001','present','required',null],['Settled volume','€1.2M','—',null]];
  return <Frame><div style={{display:'flex',justifyContent:'space-between',...mono,fontSize:11,color:'var(--text-secondary)'}}><span>Evidence</span><span>Your policy</span></div>
    <div>{r.map(([l,v,pol,val,max,mk],k)=><Row key={l} k={k+1}><span style={{...mm,color:V}}>✓</span><span style={{display:'flex',flexDirection:'column',gap:8}}><span style={{font:'400 15px/1 var(--font-sans)'}}>{l} <span style={{...mm,marginLeft:8}}>{v}</span></span>{val!=null&&<Bar v={val} max={max} marker={mk} accent k={k}/>}</span><span style={{...mm,color:'var(--text-secondary)'}}>{pol}</span></Row>)}</div>
    <div style={{...mono,fontSize:12,color:'var(--vermilion-600)',...fade(6)}}>Policy passed · 5 / 5</div></Frame>;
}
function Terms(){
  const r=[['Price','€1,840 / container'],['Required inputs','commercial invoice · packing list · temp range'],['Transit','9 days'],['Cancellation','free < 24h'],['Liability','cargo insured to €250k']];
  return <Frame><div style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>Declared terms · freight.book.reefer · v3</div>
    <div>{r.map(([l,v],k)=><div key={l} style={{display:'grid',gridTemplateColumns:'160px 1fr',padding:'12px 0',borderBottom:'1px solid var(--border-subtle)',...fade(k+1)}}><span style={{font:'400 15px/1.3 var(--font-sans)',color:'var(--text-secondary)'}}>{l}</span><span style={{...mm,lineHeight:1.5}}>{v}</span></div>)}</div>
    <div style={{...mono,fontSize:12,color:'var(--vermilion-600)',...fade(6)}}>Within limits · accept</div></Frame>;
}
function Routing({rails}){
  const R=rails||['Card','ACH','SEPA','RTP','x402'];const IF=['A2A','MCP','REST'];
  const [r,setR]=React.useState(2);
  React.useEffect(()=>{const t=setInterval(()=>setR(x=>(x+1)%R.length),1500);return()=>clearInterval(t);},[R.length]);
  const chip=(l,on)=><span key={l} style={{...mm,padding:'8px 10px',border:'1px solid '+(on?V:'var(--border-box)'),color:on?'var(--vermilion-600)':'var(--text-secondary)',background:'#fff',transition:'all 300ms'}}>{l}</span>;
  const col=(h,items)=><div style={{display:'flex',flexDirection:'column',gap:8}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)',marginBottom:4}}>{h}</span>{items}</div>;
  return <Frame><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:18,alignItems:'start'}}>
    {col('Task',[<span key="t" style={{...mm,padding:'8px 10px',background:INK,color:PAPER}}>freight.book</span>])}
    {col('Interface',IF.map((l,k)=>chip(l,k===0)))}
    {col('Rail',R.map((l,k)=>chip(l,k===r)))}
    {col('Status',[<span key="s" style={{...mm,padding:'8px 10px',border:'1px solid '+V,color:'var(--vermilion-600)'}}>settled</span>])}
  </div>
  <div style={{...mm,marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--border-subtle)'}}>settle(rail="any") → <span key={r} style={{color:'var(--vermilion-600)',...fade(0)}}>A2A · {R[r]}</span> · same instruction</div></Frame>;
}
function LayerViz({i,ind}){return [<Discovery key="0"/>,<Identity key="1"/>,<Trust key="2"/>,<Terms key="3"/>,<Routing key="4" rails={ind&&ind.rails}/>][i];}
function ReqRes({l}){
  const pre={margin:0,padding:'16px 18px',font:'400 12.5px/1.65 var(--font-mono)',whiteSpace:'pre-wrap',wordBreak:'break-word'};
  return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',background:INK,color:PAPER,...fade(0)}}>
    <div style={{borderRight:'1px solid #3a3c38'}}><div style={{...mono,fontSize:11,color:'#9a9c95',padding:'14px 18px 0'}}>Request</div><pre style={pre}>{l.req}</pre></div>
    <div><div style={{...mono,fontSize:11,color:'#f29a7f',padding:'14px 18px 0'}}>Response</div><pre style={pre}>{l.res}</pre></div></div>;
}
function FiveLayers({ind}){
  const D=window.AW;const [i,setI]=React.useState(0);const [raw,setRaw]=React.useState(false);
  const L=D.layers2[i];
  return <div>
    <LayerTabs value={i} onChange={setI} items={D.LAYERS}/>
    <div key={i} style={{display:'grid',gridTemplateColumns:'minmax(0,0.8fr) minmax(0,1.3fr)',gap:64,paddingTop:48}}>
      <div style={fade(0)}>
        <div style={{...mono}}>{String(i+1).padStart(2,'0')} / {D.LAYERS[i]}</div>
        <h3 style={{margin:'22px 0 0',font:'500 34px/1.05 var(--font-sans)',letterSpacing:'-0.035em'}}>{L.kicker}</h3>
        <p style={{margin:'18px 0 0',font:'400 17px/1.5 var(--font-sans)',color:'var(--text-secondary)',maxWidth:420}}>{L.body}</p>
        {ind&&<p style={{margin:'22px 0 0',font:'400 15px/1.45 var(--font-sans)',maxWidth:420}}><span style={{...mono,fontSize:11,color:'var(--vermilion-600)',display:'block',marginBottom:8}}>In {ind.short}</span>{ind.layerNote[i]}</p>}
        <button onClick={()=>setRaw(r=>!r)} style={{all:'unset',cursor:'pointer',marginTop:28,display:'inline-flex',gap:10,alignItems:'center',...mono,fontSize:12,padding:'10px 14px',border:'1px solid var(--ink-deep)',background:raw?'var(--ink-deep)':'transparent',color:raw?'var(--paper)':'var(--ink-deep)'}}>{raw?'Hide':'View'} request / response {raw?'−':'+'}</button>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:16}}><LayerViz i={i} ind={ind}/>{raw&&<ReqRes l={L}/>}</div>
    </div>
  </div>;
}
Object.assign(window,{HeroTrace,FiveLayers,LayerViz});
})();
