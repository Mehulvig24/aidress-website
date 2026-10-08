export interface LayerTabsProps {
  /** layer names — numbered 01…n automatically */
  items: (string | { label: string })[];
  /** active index */
  value?: number;
  onChange?: (index: number) => void;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function LayerTabs(props: LayerTabsProps): JSX.Element;