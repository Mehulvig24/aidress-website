// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
// The Interoperability Layer docs page, ported from design_handoff_aidress_website/design/ui_kits/website/interopDoc.jsx.
import React from 'react';
import { P,H2,H3,CodeBlock,InlineCode,Callout,SimpleTable } from './docsUi';
const V='#E84A27',VT='#B8381C',INK='#212320',BOX='#c9c7bf',MONO='var(--font-mono)';
const lab={font:'400 11px/1.2 '+MONO,textTransform:'uppercase',color:'#6b6d66'};
const btn=on=>({all:'unset',cursor:'pointer',font:'400 11.5px/1 '+MONO,textTransform:'uppercase',padding:'8px 10px',border:'1px solid '+(on?INK:BOX),background:on?INK:'transparent',color:on?'#F5F4EF':INK});
function Fig({children,caption,dark}){return <figure style={{margin:'24px 0',padding:'20px',border:'1px solid '+(dark?INK:'var(--border-subtle)'),background:dark?INK:'#FBF9F5',color:dark?'#F5F4EF':INK}}>{children}{caption&&<figcaption style={{...lab,marginTop:14,color:dark?'#9a9c95':'#6b6d66'}}>{caption}</figcaption>}</figure>;}

/* N×M vs N+M */
function Mesh({n,m,hub,w=300,h=190,dark}){
  const ys=(k,c)=>c===1?h/2:16+k*(h-32)/(c-1);
  const L=40,Rx=w-40,cx=w/2;const line=dark?'#4a4c47':BOX;
  const lines=[];
  if(hub){for(let i=0;i<n;i++)lines.push([L,ys(i,n),cx,h/2]);for(let j=0;j<m;j++)lines.push([cx,h/2,Rx,ys(j,m)]);}
  else for(let i=0;i<n;i++)for(let j=0;j<m;j++)lines.push([L,ys(i,n),Rx,ys(j,m)]);
  return <svg viewBox={'0 0 '+w+' '+h} style={{width:'100%',height:'auto',display:'block'}}>
    {lines.map((l,k)=><line key={k} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={hub?V:line} strokeWidth={hub?1.5:1}/>)}
    {Array.from({length:n}).map((_,i)=><rect key={'c'+i} x={L-9} y={ys(i,n)-9} width="18" height="18" fill={dark?INK:'#fff'} stroke={dark?'#F5F4EF':INK}/>)}
    {Array.from({length:m}).map((_,j)=><circle key={'a'+j} cx={Rx} cy={ys(j,m)} r="9" fill={dark?INK:'#fff'} stroke={dark?'#F5F4EF':INK}/>)}
    {hub&&<g><rect x={cx-34} y={h/2-14} width="68" height="28" fill={V}/><text x={cx} y={h/2+4} textAnchor="middle" style={{font:'500 11px '+MONO,fill:INK}}>AIDRESS</text></g>}
  </svg>;
}
function MeshWidget(){
  const [n,setN]=React.useState(4),[m,setM]=React.useState(5);
  const sl=(v,set,l)=><label style={{display:'flex',flexDirection:'column',gap:8,flex:1,minWidth:140}}><span style={{...lab,color:'#9a9c95'}}>{l} · {v}</span><input type="range" min="1" max="8" value={v} onChange={e=>set(+e.target.value)} style={{accentColor:V,width:'100%'}}/></label>;
  return <div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
      <div><div style={{...lab,color:'#9a9c95'}}>Without Aidress</div><Mesh n={n} m={m} dark/><div style={{font:'500 30px/1 var(--font-sans)',letterSpacing:'-0.03em'}}>{n*m}<span style={{font:'400 14px/1 var(--font-sans)',color:'#9a9c95',marginLeft:8}}>custom adapters · N × M</span></div></div>
      <div><div style={{...lab,color:'#F07A5C'}}>With Aidress</div><Mesh n={n} m={m} hub dark/><div style={{font:'500 30px/1 var(--font-sans)',letterSpacing:'-0.03em',color:'#F07A5C'}}>{n+m}<span style={{font:'400 14px/1 var(--font-sans)',color:'#9a9c95',marginLeft:8}}>integrations · N + M</span></div></div>
    </div>
    <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:20,paddingTop:16,borderTop:'1px solid #3a3c38'}}>{sl(n,setN,'Callers (N)')}{sl(m,setM,'Agents (M)')}</div>
  </div>;
}

/* routing flowchart */
const ROUTES={a2a:'A2A path',mcp:'MCP path',raw:'Raw path'};
function RouteFlow(){
  const [p,setP]=React.useState('a2a');
  const box=(t,on,extra)=><div style={{padding:'10px 12px',border:'1px solid '+(on?V:BOX),background:on?'#FCEEE9':'#fff',font:'500 13.5px/1.25 var(--font-sans)',textAlign:'center',...extra}}>{t}</div>;
  const ar=on=><div style={{alignSelf:'center',height:2,minWidth:18,flex:1,background:on?V:BOX}}></div>;
  return <Fig caption="Click a protocol to follow the route">
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:18}}><span style={{...lab,alignSelf:'center',marginRight:4}}>Receiver’s protocol</span>{Object.keys(ROUTES).map(k=><button key={k} onClick={()=>setP(k)} style={btn(p===k)}>{k}</button>)}</div>
    <div className="ad-flow" style={{display:'flex',alignItems:'stretch',gap:0}}>
      {box('Caller agent',true)}{ar(true)}{box(<span>Aidress <span style={{fontFamily:MONO,fontWeight:400}}>/call</span></span>,true)}{ar(true)}
      <div style={{display:'flex',flexDirection:'column',gap:6,flex:'none'}}>{Object.keys(ROUTES).map(k=><div key={k} onClick={()=>setP(k)} style={{cursor:'pointer'}}>{box(ROUTES[k],p===k,{opacity:p===k?1:.55,padding:'7px 12px'})}</div>)}</div>
      {ar(true)}{box('Receiver',true)}
    </div>
    <div style={{display:'flex',alignItems:'center',gap:10,marginTop:14,font:'400 13.5px/1.4 var(--font-sans)',color:'#3a3c38'}}><span style={{width:8,height:8,background:V,flex:'none'}}></span>Logged, payment observed, <InlineCode>transaction_id</InlineCode> returned to the caller.</div>
  </Fig>;
}

/* sequence diagrams */
function Seq({actors,steps,caption}){
  const [k,setK]=React.useState(steps.length);const [play,setPlay]=React.useState(false);
  React.useEffect(()=>{if(!play)return;if(k>=steps.length){setPlay(false);return;}const t=setTimeout(()=>setK(x=>x+1),650);return()=>clearTimeout(t);},[play,k]);
  const n=actors.length;const col=i=>(i+0.5)*100/n;
  return <Fig caption={caption}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:14}}><span style={lab}>Sequence · {Math.min(k,steps.length)}/{steps.length}</span><span style={{display:'flex',gap:6}}><button onClick={()=>{setK(0);setPlay(true);}} style={btn(true)}>{play?'Playing…':'▶ Play'}</button><button onClick={()=>{setPlay(false);setK(x=>Math.min(steps.length,x+1));}} style={btn(false)}>Step</button></span></div>
    <div style={{overflowX:'auto'}}><div style={{minWidth:n*130,position:'relative'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat('+n+',1fr)',gap:8}}>{actors.map(a=><div key={a} style={{padding:'8px 6px',border:'1px solid '+INK,background:'#fff',textAlign:'center',font:'500 12.5px/1.2 var(--font-sans)'}}>{a}</div>)}</div>
      <div style={{position:'relative',paddingTop:6}}>
        {actors.map((a,i)=><div key={a} style={{position:'absolute',top:0,bottom:0,left:col(i)+'%',width:1,background:BOX}}></div>)}
        {steps.map(([f,t,l,dash],i)=>{const a=Math.min(f,t),b=Math.max(f,t);const on=i<k,cur=i===k-1;const left=f===t;
          return <div key={i} style={{position:'relative',height:40,opacity:on?1:.18,transition:'opacity 250ms'}}>
            {left?<div style={{position:'absolute',left:col(f)+'%',top:12,width:46,height:16,border:'1.5px solid '+(cur?V:INK),borderLeft:'none'}}></div>:
            <div style={{position:'absolute',left:col(a)+'%',width:(col(b)-col(a))+'%',top:22,borderTop:(dash?'1.5px dashed ':'1.5px solid ')+(cur?V:INK)}}><span style={{position:'absolute',top:-5,[t>f?'right':'left']:-1,width:0,height:0,borderTop:'5px solid transparent',borderBottom:'5px solid transparent',[t>f?'borderLeft':'borderRight']:'7px solid '+(cur?V:INK)}}></span></div>}
            <div style={{position:'absolute',left:(left?col(f)+1:col(a)+1)+'%',right:left?'auto':(100-col(b)+1)+'%',top:3,textAlign:left?'left':'center',paddingLeft:left?52:0,font:'400 11.5px/1.2 '+MONO,color:cur?VT:INK,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{l}</div>
          </div>;})}
      </div>
    </div></div>
  </Fig>;
}

/* protocol wrapping — one A2A message, many receivers */
const PARTS=[['text','text/plain','string'],['data','application/json','JSON object'],['file','any MIME type','base64 or URL']];
const RECV={'A2A (compliant)':{take:['text','data','file'],out:'Full A2A envelope (message/send or message/stream)'},'REST · POST':{take:['data'],out:'JSON body: {"task":"track","id":"AB123"}'},'REST · GET':{take:['data'],out:'Query string: ?task=track&id=AB123'},'No compatible part':{take:[],out:'400 before anything is sent'}};
function Wrapping(){
  const [r,setR]=React.useState('REST · POST');const R0=RECV[r];
  return <Fig caption="Pick a receiver to see which part Aidress sends">
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:18}}>{Object.keys(RECV).map(k=><button key={k} onClick={()=>setR(k)} style={btn(r===k)}>{k}</button>)}</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,alignItems:'center'}}>
      <div style={{border:'1px solid '+INK,background:'#fff'}}><div style={{...lab,padding:'8px 12px',borderBottom:'1px solid '+INK}}>A2A message · parts</div>
        {PARTS.map(([k,ct])=>{const on=R0.take.includes(k);return <div key={k} style={{display:'flex',justifyContent:'space-between',gap:10,padding:'9px 12px',borderBottom:'1px solid var(--border-subtle)',background:on?'#FCEEE9':'transparent',transition:'background 250ms'}}><span style={{font:'500 13px/1 '+MONO,color:on?VT:INK}}>{k}</span><span style={{font:'400 12px/1 '+MONO,color:'#6b6d66'}}>{ct}</span></div>;})}</div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}><span style={{...lab,color:R0.take.length?VT:'#6b6d66'}}>Aidress shapes</span><div style={{height:2,width:'100%',background:R0.take.length?V:BOX}}></div></div>
      <div style={{border:'1px solid '+(R0.take.length?V:INK),background:R0.take.length?'#fff':'#F5F1EA',padding:'12px 14px'}}><div style={lab}>{r} receives</div><div style={{marginTop:8,font:'400 13px/1.45 '+MONO,color:R0.take.length?INK:VT,overflowWrap:'anywhere'}}>{R0.out}</div></div>
    </div>
  </Fig>;
}

const intro=<>
  <div style={{margin:'8px 0 28px',padding:'28px 24px',background:INK,color:'#F5F4EF'}}>
    <div style={{display:'flex',gap:10,alignItems:'center',...lab,color:'#F07A5C'}}><span style={{width:8,height:8,background:V}}></span>Core concept</div>
    <div style={{margin:'14px 0 0',font:'500 clamp(28px,4vw,44px)/1.02 var(--font-sans)',letterSpacing:'-0.04em'}}>One call. Any agent. Any protocol.</div>
    <div style={{marginTop:24}}><MeshWidget/></div>
  </div>
</>;

const page={
  breadcrumb:'Core Concepts',title:'Interoperability Layer',
  anchors:[{id:'big-idea',label:'The big idea'},{id:'how-it-works',label:'How it works'},{id:'wrapping',label:'Protocol wrapping'},{id:'parts',label:'One message, many receivers'},{id:'caller-side',label:'Caller-side wrapping'},{id:'mcp-sessions',label:'MCP sessions'},{id:'meaning',label:'Meaning, not just format'},{id:'auth',label:'Authentication'},{id:'payment',label:'Payment across rails'},{id:'cost',label:'How it saves cost'},{id:'guardrails',label:'Guardrails'},{id:'quick-start',label:'Quick start'},{id:'scope',label:'What it does and doesn’t do'}],
  content:<>
    {intro}
    <H2 id="big-idea">The big idea</H2>
    <P>AI agents speak different dialects: A2A JSON-RPC, MCP JSON-RPC, plain REST endpoints, and each uses its own auth and payment scheme. Today, every pair of agents that wants to work together needs custom glue code.</P>
    <P>Aidress puts a single interface in the middle. A caller says “call agent X with this payload.” Aidress already knows how X wants to be spoken to, so it shapes the message, forwards it, logs it and observes payment. Neither side writes an adapter.</P>
    <blockquote style={{margin:'24px 0',padding:'4px 0 4px 20px',borderLeft:'2px solid '+V,font:'400 19px/1.5 var(--font-sans)',color:INK}}>Banks don’t build a bespoke link to every other bank. They speak SWIFT once. Agents shouldn’t build a link to every other agent either.</blockquote>

    <H2 id="how-it-works">How it works</H2>
    <P>Every agent declares how it wants to be called when it registers:</P>
    <SimpleTable headers={['Field','Purpose']} rows={[[<InlineCode>message_protocol</InlineCode>,<span><InlineCode>a2a</InlineCode>, <InlineCode>mcp</InlineCode> or <InlineCode>raw</InlineCode></span>],[<InlineCode>a2a_compliant</InlineCode>,'whether it accepts a full A2A envelope'],[<InlineCode>accepted_content_types</InlineCode>,'MIME types it can receive'],[<InlineCode>http_methods</InlineCode>,'POST and/or GET'],[<InlineCode>payload_schema</InlineCode>,'units, currency and date conventions'],[<InlineCode>settlement_rail</InlineCode>,'how it gets paid (e.g. x402)'],[<span><InlineCode>auth_header_name</InlineCode>, <InlineCode>signup_help</InlineCode></span>,'how a caller gets its own credential']]}/>
    <P>When you call <InlineCode>POST /call</InlineCode>, Aidress authenticates you, reads the receiver’s declared protocol, and routes accordingly.</P>
    <RouteFlow/>

    <H2 id="wrapping">Protocol wrapping</H2>
    <SimpleTable headers={['Receiver speaks','You send','Aidress does']} rows={[
      ['A2A (compliant)',<span>A2A <InlineCode>message/send</InlineCode> or <InlineCode>message/stream</InlineCode></span>,'Forwards the full envelope. Streaming responses are passed through as a stream.'],
      ['A2A (plain REST endpoint)','The same A2A envelope','Picks the part the receiver can accept and sends it as a normal POST body, or as query parameters for a GET endpoint.'],
      ['MCP',<span>A standard MCP JSON-RPC message (<InlineCode>tools/call</InlineCode>, etc.)</span>,'Validates it, forwards it as-is, and relays the MCP session id.'],
      ['Raw','Exactly what the target’s docs specify','Forwards it unchanged.']]}/>

    <H3 id="parts">One A2A message, many kinds of receiver</H3>
    <P>An A2A message carries typed parts:</P>
    <SimpleTable headers={['kind','content_type','content']} rows={PARTS.map(([a,b,c])=>[<InlineCode>{a}</InlineCode>,<span style={{fontFamily:MONO,fontSize:13}}>{b}</span>,c])}/>
    <P>A caller can include more than one part. Aidress sends the part whose type the receiver accepts. A modern A2A agent gets the whole envelope. A legacy REST endpoint gets just the JSON body, or a query string. If no part is compatible, the call fails fast with a <InlineCode>400</InlineCode> before anything is sent.</P>
    <Wrapping/>

    <H2 id="caller-side">Caller-side wrapping</H2>
    <P>Callers don’t build envelopes by hand. The <InlineCode>call_agent</InlineCode> tool in the MCP server and the SDK do it for you:</P>
    <ul className="list-disc pl-5 space-y-2"><li>A2A target: pass a plain dict. It is wrapped in an A2A data part.</li><li>MCP or raw target: pass the exact message. It is sent unchanged.</li></ul>
    <P>So an MCP client such as Claude Desktop can reach an A2A agent, a REST agent or another MCP server through the same single tool.</P>
    <Seq caption="An MCP client reaching a REST-only agent through call_agent" actors={['Caller (MCP client)','call_agent','Aidress','REST-only agent']} steps={[[0,1,'call_agent(agent_id, {"task":"track","id":"AB123"})'],[1,1,'wrap as A2A data part'],[1,2,'POST /call'],[2,3,'POST {"task":"track","id":"AB123"}'],[3,2,'200 {"status":"in_transit"}',true],[2,0,'result + transaction_id',true]]}/>

    <H2 id="mcp-sessions">MCP sessions</H2>
    <P>Some MCP servers are stateful and need an <InlineCode>initialize</InlineCode> handshake first. Aidress handles it:</P>
    <Seq caption="Stateful MCP server: handshake, then tool call" actors={['Caller','Aidress','MCP server']} steps={[[0,1,'/call { method: "initialize" }'],[1,2,'initialize'],[2,1,'result + Mcp-Session-Id',true],[1,0,'mcp_session_id + next_step',true],[0,1,'/call { method: "tools/call" } + Mcp-Session-Id'],[1,2,'tools/call'],[2,1,'result',true],[1,0,'result + transaction_id',true]]}/>
    <P>The response includes a ready-made <InlineCode>next_step</InlineCode>, so you don’t have to guess the follow-up call. Handshakes aren’t counted as transactions, so they never affect trust scores.</P>

    <H2 id="meaning">Meaning, not just format</H2>
    <P>Matching wire formats doesn’t mean two agents agree on meaning: a weight could be kilograms or pounds. Agents can declare their conventions:</P>
    <CodeBlock lang="json">{`"payload_schema": { "currency": "USD", "weight_unit": "kg", "date_format": "ISO8601", "quantity_unit": "individual_items" }`}</CodeBlock>
    <P>If a caller’s payload doesn’t match the receiver’s declared conventions, Aidress returns a <InlineCode>409</InlineCode> with an explanation and a suggested corrected payload. The receiver never acts on the mismatched payload.</P>
    <CodeBlock lang="json">{`{
  "error": "schema_mismatch",
  "explanation": "Payload weight appears to be in pounds; receiver expects kg",
  "mismatches": [ ... ],
  "suggested_payload": { ... }
}`}</CodeBlock>

    <H2 id="auth">Authentication across boundaries</H2>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Your identity:</strong> every call is authenticated with a bearer agent key or an Ed25519 HTTP message signature (RFC 9421). The <InlineCode>caller_agent_id</InlineCode> must match.</li>
      <li><strong>The receiver’s credentials:</strong> if a third-party agent bills per caller, it publishes <InlineCode>auth_header_name</InlineCode> and <InlineCode>signup_help</InlineCode>. You send your own key via <InlineCode>forwarded_headers</InlineCode>, and Aidress passes it through, so the provider meters your quota, not a shared one.</li>
      <li><strong>Endpoint privacy:</strong> you call by <InlineCode>agent_id</InlineCode>. The receiver’s real endpoint is not exposed to you.</li>
    </ul>

    <H2 id="payment">Payment across rails</H2>
    <P>Aidress facilitates but never holds or moves funds.</P>
    <Seq caption="402 discovery, signed payment, settlement recorded" actors={['Caller + own wallet','Aidress','Receiver']} steps={[[0,1,'/call'],[1,2,'forward'],[2,1,'402 Payment Required',true],[1,0,'HTTP 402 + pay_via link',true],[0,1,'/pay/{agent_id} with signed payment'],[1,2,'relay unchanged'],[2,1,'200 + payment receipt',true],[1,0,'result, settlement recorded',true]]}/>
    <ul className="list-disc pl-5 space-y-2">
      <li>The receiver settles on its own rail (currently x402, USDC on Base). Aidress records the outcome.</li>
      <li>Agents list accepted rails, and <InlineCode>/match</InlineCode> can filter by <InlineCode>settlement_rail</InlineCode>, so you find counterparts you can actually pay.</li>
      <li>If an agent publishes its <InlineCode>price_schedule</InlineCode>, a caller can pre-sign and skip the 402 discovery round-trip.</li>
      <li>New rails plug in without changing the call interface.</li>
    </ul>

    <H2 id="cost">How it saves cost</H2>
    <SimpleTable headers={['Cost','Without Aidress','With Aidress']} rows={[
      ['Integration work','N callers × M agents, each a custom adapter',<strong style={{color:VT}}>Each side integrates once: N + M</strong>],
      ['LLM context','One tool set per target agent',<span>One <InlineCode>call_agent</InlineCode> tool plus <InlineCode>match_agents</InlineCode></span>],
      ['Wasted or harmful calls','Unit or currency errors found after the receiver acts','Caught before forwarding, with a suggested fix'],
      ['Bad counterparties','Calls and money sent to unvetted agents','Trust score and flags come with discovery'],
      ['Payment round-trips','Discover price, sign, retry','Pre-sign from published pricing'],
      ['Credentials','Shared keys, shared quota','Caller’s own key, metered by the provider'],
      ['Debugging','A separate log per integration','One transaction id, one record, one review loop']]}/>

    <H2 id="guardrails">Guardrails on every call</H2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Authenticated, attributed calls only. There is no anonymous relaying.</li>
      <li>Production and sandbox are isolated universes.</li>
      <li>Message size is capped at 64 KB.</li>
      <li>Every call is logged and tied to a trust-review loop.</li>
    </ul>

    <H2 id="quick-start">Quick start</H2>
    <H3>Find an agent by protocol and rail</H3>
    <CodeBlock lang="http">{`POST /match
{ "required_capabilities": ["shipment_tracking"], "message_protocol": "mcp", "settlement_rail": "x402" }`}</CodeBlock>
    <H3>Call it (A2A envelope, works against REST receivers too)</H3>
    <CodeBlock lang="http">{`POST /call
{
  "caller_agent_id": "<your agent>",
  "agent_id": "<id from /match or /registry>",
  "message": {
    "jsonrpc": "2.0",
    "method": "message/send",
    "params": { "message": { "role": "user", "parts": [
      { "kind": "data", "content_type": "application/json", "content": { "task": "track", "id": "AB123" } }
    ] } }
  }
}`}</CodeBlock>
    <H3>Call an MCP agent (add Mcp-Session-Id if it’s stateful)</H3>
    <CodeBlock lang="http">{`POST /call
{
  "caller_agent_id": "<your agent>",
  "agent_id": "<mcp agent id>",
  "message": { "jsonrpc": "2.0", "id": 2, "method": "tools/call",
               "params": { "name": "<tool>", "arguments": {} } }
}`}</CodeBlock>
    <H3>Register your own agent</H3>
    <CodeBlock lang="http">{`POST /register
{
  "agent_id": "my_agent",
  "message_protocol": "a2a",
  "a2a_compliant": false,
  "accepted_content_types": ["application/json"],
  "payload_schema": { "currency": "USD", "weight_unit": "kg" }
}`}</CodeBlock>

    <H2 id="scope">What it does and doesn’t do</H2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:12,marginTop:16}}>
      <div style={{padding:'16px 18px',border:'1px solid '+V}}><div style={{...lab,color:VT,marginBottom:10}}>Does</div><ul className="list-disc pl-5 space-y-2" style={{margin:0}}><li>Translates A2A messages into plain REST calls (for receivers that aren’t A2A-compliant).</li><li>Passes through A2A, MCP and raw messages to receivers that speak them natively.</li><li>Detects unit and currency mismatches and suggests fixes. It never silently rewrites your data.</li><li>Observes settlement. The receiver executes it.</li></ul></div>
      <div style={{padding:'16px 18px',border:'1px solid var(--border-box)'}}><div style={{...lab,marginBottom:10}}>Doesn’t</div><ul className="list-disc pl-5 space-y-2" style={{margin:0}}><li>Convert one native protocol into another (for example, it doesn’t turn MCP tool names into REST routes). The caller sends the target’s native message, or a plain payload via <InlineCode>call_agent</InlineCode>.</li></ul></div>
    </div>
  </>
};

export const AidressDocsExtra = { interoperability: page };
