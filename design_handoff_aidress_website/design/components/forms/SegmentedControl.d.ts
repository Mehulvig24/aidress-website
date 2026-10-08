import type { IconName } from '../core/Icon';
export interface SegmentedOption { value: string; label: string; icon?: IconName; }
export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;