export interface StatProps {
  /** e.g. "10K+", "4h → 18s", "99.8%" */
  value: React.ReactNode;
  label: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** vermilion value — use for the one metric that resolved (e.g. time saved) */
  accent?: boolean;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
export interface StatRowProps {
  stats: StatProps[];
  /** md = hero row (hug) · lg = page header (equal columns) */
  size?: 'sm' | 'md' | 'lg';
  dividers?: boolean;
  style?: React.CSSProperties;
}
export declare function StatRow(props: StatRowProps): JSX.Element;