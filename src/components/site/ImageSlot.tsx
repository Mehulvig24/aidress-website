// Production stand-in for the mock's <image-slot> custom element
// (design_handoff_aidress_website/design/ui_kits/website/image-slot.js) in its filled, read-only
// state: the photo cover-fitted and centred in the frame, with the Unsplash credit chip
// bottom-left. The element's drag-drop / reframe editing is design-tool chrome and isn't shipped.
// Styles are copied from the element's shadow stylesheet.
import type { CSSProperties } from 'react';

const UNSPLASH_HOME = 'https://unsplash.com/?utm_source=aidress&utm_medium=referral';

/** Unsplash requires utm referral params on links back to unsplash.com. */
function withReferral(href: string) {
  try {
    const u = new URL(href);
    if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) return href;
    if (!u.searchParams.has('utm_source')) u.searchParams.set('utm_source', 'aidress');
    if (!u.searchParams.has('utm_medium')) u.searchParams.set('utm_medium', 'referral');
    return u.toString();
  } catch {
    return href;
  }
}

const host: CSSProperties = { display: 'block', position: 'relative', font: '13px/1.3 system-ui,-apple-system,sans-serif', width: '100%', height: '100%', aspectRatio: '3/2' };
const frame: CSSProperties = { position: 'absolute', inset: 0, overflow: 'hidden', background: 'rgba(127,127,127,.08)' };
const img: CSSProperties = { position: 'absolute', maxWidth: 'none', transform: 'translate(-50%,-50%)', left: '50%', top: '50%', width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none' };
const creditStyle: CSSProperties = { position: 'absolute', left: 6, bottom: 6, maxWidth: 'calc(100% - 12px)', display: 'block', padding: '3px 7px', borderRadius: 5, background: 'rgba(0,0,0,.55)', color: '#fff', font: '10px/1.2 system-ui,-apple-system,sans-serif', textDecoration: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', backdropFilter: 'blur(6px)' };
const link: CSSProperties = { color: 'inherit', textDecoration: 'none' };

export function ImageSlot({ src, alt = '', credit, creditHref }: { src: string; alt?: string; credit?: string; creditHref?: string }) {
  const m = credit ? /^Photo by (.+) on Unsplash$/.exec(credit.trim()) : null;
  const href = creditHref && /^https?:/.test(creditHref) ? withReferral(creditHref) : '';
  const a = (text: string, h: string) => <a className="ad-slot-credit" href={h} target="_blank" rel="noopener noreferrer" style={link}>{text}</a>;
  return (
    <div className="ad-image-slot" style={host}>
      <div style={frame}>
        <img src={src} alt={alt} draggable={false} style={img} />
      </div>
      {credit && (
        <span className="ad-slot-credit-chip" style={creditStyle}>
          {m ? <>Photo by {href ? a(m[1], href) : m[1]} on {a('Unsplash', UNSPLASH_HOME)}</> : href ? a(credit, href) : credit}
        </span>
      )}
    </div>
  );
}
