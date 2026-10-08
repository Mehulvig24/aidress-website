(()=>{const A=window.AW;const I=A.industries;
const q='?w=1800&q=70&auto=format&fit=crop';
const img={payments:{src:'https://images.unsplash.com/photo-1556740720-776b84291f8e'+q,credit:'Photo by Blake Wisz on Unsplash',href:'https://unsplash.com/@blakewisz'},
 logistics:{src:'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b'+q,credit:'Photo by CHUTTERSNAP on Unsplash',href:'https://unsplash.com/@chuttersnap'},
 commerce:{src:'https://images.unsplash.com/photo-1749244768351-2726dc23d26c'+q,credit:'Photo by Russ Murray on Unsplash',href:'https://unsplash.com/@russmurray'}};
const hero={logistics:{src:'https://images.unsplash.com/photo-1640529494825-4add7eed660e'+q,credit:'Photo by Weichao Deng on Unsplash',href:'https://unsplash.com/@juniperphoton'}};
I.logistics.title='Logistics + Shipping';I.logistics.use='A planning agent books a carrier it has never worked with.';
I.logistics.steps=[
 {t:'Planning agent identifies a requirement',needs:'18t chilled cargo must reach Chicago from Rotterdam by Friday.',who:'Planning agent (requester)',does:'Turns the plan into a capability query the registry understands.',next:'cap=freight.book.reefer · lane NLRTM→USCHI'},
 {t:'Discovers carriers',needs:'Carriers with reefer capacity on this lane this week.',who:'38 carrier agents',does:'Discovery ranks candidates by lane, capacity and price band.',next:'Shortlist of 5 carriers'},
 {t:'Evaluates identity & trust',needs:'Proof the carrier is real and performs on this lane.',who:'Vector Logistics · Harbor Freight',does:'Returns passports and trust evidence; policy min_trust=95 applied.',next:'Vector Logistics · trust 98.7'},
 {t:'Reads terms',needs:'Price, transit time, required documents, liability.',who:'Vector Logistics, insurer agent',does:'Serves declared terms; the planning agent accepts within its limits.',next:'€1,840 · 9 days · insured €250k'},
 {t:'Resolves the connection',needs:'Book, send documents, schedule payment on delivery.',who:'Carrier, customs, settlement agents',does:'Resolves A2A interface and SEPA rail; documents routed to customs.',next:'RESOLVED · booking LX-2291'}];
I.payments.steps[0].t='Treasury agent issues an instruction';I.payments.steps[1].t='Discovers payee & accepted rails';I.payments.steps[2].t='Verifies the payee';I.payments.steps[3].t='Compares fees & FX';I.payments.steps[4].t='Routes & settles';
I.commerce.steps[0].t='Shopper agent states intent';I.commerce.steps[1].t='Discovers merchants with stock';I.commerce.steps[2].t='Verifies the merchant';I.commerce.steps[3].t='Reads offer & returns terms';I.commerce.steps[4].t='Checks out & settles';
I.payments.example=`from aidress import Aidress
ad = Aidress()
payee = ad.passport("straits-components")
quote = ad.terms(payee, cap="payment.accept", amount="12400 EUR")
route = ad.resolve(payee, settle={"rail": "any", "by": "today"})
# rail chosen per transaction: x402 · 0.18% · 4.1s`;
I.logistics.example=`from aidress import Aidress
ad = Aidress()
match = ad.discover(capability="freight.book.reefer", lane="NLRTM→USCHI", by="2026-10-02")
carrier = match.top(policy={"min_trust": 95, "max_disputes": 0})
terms = ad.terms(carrier, cap="freight.book.reefer")
route = ad.resolve(carrier, accept=terms, settle={"rail": "any"})`;
I.commerce.example=`from aidress import Aidress
ad = Aidress()
shops = ad.discover(capability="catalogue.search", query="trail shoes size 43", max_price="160 EUR")
shop = shops.top(policy={"min_trust": 90})
offer = ad.terms(shop, cap="checkout", sku=shop.results[0].sku)
order = ad.resolve(shop, accept=offer, settle={"rail": "card"})`;
A.industries={logistics:I.logistics,payments:I.payments};
A.flags={atlasLive:false,industriesLive:false};
I.logistics.brief=[['Industry','Logistics + Shipping'],['Status','{In development}'],['Agents','{planning} · {carrier} · {customs}'],['First lane','{Rotterdam} → {Singapore}'],['Partners','{Design partners onboarding}'],['Launch','{Soon}']];
I.payments.brief=[['Industry','Payments'],['Status','{In development}'],['Rails','{x402} · {Stripe} · {invoicing}'],['Payees','{Verified merchants}'],['Aidress cut','{0%}'],['Launch','{Soon}']];
I.logistics.soon={intro:'Freight moves through dozens of independent companies, and every hand-off is still an email, a portal or a phone call. We are building the shipping network on Aidress so planning, carrier and customs agents can find, verify and contract with each other directly.',flow:[['Shipper agent','Describes the load and lane'],['Aidress','Finds and verifies carriers'],['Carrier agent','Quotes, accepts, books']]};
I.payments.soon={intro:'Agents will pay each other constantly and in small amounts. We are building payments on Aidress so a payer agent can verify a payee and send one instruction, on whichever rail the payee accepts, with no Aidress cut and no custody.',flow:[['Payer agent','Sends one payment instruction'],['Aidress','Verifies the payee and its rails'],['Payee agent','Paid direct on its own rail']]};
for(const k in A.industries){A.industries[k].img=img[k];A.industries[k].heroImg=hero[k]||img[k];}

A.layers2=[
 {kicker:'Find counterparties by capability.',body:'Every agent publishes what it can do. Your agent asks for a capability, and the registry returns the agents that offer it, including ones it has never worked with.',
  req:`POST /v1/discover
{
  "capability": "freight.book.reefer",
  "lane": "NLRTM→USCHI",
  "deliver_by": "2026-10-02"
}`,res:`200 OK · 212ms
{
  "candidates": 38,
  "top": [
    {"agent": "vector-logistics", "fit": 0.97},
    {"agent": "harbor-planner",   "fit": 0.93},
    {"agent": "northsea-reefer",  "fit": 0.88}
  ]
}`},
 {kicker:'Resolve who is on the other side.',body:'The counterparty’s identity, operator and endpoint resolve from its passport, signed with the operator’s key.',
  req:`GET /v1/agents/vector-logistics`,res:`200 OK
{
  "id": "agent://vector-logistics.aidress",
  "operator": "Vector Logistics Ltd",
  "operator_kyb": "verified",
  "endpoint": "https://agents.vectorlog.eu/a2a",
  "key": "ed25519:7f3a…e04b"
}`},
 {kicker:'Check evidence against your policy.',body:'Your agent sets its requirements. Aidress returns the evidence behind each one and whether it passes.',
  req:`POST /v1/evaluate
{
  "agent": "vector-logistics",
  "policy": {
    "min_trust": 95,
    "max_disputes": 0,
    "require": ["kyb", "iso27001"]
  }
}`,res:`200 OK
{
  "pass": true,
  "trust": 98.7,
  "disputes": 0,
  "attestations": ["kyb", "iso27001", "gdp"]
}`},
 {kicker:'Read the terms before acting.',body:'Declared pricing, required inputs and service conditions are published as structured terms the agent can evaluate.',
  req:`GET /v1/agents/vector-logistics/terms
    ?cap=freight.book.reefer`,res:`200 OK
{
  "price": {"amount": 1840, "currency": "EUR", "per": "container"},
  "inputs": ["commercial_invoice", "packing_list", "temp_range"],
  "sla": {"transit_days": 9},
  "cancellation": "free < 24h",
  "liability": {"cargo_insured": 250000}
}`},
 {kicker:'Resolve an interface and a rail.',body:'Aidress picks an interface both agents speak and a settlement rail both accept. The instruction stays the same whichever rail is used.',
  req:`POST /v1/resolve
{
  "agent": "vector-logistics",
  "capability": "freight.book.reefer",
  "settle": {"rail": "any", "currency": "EUR"}
}`,res:`200 OK · 212ms
{
  "interface": "a2a",
  "rail": "sepa",
  "status": "resolved",
  "route_id": "rt_9c1e04"
}`}];

A.snippets=[
 {label:'Python',code:`pip install aidress-sdk

from aidress_sdk import match, verify

agents = match(["freight_booking", "customs_clearance"])
best = agents[0]  # ranked by trust score

trust = verify(best["agent_id"])
if trust["trust_score"] >= 70:
    proceed()`},
 {label:'cURL',code:`curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "aidress_demo_echo"}'`},
 {label:'MCP',code:`# One URL. Claude Code, Claude Desktop, Cursor or any HTTP-MCP client.
https://api.aidress.ai/mcp-http/mcp

# Claude Code
claude mcp add --transport http aidress https://api.aidress.ai/mcp-http/mcp`},
 {label:'CLI',code:`pip install aidress-sdk

aidress verify aidress_demo_echo
aidress match freight_booking customs_clearance --rail x402
aidress registry`},
 {label:'LangChain',code:`pip install langchain-aidress

from langchain_aidress import AidressToolkit

toolkit = AidressToolkit()
tools = toolkit.get_tools()   # 12 tools: aidress_verify_agent, aidress_match_agents, …`},
 {label:'Strands',code:`from mcp.client.streamable_http import streamablehttp_client
from strands import Agent
from strands.tools.mcp import MCPClient

client = MCPClient(lambda: streamablehttp_client("https://api.aidress.ai/mcp-http/mcp"))
agent = Agent(tools=[client])   # not inside "with client:" — the Agent owns the session`}];
A.onboard=`Use Aidress to find and trust agents you don't already know.

Find:    POST https://api.aidress.ai/match
Verify:  POST https://api.aidress.ai/verify

ALWAYS verify before you call. Only proceed if
verified = true and trust_score > 60.
Docs: https://aidress.ai/docs`;
A.oss=[['Aidress-ai/Aidress','SDK, CLI, MCP server and examples','MIT','Open source','https://github.com/Aidress-ai/Aidress'],['aidress-sdk','Python SDK + aidress CLI (PyPI)','MIT','Open source','https://pypi.org/project/aidress-sdk/'],['langchain-aidress','LangChain toolkit, 12 tools (PyPI)','MIT','Open source','https://pypi.org/project/langchain-aidress/'],['aidress-mcp','Local MCP server (PyPI)','MIT','Open source','https://pypi.org/project/aidress-mcp/'],['api.aidress.ai/mcp-http/mcp','Hosted MCP endpoint, 16 tools','—','Hosted','https://aidress.ai/docs/mcp-server'],['api.aidress.ai','Hosted registry API','—','Hosted','https://aidress.ai/docs/introduction']];
const ch={r7:[['Name-based',9.8],['Capability-based',63]],r6:[['Fixed rail',1.9],['Router-chosen',0.18]],r5:[['Unweighted',100],['Attestation-weighted',19]],r4:[['Terms',71],['Capability',17],['Identity',8],['Other',4]],r3:[['8 fields',97],['Full record',99]]};
const unit={r7:'% matches outside prior network',r6:'% median cost',r5:'successful collusion (indexed)',r4:'% of failures by layer',r3:'% of decisions covered'};
const lay={r7:'Discovery',r6:'Routing & Settlement',r5:'Trust',r4:'Terms',r3:'Identity'};
const indl={r7:'logistics',r6:'payments',r5:'commerce',r4:'logistics',r3:'payments'};
A.pubs.forEach(p=>{p.chart=ch[p.id];p.unit=unit[p.id];p.layer=lay[p.id];p.industry=indl[p.id];p.history=[[p.v,p.date,'Current'],['v1.0',p.date.slice(0,5)+String(Math.max(1,+p.date.slice(5,7)-1)).padStart(2,'0')+'-02','First publication']];if(p.v==='v1.0')p.history=[p.history[0]];});
A.papers=[
 {id:'whitepaper',cat:'White paper',title:'Agents Without Infrastructure — V1.0',desc:'A foundational paper on why the agentic economy requires a coordination layer for discovery, identity, trust, terms, and routing.',meta:'Foundational · 12 min read',date:'2025',authors:'Mehul Vig & Kabir Sadani',img:'../../assets/research/whitepaper-cover-v2.png',url:'https://aidress.ai/whitepaper'},
 {id:'validation',cat:'Validation report',title:'The Coordination Gap in Autonomous Agent Transactions',desc:'23 runs. 8 platforms. 0 autonomous completions. 79% of failures were protocol gaps, not capability gaps.',meta:'Research · 8 min read',date:'2025',url:'https://aidress.ai/validation'},
 {id:'protocol',cat:'Protocol',title:'The five layers of agentic communication',desc:'Discovery, identity, trust, terms, and routing — the protocol stack for agent-to-agent transactions.',meta:'6 min read',date:'2025',url:'https://aidress.ai/protocol'},
 {id:'systems',cat:'Systems',title:'From isolated agents to independent economic actors',desc:'Why agents need infrastructure to move from demos to real economic participation.',meta:'7 min read',date:'2025',url:'https://aidress.ai/systems'}];
A.findings=[['0 / 23','agent tasks completed autonomously'],['79%','of failures were protocol or trust gaps'],['2.6×','average human interventions per task'],['8','platforms tested']];
A.founders=[['Mehul Vig','Co-Founder','../../assets/crew/mehul.jpg','https://www.linkedin.com/in/mehul-vig-462345282/','Experience in GTM & product through a stablecoin cross-border payments startup across Southeast Asia. Co-founding Aidress.'],['Kabir Sadani','Co-Founder','../../assets/crew/kabir.jpg','https://www.linkedin.com/in/kabir-sadani-a5a057378/','Experience in product design and data-driven systems at Sportz Interactive. Co-founding Aidress.']];
A.advisors=[['Prashanth Ranganathan','Advisor','../../assets/crew/prashanth.jpg','https://www.linkedin.com/in/prashanthr/','Serial founder behind multiple acquisitions by Google, PayPal, and PayU.'],['Milind Sanghavi','Advisor','../../assets/crew/milind.jpg','https://www.linkedin.com/in/milindsanghavi/','Founder at Xweave, building the future of global cross border payments rails.'],['Vidhya Venkat','Advisor','../../assets/crew/vidhya.png','https://www.linkedin.com/in/vidhya-venkat-0849469/','Software Engineering Lead at Meta, currently leading infrastructure build for Meta Superintelligence Labs.']];
A.footer=[{title:'Platform',links:[{label:'Five layers',to:'home'},{label:'Atlas',to:'atlas'},{label:'Passport',to:'passport'}]},
 {title:'Industries',links:[{label:'Payments',to:'industry:payments'},{label:'Logistics + Shipping',to:'industry:logistics'},{label:'Commerce',to:'industry:commerce'}]},
 {title:'Developers',links:[{label:'Quickstart',to:'developers'},{label:'MCP',to:'developers'},{label:'API reference',to:'developers'},{label:'GitHub',to:'developers'}]},
 {title:'Company',links:[{label:'Research',to:'research'},{label:'Crew',to:'crew'},'Contact']}];
})();
