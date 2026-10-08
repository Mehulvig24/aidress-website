// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
/* eslint-disable react-refresh/only-export-components, react-hooks/exhaustive-deps, react-hooks/rules-of-hooks */
// Developers page, the homepage Integrate band and open-source table, ported from
// design_handoff_aidress_website/design/ui_kits/website/Dev.jsx.
import React from 'react';
import { SectionHeader, Button, Icon, TextLink } from '../components/ds';
import { Band, monoStyle as mono } from '../components/site/Shared';
import { AW } from '../data/site';
const DARK={bg:'var(--ink-deep)',rule:'#3a3c38',mute:'#9a9c95'};
function Copy({text,style}){const [c,setC]=React.useState(false);return <button onClick={()=>{navigator.clipboard&&navigator.clipboard.writeText(text);setC(true);setTimeout(()=>setC(false),1400);}} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,color:c?'var(--vermilion-400)':'var(--paper)',...style}}>{c?'Copied':'Copy'}</button>;}
function CodeBlock({tabs,value,onChange,minHeight=0,hideTabs,fill}){
  const [t0,setT0]=React.useState(0);const t=value!=null?value:t0;const set=onChange||setT0;const cur=tabs[t];
  return <div style={{background:DARK.bg,color:'var(--paper)',display:'flex',flexDirection:'column',flex:fill?1:'none',minWidth:0}}>
    <div style={{display:'flex',alignItems:'center',borderBottom:'1px solid '+DARK.rule,padding:'0 18px'}}>
      {hideTabs?<span style={{...mono,fontSize:12,padding:'14px 0 12px',color:DARK.mute}}>{cur.label}</span>:tabs.map((x,k)=><button key={x.label} onClick={()=>set(k)} style={{all:'unset',cursor:'pointer',...mono,fontSize:12,padding:'14px 16px 12px 0',marginRight:8,color:k===t?'var(--paper)':DARK.mute,borderBottom:'2px solid '+(k===t?'var(--vermilion-500)':'transparent'),marginBottom:-1}}>{x.label}</button>)}
      <span style={{flex:1}}/><Copy text={cur.code}/></div>
    <pre key={t} style={{margin:0,padding:'20px 22px',minHeight,flex:fill?1:'none',font:'400 13px/1.7 var(--font-mono)',whiteSpace:'pre-wrap',wordBreak:'break-word',animation:'ad-fade-up 300ms both'}}>{cur.code}</pre>
  </div>;
}
const RESP=['{','  "agent_id": "aidress_demo_echo",','  "verified": true,','  "trust_score": 88,','  "flags": [],','  "routing": { "endpoint": "https://example.com/execute", "protocol": "https" },','  "latency_ms": 43','}'];
function RunDemo({fill}){
  const [n,setN]=React.useState(0);const [run,setRun]=React.useState(false);
  React.useEffect(()=>{if(!run)return;if(n>=RESP.length){setRun(false);return;}const t=setTimeout(()=>setN(x=>x+1),160);return()=>clearTimeout(t);},[run,n]);
  const done=n>=RESP.length;
  return <div style={{border:'1px solid var(--border-box)',background:'var(--paper)',display:'flex',flexDirection:'column',minWidth:0}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid var(--border-box)'}}>
      <span style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>Response {done&&<span style={{color:'var(--vermilion-600)'}}>· 200 OK · 43ms</span>}</span>
      <button onClick={()=>{setN(0);setRun(true);}} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,padding:'7px 10px',background:'var(--ink-deep)',color:'var(--paper)'}}>{run?'Running…':'▶ Run request'}</button></div>
    <pre style={{margin:0,padding:'16px 18px',minHeight:150,flex:1,font:'400 12.5px/1.7 var(--font-mono)',whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{n===0&&!run?<span style={{color:'var(--text-tertiary)'}}>Run the request to see what the agent receives.</span>:RESP.slice(0,n).map((l,k)=><div key={k} style={{color:l.includes('verified')?'var(--vermilion-600)':'var(--ink-deep)',animation:'ad-fade-up 240ms both'}}>{l}</div>)}</pre>
  </div>;
}
function LinkRow({items,tone}){return <div style={{display:'flex',gap:28,flexWrap:'wrap'}}>{items.map(([l,fn])=><a key={l} onClick={fn} style={{display:'inline-flex',gap:6,alignItems:'center',...mono,fontSize:12,color:tone==='dark'?'var(--paper)':'var(--ink-deep)',cursor:'pointer',borderBottom:'1px solid currentColor',paddingBottom:3}}>{l}<Icon name="arrow-up-right" size={12}/></a>)}</div>;}
function Integrate({go}){
  const A=AW;const [tab,setTab]=React.useState(0);
  return <Band tone="stone" id="integrate">
    <SectionHeader index="03" label="For developers" tagline="Python · cURL · MCP · CLI · LangChain · Strands" title="Integrate in minutes." lead="One call, POST /verify, before you transact. Reading is free: /match, /verify and /registry need no key."/>
    <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginTop:36}}><span style={{...mono,fontSize:11,color:'var(--text-secondary)',marginRight:4}}>Works with</span>{A.snippets.map((s,k)=><button key={s.label} onClick={()=>setTab(k)} style={{all:'unset',cursor:'pointer',...mono,fontSize:12,padding:'8px 12px',border:'1px solid '+(tab===k?'var(--ink-deep)':'var(--border-box)'),background:tab===k?'var(--ink-deep)':'transparent',color:tab===k?'var(--paper)':'var(--ink-deep)'}}>{s.label}</button>)}</div>
    <div className="ad-int-grid" style={{display:'grid',gridTemplateColumns:'minmax(0,1.2fr) minmax(0,1fr)',gap:16,marginTop:12,alignItems:'stretch'}}>
      <CodeBlock hideTabs tabs={A.snippets} value={tab} onChange={setTab}/>
      <RunDemo fill/>
    </div>
    <div style={{background:DARK.bg,color:'var(--paper)',padding:'16px 18px',marginTop:16,display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:'12px 24px'}}>
      <span style={{...mono,fontSize:11,color:DARK.mute}}>System prompt · paste into your agent</span><Copy text={A.onboard}/>
      <pre style={{gridColumn:'1 / -1',margin:0,font:'400 12.5px/1.65 var(--font-mono)',whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{A.onboard}</pre>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:28,gap:24,flexWrap:'wrap'}}>
      <div style={{display:'flex',gap:12}}><Button size="lg" onClick={()=>go('atlas')}>Use the registry</Button><Button size="lg" variant="secondary" onClick={()=>go('docs:register')}>Register an agent</Button></div>
      <LinkRow items={[['pip install aidress-sdk',()=>go('docs:python-sdk')],['MCP server',()=>go('docs:mcp-server')],['API reference',()=>go('docs:register')],['llms.txt',()=>window.open('https://aidress.ai/llms.txt','_blank')]]}/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,0.7fr) minmax(0,1.6fr)',gap:32,marginTop:44,paddingTop:28,borderTop:'1px solid var(--border-rule)'}}>
      <div><div style={{...mono}}>Open source</div><h3 style={{margin:'14px 0 0',font:'500 24px/1.05 var(--font-sans)',letterSpacing:'-0.035em'}}>Build it with us.</h3><p style={{margin:'10px 0 16px',font:'400 14px/1.45 var(--font-sans)',color:'var(--text-secondary)',maxWidth:340}}>The SDK, CLI, MCP server and LangChain toolkit are MIT-licensed. The hosted registry at api.aidress.ai is what they connect to.</p>
        <LinkRow items={[['GitHub',()=>window.open('https://github.com/Aidress-ai/Aidress','_blank')],['Changelog',()=>go('docs:changelog')]]}/></div>
      <RepoTable compact/>
    </div>
  </Band>;
}
function RepoTable({tone='light',compact}){
  const A=AW;const dark=tone==='dark';const rule=dark?DARK.rule:'var(--border-rule)';
  const [nar,setNar]=React.useState(()=>typeof matchMedia!=='undefined'&&matchMedia('(max-width: 760px)').matches);React.useEffect(()=>{const m=matchMedia('(max-width: 760px)');const f=()=>setNar(m.matches);m.addEventListener('change',f);return()=>m.removeEventListener('change',f);},[]);
  const rows=nar?A.oss.slice(0,3):compact?A.oss.slice(0,5):A.oss;
  if(nar)return <div className="ad-keep" style={{borderTop:'1px solid '+rule}}>{rows.map(([r,d2,lic,st])=>{const os=st==='Open source';return <a key={r} href={A.oss.find(o=>o[0]===r)[4]} target="_blank" rel="noopener" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:12,alignItems:'center',padding:'10px 0',borderBottom:'1px solid '+rule,color:'inherit'}}>
      <span style={{display:'flex',flexDirection:'column',gap:3,minWidth:0}}><span style={{font:'400 13px/1.2 var(--font-mono)',overflowWrap:'anywhere'}}>{r}</span><span style={{font:'400 13px/1.3 var(--font-sans)',color:dark?DARK.mute:'var(--text-secondary)'}}>{d2}</span></span>
      <span style={{display:'flex',alignItems:'center',gap:8}}><span style={{...mono,fontSize:10,padding:'4px 6px',border:'1px solid '+(os?'var(--vermilion-500)':'var(--border-box)'),color:os?'var(--vermilion-600)':'var(--text-secondary)',whiteSpace:'nowrap'}}>{os?'OSS':'Hosted'}</span><Icon name="arrow-up-right" size={14} strokeWidth={1.25}/></span></a>;})}
    <a href="https://github.com/Aidress-ai/Aidress" target="_blank" rel="noopener" style={{display:'inline-flex',gap:6,alignItems:'center',marginTop:14,...mono,fontSize:11,borderBottom:'1px solid currentColor',paddingBottom:3,color:'inherit'}}>View all on GitHub <Icon name="arrow-up-right" size={12}/></a></div>;
  return <div style={{borderTop:'1px solid '+rule}}>{rows.map(([r,d,lic,st])=>{const os=st==='Open source';return <a key={r} href={A.oss.find(o=>o[0]===r)[4]} target="_blank" rel="noopener" style={{color:'inherit',display:'grid',gridTemplateColumns:compact?'minmax(0,1.1fr) minmax(0,1.3fr) 110px 24px':'minmax(0,1.1fr) minmax(0,1.4fr) 120px 130px 24px',alignItems:'center',padding:compact?'9px 0':'18px 0',borderBottom:'1px solid '+rule,cursor:'pointer'}}>
    <span style={{font:(compact?'400 12.5px':'400 14px')+'/1.2 var(--font-mono)'}}>{r}</span><span style={{font:(compact?'400 13.5px':'400 15px')+'/1.3 var(--font-sans)',color:dark?DARK.mute:'var(--text-secondary)'}}>{d}</span>
    {!compact&&<span style={{...mono,fontSize:11,color:dark?DARK.mute:'var(--text-secondary)'}}>{lic}</span>}
    <span><span style={{...mono,fontSize:11,padding:'5px 7px',border:'1px solid '+(os?'var(--vermilion-500)':'var(--border-box)'),color:os?'var(--vermilion-600)':'var(--text-secondary)'}}>{st}</span></span>
    <Icon name="arrow-up-right" size={16} strokeWidth={1.25}/></a>;})}</div>;
}
function OpenSource({go}){
  return <Band>
    <SectionHeader size="md" index="05" label="Open source" tagline="github.com/aidress" title="Build it with us." lead="The passport spec, SDKs, MCP server, CLI and examples are open source. The hosted registry is what they connect to."/>
    <div style={{marginTop:48}}><RepoTable/></div>
    <div style={{marginTop:28}}><LinkRow items={[['GitHub',()=>go('developers')],['Examples',()=>go('developers')],['Issues',()=>go('developers')],['Changelog',()=>go('developers')],['Contributing',()=>go('developers')]]}/></div>
  </Band>;
}
function Developers({go,params}){
  const A=AW;const inds=Object.values(A.industries);
  const [ex,setEx]=React.useState(Math.max(0,inds.findIndex(i=>i.id===params.example)));
  React.useEffect(()=>{if(params.example){const el=document.getElementById('examples');if(el)setTimeout(()=>window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'}),80);}},[]);
  const res=[['Quickstart','Verify your first agent in under 60 seconds.','quickstart'],['Python SDK','pip install aidress-sdk','python-sdk'],['CLI','aidress verify · match · register · call · review','cli'],['MCP server','One URL, 16 tools, no install.','mcp-server'],['LangChain','pip install langchain-aidress','langchain'],['Strands Agents','Hosted MCP, no package install.','strands'],['Authentication','Bearer keys and Ed25519 (RFC 9421).','authentication'],['Trust scores','How the 0–100 score is computed.','trust-scores'],['API reference','Every endpoint, request and response.','register']];
  return <div>
    <Band style={{paddingBottom:64}}>
      <SectionHeader index="06" label="Developers" tagline="SDK · MCP · API · CLI" title={<>Give your agent<br/>the registry.</>} lead="Find, verify and transact with agents you have never met. Read endpoints are free and need no key."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0,marginTop:56,borderTop:'1px solid var(--border-rule)'}}>
        {[['01','Install','pip install aidress-sdk'],['02','Register your agent','aidress register my_agent_01 "Acme Corp" acme.com bot@acme.com'],['03','Find & verify','aidress match freight_booking && aidress verify <agent_id>']].map(([n,t,c],k)=><div key={n} style={{padding:'28px 28px 28px '+(k?'28px':'0'),borderRight:k<2?'1px solid var(--border-rule)':'none'}}>
          <div style={{...mono,fontSize:12,color:'var(--text-secondary)'}}>{n}</div><div style={{font:'500 24px/1.1 var(--font-sans)',letterSpacing:'-0.02em',marginTop:16}}>{t}</div><code style={{display:'block',marginTop:14,font:'400 13px/1.5 var(--font-mono)',color:'var(--vermilion-600)',overflowWrap:'anywhere'}}>$ {c}</code></div>)}
      </div>
    </Band>
    <Band tone="stone">
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.3fr) minmax(0,1fr)',gap:24}}><CodeBlock tabs={A.snippets}/><RunDemo/></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:0,marginTop:48,borderTop:'1px solid var(--border-rule)'}}>
        {res.map(([t,d,sl],k)=><div key={t} onClick={()=>go('docs:'+sl)} style={{display:'flex',justifyContent:'space-between',gap:16,padding:'22px 22px 22px '+(k%3?'22px':'0'),borderBottom:'1px solid var(--border-rule)',borderRight:k%3<2?'1px solid var(--border-rule)':'none',cursor:'pointer'}}>
          <div><div style={{font:'400 20px/1.1 var(--font-sans)',letterSpacing:'-0.015em'}}>{t}</div><div style={{font:'400 14px/1.4 var(--font-sans)',color:'var(--text-secondary)',marginTop:8}}>{d}</div></div><Icon name="arrow-up-right" size={18} strokeWidth={1.25}/></div>)}
      </div>
    </Band>
    <Band id="examples">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}><div><div style={{...mono}}>Integration examples</div><h2 style={{margin:'22px 0 0',font:'500 48px/1 var(--font-sans)',letterSpacing:'-0.045em'}}>From scenario to code.</h2></div><TextLink onClick={()=>go('industry',{id:inds[ex].id})}>Back to the {inds[ex].short} workflow</TextLink></div>
      <div style={{marginTop:40}}><CodeBlock minHeight={220} value={ex} onChange={setEx} tabs={inds.map(i=>({label:i.short,code:i.example}))}/></div>
    </Band>
    <Band tone="dark">
      <SectionHeader tone="dark" size="md" label="Open source" tagline="github.com/Aidress-ai" title="Source, specs and issues."/>
      <div style={{marginTop:40}}><RepoTable tone="dark"/></div>
    </Band>
  </div>;
}
export { Integrate, OpenSource, Developers, CodeBlock, RunDemo, Copy as CopyBtn };
