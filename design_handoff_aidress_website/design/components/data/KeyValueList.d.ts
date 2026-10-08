export interface KeyValueRow { label: React.ReactNode; value: React.ReactNode; /** mono value for IDs, protocols, hashes */ mono?: boolean; accent?: boolean; }
export interface KeyValueListProps {
  rows: KeyValueRow[];
  /** md 40px rows (panels) · lg 56px rows (passport, metrics) */
  size?: 'md' | 'lg';
  /** label column width */
  split?: string;
  /** value alignment — right for compact side panels */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}
export declare function KeyValueList(props: KeyValueListProps): JSX.Element;