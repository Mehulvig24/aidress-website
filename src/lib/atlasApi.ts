// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
// Aidress registry client for the Atlas. Read endpoints need no auth (see /docs/authentication).
// Falls back to the bundled demo graph when the API is unreachable (offline file, CORS, outage).
// Ported from design_handoff_aidress_website/design/ui_kits/website/atlasApi.js (window.AidressAPI).
// The base URL can be overridden with VITE_AIDRESS_API_BASE (the mock read window.AIDRESS_API_BASE).
const BASE=(import.meta.env.VITE_AIDRESS_API_BASE||'https://api.aidress.ai').replace(/\/$/,'');
const TIMEOUT=6000;
async function req(path,opts={}){
  const ctl=new AbortController();const t=setTimeout(()=>ctl.abort(),TIMEOUT);
  try{const r=await fetch(BASE+path,{...opts,signal:ctl.signal,headers:{'Content-Type':'application/json',...(opts.headers||{})}});
    if(!r.ok)throw new Error(path+' → '+r.status);return await r.json();}
  finally{clearTimeout(t);}
}
const capName=c=>typeof c==='string'?c:(c&&c.name)||'';
const API={
  base:BASE,
  health:()=>req('/health'),
  registry:(limit=50,offset=0)=>req('/registry?limit='+limit+'&offset='+offset),
  agent:id=>req('/agent/'+encodeURIComponent(id)),
  verify:id=>req('/verify',{method:'POST',body:JSON.stringify({agent_id:id})}),
  match:(caps,rail)=>req('/match',{method:'POST',body:JSON.stringify({required_capabilities:caps,...(rail?{settlement_rail:rail}:{})})}),
  capName,
  // TrustObject[] → NetworkGraph {nodes,edges} + lookup. Hub = Aidress registry; clusters = top capabilities.
  toGraph(list,W=1000,H=580){
    const agents=(Array.isArray(list)?list:(list&&(list.agents||list.results||list.items))||[]).filter(a=>a&&a.agent_id);
    const count={};agents.forEach(a=>(a.capabilities||[]).forEach(c=>{const n=capName(c);if(n)count[n]=(count[n]||0)+1;}));
    const top=Object.keys(count).sort((a,b)=>count[b]-count[a]).slice(0,6);
    const cx=W/2,cy=H/2;const nodes=[{id:'__hub',x:cx,y:cy,r:22,kind:'hub',label:'A',industry:'all'}];const edges=[];
    top.forEach((c,i)=>{const ang=-Math.PI/2+i*2*Math.PI/Math.max(top.length,1);nodes.push({id:'cap:'+c,x:cx+Math.cos(ang)*W*0.36,y:cy+Math.sin(ang)*H*0.36,r:15,kind:'cluster',label:c.replace(/_/g,' '),industry:c});edges.push(['__hub','cap:'+c]);});
    const by={};
    agents.forEach((a,i)=>{const caps=(a.capabilities||[]).map(capName);const home=caps.find(c=>top.includes(c))||top[0]||'other';
      const cl=nodes.find(n=>n.id==='cap:'+home)||nodes[0];const k=(by[home]=(by[home]||0)+1);
      const ang=(i*2.39996)%(2*Math.PI);const rad=34+((k*17)%60);
      nodes.push({id:a.agent_id,x:Math.max(20,Math.min(W-20,cl.x+Math.cos(ang)*rad)),y:Math.max(20,Math.min(H-20,cl.y+Math.sin(ang)*rad)),r:a.verified?8:5,kind:a.verified?'agent':'dot',label:a.verified&&k<=2?a.agent_id:undefined,industry:home});
      edges.push([cl.id,a.agent_id]);
      caps.filter(c=>c!==home&&top.includes(c)).forEach(c=>edges.push(['cap:'+c,a.agent_id]));});
    return {nodes,edges,agents,clusters:top.map(c=>({value:c,label:c.replace(/_/g,' '),count:count[c]}))};
  }
};
export const AidressAPI=API;
