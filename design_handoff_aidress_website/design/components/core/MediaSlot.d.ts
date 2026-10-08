export interface MediaSlotProps {
  /** image URL; omit to render a labelled placeholder */
  src?: string;
  alt?: string;
  /** mono caption shown in empty state, e.g. "Live simulation" */
  label?: string;
  /** CSS aspect-ratio, default 16/9 */
  ratio?: string;
  height?: number | string;
  /** fill with vermilion grain texture instead of stone */
  texture?: boolean;
  style?: React.CSSProperties;
}
export declare function MediaSlot(props: MediaSlotProps): JSX.Element;