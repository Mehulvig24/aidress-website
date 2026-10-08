export interface IndustryCardProps {
  title: string;
  /** e.g. "482 Agents" */
  agents: React.ReactNode;
  /** before → after, e.g. "4h → 18s" — turns vermilion on hover */
  metric: React.ReactNode;
  /** image URL; empty renders a stone placeholder */
  media?: string;
  /** sm = six-up home row · lg = 3-col industry grid */
  size?: 'sm' | 'lg';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IndustryCard(props: IndustryCardProps): JSX.Element;