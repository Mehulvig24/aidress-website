import React from 'react';
export function RadioList({items=[],value,onChange,style}){
  return <div role="radiogroup" style={{display:'flex',flexDirection:'column',gap:2,...style}}>
    {items.map(it=>{const on=it.value===value;return <RadioRow key={it.value} it={it} on={on} onClick={()=>onChange&&onChange(it.value)}/>;})}
  </div>;
}
function RadioRow({it,on,onClick}){
  const [h,setH]=React.useState(false);
  return <div role="radio" aria-checked={on} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',alignItems:'center',gap:12,height:32,padding:'0 8px',borderRadius:'var(--radius-sm)',cursor:'pointer',
    background:on?'var(--surface-muted)':h?'var(--surface-sunken)':'transparent',transition:'background var(--dur-fast)'}}>
    <span style={{width:16,height:16,borderRadius:'50%',border:'1px solid '+(on?'var(--ink)':'var(--gray-400)'),display:'flex',alignItems:'center',justifyContent:'center',flex:'none',background:'var(--surface-card)'}}>
      {on&&<span style={{width:8,height:8,borderRadius:'50%',background:'var(--ink)'}}/>}
    </span>
    <span style={{flex:1,font:(on?500:400)+' 14px/1 var(--font-sans)',color:'var(--ink)'}}>{it.label}</span>
    {it.count!=null&&<span style={{font:'400 12px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{it.count}</span>}
  </div>;
}