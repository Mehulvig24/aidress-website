import type { KeyValueRow } from '../data/KeyValueList';
import type { ActivityItem } from '../data/ActivityList';
export interface AgentPanelProps {
  name: string;
  letter?: string;
  verified?: boolean;
  description?: string;
  /** 0–100 */
  trust?: number;
  stats?: KeyValueRow[];
  capabilities?: string[];
  transactions?: ActivityItem[];
  onViewProfile?: () => void;
  onMore?: () => void;
  style?: React.CSSProperties;
}
export declare function AgentPanel(props: AgentPanelProps): JSX.Element;