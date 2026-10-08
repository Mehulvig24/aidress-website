// Ported from design_handoff_aidress_website/design/components (workflow/WorkflowRail.jsx). Styles are verbatim.
import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

export interface WorkflowStepDef { label: string; icon?: IconName; /** mono sub-label, e.g. "A2A · 1.2s" */ meta?: string; }
export interface WorkflowRailProps {
  /** label may contain \n to break "Planning\nAgent" */
  steps: WorkflowStepDef[];
  /** steps before are resolved (vermilion), this one pulses, after are idle */
  activeIndex?: number;
  size?: 'md' | 'lg';
  onStepClick?: (index: number) => void;
  style?: React.CSSProperties;
}

export function WorkflowRail({steps=[],activeIndex=-1,size='lg',onStepClick,style}: WorkflowRailProps){
  const d=size==='lg'?110:80;
  return <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',...style}}>
    {steps.map((s,i)=><React.Fragment key={i}>
      {i>0&&<div style={{flex:1,display:'flex',justifyContent:'center',paddingTop:d/2-10,color:i<=activeIndex?'var(--vermilion-500)':'var(--gray-400)',transition:'color var(--dur-slow)'}}><Icon name="arrow-right" size={20} strokeWidth={1.25} style={{width:32}}/></div>}
      <WorkflowStep step={s} d={d} state={i<activeIndex?'resolved':i===activeIndex?'active':'idle'} onClick={onStepClick?()=>onStepClick(i):undefined}/>
    </React.Fragment>)}
  </div>;
}
function WorkflowStep({step,d,state,onClick}){
  const res=state==='resolved',act=state==='active';
  return <div onClick={onClick} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,width:d+30,cursor:onClick?'pointer':'default'}}>
    <div style={{width:d,height:d,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',
      background:res?'var(--vermilion-50)':'var(--stone-100)',border:'1px solid '+(res||act?'var(--vermilion-500)':'var(--gray-400)'),
      color:res||act?'var(--vermilion-600)':'var(--ink)',animation:act?'ad-pulse 1.4s var(--ease-standard) infinite':'none',transition:'background var(--dur-slow),border-color var(--dur-slow)'}}>
      <Icon name={step.icon||'user'} size={Math.round(d*0.3)} strokeWidth={1.25}/>
    </div>
    <div style={{font:'400 '+(d>90?19:15)+'px/1.3 var(--font-sans)',textAlign:'center',color:'var(--ink)',whiteSpace:'pre-line'}}>{step.label}</div>
    {step.meta&&<div style={{font:'400 11px/1 var(--font-mono)',color:res?'var(--text-accent)':'var(--text-tertiary)',marginTop:-8}}>{step.meta}</div>}
  </div>;
}
