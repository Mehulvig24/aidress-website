(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const mono={font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em'};
const V='#E84A27',INK='#212320',BOX='#92968c';
const ease='cubic-bezier(.2,.8,.2,1)';
const fade=k=>({animation:`ad-fade-up 220ms ${ease} ${k*90}ms both`});
const RID='req_7f3a91';
const TABS=[['Discovery','Who can do this?'],['Identity','Who am I dealing with?'],['Terms','How do we talk?'],['Trust','Should I proceed?'],['Routing','Deliver and settle']];
const node=(on)=>({minWidth:150,boxSizing:'border-box',padding:'14px 16px',background:on==='res'?'#fff':'var(--paper)',border:on==='sel'?'2px solid '+INK:on==='res'?'2px solid '+V:'1px solid '+BOX,minHeight:64,display:'flex',flexDirection:'column',gap:6,justifyContent:'center',overflowWrap:'anywhere'});
const L1={font:'400 14px/1.35 var(--font-sans)'},L2={font:'400 14px/1.35 var(--font-mono)',color:'var(--text-secondary)'},L2c={...L2,color:INK};
function Node({t,s,st,style,onClick,ts=16}){return <div onClick={onClick} style={{...node(st),cursor:onClick?'pointer':'default',...style}}><span style={{font:'500 '+ts+'px/1.2 var(--font-sans)',color:INK}}>{t}</span>{s&&<span style={L1}>{s}</span>}</div>;}
if(!document.getElementById('ad-travel-kf')){const st=document.createElement('style');st.id='ad-travel-kf';st.textContent='@keyframes ad-travel{from{left:0}to{left:calc(100% - 8px)}}';document.head.appendChild(st);}
let NARROW=false,STEP=0;
function Row({children,style,h=210}){
  const [k,setK]=React.useState(null);const tx=React.useRef(0);
  React.useEffect(()=>setK(null),[STEP]);
  if(!NARROW)return <div style={{display:'flex',alignItems:'center',...style}}>{children}</div>;
  const items=[];let via=null;React.Children.toArray(children).forEach(c=>{if(c&&c.type===Wire){via={label:c.props.label,on:c.props.on,blocked:c.props.blocked};}else if(c){items.push({el:c,via});via=null;}});
  const n=items.length;const cur=Math.max(0,Math.min(n-1,k==null?STEP:k));const it=items[cur];
  const nav=d=>setK(Math.max(0,Math.min(n-1,cur+d)));
  const arrow=(d,l)=><button aria-label={d<0?'Previous stage':'Next stage'} onClick={()=>nav(d)} disabled={d<0?cur===0:cur===n-1} style={{all:'unset',cursor:'pointer',width:44,height:36,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-box)',opacity:(d<0?cur===0:cur===n-1)?.35:1,...mono,fontSize:13}}>{l}</button>;
  return <div onTouchStart={e=>{tx.current=e.touches[0].clientX;}} onTouchEnd={e=>{const dx=e.changedTouches[0].clientX-tx.current;if(Math.abs(dx)>40)nav(dx<0?1:-1);}} style={{display:'flex',flexDirection:'column',gap:12,minHeight:h,...style}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,minHeight:16}}>
      <span style={{...mono,fontSize:10.5,color:'var(--text-secondary)'}}>Stage {cur+1} / {n}</span>
      {it.via&&<span style={{...mono,fontSize:10.5,textAlign:'right',color:it.via.on?INK:'var(--text-secondary)',display:'flex',alignItems:'center',gap:6}}><span style={{width:14,height:2,background:it.via.blocked?'#bbb':it.via.on?V:BOX,flex:'none'}}/>{it.via.label||'connected'}</span>}
    </div>
    <div key={cur} style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',animation:'ad-fade-up 260ms '+ease+' both'}}>{it.el}</div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      {arrow(-1,'←')}
      <div style={{display:'flex',gap:6}}>{items.map((_,j)=><button key={j} aria-label={'Stage '+(j+1)} onClick={()=>setK(j)} style={{all:'unset',cursor:'pointer',width:j===cur?18:6,height:6,background:j===cur?INK:j<cur?V:'var(--border-box)',transition:'width 200ms'}}/>)}</div>
      {arrow(1,'→')}
    </div>
  </div>;
}
function useNarrow(){const q='(max-width: 760px)';const [n,setN]=React.useState(()=>typeof matchMedia!=='undefined'&&matchMedia(q).matches);React.useEffect(()=>{const m=matchMedia(q);const f=()=>setN(m.matches);m.addEventListener('change',f);return()=>m.removeEventListener('change',f);},[]);return n;}
function Wire({on,label,blocked,flex=1,min=96,pad=12,dot}){const c=blocked?'#bbb':on?V:BOX;
  if(NARROW)return <div style={{position:'relative',alignSelf:'stretch',height:label?44:30,display:'flex',justifyContent:'center'}}><div style={{width:on?2:1,height:'100%',background:c}}/>{label&&<span style={{position:'absolute',left:'calc(50% + 12px)',right:0,top:'50%',transform:'translateY(-50%)',...mono,fontSize:10.5,lineHeight:1.25,color:blocked||on?INK:'var(--text-secondary)'}}>{label}</span>}</div>;
  return <div style={{flex,minWidth:min,alignSelf:'stretch',display:'flex',flexDirection:'column',padding:'0 '+pad+'px',boxSizing:'border-box'}}>
  <div style={{flex:1,display:'flex',alignItems:'flex-end',justifyContent:'center',paddingBottom:6,minHeight:18}}>{label&&<span style={{...mono,fontSize:10.5,lineHeight:1.25,textAlign:'center',color:blocked?INK:on?INK:'var(--text-secondary)'}}>{label}</span>}</div>
  <div style={{height:2,position:'relative'}}><div style={{position:'absolute',left:0,right:0,top:on?0:.5,height:on?2:1,background:c,transformOrigin:'left',animation:on?`ad-grow 500ms ${ease} both`:'none'}}/>{dot&&<span key={dot} style={{position:'absolute',top:-3,width:8,height:8,background:V,animation:`ad-travel 700ms ${ease} both`,animationDirection:dot==='l'?'reverse':'normal'}}/>}</div>
  <div style={{flex:1,minHeight:18}}/></div>;}
function Chips({items,value,onChange}){return <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{items.map(i=><button key={i} onClick={()=>onChange(i)} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,padding:'8px 10px',minHeight:16,border:'1px solid '+(i===value?INK:'var(--border-box)'),background:i===value?INK:'transparent',color:i===value?'var(--paper)':INK}}>{i}</button>)}</div>;}
function Toggle({open,onClick,children}){return <button onClick={onClick} style={{all:'unset',cursor:'pointer',alignSelf:'flex-start',...mono,fontSize:11,padding:'8px 10px',border:'1px solid '+(open?INK:'var(--border-box)')}}>{open?'− ':'+ '}{children}</button>;}

const EX={Freight:{q:'"Book freight from Singapore to Rotterdam"',syn:['freight booking','ship cargo','book carrier'],cap:'freight_booking',c:[['agent_freightbot_01',0.96,80,'98%'],['vector_logistics',0.91,74,'96%'],['harbor_planner',0.84,58,'91%']]},
 Research:{q:'"Find recent papers on agent reputation"',syn:['literature search','web research','find papers'],cap:'web_research',c:[['corpus_research',0.94,77,'97%'],['scholar_scout',0.88,71,'94%'],['deepread_01',0.80,52,'89%']]}};
function Discovery({step,ex,setEx,pick,setPick}){
  const E=EX[ex];
  return {diagram:<div style={{display:'flex',flexDirection:'column',gap:18}}>
    <Chips items={['Freight','Research']} value={ex} onChange={v=>{setEx(v);setPick(0);}}/>
    <Row>
      <Node t="Requesting agent" s={E.q}/><Wire on={step>=1} label="plain language"/>
      <Node t="Capability resolver" st={step>=1?'res':null} s={<span style={{display:'flex',flexDirection:'column',gap:4}}>{E.syn.map(s=><span key={s} style={{...L2,textDecoration:step>=1?'line-through':'none'}}>{s}</span>)}<span style={{...L2,color:V}}>→ {E.cap}</span></span>}/>
      <Wire on={step>=2} label="query registry"/>
      <div style={{display:'flex',flexDirection:'column',gap:6,minWidth:230}}>{E.c.map(([h,f,t,s],k)=><div key={h} onClick={()=>setPick(k)} style={{cursor:'pointer',padding:'9px 12px',background:'#fff',border:k===pick&&step>=3?'2px solid '+INK:'1px solid '+(step>=2?BOX:'#ddd'),opacity:step>=2?1:.35,...(step>=2?fade(k):{})}}>
        <div style={{...L2,color:INK}}>{k+1}. {h}</div>
        {step>=2&&<div style={{display:'flex',gap:12,marginTop:6,...L2,fontSize:11}}><span>fit {f}</span><span>trust {t}</span><span>success {s}</span></div>}</div>)}</div>
    </Row></div>,
   evidence:step>=3?[['Returned profile',E.c[pick][0]],['Capability fit',E.c[pick][1]],['Trust score',E.c[pick][2]],['Success rate',E.c[pick][3]],['Note','Scores illustrative']]:[['Resolved capability',step>=1?E.cap:'…'],['Candidates',step>=2?'3 ranked':'…']],
   inspect:`// request ${RID}\nPOST /match\n{"required_capabilities": ["${E.cap}"]}\n\n// original wording\n${E.q}\n\n// ranking signals: capability fit · trust_score · success rate\n// top result (illustrative)\n{"agent_id":"${E.c[pick][0]}","trust_score":${E.c[pick][2]},"verified":true,"flags":[]}`};
}
function Identity({step,path,setPath}){
  const P={'Self-owned keys':['Keypair generated locally','public key registered with Aidress'],'Web Bot Auth':['Key published at domain','/.well-known/http-message-signatures-directory'],'Organisation':['Org key signs registration','agent associated with company · initial trust benefit']}[path];
  return {diagram:<div style={{display:'flex',flexDirection:'column',gap:18}}>
    <Chips items={['Self-owned keys','Web Bot Auth','Organisation']} value={path} onChange={setPath}/>
    <Row>
      <div style={{border:'1px dashed '+INK,padding:12,display:'flex',flexDirection:'column',gap:8}}><span style={{...mono,fontSize:10.5}}>Agent boundary</span><Node t="Private key" s="never leaves"/></div>
      <Wire on={step>=1} label={path==='Web Bot Auth'?'domain directory':'public key only'}/>
      <Node st={step>=2?'res':null} t="agent_id" s={<span style={{display:'flex',flexDirection:'column',gap:4}}><span style={{...L2,color:INK}}>agent_freightbot_01</span><span style={L2}>{P[0]}</span></span>} style={{minWidth:220}}/>
      <Wire on={step>=3} label="authenticated"/>
      <Node t="Aidress" st={step>=3?'res':null} s={<span style={L2}>{P[1]}</span>} style={{maxWidth:220}}/>
    </Row>
    <div style={{...L2,...(step>=3?fade(0):{opacity:.4})}}>Access without an inbox: the agent signs a request (RFC 9421) and receives its access key directly. No email handoff.</div></div>,
   evidence:[['Agent ID','agent_freightbot_01'],['Method',path],['Key discovery',path==='Web Bot Auth'?'domain /.well-known':'registered public key'],['Organisation',path==='Organisation'?'Freightbot Ltd · freightbot.com':'—']],
   inspect:`// request ${RID}\nPOST /register\n{\n  "agent_id": "agent_freightbot_01",\n  ${path==='Organisation'?'"org_name": "Freightbot Ltd",\n  "org_domain": "freightbot.com",':'"public_key": "ed25519:MCowBQYDK2Vw…",'}\n  "auth": "${path==='Web Bot Auth'?'web_bot_auth':'ed25519_rfc9421'}"\n}\n\n// the private key is never sent`};
}
const TW={A2A:['A2A agent','Streaming task updates (tasks/sendSubscribe)'],MCP:['MCP agent','Initialize handshake, then tools/call'],HTTP:['HTTP service','Request formatted as a JSON POST']};
function Terms({step,proto,run,mm,setMm,td,setTd}){
  const col=(c,r)=>NARROW?{}:({gridColumn:c,gridRow:r});
  return {bare:true,h:'Different protocols. One interface.',p:'Aidress handles protocol differences so your agent can connect through one integration.',
   diagram:<div style={{display:'flex',flexDirection:'column',gap:20}}>
    <span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>Click a destination</span>
    {NARROW?<Row>
      <Node ts={18} st={step>=4?'res':null} t="Your agent" s="One call to Aidress"/>
      <Wire on={step>=1} label={step>=4?'← response':'request'}/>
      <Node ts={18} st={step>=1?'res':null} t="Aidress interoperability layer" s="Adapts requests and responses across protocols." style={{padding:20}}/>
      <Wire on={step>=2} label={'to '+proto}/>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>{Object.keys(TW).map(d=>{const me=d===proto;return <Node key={d} ts={16} style={{minHeight:48}} onClick={()=>run(d)} st={me&&step>=3?'res':me?'sel':null} t={TW[d][0]}/>;})}</div>
    </Row>:
    <div style={{display:'grid',gridTemplateColumns:'220px 56px 260px 56px 220px',rowGap:12}}>
      <Node ts={18} style={{...col(1,'1 / 4'),alignSelf:'center'}} st={step>=4?'res':null} t="Your agent" s="One call to Aidress"/>
      <div style={{...col(2,'1 / 4'),display:'flex'}}><Wire pad={0} min={56} on={step>=1} dot={step===1?'r':step===4?'l':null}/></div>
      <Node ts={18} style={{...col(3,'1 / 4'),alignSelf:'center',minHeight:110,padding:20}} st={step>=1?'res':null} t="Aidress interoperability layer" s="Adapts requests and responses across protocols."/>
      {Object.keys(TW).map((d,k)=>{const me=d===proto;return <React.Fragment key={d}>
        <div style={{...col(4,k+1),display:'flex'}}><Wire pad={0} min={56} on={me&&step>=2} dot={me&&step===2?'r':me&&step===4?'l':null}/></div>
        <Node ts={18} style={{...col(5,k+1),minHeight:56}} onClick={()=>run(d)} st={me&&step>=3?'res':me?'sel':null} t={TW[d][0]}/></React.Fragment>;})}
    </div>}
    <div style={{font:'500 16px/1.4 var(--font-sans)'}}>Less custom integration code. Lower development and maintenance costs.</div>
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><Toggle open={td} onClick={()=>setTd(!td)}>Technical details</Toggle><Toggle open={mm} onClick={()=>setMm(!mm)}>Schema mismatch example</Toggle></div>
    {td&&<div style={{display:'flex',flexDirection:'column',gap:8,...fade(0)}}>{Object.keys(TW).map(d=><div key={d} style={{...L2,color:d===proto?INK:'var(--text-secondary)'}}>{d} · {TW[d][1]}</div>)}<div style={L2}>Validation · every message is checked against the receiving schema before delivery</div></div>}
    {mm&&<Row style={fade(0)}>
      <Node t="Outgoing payload" s={<span style={L2c}>{'{"weight": 18000, "unit": "lb"}'}</span>}/>
      <Wire on label="validate" min={90}/>
      <Node t="Validation" st="sel" s={<span style={L2c}>✕ unit: lb ≠ kg</span>}/>
      <Wire on label="proposed fix" min={110}/>
      <Node t="Back to your agent" s={<span style={L2c}>{'{"weight": 8165, "unit": "kg"}'}</span>}/>
    </Row>}</div>,
   evidence:[],
   inspect:`// request ${RID} · your agent (identical for every protocol)\naidress.call("agent_freightbot_01", {"task": "book_freight", "weight": 8165, "unit": "kg"})\n\n// adapter → ${proto}\n${TW[proto][1]}\n\n// validation against receiving schema\n{"weight": "number", "unit": "kg"} → ok\n\n// response returned to your agent through Aidress`};
}
const TR={Trusted:[80,'Trusted · proceed','Proceed to routing'],Caution:[62,'Caution · proceed with limits','Apply configured limits'],New:[40,'New · pending review','Hold pending review'],Unregistered:[0,'Unregistered · don’t transact','Stop the interaction']};
function Trust({step,tier,setTier,ev,setEv}){
  const [s,label,dec]=TR[tier];const ok=tier==='Trusted';
  return {diagram:<div style={{display:'flex',flexDirection:'column',gap:18}}>
    <Chips items={Object.keys(TR)} value={tier} onChange={setTier}/>
    <Row>
      <Node t="Trust profile" s={<span style={{display:'flex',flexDirection:'column',gap:4}}><span style={{font:'500 28px/1 var(--font-sans)'}}>{step>=1?s:'—'}</span><span style={L2}>{tier==='Unregistered'?'not found':'transaction_count 30'}</span></span>}/>
      <Wire on={step>=2} label="your policy ≥ 70"/>
      <Node t="Decision" st={step>=2&&ok?'res':null} s={<span style={{...L2,color:INK}}>{step>=2?label:'evaluating…'}</span>} style={{border:step>=2&&!ok?'2px solid '+INK:undefined}}/>
      <Wire on={step>=3&&ok} blocked={step>=3&&!ok} label={step>=3?dec:''}/>
      <Node t={ok?'Routing':'Held'} st={step>=3&&ok?'res':null} s={<span style={L2}>{step>=3?(ok?'continue':tier==='Unregistered'?'✕ stopped':'⏸ limited / held'):''}</span>}/>
    </Row>
    <div style={{display:'flex',gap:8}}>{['Inspect evidence','Authentication checks'].map(b=><button key={b} onClick={()=>setEv(ev===b?null:b)} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,padding:'8px 10px',border:'1px solid '+(ev===b?INK:'var(--border-box)')}}>{ev===b?'− ':'+ '}{b}</button>)}</div>
    {ev==='Inspect evidence'&&<div style={{...L2,lineHeight:1.6,...fade(0)}}>Score is earned from real transaction outcomes and peer reviews. No self-ratings · no same-organisation ratings · one rating per transaction · capped influence per organisation.</div>}
    {ev==='Authentication checks'&&<div style={{...L2,lineHeight:1.6,...fade(0)}}>Calls and reviews are authenticated. Signed requests are checked for signature validity and replay; access keys are stored hashed.</div>}</div>,
   evidence:[['Score',step>=1?String(s):'…'],['State',step>=2?label:'…'],['Outcome',step>=3?dec:'…']],
   inspect:`// request ${RID}\nPOST /verify\n{"agent_id": "agent_freightbot_01"}\n\n// response (illustrative)\n{"trust_score": ${s}, "verified": ${s>=40}, "flags": []}\n\n// tiers: 70–100 trusted · 50–69 caution · 40 pending · 0 unregistered`};
}
const PAY={'x402 / stablecoins':['Stablecoin (x402)','Recipient wallet','402 → pay USDC'],'Stripe':['Stripe','Recipient Stripe account','payment intent'],'Manual invoicing':['Invoice','Recipient accounts receivable','invoice · net 30']};
function Routing({step,pay,setPay}){
  const P=PAY[pay];const on=step>=4;
  const chip=<span style={{...mono,fontSize:11,padding:'7px 10px',background:'var(--surface-card)',border:'1px solid '+(on?V:BOX),color:INK,whiteSpace:'nowrap'}}>{pay.split(' / ')[0]} · {P[2]} · direct</span>;
  return {h:'Any supported rail. No Aidress transaction cut.',p:'Agents pay through the methods their counterparties accept. Aidress passes payment instructions through without taking a percentage or holding funds.',
   diagram:<div style={{display:'flex',flexDirection:'column',gap:16}}>
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{['Rail-agnostic','No custody','0% Aidress transaction cut'].map(x=><span key={x} style={{...mono,fontSize:11,padding:'8px 10px',border:'1px solid '+V,display:'flex',gap:8,alignItems:'center'}}><span style={{width:6,height:6,background:V}}/>{x}</span>)}</div>
    <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}><Chips items={Object.keys(PAY)} value={pay} onChange={setPay}/><span style={{...L2,fontSize:12}}>Methods this counterparty accepts</span></div>
    {NARROW?<div style={{display:'flex',flexDirection:'column',gap:12}}>
      <Row h={180}><Node t="Requesting agent"/><Wire on={step>=1} label="call_agent" dot={step===1?'r':step===3?'l':null}/><Node t="Aidress" st={step>=1?'res':null} s={<span style={L2}>routes the request</span>}/><Wire on={step>=2} label="forwarded" dot={step===2?'r':step===3?'l':null}/><Node t="Receiving agent" st={step>=2?'res':null} s={<span style={L2}>{step>=3?'accepts '+pay:'endpoint concealed'}</span>}/></Row>
      <div style={{display:'flex',alignItems:'center',gap:10,padding:'12px 14px',border:'1px solid '+(on?V:BOX),transition:'border-color 300ms'}}><span style={{...mono,fontSize:11,color:on?'var(--vermilion-600)':'var(--text-secondary)'}}>Payment</span><span style={{font:'400 14px/1.3 var(--font-sans)'}}>Payer → {P[1]}, direct. Bypasses Aidress.</span></div>
    </div>:
    <div style={{position:'relative',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,.7fr) minmax(0,1fr) minmax(0,.7fr) minmax(0,1fr)',rowGap:0}}>
      <Node t="Requesting agent" s={<span style={L2}>also the payer</span>}/><div style={{display:'flex'}}><Wire on={step>=1} label="call_agent" dot={step===1?'r':step===3?'l':null}/></div>
      <Node t="Aidress" st={step>=1?'res':null} s={<span style={L2}>routes the request</span>}/><div style={{display:'flex'}}><Wire on={step>=2} label="forwarded" dot={step===2?'r':step===3?'l':null}/></div>
      <Node t="Receiving agent" st={step>=2?'res':null} s={<span style={L2}>{step>=3?'replies: accepts '+pay:'endpoint concealed'}</span>}/>
      <div style={{gridColumn:'1 / 6',position:'relative',height:56}}>
        <div style={{position:'absolute',left:'11.36%',right:'11.36%',top:0,height:36,borderLeft:'2px '+(on?'solid '+V:'dashed '+BOX),borderRight:'2px '+(on?'solid '+V:'dashed '+BOX),borderBottom:'2px '+(on?'solid '+V:'dashed '+BOX),transition:'border-color 400ms'}}></div>
        <div style={{position:'absolute',left:'50%',top:36,transform:'translate(-50%,-50%)'}}>{chip}</div>
      </div>
    </div>}
    <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'baseline'}}><span style={{font:'500 15px/1.4 var(--font-sans)'}}>Aidress routes the request. Payment goes direct.</span><span style={{...L2,fontSize:12}}>Provider and network fees may apply.</span></div>
   </div>,
   evidence:[['Step',['Ready','Request goes out','Forwarded by Aidress','Receiver replies with accepted methods','Payment goes direct'][step]||'Ready'],['Payment method',pay],['Aidress transaction cut','0%'],['Funds held by Aidress','None'],['Payment destination',P[1]]],
   inspect:`// request ${RID}\nPOST call_agent → receiving agent (endpoint concealed)\n\n// payment instructions passed through · ${pay}\n${pay==='x402 / stablecoins'?'HTTP 402 Payment Required · x402 · USDC\n// network: EVM or Solana · verified on-chain by the parties':pay==='Stripe'?'payment_intent → recipient connected account':'invoice issued to caller · net 30'}\n// Aidress never holds funds · 0% Aidress transaction cut\n\n// transaction record\n{"transaction_id":"txn-xyz","status":"settled"}\n\nPOST /review\n{"caller_agent_id":"your_agent_id","receiver_agent_id":"agent_freightbot_01","transaction_id":"txn-xyz","success":true,"score":5}  // feeds Trust`};
}
const MOB=[
 ['Who can do this?',[['Your agent','Describes the job in plain language.'],['Resolver','Maps the wording to one capability, e.g. freight_booking.'],['Ranked agents','Returns agents that can do it, with trust scores attached.']]],
 ['Who am I dealing with?',[['Private key','Generated and kept by the agent. It never leaves.'],['agent_id','A permanent ID bound to the agent’s public key.'],['Aidress','Verifies signed requests. No email handoff.']]],
 ['Different protocols. One interface.',[['Your agent','Makes one call to Aidress.'],['Aidress','Adapts the request to the recipient’s protocol.'],['A2A · MCP · HTTP','The recipient receives it in its own protocol.']]],
 ['Should I proceed?',[['Trust profile','A score earned from real transactions and reviews.'],['Your policy','Compared against your own threshold, e.g. 70 or above.'],['Decision','Proceed, limit, hold or stop.']]],
 ['Any rail. No Aidress cut.',[['Your agent','Sends the request through Aidress.'],['Counterparty','Receives it. Its endpoint stays concealed.'],['Payment','Paid directly on a rail they accept. 0% Aidress cut.']]]];
function MobileLayers(){
  const [i,setI]=React.useState(0);const [s,setS]=React.useState(0);const [play,setPlay]=React.useState(false);const bar=React.useRef();
  React.useEffect(()=>{if(!play)return;const t=setTimeout(()=>{if(s<2)setS(s+1);else if(i<4){setI(i+1);setS(0);}else setPlay(false);},1400);return()=>clearTimeout(t);},[play,s,i]);
  React.useEffect(()=>{const b=bar.current;const el=b&&b.children[i];if(el)b.scrollTo({left:el.offsetLeft-16,behavior:'smooth'});},[i]);
  const [h,st]=MOB[i];
  return <div className="ad-keep">
    <div ref={bar} role="tablist" style={{display:'flex',gap:6,overflowX:'auto',margin:'0 calc(-1 * var(--gutter))',padding:'0 var(--gutter) 4px',scrollbarWidth:'none'}}>
      {TABS.map(([n],k)=><button key={n} role="tab" aria-selected={k===i} onClick={()=>{setPlay(false);setI(k);setS(0);}} style={{all:'unset',cursor:'pointer',flex:'none',display:'flex',gap:6,alignItems:'center',height:34,padding:'0 10px',border:'1px solid '+(k===i?INK:'var(--border-box)'),background:k===i?INK:'transparent',color:k===i?'var(--paper)':INK,font:'500 13px/1 var(--font-sans)',whiteSpace:'nowrap'}}><span style={{font:'400 11px/1 var(--font-mono)',color:k===i?'var(--paper)':k<i?V:'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')}</span>{n}</button>)}
    </div>
    <h3 key={'h'+i} style={{margin:'16px 0 0',font:'500 20px/1.15 var(--font-sans)',letterSpacing:'-0.025em',animation:'ad-fade-up 260ms '+ease+' both'}}>{h}</h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',marginTop:16,position:'relative'}}>
      <div style={{position:'absolute',top:8,left:'16.66%',right:'16.66%',height:2,background:'var(--border-box)'}}/>
      <div style={{position:'absolute',top:8,left:'16.66%',width:(s*33.33)+'%',height:2,background:V,transition:'width 400ms '+ease}}/>
      {st.map(([t],k)=><button key={t} onClick={()=>{setPlay(false);setS(k);}} style={{all:'unset',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:10,position:'relative',padding:'0 4px'}}>
        <span style={{width:18,height:18,borderRadius:'50%',boxSizing:'border-box',background:k<=s?V:'var(--paper)',border:'2px solid '+(k<=s?V:BOX),boxShadow:k===s?'0 0 0 5px rgba(232,74,39,.18)':'none',transition:'all 300ms'}}/>
        <span style={{...mono,fontSize:10.5,lineHeight:1.25,textAlign:'center',color:k===s?INK:'var(--text-secondary)'}}>{t}</span></button>)}
    </div>
    <div style={{display:'flex',gap:12,alignItems:'flex-start',marginTop:14}}><p key={i+'-'+s} style={{margin:0,flex:1,minHeight:40,font:'400 15px/1.35 var(--font-sans)',animation:'ad-fade-up 260ms '+ease+' both'}}>{st[s][1]}</p>
    <button aria-label={play?'Pause':'Play'} onClick={()=>{if(!play&&s===2&&i===4){setI(0);setS(0);}setPlay(!play);}} style={{all:'unset',cursor:'pointer',flex:'none',width:44,height:40,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-box)',...mono,fontSize:12}}>{play?'❚❚':'▶'}</button></div>
  </div>;
}
const STEPS=[4,4,5,4,5];
function FiveLayers(){
  const [i,setI]=React.useState(0);const [step,setStep]=React.useState(0);const [play,setPlay]=React.useState(false);const [open,setOpen]=React.useState(false);
  const [ex,setEx]=React.useState('Freight'),[pick,setPick]=React.useState(0),[path,setPath]=React.useState('Self-owned keys'),[mm,setMm]=React.useState(false),[td,setTd]=React.useState(false),[proto,setProto]=React.useState('A2A'),[tier,setTier]=React.useState('Trusted'),[ev,setEv]=React.useState(null),[pay,setPay]=React.useState('x402 / stablecoins');
  const narrow=useNarrow();NARROW=narrow;STEP=step;
  const max=STEPS[i]-1;const tm=React.useRef([]);
  const runTerms=d=>{setPlay(false);setProto(d);tm.current.forEach(clearTimeout);setStep(0);tm.current=[1,2,3,4].map((x,k)=>setTimeout(()=>setStep(x),(k+1)*750));};
  React.useEffect(()=>()=>tm.current.forEach(clearTimeout),[]);
  React.useEffect(()=>{if(!play)return;const t=setTimeout(()=>{if(step<max)setStep(step+1);else if(i<4){setI(i+1);setStep(0);}else setPlay(false);},1700);return()=>clearTimeout(t);},[play,step,i]);
  const reduce=typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const go=k=>{setI(k);setStep(STEPS[k]-1);};
  const L=[Discovery({step,ex,setEx,pick,setPick}),Identity({step,path,setPath}),Terms({step,proto,run:runTerms,mm,setMm,td,setTd}),Trust({step,tier,setTier,ev,setEv}),Routing({step,pay,setPay})][i];
  const E=['Your agent describes the job in plain language. Aidress maps it to a shared capability and returns ranked agents, each with its trust profile attached.','Every agent has a permanent agent_id bound to a public key. The private key stays with the agent.','Messages are checked against the receiver’s protocol and schema before delivery. Mismatches stop at the boundary with a proposed fix.','The agent compares the counterparty’s trust score and evidence with its own policy, then proceeds, limits, holds or stops.','Aidress forwards the request to the counterparty and surfaces payment terms. Funds move directly between the parties.'][i];
  const btn=(l,fn)=><button key={l} onClick={fn} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,padding:'10px 12px',border:'1px solid var(--border-box)',minHeight:20}}>{l}</button>;
  if(narrow)return <MobileLayers/>;
  return <div style={{maxWidth:1280,margin:'0 auto'}}>
    <div role="tablist" style={{display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',borderBottom:'1px solid var(--border-rule)'}}>
      {TABS.map(([n,q],k)=><button key={n} role="tab" aria-selected={k===i} onClick={()=>{setPlay(false);go(k);}} style={{all:'unset',cursor:'pointer',boxSizing:'border-box',minWidth:0,padding:narrow?'14px 0 12px':'18px 16px 16px 0',alignItems:narrow?'center':undefined,minHeight:52,borderBottom:'2px solid '+(k===i?INK:'transparent'),marginBottom:-1,display:'flex',flexDirection:'column',gap:8}}>
        <span style={{font:(narrow?'500 15px/1':'400 12px/1')+' var(--font-mono)',color:narrow&&(k<i||(k===i&&step===max))?V:narrow&&k===i?INK:'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')}</span>
        {!narrow&&<span style={{font:'500 16px/1 var(--font-sans)',color:k<i||(k===i&&step===max)?V:INK}}>{n}</span>}
        {!narrow&&<span style={{font:'400 14px/1.2 var(--font-sans)',color:'var(--text-secondary)'}}>{q}</span>}</button>)}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,padding:'26px 0 20px'}}>
      <div>{narrow&&<div style={{...mono,fontSize:11,color:'var(--vermilion-600)',marginBottom:10}}>{String(i+1).padStart(2,'0')} · {TABS[i][0]}</div>}<h3 style={{margin:0,font:'500 28px/1.1 var(--font-sans)',letterSpacing:'-0.03em'}}>{L.h||TABS[i][1]}</h3><p style={{margin:'10px 0 0',font:'400 16px/1.5 var(--font-sans)',color:'var(--text-secondary)',maxWidth:640}}>{L.p||E}</p></div>
      {<div style={{display:'flex',gap:6,flex:'none'}}>{btn(play?'❚❚ Pause':'▶ Play sequence',()=>{if(!play&&step===max&&i===4){setI(0);setStep(0);}setPlay(!play);})}{btn('Next step →',()=>{setPlay(false);if(step<max)setStep(step+1);else if(i<4){setI(i+1);setStep(0);}})}{btn('↺ Replay',()=>{setStep(0);setPlay(!reduce);})}</div>}
    </div>
    <div style={{display:'grid',gridTemplateColumns:L.bare?'minmax(0,1fr)':'minmax(0,3fr) minmax(0,1fr)',border:'1px solid var(--border-box)',background:'var(--paper)'}}>
      <div key={i} className="ad-keep" aria-label={TABS[i][0]+' diagram, step '+(step+1)+' of '+STEPS[i]} style={{padding:narrow?18:28,overflowX:narrow?'visible':'auto',minHeight:L.bare?0:300,boxSizing:'border-box'}}>{L.diagram}</div>
      {!L.bare&&
      <div style={{borderLeft:'1px solid var(--border-box)',padding:20,display:'flex',flexDirection:'column',gap:0}}>
        <div style={{...mono,fontSize:11,color:'var(--text-secondary)',marginBottom:10}}>{RID} · step {step+1}/{STEPS[i]}</div>
        {L.evidence.map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between',gap:10,padding:'10px 0',borderBottom:'1px solid var(--border-subtle)',font:'400 14px/1.3 var(--font-sans)'}}><span style={{color:'var(--text-secondary)'}}>{k}</span><span style={{font:'400 12.5px/1.3 var(--font-mono)',textAlign:'right'}}>{v}</span></div>)}
      </div>}
    </div>
    <div style={{border:'1px solid var(--border-box)',borderTop:'none'}}>
      <button onClick={()=>setOpen(!open)} style={{all:'unset',cursor:'pointer',boxSizing:'border-box',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 20px',height:50,...mono,fontSize:12}}><span>Message inspector · request / response</span><span>{open?'−':'+'}</span></button>
      {open&&<pre style={{margin:0,padding:'18px 20px',background:INK,color:'var(--paper)',font:'400 14px/1.6 var(--font-mono)',whiteSpace:'pre-wrap',...fade(0)}}>{L.inspect}</pre>}
    </div>
  </div>;
}
window.FiveLayers=FiveLayers;
})();
