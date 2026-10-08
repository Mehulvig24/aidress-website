import type { IconName } from './Icon';
export interface ButtonProps {
  /** primary = ink fill (default CTA) · secondary = 1px ink outline · accent = vermilion, only for a resolving action (Connect, Verify) · ghost = text */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** sm 32 · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: IconName;
  /** usually 'arrow-right' — nudges 2px on hover */
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;