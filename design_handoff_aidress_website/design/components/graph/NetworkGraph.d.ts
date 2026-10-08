export interface GraphNode { id: string; x: number; y: number; r: number; kind: 'hub' | 'cluster' | 'agent' | 'dot'; label?: string; industry?: string; }
export interface NetworkGraphProps {
  /** defaults to a representative registry graph (hub A + six industry clusters) */
  nodes?: GraphNode[];
  edges?: [string, string][];
  /** resolved node — filled vermilion, its edges animate as the active route */
  selectedId?: string;
  /** dims nodes outside this industry id ('all' = none) */
  focusIndustry?: string;
  onSelect?: (node: GraphNode) => void;
  /** fires with node + viewBox position (null on leave) — anchor an AgentPopover */
  onHover?: (node: GraphNode | null, pos?: { x: number; y: number }) => void;
  showLabels?: boolean;
  /** subtle idle float */
  drift?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
export declare function NetworkGraph(props: NetworkGraphProps): JSX.Element;
export declare const DEFAULT_GRAPH: { nodes: GraphNode[]; edges: [string, string][] };