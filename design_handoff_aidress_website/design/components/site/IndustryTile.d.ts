export interface IndustryTileProps {
  /** photo node (e.g. an <image-slot>) — takes precedence over src */
  media?: React.ReactNode;
  src?: string;
  title: string;
  /** one specific coordination use case */
  description: React.ReactNode;
  /** mono chip over the photo, e.g. "LOG-01" */
  code?: string;
  /** selected/featured — vermilion title + underline */
  active?: boolean;
  /** photo height px, default 250 */
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IndustryTile(props: IndustryTileProps): JSX.Element;