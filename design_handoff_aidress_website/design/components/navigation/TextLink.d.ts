export interface TextLinkProps {
  children?: React.ReactNode;
  /** forward = trailing →, back = leading ← (breadcrumb "Back to…") */
  direction?: 'forward' | 'back';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;