import type { IconName } from './Icon';
export interface IconButtonProps {
  icon: IconName;
  /** accessible label + tooltip */
  label: string;
  variant?: 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** ink fill for toggled state */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;