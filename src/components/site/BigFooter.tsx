// @ts-nocheck — line-for-line port of the untyped design mock; see design_handoff_aidress_website.
/* eslint-disable react-refresh/only-export-components, react-hooks/exhaustive-deps, react-hooks/rules-of-hooks */
// The orange site footer, ported from design_handoff_aidress_website/design/ui_kits/website/Docs.jsx (BigFooter).
import { hrefFor, spaClick } from '../../lib/routes';
const mono={font:'400 12px/1 var(--font-mono)',textTransform:'uppercase',letterSpacing:'0.02em'};
const V='#E84A27',INK='#212320';
function BigFooter({go}){
  const cols=[['Platform',[['Five layers','home'],['Atlas','atlas'],['Agent passport','passport']]],['Industries',[['Payments','industry:payments'],['Logistics + Shipping','industry:logistics'],['Commerce','industry:commerce']]],['Developers',[['Docs','docs'],['API reference','docs:register'],['MCP server','docs:mcp-server'],['Changelog','docs:changelog'],['For agents','developers']]],['Company',[['Research','research'],['Aidress for Good','impact'],['Crew','crew'],['Contact','home']]]];
  return <footer style={{background:V,color:INK}}>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.3fr)',gap:48,padding:'56px var(--gutter) 40px'}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:40}}>
        <div style={{display:'flex',alignItems:'center',gap:18}}><img src={'/assets/logo-mark-ink.png'} alt="" style={{width:56,height:'auto'}}/><span style={{font:'700 56px/0.9 var(--font-sans)',letterSpacing:'-0.045em'}}>AIDRESS</span></div>
        <p style={{margin:0,font:'400 18px/1.4 var(--font-sans)',maxWidth:360}}>The coordination protocol for autonomous AI agents.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:24}}>
        {cols.map(([t,ls])=><div key={t} style={{display:'flex',flexDirection:'column',gap:12}}><span style={{...mono,fontSize:11,marginBottom:6,opacity:.75}}>{t}</span>{ls.map(([l,to])=><a key={l} href={hrefFor(to)} onClick={spaClick(()=>go(to))} style={{font:'400 15px/1.2 var(--font-sans)',color:INK,cursor:'pointer'}}>{l}</a>)}</div>)}
      </div>
    </div>
    <div style={{display:'flex',gap:28,flexWrap:'wrap',padding:'18px var(--gutter)',borderTop:'1px solid rgba(33,35,32,.35)'}}>{[['X','https://x.com/aidabornnative'],['LinkedIn','https://www.linkedin.com/company/aidress'],['Instagram','https://www.instagram.com/aidress.ai'],['GitHub','https://github.com/Aidress-ai/Aidress'],['Discord','https://discord.gg/DG2VjeB7T'],['Email','mailto:teamaidress@gmail.com']].map(([l,u])=><a key={l} href={u} target="_blank" rel="noopener" style={{...mono,fontSize:12,color:INK,display:'inline-flex',gap:6,borderBottom:'1px solid currentColor',paddingBottom:3}}>{l} ↗</a>)}</div>
    <div style={{display:'flex',justifyContent:'space-between',padding:'16px var(--gutter)',borderTop:'1px solid rgba(33,35,32,.35)',...mono,fontSize:11}}><span>© 2026 Aidress</span><span>Orange = resolved</span></div>
  </footer>;
}
export { BigFooter };
