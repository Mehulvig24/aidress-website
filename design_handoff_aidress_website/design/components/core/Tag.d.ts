export interface TagProps {
  children?: React.ReactNode;
  /** mono for protocol / ID tags (A2A, MCP, x402) */
  mono?: boolean;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;