export interface ModeToggleProps {
  value?: 'human' | 'machine';
  onChange?: (value: 'human' | 'machine') => void;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function ModeToggle(props: ModeToggleProps): JSX.Element;