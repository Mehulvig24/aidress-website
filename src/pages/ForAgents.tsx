// /for-agents: the mock's Machine view of the homepage (machineText(home), which ends with the
// onboarding instructions, AW.onboard). No separate design. Agents asking for text/markdown get
// /agents.md instead (see vercel.json / middleware), and the same text is prerendered as HTML.
import { MachineView } from '../components/ds';
import { machineText } from '../lib/machineText';
import { hrefFor } from '../lib/routes';

export function ForAgents({ go }: { go: (name: string) => void }) {
  return <MachineView text={machineText({ name: 'for-agents', params: {} })} onLink={to => go(to)} hrefFor={to => hrefFor(to)} />;
}
