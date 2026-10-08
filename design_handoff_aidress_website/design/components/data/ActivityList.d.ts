export interface ActivityItem { text: React.ReactNode; time: string; /** vermilion dot — a transaction that resolved */ resolved?: boolean; }
export interface ActivityListProps {
  items: ActivityItem[];
  /** md = side-panel dots · lg = passport rows with hairlines */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function ActivityList(props: ActivityListProps): JSX.Element;