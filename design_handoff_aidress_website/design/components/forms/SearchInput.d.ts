export interface SearchInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** sm 36 (nav) · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  /** e.g. "/" or "⌘K" */
  shortcut?: string;
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function SearchInput(props: SearchInputProps): JSX.Element;