Interactive registry graph used in the hero and the Atlas; gray by default, orange only on the node that resolved.
```jsx
<NetworkGraph selectedId={sel} onSelect={n=>setSel(n.id)} onHover={(n,p)=>setPop(n&&{n,p})} focusIndustry="logistics" />
```
Hover dims non-neighbours; selection draws a dashed, moving vermilion route.