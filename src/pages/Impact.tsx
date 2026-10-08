// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
/* eslint-disable react-refresh/only-export-components, react-hooks/exhaustive-deps, react-hooks/rules-of-hooks */
// Aidress for Good, ported from design_handoff_aidress_website/design/ui_kits/website/Impact.jsx.
import React from 'react';
import { SectionHeader, Button } from '../components/ds';
import { Band, monoStyle as mono } from '../components/site/Shared';
const LAYERS=[['Discovery','Find the right agent or service.','Reach trusted services, not a fragmented system.'],['Identity','Verify the agent and its operator.','Establish who’s acting, and who’s accountable.'],['Trust','Use credentials, attestations, history.','Reduce fraud, impersonation, unsafe delegation.'],['Permissions & Terms','Define authority, limits, conditions.','Preserve consent, spending limits, human control.'],['Routing & Audit','Execute, and keep a record.','Improve transparency across institutions.']];
const USES=[['01','Agriculture','Smallholder agriculture','Better access to markets, credit, and insurance — while the farmer’s agent keeps final say.'],['02','Finance','Financial inclusion','Simpler access to banks and credit, with consent and limits built into the workflow.'],['03','Response','Disaster response','Faster relief coordination, less duplication, a clear record of who did what.']];
function Impact({go}){
  const [view,setView]=React.useState('social');
  return <div>
    <Band>
      <div style={{...mono,fontSize:12,color:'var(--text-secondary)'}}>Aidress for Good</div>
      <h1 style={{margin:'20px 0 0',font:'500 64px/1 var(--font-sans)',letterSpacing:'-0.045em',maxWidth:900,textWrap:'pretty'}}>Trust infrastructure doesn’t care who’s using it.</h1>
      <p style={{margin:'24px 0 0',font:'400 20px/1.45 var(--font-sans)',color:'var(--text-secondary)',maxWidth:680}}>The same protocol that lets agents book freight can let a farmer’s agent reach a bank, an NGO, or a government service — safely.</p>
      <p style={{margin:'32px 0 0',font:'400 16px/1.6 var(--font-sans)',maxWidth:720}}>Aidress is trust infrastructure for autonomous agents — identity, permissions, and an audit trail for every interaction, whether the counterparty is a freight carrier or a government service. There’s no separate “social impact” product: the same rails just mean broader inclusion, clearer accountability, and one shared way for institutions to coordinate.</p>
    </Band>
    <Band tone="stone">
      <SectionHeader size="md" label="The backbone" title="The five layers, applied wider."/>
      <div style={{display:'flex',gap:6,marginTop:32}}>{[['commercial','Commercial'],['social','Social'],['both','Side by side']].map(([v,l])=><button key={v} onClick={()=>setView(v)} style={{all:'unset',cursor:'pointer',...mono,fontSize:11,padding:'8px 10px',border:'1px solid '+(view===v?'var(--ink-deep)':'var(--border-box)'),background:view===v?'var(--ink-deep)':'transparent',color:view===v?'var(--paper)':'var(--ink-deep)'}}>{l}</button>)}</div>
      <div style={{marginTop:20,borderTop:'1px solid var(--border-rule)'}}>{LAYERS.map(([n,c,s],k)=><div key={n} style={{display:'grid',gridTemplateColumns:view==='both'?'48px minmax(0,1fr) minmax(0,1.3fr) minmax(0,1.3fr)':'48px minmax(0,1fr) minmax(0,2.6fr)',gap:20,padding:'18px 0',borderBottom:'1px solid var(--border-rule)',alignItems:'baseline'}}>
        <span style={{font:'400 12px/1 var(--font-mono)',color:'var(--text-secondary)'}}>{String(k+1).padStart(2,'0')}</span>
        <span style={{font:'500 18px/1.2 var(--font-sans)'}}>{n}</span>
        {view!=='social'&&<span style={{font:'400 16px/1.4 var(--font-sans)',color:view==='both'?'var(--text-secondary)':'inherit'}}>{view==='both'&&<span style={{...mono,fontSize:10.5,display:'block',marginBottom:6}}>Commercial</span>}{c}</span>}
        {view!=='commercial'&&<span style={{font:'400 16px/1.4 var(--font-sans)'}}>{view==='both'&&<span style={{...mono,fontSize:10.5,display:'block',marginBottom:6,color:'var(--vermilion-600)'}}>Social</span>}{s}</span>}
      </div>)}</div>
    </Band>
    <Band>
      <SectionHeader size="md" label="Where it applies" tagline="Illustrative" title="Same rails, wider reach."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20,marginTop:40}}>{USES.map(([n,tag,t,d])=><div key={n} style={{display:'flex',flexDirection:'column',gap:14}}>
        <div style={{aspectRatio:'4 / 3',overflow:'hidden',background:'var(--stone-section)'}}><img src={'/assets/impact/'+({Agriculture:'agriculture',Finance:'finance',Response:'disaster'})[tag]+'.jpg'} alt={t} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
        <div style={{display:'flex',gap:12,...mono,fontSize:11,color:'var(--text-secondary)'}}><span>{n}</span><span>{tag}</span></div>
        <div style={{font:'500 22px/1.15 var(--font-sans)',letterSpacing:'-0.02em'}}>{t}</div>
        <p style={{margin:0,font:'400 15px/1.5 var(--font-sans)',color:'var(--text-secondary)'}}>{d}</p></div>)}</div>
    </Band>
    <Band tone="dark">
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:56}}>
        <div><div style={{...mono,fontSize:12,color:'#9a9c95'}}>Principles</div><h2 style={{margin:'16px 0 0',font:'500 40px/1.05 var(--font-sans)',letterSpacing:'-0.035em'}}>Human agency, by default.</h2>
          <p style={{margin:'20px 0 0',font:'400 16px/1.6 var(--font-sans)',color:'#c9c9c1'}}>Agents should operate with clear identity, explicit authority, defined limits, and a verifiable record of what occurred — with a human able to step in at any point. Building those principles into the infrastructure layer, rather than leaving them to each integration, is what makes autonomous AI usable in places where the cost of getting it wrong is highest.</p></div>
        <div style={{borderLeft:'1px solid #3a3c38',paddingLeft:40,display:'flex',flexDirection:'column',gap:20,justifyContent:'center'}}>
          <h3 style={{margin:0,font:'500 24px/1.2 var(--font-sans)'}}>Design a pilot with Aidress</h3>
          <p style={{margin:0,font:'400 16px/1.6 var(--font-sans)',color:'#c9c9c1'}}>We work with development institutions, governments, impact investors, and technology partners to identify high-impact workflows where trusted agent coordination can improve access, accountability, and outcomes. Talk to us about a design partnership or pilot.</p>
          <div><Button onClick={()=>{location.href='mailto:teamaidress@gmail.com';}}>Talk to us</Button></div>
        </div>
      </div>
    </Band>
  </div>;
}
export { Impact };
