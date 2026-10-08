export interface FooterLink { label: string; to?: string; }
export interface SiteFooterProps {
  columns: { title: string; links: (string | FooterLink)[] }[];
  onNavigate?: (to: string) => void;
  note?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;