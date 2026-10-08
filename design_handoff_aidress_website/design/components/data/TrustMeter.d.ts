export interface TrustMeterProps {
  label?: string;
  value: number;
  max?: number;
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function TrustMeter(props: TrustMeterProps): JSX.Element;