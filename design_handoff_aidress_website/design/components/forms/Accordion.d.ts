export interface AccordionItem { id: string; title: React.ReactNode; content: React.ReactNode; /** right-aligned mono meta (count, version) */ meta?: string; }
export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  /** dense = sidebar filter rows with chevrons; default = passport sections with +/− */
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;