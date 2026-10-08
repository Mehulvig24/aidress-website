// Ported from design_handoff_aidress_website/design/components (data/TrustMeter.jsx). Styles are verbatim.
import React from 'react';

export interface TrustMeterProps {
  label?: string;
  value: number;
  max?: number;
  showValue?: boolean;
  style?: React.CSSProperties;
}

export function TrustMeter({label='Trust Score',value=0,max=100,showValue=true,style}: TrustMeterProps){
  const pct=Math.max(0,Math.min(1,value/max))*100;
  return <div style={{display:'flex',flexDirection:'column',gap:12,...style}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
      <span style={{font:'500 15px/1 var(--font-sans)',color:'var(--ink)'}}>{label}</span>
      {showValue&&<span style={{font:'400 15px/1 var(--font-sans)',color:'var(--ink)',fontVariantNumeric:'tabular-nums'}}>{value}</span>}
    </div>
    <div style={{height:4,background:'var(--stone-100)',borderRadius:2,overflow:'hidden'}}>
      <div style={{height:'100%',width:pct+'%',background:'var(--vermilion-500)',transition:'width var(--dur-scene) var(--ease-resolve)'}}/>
    </div>
  </div>;
}
