export interface TabItem { value: string; label: string; }
export interface TabsProps {
  items: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;