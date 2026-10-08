// Ported from design_handoff_aidress_website/design/components (graph/NetworkGraph.jsx). Styles are verbatim.
import React from 'react';

export interface GraphNode { id: string; x: number; y: number; r: number; kind: 'hub' | 'cluster' | 'agent' | 'dot'; label?: string; industry?: string; }
export interface NetworkGraphProps {
  /** defaults to a representative registry graph (hub A + six industry clusters) */
  nodes?: GraphNode[];
  edges?: [string, string][];
  /** resolved node — filled vermilion, its edges animate as the active route */
  selectedId?: string;
  /** dims nodes outside this industry id ('all' = none) */
  focusIndustry?: string;
  onSelect?: (node: GraphNode) => void;
  /** fires with node + viewBox position (null on leave) — anchor an AgentPopover */
  onHover?: (node: GraphNode | null, pos?: { x: number; y: number }) => void;
  showLabels?: boolean;
  /** subtle idle float */
  drift?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

function rng(seed){return()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};}
function buildDefault(): { nodes: GraphNode[]; edges: [string, string][] }{
  const clusters: [string,string,number,number][]=[['logistics','Logistics',250,150],['research','Research',760,70],['retail','Retail',900,200],['finance','Finance',150,330],['healthcare','Healthcare',300,470],['devtools','Developer Tools',830,470]];
  const nodes: GraphNode[]=[{id:'A',x:500,y:290,r:22,kind:'hub',label:'A',industry:'logistics'}];
  clusters.forEach(([id,label,x,y])=>nodes.push({id,x,y,r:16,kind:'cluster',label,industry:id}));
  const mids: [number,number,string][]=[[400,230,'logistics'],[520,150,'research'],[610,110,'research'],[690,290,'retail'],[640,390,'devtools'],[500,420,'healthcare'],[420,360,'finance'],[350,120,'logistics'],[740,200,'retail'],[580,310,'devtools'],[300,300,'finance'],[430,480,'healthcare']];
  mids.forEach(([x,y,ind],i)=>nodes.push({id:'m'+i,x,y,r:10,kind:'agent',industry:ind}));
  const r=rng(7);const edges: [string, string][]=[];
  for(let i=0;i<7;i++) edges.push(['A','m'+i]);
  mids.forEach(([,, ind],i)=>edges.push(['m'+i,ind]));
  ([['m0','m7'],['m1','m2'],['m3','m8'],['m4','m9'],['m5','m11'],['m6','m10'],['m2','m8'],['m9','m3'],['m6','m5'],['m0','m6'],['m1','m0'],['m10','finance'],['m7','m1'],['m4','m5']] as [string,string][]).forEach(e=>edges.push(e));
  for(let i=0;i<34;i++){const x=80+r()*860,y=30+r()*540;const id='d'+i;let best=null,bd=1e9;nodes.forEach(n=>{if(n.kind==='dot')return;const dd=(n.x-x)**2+(n.y-y)**2;if(dd<bd){bd=dd;best=n;}});
    nodes.push({id,x,y,r:3+r()*3,kind:'dot',industry:best.industry});if(r()<0.6)edges.push([id,best.id]);}
  return {nodes,edges};
}
export const DEFAULT_GRAPH=buildDefault();
export function NetworkGraph({nodes=DEFAULT_GRAPH.nodes,edges=DEFAULT_GRAPH.edges,selectedId,focusIndustry,onSelect,onHover,showLabels=true,drift=true,width=1000,height=580,style}: NetworkGraphProps){
  const [hover,setHover]=React.useState(null);
  const [t,setT]=React.useState(0);
  React.useEffect(()=>{if(!drift)return;let raf,s=performance.now();const tick=n=>{setT((n-s)/1000);raf=requestAnimationFrame(tick);};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf);},[drift]);
  const pos={};nodes.forEach((n,i)=>{const a=n.kind==='hub'?0:(n.kind==='dot'?3:1.6);pos[n.id]={x:n.x+Math.sin(t*0.4+i)*a,y:n.y+Math.cos(t*0.33+i*1.3)*a};});
  const focus=hover||selectedId;
  const nb=new Set();if(focus){nb.add(focus);edges.forEach(([a,b])=>{if(a===focus)nb.add(b);if(b===focus)nb.add(a);});}
  const dimmed=n=>(focusIndustry&&focusIndustry!=='all'&&n.industry!==focusIndustry&&n.kind!=='hub')||(hover&&!nb.has(n.id));
  const enter=n=>{if(n.kind==='dot')return;setHover(n.id);onHover&&onHover(n,pos[n.id]);};
  const leave=()=>{setHover(null);onHover&&onHover(null);};
  return <svg viewBox={'0 0 '+width+' '+height} style={{width:'100%',height:'auto',display:'block',overflow:'visible',...style}}>
    {edges.map(([a,b],i)=>{const p=pos[a],q=pos[b];if(!p||!q)return null;const hot=selectedId&&(a===selectedId||b===selectedId);const warm=hover&&(a===hover||b===hover);
      const na=nodes.find(n=>n.id===a),nbb=nodes.find(n=>n.id===b);const dim=(na&&dimmed(na))||(nbb&&dimmed(nbb));
      return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={hot?'var(--graph-edge-active)':warm?'var(--gray-600)':'var(--graph-edge)'} strokeWidth={hot?1.4:1}
        strokeDasharray={hot?'4 4':undefined} style={{opacity:dim&&!hot?0.25:1,transition:'opacity var(--dur-base), stroke var(--dur-base)',animation:hot?'ad-dash 1.2s linear infinite':'none'}}/>;})}
    {nodes.map(n=>{const p=pos[n.id];const sel=n.id===selectedId;const hv=n.id===hover;const dim=dimmed(n);
      const fill=sel?'var(--graph-node-resolved)':n.kind==='hub'?'var(--gray-700)':n.kind==='dot'?'var(--gray-350)':n.kind==='cluster'?'var(--gray-400)':'var(--stone-200)';
      const r=n.r*(hv?1.15:1);
      return <g key={n.id} onMouseEnter={()=>enter(n)} onMouseLeave={leave} onClick={()=>n.kind!=='dot'&&onSelect&&onSelect(n)} style={{cursor:n.kind==='dot'?'default':'pointer',opacity:dim?0.3:1,transition:'opacity var(--dur-base)'}}>
        {(n.kind==='hub'||sel)&&<circle cx={p.x} cy={p.y} r={r+5} fill="var(--paper)" stroke={sel?'var(--vermilion-500)':'var(--ink)'} strokeWidth="1.2"/>}
        <circle cx={p.x} cy={p.y} r={r} fill={fill} stroke={n.kind==='dot'?'none':sel?'var(--vermilion-600)':'var(--gray-500)'} strokeWidth="1" style={{transition:'r var(--dur-fast), fill var(--dur-base)'}}/>
        {n.kind==='hub'&&<text x={p.x} y={p.y+5} textAnchor="middle" style={{font:'500 15px var(--font-sans)',fill:'var(--paper)',pointerEvents:'none'}}>{n.label}</text>}
        {showLabels&&n.kind==='cluster'&&<text x={p.x+(p.x>500?r+10:-(r+10))} y={p.y+4} textAnchor={p.x>500?'start':'end'} style={{font:'400 13px var(--font-sans)',fill:hv||sel?'var(--ink)':'var(--gray-700)',pointerEvents:'none'}}>{n.label}</text>}
        {n.kind==='agent'&&hv&&<text x={p.x} y={p.y-r-8} textAnchor="middle" style={{font:'400 10px var(--font-mono)',fill:'var(--gray-600)',pointerEvents:'none'}}>{'agent://'+n.id}</text>}
      </g>;})}
  </svg>;
}
