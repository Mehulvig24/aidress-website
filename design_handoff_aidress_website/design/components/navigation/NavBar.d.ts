export interface NavBarProps {
  links?: string[];
  /** active route — underlined in vermilion (orange = active route) */
  active?: string;
  onNavigate?: (link: string) => void;
  onHome?: () => void;
  /** logo mark image URL shown left of the AIDRESS wordmark (use the paper mark on dark tone) */
  logo?: string;
  /** CTA label; null hides */
  cta?: string | null;
  onCta?: () => void;
  /** hover dropdowns: { [link]: [label, key][] } — picking calls onNavigate(key) */
  menus?: Record<string, [string, string][]>;
  search?: boolean;
  /** glass background + sticky */
  sticky?: boolean;
  /** sub-brand after the wordmark in vermilion mono, e.g. "Atlas", "Research" */
  sub?: string;
  /** node rendered before the search (e.g. <ModeToggle/>) */
  extra?: React.ReactNode;
  /** dark = ink header for sub-sites (Research) */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;