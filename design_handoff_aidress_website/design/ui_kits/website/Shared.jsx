(function __run(){if(!(window.AidressDesignSystem_f2dd6a&&window.AidressDesignSystem_f2dd6a.NavBar&&window.AW))return setTimeout(__run,20);
const {LayerTabs,FlowDiagram,Icon,Tag}=window.AidressDesignSystem_f2dd6a;
const mono={font:'400 13px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em'};
function Photo({id,label,src,credit,href,height='100%',style}){
  return <div style={{position:'relative',width:'100%',height,background:'var(--stone-section)',...style}}>
    <image-slot id={id} shape="rect" placeholder={label} src={src} credit={credit} credit-href={href}></image-slot>
  </div>;
}
const RM=()=>typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function useScrollY(){const [y,setY]=React.useState(0);React.useEffect(()=>{if(RM())return;let r=0;const f=()=>{cancelAnimationFrame(r);r=requestAnimationFrame(()=>setY(window.scrollY));};addEventListener('scroll',f,{passive:true});f();return()=>{removeEventListener('scroll',f);cancelAnimationFrame(r);};},[]);return y;}
function Reveal({children,delay=0,style}){const ref=React.useRef();const [on,setOn]=React.useState(RM());
  React.useEffect(()=>{if(on||!ref.current)return;const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){setOn(true);io.disconnect();}},{rootMargin:'0px 0px -12% 0px'});io.observe(ref.current);return()=>io.disconnect();},[]);
  return <div ref={ref} style={{opacity:on?1:0,transform:on?'none':'translateY(28px)',transition:`opacity 700ms var(--ease-resolve) ${delay}ms, transform 800ms var(--ease-resolve) ${delay}ms`,...style}}>{children}</div>;}
function Parallax({children,speed=-0.08,style}){const ref=React.useRef();useScrollY();let o=0;if(ref.current&&!RM()){const r=ref.current.getBoundingClientRect();o=(r.top+r.height/2-innerHeight/2)*speed;}
  return <div ref={ref} style={style}><div style={{transform:`translate3d(0,${o.toFixed(1)}px,0)`,willChange:'transform'}}>{children}</div></div>;}
function Band({tone='paper',children,style,id}){
  const bg={paper:'var(--paper)',stone:'var(--stone-section)',dark:'var(--ink-deep)'}[tone];
  return <section id={id} style={{background:bg,color:tone==='dark'?'var(--paper)':'var(--ink-deep)',padding:'64px var(--gutter)',...style}}><Reveal>{children}</Reveal></section>;
}
function FiveLayers({ind}){
  const D=window.AW;
  const [i,setI]=React.useState(0);
  const [d,setD]=React.useState(0);
  const [rail,setRail]=React.useState(0);
  const L=D.layers[i];
  const rails=ind&&ind.rails;
  React.useEffect(()=>{setD(0);},[i]);
  React.useEffect(()=>{if(!(rails&&i===4))return;const t=setInterval(()=>setRail(r=>(r+1)%rails.length),1300);return()=>clearInterval(t);},[i,rails]);
  const via=rails&&i===4?rails:(L.via||[]);
  const activeVia=rails&&i===4?rails[rail]:L.activeVia;
  return <div>
    <LayerTabs value={i} onChange={setI} items={D.LAYERS}/>
    <div key={i} style={{display:'grid',gridTemplateColumns:'minmax(0,0.9fr) minmax(0,1.3fr)',gap:72,paddingTop:56,animation:'ad-fade-up var(--dur-slow) var(--ease-resolve)'}}>
      <div>
        <div style={{...mono}}>{String(i+1).padStart(2,'0')} / {D.LAYERS[i]}</div>
        <h3 style={{margin:'22px 0 0',font:'500 34px/1.05 var(--font-sans)',letterSpacing:'-0.035em'}}>{L.kicker}</h3>
        <p style={{margin:'20px 0 0',font:'400 17px/1.5 var(--font-sans)',color:'var(--text-secondary)',maxWidth:440}}>{L.body}</p>
        {ind&&<p style={{margin:'18px 0 0',font:'400 15px/1.45 var(--font-sans)',maxWidth:440,paddingLeft:14,borderLeft:'0',position:'relative'}}><span style={{...mono,fontSize:11,color:'var(--vermilion-600)',display:'block',marginBottom:8}}>In {ind.short}</span>{ind.layerNote[i]}</p>}
        <div style={{marginTop:32,borderTop:'1px solid var(--border-rule)'}}>
          {L.depth.map(([h,b],k)=>{const on=k===d;return <div key={h} onClick={()=>setD(k)} style={{borderBottom:'1px solid var(--border-rule)',padding:'14px 0',cursor:'pointer'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',font:'400 16px/1.2 var(--font-sans)',color:on?'var(--vermilion-600)':'var(--ink-deep)'}}>{h}<Icon name={on?'minus':'plus'} size={14}/></div>
            <div style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows var(--dur-base) var(--ease-resolve)'}}><div style={{overflow:'hidden'}}><div style={{paddingTop:10,font:'400 14px/1.5 var(--font-sans)',color:'var(--text-secondary)'}}>{b}</div></div></div>
          </div>;})}
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:40}}>
        <FlowDiagram from={{title:L.from[0],sub:L.from[1]}} to={{title:L.to[0],sub:L.to[1]}} label={L.label} via={via} activeVia={activeVia}/>
        {rails&&i===4&&<div style={{...mono,fontSize:12,color:'var(--text-secondary)',textAlign:'center'}}>Rail-agnostic · same instruction, routed over <span style={{color:'var(--vermilion-600)'}}>{rails[rail]}</span></div>}
        <pre style={{margin:0,padding:'18px 20px',background:'var(--paper)',border:'1px solid var(--border-box)',font:'400 13px/1.7 var(--font-mono)',color:'var(--ink-deep)',whiteSpace:'pre-wrap'}}>{L.record}</pre>
      </div>
    </div>
  </div>;
}
function Stepper({ind,compact=false,onAgent,onCode}){
  const [s,setS]=React.useState(0);
  const st=ind.steps[s];const last=s===ind.steps.length-1;
  React.useEffect(()=>{setS(0);},[ind.id]);
  return <div style={{display:'grid',gridTemplateColumns:'minmax(0,0.8fr) minmax(0,1.2fr)',gap:56}}>
    <div>
      <div style={{...mono,fontSize:12,color:'var(--text-secondary)',display:'flex',gap:10,alignItems:'center'}}><span style={{padding:'4px 6px',border:'1px solid var(--border-box)'}}>Demonstration</span>{ind.scenario}</div>
      <div style={{marginTop:24,borderTop:'1px solid var(--border-rule)'}}>
        {ind.steps.map((x,k)=>{const on=k===s,done=k<s;return <div key={k} onClick={()=>setS(k)} style={{display:'flex',gap:18,alignItems:'center',padding:compact?'14px 0':'18px 0',borderBottom:'1px solid var(--border-rule)',cursor:'pointer'}}>
          <span style={{...mono,fontSize:12,width:24,color:done||on?'var(--vermilion-600)':'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')}</span>
          <span style={{flex:1,font:'400 '+(compact?17:19)+'px/1.2 var(--font-sans)',color:on?'var(--vermilion-500)':'var(--ink-deep)'}}>{x.t}</span>
          <span style={{width:9,height:9,borderRadius:'50%',background:done?'var(--vermilion-500)':on?'var(--ink-deep)':'transparent',border:'1px solid '+(done?'var(--vermilion-500)':'var(--gray-box)')}}/>
        </div>;})}
      </div>
      <div style={{display:'flex',gap:12,marginTop:20}}>
        <button onClick={()=>setS(x=>Math.max(0,x-1))} style={{all:'unset',cursor:'pointer',...mono,fontSize:12,padding:'10px 14px',border:'1px solid var(--border-box)'}}>← Prev</button>
        <button onClick={()=>setS(x=>Math.min(ind.steps.length-1,x+1))} style={{all:'unset',cursor:'pointer',...mono,fontSize:12,padding:'10px 14px',background:'var(--ink-deep)',color:'var(--paper)'}}>Next step →</button>
      </div>
    </div>
    <div key={s} style={{animation:'ad-fade-up var(--dur-slow) var(--ease-resolve)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',border:'1px solid var(--border-box)',background:'var(--paper)'}}>
        {[['What the agent needs',st.needs],['Counterparties',st.who],['What Aidress does',st.does],['Passes to next step',st.next]].map(([h,b],k)=><div key={h} style={{padding:'22px 22px 26px',borderRight:k%2===0?'1px solid var(--border-box)':'none',borderBottom:k<2?'1px solid var(--border-box)':'none'}}>
          <div style={{...mono,fontSize:11,color:'var(--text-secondary)'}}>{h}</div>
          <div style={{marginTop:12,font:(k===3?'400 14px/1.5 var(--font-mono)':'400 16px/1.45 var(--font-sans)'),color:k===3&&last?'var(--vermilion-600)':'var(--ink-deep)'}}>{b}</div></div>)}
      </div>
      <FlowDiagram style={{marginTop:28}} resolved={last} from={{title:'Requester',sub:ind.steps[0].who}} to={{title:last?'Resolved':'Step '+(s+1)+' / '+ind.steps.length,sub:last?st.next.replace('RESOLVED · ',''):st.t}} label={last?'Resolved':'In progress'}/>
      {onCode&&<a onClick={onCode} style={{display:'inline-flex',marginTop:22,...mono,fontSize:12,color:'var(--vermilion-600)',cursor:'pointer',borderBottom:'1px solid currentColor',paddingBottom:3}}>View integration example →</a>}
      {onAgent&&<div style={{display:'flex',gap:8,marginTop:18,flexWrap:'wrap'}}>{ind.agents.map(a=>{const ag=window.AW.agentFor(a);return <Tag key={a} mono onClick={()=>onAgent(a)}>agent://{ag.handle} ↗</Tag>;})}</div>}
    </div>
  </div>;
}
Object.assign(window,{Photo,Band,Reveal,Parallax,useScrollY,FiveLayers,Stepper,monoStyle:mono});
})();
