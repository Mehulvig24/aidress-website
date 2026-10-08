import type { IconName } from '../core/Icon';
export interface WorkflowStepDef { label: string; icon?: IconName; /** mono sub-label, e.g. "A2A · 1.2s" */ meta?: string; }
export interface WorkflowRailProps {
  /** label may contain \n to break "Planning\nAgent" */
  steps: WorkflowStepDef[];
  /** steps before are resolved (vermilion), this one pulses, after are idle */
  activeIndex?: number;
  size?: 'md' | 'lg';
  onStepClick?: (index: number) => void;
  style?: React.CSSProperties;
}
export declare function WorkflowRail(props: WorkflowRailProps): JSX.Element;