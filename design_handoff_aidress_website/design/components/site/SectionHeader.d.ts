export interface SectionHeaderProps {
  /** "01" — rendered as "01 / LABEL" in mono caps */
  index?: string;
  label?: string;
  /** right-aligned mono caps line, e.g. "One registry. Five layers." */
  tagline?: string;
  title: React.ReactNode;
  /** grey paragraph, right column, bottom-aligned with the headline */
  lead?: React.ReactNode;
  tone?: 'light' | 'dark';
  /** lg 64px · md 48px · sm 36px headline */
  size?: 'lg' | 'md' | 'sm';
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;