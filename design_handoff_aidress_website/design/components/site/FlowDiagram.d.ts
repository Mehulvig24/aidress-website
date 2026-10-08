export interface FlowNode { title: string; sub?: string; }
export interface FlowDiagramProps {
  from: FlowNode;
  to: FlowNode;
  /** mono caps label on the connecting line, e.g. "MATCH", "VERIFIED", "SETTLED" */
  label?: string;
  /** optional chips under the line — rails, protocols, checks */
  via?: string[];
  /** which via chip is lit */
  activeVia?: string;
  /** vermilion line + target border when true */
  resolved?: boolean;
  style?: React.CSSProperties;
}
export declare function FlowDiagram(props: FlowDiagramProps): JSX.Element;