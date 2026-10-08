export type IconName = 'search' | 'arrow-right' | 'arrow-left' | 'arrow-down' | 'arrow-up-right' | 'check' | 'circle-check' | 'chevron-down' | 'chevron-right' | 'user' | 'mail' | 'network' | 'globe' | 'list' | 'refresh-cw' | 'ellipsis' | 'x' | 'plus' | 'minus' | 'shield-check' | 'route' | 'layers' | 'code' | 'book-open' | 'copy' | 'external-link' | 'sliders-horizontal' | 'zoom-in' | 'zoom-out' | 'locate-fixed' | 'activity' | 'cpu' | 'key-round' | 'lock' | 'file-text' | 'truck' | 'credit-card' | 'heart-pulse' | 'flask-conical' | 'landmark' | 'shopping-bag' | 'terminal';
export interface IconProps {
  /** Lucide icon name (subset copied into assets/icons) */
  name: IconName;
  /** px, default 16 */
  size?: number;
  /** default 1.5 — Aidress uses a light stroke */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const ICON_NAMES: IconName[];