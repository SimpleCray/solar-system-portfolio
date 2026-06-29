import './overlay.css';
import { useStore } from '../state/store';
import { home } from '../content/portfolio';
import Nameplate from './Nameplate';
import ProgressDots from './ProgressDots';
import PrevNext from './PrevNext';
import CreditsPanel from './CreditsPanel';
import HomePanel from './panels/HomePanel';
import AboutPanel from './panels/AboutPanel';
import AIPanel from './panels/AIPanel';
import SkillsPanel from './panels/SkillsPanel';
import WorkPanel from './panels/WorkPanel';
import ExperiencePanel from './panels/ExperiencePanel';
import ContactPanel from './panels/ContactPanel';
import type { StopId } from '../content/bodies';

const PANELS: Record<StopId, () => JSX.Element> = {
  home: HomePanel,
  about: AboutPanel,
  ai: AIPanel,
  skills: SkillsPanel,
  work: WorkPanel,
  experience: ExperiencePanel,
  contact: ContactPanel,
};

export default function Overlay() {
  const currentStop = useStore((s) => s.currentStop);
  const isReady = useStore((s) => s.isReady);
  const setCreditsOpen = useStore((s) => s.setCreditsOpen);

  if (!isReady) return null;

  const ActivePanel = PANELS[currentStop];

  return (
    <div className="overlay-root">
      <Nameplate />
      <button
        className="credits-btn interactive"
        onClick={() => setCreditsOpen(true)}
      >
        Credits
      </button>

      {/* keyed so the slide-in animation replays on stop change */}
      <ActivePanel key={currentStop} />

      {currentStop === 'home' && <div className="hint">{home.hint}</div>}

      <PrevNext />
      <ProgressDots />
      <CreditsPanel />
    </div>
  );
}
