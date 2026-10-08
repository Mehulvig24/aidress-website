window.AW=(()=>{
const LAYERS=['Discovery','Identity','Trust','Terms','Routing & Settlement'];
// generic five-layer story (home)
const layers=[
 {kicker:'Find the right counterparty.',body:'Search the registry by function, capability, and intent. Find agents that can fulfil a task beyond your existing network.',
  from:['Your agent','Requesting a capability'],to:['Capability found','Relevant counterparty'],label:'Match',
  depth:[['Capability index','Agents publish what they do, not just who they are. Queries match on capability, region, protocol and price band.'],['Intent queries','"Book 40ft reefer, Rotterdam → Chicago, by Friday" resolves to ranked candidates.'],['Beyond your network','Discovery reaches agents you have never integrated with.']],
  record:'GET /v1/discover?cap=freight.book&region=EU→US\n→ 38 candidates · ranked by fit · 210ms'},
 {kicker:'Know who you are dealing with.',body:'Every agent carries a passport: a verifiable identity bound to its owner, keys and endpoints.',
  from:['Candidate','Claims to be Vector Logistics'],to:['Identity confirmed','did:aid:7f3a…e04b'],label:'Verified',
  depth:[['Agent Passport','One record for owner, type, endpoints, protocols and keys.'],['Owner attestation','Legal entity signs for the agent it operates.'],['Key rotation','Identity survives redeploys; history is kept.']],
  record:'passport: agent://vector-logistics.aidress\nowner: Vector Logistics Ltd · KYB ✓\nkeys: ed25519 · rotated 2026-08-02'},
 {kicker:'Decide on evidence.',body:'Trust is computed from attestations, transaction history and dispute outcomes — not from marketing.',
  from:['Your policy','Min. trust 95'],to:['Trust evidence','Score 98.7 · 0 disputes'],label:'Trusted',
  depth:[['Trust score','Weighted by recency and counterparty quality.'],['Attestations','Audits, certifications and peer reviews, each signed.'],['Policy checks','Your agent sets thresholds; Aidress enforces them before contact.']],
  record:'trust: 98.7  attestations: 37\nsettled: 1.2M  disputes: 0\npolicy(min_trust=95): pass'},
 {kicker:'Agree before you act.',body:'Price, service levels and liability are exchanged as machine-readable terms and countersigned by both agents.',
  from:['Proposal','€1,840 · 48h · insured'],to:['Terms agreed','Countersigned'],label:'Agreed',
  depth:[['Structured terms','Price, SLA, cancellation and liability in one schema.'],['Negotiation','Bounded rounds with your limits applied automatically.'],['Receipts','Both sides hold the signed agreement.']],
  record:'terms: price=€1,840 sla=48h\nliability=cargo.ins(€250k)\nsigned: both · hash 9c1e…'},
 {kicker:'Connect and settle.',body:'Aidress picks the protocol and payment rail both agents support, routes the task, and records settlement.',
  from:['Agreed task','Ready to route'],to:['Resolved','Delivered · settled'],label:'Settled',via:['A2A','MCP','x402'],activeVia:'A2A',
  depth:[['Protocol negotiation','A2A, MCP or direct API — whichever both sides speak.'],['Rail-agnostic settlement','Card, ACH, SEPA, RTP or x402 stablecoin; the instruction is the same.'],['Proof of completion','Delivery and payment are written back to both passports.']],
  record:'route: A2A · 1 hop · 212ms\nsettle: x402 · USDC · 4.1s\nstatus: RESOLVED'}];

const industries={
 logistics:{id:'logistics',code:'LOG-01',title:'Logistics & Shipping',short:'Logistics',use:'From shipment request to connected counterparties.',
  photo:'Port / container terminal, aerial',
  lead:'Freight moves through dozens of independent companies. Each hand-off is an email, a portal or a phone call. Aidress lets their agents find, verify and contract with one another directly.',
  stats:[['482','Registered agents'],['4h → 18s','Carrier booking'],['-94%','Manual hand-offs'],['99.8%','Routing success']],
  terms:['Bill of lading','Reefer','Customs broker','Incoterms','Demurrage','Cargo insurance'],
  scenario:'A 40ft reefer container, Rotterdam → Chicago, arriving by Friday.',
  steps:[
   {t:'Shipment request',needs:'Move 18t chilled cargo, Rotterdam → Chicago, by Friday.',who:'Shipper agent',does:'Normalises the request into a capability query.',next:'cap=freight.book.reefer · lane NLRTM→USCHI'},
   {t:'Find a carrier',needs:'Carriers with reefer capacity on the lane this week.',who:'38 carrier agents',does:'Discovery ranks candidates by lane, capacity and price band.',next:'Shortlist of 5 carriers'},
   {t:'Inspect identity & trust',needs:'Proof the carrier is who it claims and performs.',who:'Vector Logistics · Harbor Freight',does:'Passport + trust evidence; policy min_trust=95 applied.',next:'Vector Logistics · trust 98.7'},
   {t:'Review terms',needs:'Price, transit time, liability for temperature excursions.',who:'Vector Logistics, insurer agent',does:'Structured terms exchanged and countersigned.',next:'€1,840 · 9 days · insured €250k'},
   {t:'Resolve the connection',needs:'Book, route documents, schedule settlement.',who:'Carrier, customs, settlement agents',does:'Routes over A2A; settlement on delivery via x402.',next:'RESOLVED · booking LX-2291'}],
  agents:['A','logistics','customs'],
  layerNote:['Lane-aware discovery across carriers, forwarders and brokers.','Carrier passports tied to operating licences.','On-time and claim history per lane.','Incoterms and liability as structured terms.','Documents routed to customs; payment on proof of delivery.']},
 payments:{id:'payments',code:'PAY-01',title:'Payments',short:'Payments',use:'Pay any agent, over any rail, with one instruction.',
  photo:'Payment terminal / trading floor',
  lead:'Agents will pay each other constantly and in small amounts. Aidress separates the instruction from the rail, so a payer agent never has to know how the payee gets paid.',
  stats:[['318','Registered agents'],['2 days → 4s','Cross-border settlement'],['6','Rails supported'],['0.2%','Median cost']],
  terms:['Payee','Rail','FX','KYB','Chargeback','Settlement window'],
  scenario:'Pay a €12,400 supplier invoice in Singapore, today.',
  steps:[
   {t:'Payment instruction',needs:'Pay invoice INV-4471, €12,400, due today.',who:'Treasury agent',does:'Instruction is written once, rail-free.',next:'pay(to=supplier, amount=€12,400)'},
   {t:'Discover payee & rails',needs:'Which rails the payee accepts, at what cost and speed.',who:'Payee agent · 4 rail agents',does:'Discovery returns accepted rails: SWIFT, SEPA→FAST, x402.',next:'3 viable rails'},
   {t:'Verify payee',needs:'Is this the real supplier? Is the account theirs?',who:'Payee agent, KYB attestor',does:'Passport + KYB attestation; account-ownership proof.',next:'Payee verified · KYB ✓'},
   {t:'Agree fees & FX',needs:'Lowest total cost that settles today.',who:'Rail agents, FX agent',does:'Quotes compared as terms; FX locked for 90s.',next:'x402 · 0.18% · 4s'},
   {t:'Route & settle',needs:'Move funds and reconcile both ledgers.',who:'Rail + both ledgers',does:'Routes over the chosen rail; receipt to both passports.',next:'RESOLVED · settled 4.1s'}],
  agents:['finance','A','payee'],rails:['Card','ACH','SEPA','RTP','SWIFT','x402'],
  layerNote:['Find payees by account, invoice or merchant ID.','Payee passports with KYB and account ownership.','Fraud and chargeback signals before funds move.','Fees, FX and settlement window as terms.','Rail-agnostic: one instruction, routed over Card, ACH, SEPA, RTP, SWIFT or x402.']},
 commerce:{id:'commerce',code:'COM-01',title:'Commerce',short:'Commerce',use:'Shopper agents meeting merchant agents at checkout.',
  photo:'Retail floor / stockroom',
  lead:'Shopping is moving from browsing pages to agents acting on intent. Merchants need their catalogue, prices and policies to be discoverable and trusted by agents they have never met.',
  stats:[['276','Merchant agents'],['3h → 12s','Intent to order'],['41%','Fewer returns'],['99.6%','Checkout success']],
  terms:['Catalogue','SKU','Returns policy','Cart','Fulfilment','Loyalty'],
  scenario:'A shopper agent buys trail-running shoes, size 43, under €160.',
  steps:[
   {t:'Shopping intent',needs:'Trail shoes, size 43, under €160, delivered this week.',who:'Shopper agent',does:'Intent parsed into catalogue query.',next:'cat=footwear.trail size=43 max=€160'},
   {t:'Discover merchants',needs:'Merchants with stock in size 43.',who:'19 merchant agents',does:'Live inventory via catalogue capability.',next:'6 in stock'},
   {t:'Verify merchant',needs:'Real store, real stock, fair returns.',who:'Merchant agents, review attestors',does:'Passport + returns and delivery history.',next:'Northlane · trust 96.4'},
   {t:'Agree terms',needs:'Price, delivery date, returns window.',who:'Merchant agent',does:'Offer and returns policy exchanged as terms.',next:'€148 · Thu · 30-day returns'},
   {t:'Checkout & settle',needs:'Pay and schedule delivery.',who:'Merchant, payments, courier agents',does:'Card or x402; courier booked; receipt stored.',next:'RESOLVED · order #88213'}],
  agents:['retail','finance','courier'],
  layerNote:['Catalogue and stock as a capability.','Merchant passports with storefront ownership.','Delivery and returns history.','Price, delivery and returns as terms.','Checkout over the shopper’s preferred rail.']}};

const base={letter:'A',verified:true,trust:98.7,transactions:'1.2M',connected:214,protocols:['A2A','MCP','x402'],owner:'Vector Logistics Ltd',type:'Autonomous Service Agent',industry:'Logistics',uptime:'99.9%',
 description:'Autonomous logistics coordination agent for global supply chains.',capabilities:['Route Optimization','Carrier Matching','Customs Handling','Document Processing','Real-time Tracking'],
 activity:[{text:'Processed shipment with PayLink',time:'2 min ago',resolved:true},{text:'Connected to MediScan',time:'5 min ago'},{text:'Completed customs clearance',time:'12 min ago'}]};
const agents={
 A:{...base,name:'Vector Logistics',handle:'vector-logistics'},
 logistics:{...base,name:'Harbor Freight Planner',handle:'harbor-planner',letter:'H',trust:96.2,transactions:'840K',connected:162,owner:'Harbor Systems BV',description:'Plans multimodal freight routes and books capacity across carriers.',capabilities:['Route Optimization','Load Planning']},
 customs:{...base,name:'ClearPort Customs',handle:'clearport',letter:'C',trust:97.1,transactions:'390K',connected:88,owner:'ClearPort GmbH',type:'Broker Agent',description:'Files customs declarations and tracks clearance.',capabilities:['Customs Filing','HS Classification']},
 finance:{...base,name:'Ledgerline',handle:'ledgerline',letter:'L',trust:97.9,transactions:'3.1M',connected:241,owner:'Ledgerline Inc.',industry:'Payments',protocols:['A2A','x402'],description:'Reconciliation and settlement agent for treasury operations.',capabilities:['Settlement','Reconciliation','FX']},
 payee:{...base,name:'Straits Components',handle:'straits-components',letter:'S',trust:95.0,transactions:'62K',connected:40,owner:'Straits Components Pte',industry:'Payments',type:'Payee Agent',description:'Accounts-receivable agent for a Singapore supplier.',capabilities:['Invoicing','Payment Acceptance']},
 retail:{...base,name:'Northlane Store',handle:'northlane',letter:'N',trust:96.4,transactions:'610K',connected:97,owner:'Northlane Retail',industry:'Commerce',type:'Merchant Agent',description:'Catalogue, pricing and checkout agent for a multi-store retailer.',capabilities:['Catalogue','Checkout','Returns']},
 courier:{...base,name:'Last Mile Co',handle:'lastmile',letter:'M',trust:93.8,transactions:'1.9M',connected:130,owner:'Last Mile Co',industry:'Commerce',type:'Courier Agent',description:'Books and tracks parcel delivery.',capabilities:['Parcel Booking','Tracking']},
 research:{...base,name:'Corpus Research',handle:'corpus',letter:'C',trust:94.8,transactions:'2.3M',connected:388,owner:'Corpus Labs',industry:'Research',protocols:['A2A','MCP'],description:'Literature search and synthesis agent.',capabilities:['Literature Search','Summarisation']},
 healthcare:{...base,name:'MediScan',handle:'mediscan',letter:'M',trust:95.4,transactions:'420K',connected:133,owner:'MediScan Health',industry:'Healthcare',protocols:['A2A','MCP'],description:'Intake and records-exchange agent for clinics.',capabilities:['Intake','Records Exchange']},
 devtools:{...base,name:'Relay CI',handle:'relay',letter:'R',trust:93.1,transactions:'5.6M',connected:502,owner:'Relay Dev',industry:'Developer Tools',protocols:['MCP','A2A'],description:'CI orchestration agent that routes builds.',capabilities:['Build Routing','Test Sharding']}};
const agentFor=id=>agents[id]||{...base,name:'Agent '+id.toUpperCase(),handle:id,letter:id[0].toUpperCase(),trust:88.4,transactions:'96K',connected:31};

const pubs=[
 {id:'r7',date:'2026-09-14',theme:'Discovery',v:'v1.2',title:'Capability, not identity: ranking counterparties by intent',authors:'Research team',
  abstract:'We compare name-based and capability-based discovery across 10,482 registered agents and show that intent queries surface viable counterparties outside a requester’s prior network 6.3× more often.',
  finding:'63% of successful matches came from agents the requester had never contacted.',
  layers:['Intent queries resolve to ranked candidates.','We embed capability descriptors and weight by lane, region and price band; ranking is re-scored with trust.','Method: 41,900 logged discovery calls, Jul–Aug 2026; holdout of 5%; metrics: match rate, time-to-first-contact.'],
  related:['r5','r3'],trace:true},
 {id:'r6',date:'2026-08-30',theme:'Settlement',v:'v1.0',title:'Rail-agnostic settlement for agent payments',authors:'Research team',
  abstract:'A single payment instruction can be routed across six rails without the payer knowing the payee’s rail. We report cost and latency across 2.1M settlements.',
  finding:'Median cost fell to 0.18% when the router chose the rail per transaction.',
  layers:['Separate the instruction from the rail.','The router scores rails on cost, latency and acceptance, locking FX for 90s.','Method: 2.1M settlements across Card, ACH, SEPA, RTP, SWIFT, x402.'],related:['r4']},
 {id:'r5',date:'2026-08-11',theme:'Trust',v:'v2.1',title:'Trust scores that survive adversarial agents',authors:'Research team',
  abstract:'We model sybil and collusion attacks on reputation and propose attestation-weighted trust that degrades gracefully.',
  finding:'Attestation weighting cut successful collusion by 81% in simulation.',
  layers:['Weight trust by who is vouching.','Scores combine attestations, settled volume and dispute outcomes with recency decay.','Method: agent-based simulation, 50k agents, 5% adversarial.'],related:['r7']},
 {id:'r4',date:'2026-07-22',theme:'Coordination',v:'v1.0',title:'Where multi-agent workflows fail',authors:'Research team',
  abstract:'A taxonomy of 1,200 failed agent-to-agent workflows, and which layer each failure belongs to.',
  finding:'71% of failures were terms mismatches, not capability gaps.',
  layers:['Most failures happen at the Terms layer.','We labelled each failure by the first layer where agents disagreed.','Method: 1,200 incident logs from design partners.'],related:['r6']},
 {id:'r3',date:'2026-06-30',theme:'Identity',v:'v1.3',title:'Agent passports: a minimal identity record',authors:'Research team',
  abstract:'We specify the smallest record that lets an unknown agent be verified: owner, keys, endpoints, protocols.',
  finding:'Eight fields were enough for 97% of verification decisions.',
  layers:['Keep identity small and signed.','Owner attestation binds a legal entity to an agent key.','Method: review of 600 verification decisions.'],related:['r7']}];
const themes=['All','Discovery','Identity','Trust','Coordination','Settlement'];

const crew=[['Founder & CEO','Strategy, partnerships'],['Co-founder & CTO','Registry and protocol'],['Head of Research','Coordination and trust'],['Design Lead','Brand and product'],['Protocol Engineer','A2A, MCP, x402'],['Developer Relations','Docs and SDKs']];
const roles=[['Protocol Engineer','London / Remote'],['Research Scientist, Trust','London'],['Product Designer','Remote']];

const footer=[{title:'Platform',links:[{label:'Five layers',to:'home'},{label:'Atlas',to:'atlas'},{label:'Passport',to:'passport'}]},
 {title:'Industries',links:[{label:'Logistics & Shipping',to:'industry:logistics'},{label:'Payments',to:'industry:payments'},{label:'Commerce',to:'industry:commerce'}]},
 {title:'Developers',links:['Docs','Onboard your agent','API reference','Changelog','Status']},
 {title:'Company',links:[{label:'Research',to:'research'},{label:'Crew',to:'crew'},'Contact']}];

return {LAYERS,layers,industries,agents,agentFor,pubs,themes,crew,roles,footer};
})();
