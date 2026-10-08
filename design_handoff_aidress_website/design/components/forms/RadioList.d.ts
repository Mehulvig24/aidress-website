export interface RadioListItem { value: string; label: string; /** right-aligned mono count */ count?: string | number; }
export interface RadioListProps {
  items: RadioListItem[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function RadioList(props: RadioListProps): JSX.Element;