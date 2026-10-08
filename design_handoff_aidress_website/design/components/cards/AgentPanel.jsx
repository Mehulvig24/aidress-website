import React from 'react';
import { Avatar } from '../core/Avatar.jsx';
import { Badge } from '../core/Badge.jsx';
import { Tag } from '../core/Tag.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';
import { TrustMeter } from '../data/TrustMeter.jsx';
import { KeyValueList } from '../data/KeyValueList.jsx';
import { ActivityList } from '../data/ActivityList.jsx';
const H=({children})=><div style={{font:'600 15px/1 var(--font-sans)',color:'var(--ink)',marginBottom:14}}>{children}</div>;
export function AgentPanel({name,letter='A',verified=true,description,trust,stats=[],capabilities=[],transactions=[],onViewProfile,onMore,style}){
  return <aside style={{display:'flex',flexDirection:'column',gap:0,padding:'24px 24px 28px',background:'var(--surface-card)',borderLeft:'1px solid var(--border-subtle)',boxSizing:'border-box',...style}}>
    <div style={{display:'flex',gap:18,alignItems:'flex-start'}}>
      <Avatar letter={letter} size={56}/>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:8,paddingTop:4}}>
        <div style={{font:'600 19px/1.1 var(--font-sans)',letterSpacing:'-0.01em'}}>{name}</div>
        {verified&&<div><Badge>Verified</Badge></div>}
      </div>
      <IconButton icon="ellipsis" label="More" size="sm" onClick={onMore}/>
    </div>
    {description&&<p style={{margin:'20px 0 0',font:'400 14.5px/1.55 var(--font-sans)',color:'var(--text-secondary)'}}>{description}</p>}
    {trust!=null&&<TrustMeter value={trust} style={{marginTop:22,paddingTop:22,borderTop:'1px solid var(--border-subtle)'}}/>}
    {stats.length>0&&<KeyValueList rows={stats} split="1fr" align="right" style={{marginTop:10}}/>}
    {capabilities.length>0&&<div style={{marginTop:28}}><H>Capabilities</H><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{capabilities.map(c=><Tag key={c}>{c}</Tag>)}</div></div>}
    {transactions.length>0&&<div style={{marginTop:28,paddingTop:24,borderTop:'1px solid var(--border-subtle)'}}><H>Recent Transactions</H><ActivityList items={transactions}/></div>}
    {onViewProfile&&<Button size="lg" fullWidth iconRight="arrow-right" onClick={onViewProfile} style={{marginTop:24}}>View Full Profile</Button>}
  </aside>;
}