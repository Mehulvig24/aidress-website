import type { IconName } from './Icon';
export interface BadgeProps {
  /** resolved = verified identity (vermilion) · neutral · pending · inverse */
  tone?: 'resolved' | 'neutral' | 'pending' | 'inverse';
  size?: 'md' | 'lg';
  /** override icon; null hides it */
  icon?: IconName | null;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;