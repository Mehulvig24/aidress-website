export interface AvatarProps {
  /** single initial — agents are identified by letter until they supply a mark */
  letter?: string;
  size?: number;
  tone?: 'neutral' | 'ink' | 'resolved';
  /** offset ring, as on the graph hub node */
  ring?: boolean;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;