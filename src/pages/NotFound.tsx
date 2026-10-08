import { hrefFor, spaClick } from '../lib/routes';
// Not in the mock. Built only from the mock's own pieces (Band, SectionHeader, TextLink).
import { SectionHeader, TextLink } from '../components/ds';
import { Band } from '../components/site/Shared';

export function NotFound({ go }: { go: (name: string) => void }) {
  return (
    <Band id="not-found" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <SectionHeader index="404" label="Not found" title="This page doesn’t exist." lead="The link may be old, or the page may have moved." />
      <div style={{ marginTop: 40 }}><TextLink direction="back" href={hrefFor('home')} onClick={spaClick(() => go('home'))}>Back to aidress.ai</TextLink></div>
    </Band>
  );
}
