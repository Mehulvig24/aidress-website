// Ported from design_handoff_aidress_website/design/components (cards/AgentPopover.jsx). Styles are verbatim.
import React from 'react';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { TextLink } from './TextLink';

export interface AgentPopoverRow { label: string; value: React.ReactNode; mono?: boolean; }
export interface AgentPopoverProps {
  name: string;
  letter?: string;
  verified?: boolean;
  /** Trust Score, Transactions, Connected Agents, Protocols */
  rows?: AgentPopoverRow[];
  onView?: () => void;
  style?: React.CSSProperties;
}

export function AgentPopover({name,letter='A',verified=true,rows=[],onView,style}: AgentPopoverProps){
  return <div style={{width:216,background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-popover)',padding:'10px 14px 14px',boxSizing:'border-box',animation:'ad-fade-up var(--dur-base) var(--ease-resolve)',...style}}>
    <div style={{display:'flex',gap:11,alignItems:'center',paddingBottom:10,borderBottom:'1px solid var(--border-subtle)'}}>
      <Avatar letter={letter} size={40}/>
      <div style={{display:'flex',flexDirection:'column',gap:5}}>
        <div style={{font:'500 13px/1.1 var(--font-sans)',color:'var(--ink)'}}>{name}</div>
        {verified&&<Badge>Verified</Badge>}
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:0,padding:'6px 0 8px',borderBottom:'1px solid var(--border-subtle)'}}>
      {rows.map((r,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',height:25,alignItems:'center',font:'400 11px/1 var(--font-sans)'}}>
        <span style={{color:'var(--text-secondary)'}}>{r.label}</span><span style={{color:'var(--ink)',fontFamily:r.mono?'var(--font-mono)':undefined}}>{r.value}</span></div>)}
    </div>
    <TextLink size="sm" onClick={onView} style={{marginTop:12,fontSize:12}}>View Agent</TextLink>
  </div>;
}
