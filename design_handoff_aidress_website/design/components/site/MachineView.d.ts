export interface MachineViewProps {
  /** plain text with markdown links: "[Label](#route)" or "[Label](https://…)" */
  text: string;
  /** called with the route when a "#route" link is clicked */
  onLink?: (route: string) => void;
  style?: React.CSSProperties;
}
export declare function MachineView(props: MachineViewProps): JSX.Element;