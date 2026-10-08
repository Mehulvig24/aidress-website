import React from 'react';
function Box({title,sub,accent}){
  return <div style={{flex:'none',minWidth:172,padding:'22px 18px',background:'var(--paper)',border:'1px solid '+(accent?'var(--vermilion-500)':'var(--border-box)'),transition:'border-color var(--dur-slow)'}}>
    <div style={{font:'400 13px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em',color:'var(--ink-deep)'}}>{title}</div>
    {sub&&<div style={{font:'400 14px/1.3 var(--font-sans)',color:'var(--text-secondary)',marginTop:12}}>{sub}</div>}
  </div>;
}
export function FlowDiagram({from,to,label,via=[],activeVia,resolved=true,style}){
  const [k,setK]=React.useState(0);
  React.useEffect(()=>{setK(x=>x+1);},[label,to&&to.title,activeVia]);
  const col=resolved?'var(--vermilion-500)':'var(--gray-box)';
  return <div style={{display:'flex',alignItems:'center',width:'100%',...style}}>
    <Box {...from}/>
    <div style={{flex:1,position:'relative',height:120,display:'flex',alignItems:'center'}}>
      <div key={k} style={{position:'absolute',left:0,right:0,top:'50%',height:1,background:col,transformOrigin:'left',animation:'ad-draw var(--dur-scene) var(--ease-resolve)'}}/>
      {label&&<div style={{position:'absolute',left:0,right:0,top:'50%',transform:'translateY(-22px)',textAlign:'center',font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',color:col}}>{label}</div>}
      {via.length>0&&<div style={{position:'absolute',left:0,right:0,top:'50%',transform:'translateY(14px)',display:'flex',justifyContent:'center',gap:8}}>
        {via.map(v=><span key={v} style={{font:'400 11px/1 var(--font-mono)',textTransform:'uppercase',padding:'5px 7px',border:'1px solid '+(v===activeVia?'var(--vermilion-500)':'var(--border-box)'),color:v===activeVia?'var(--vermilion-600)':'var(--text-secondary)',background:'var(--paper)',transition:'all var(--dur-base)'}}>{v}</span>)}
      </div>}
    </div>
    <Box {...to} accent={resolved}/>
  </div>;
}