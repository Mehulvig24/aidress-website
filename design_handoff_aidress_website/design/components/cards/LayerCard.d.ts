export interface LayerCardProps {
  title: string;
  description: React.ReactNode;
  media?: string;
  /** mono caption in the empty media slot, e.g. "L1" */
  index?: string;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function LayerCard(props: LayerCardProps): JSX.Element;