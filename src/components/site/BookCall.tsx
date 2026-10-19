// "Book a call" button. Opens the Cal.com booking popup (mehul-vig/30min); the Cal embed script is
// loaded in index.html and opens on any click on an element carrying these data-cal-* attributes.
import type { CSSProperties } from 'react';
import { Button } from '../ds';

export const CAL_LINK = 'mehul-vig/30min';

export function BookCall({ variant = 'secondary', size = 'lg', label = 'Book a call', style }: { variant?: 'primary' | 'secondary' | 'accent' | 'ghost'; size?: 'sm' | 'md' | 'lg'; label?: string; style?: CSSProperties }) {
  const cal = {
    'data-cal-link': CAL_LINK,
    'data-cal-namespace': '30min',
    'data-cal-config': '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
  };
  return <Button variant={variant} size={size} iconRight="arrow-up-right" style={style} {...cal}>{label}</Button>;
}
