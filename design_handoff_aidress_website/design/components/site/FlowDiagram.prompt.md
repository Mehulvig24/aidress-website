Two square boxes joined by a hairline that draws in and turns vermilion when resolved — the shared diagram for the five layers.
```jsx
<FlowDiagram from={{title:'Your agent',sub:'Requesting a capability'}} to={{title:'Capability found',sub:'Relevant counterparty'}} label="Match" />
<FlowDiagram from={{title:'Payer agent'}} to={{title:'Settled'}} label="Settle" via={['Card','ACH','SEPA','RTP','x402']} activeVia="SEPA" />
```