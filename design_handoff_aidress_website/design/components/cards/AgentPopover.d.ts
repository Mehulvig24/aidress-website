export interface AgentPopoverRow { label: string; value: React.ReactNode; mono?: boolean; }
export interface AgentPopoverProps {
  name: string;
  letter?: string;
  verified?: boolean;
  /** Trust Score, Transactions, Connected Agents, Protocols */
  rows?: AgentPopoverRow[];
  onView?: () => void;
  style?: React.CSSProperties;
}
export declare function AgentPopover(props: AgentPopoverProps): JSX.Element;