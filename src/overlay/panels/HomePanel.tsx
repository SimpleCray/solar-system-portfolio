import { home } from '../../content/portfolio';
import { useStore } from '../../state/store';

export default function HomePanel() {
  const setStop = useStore((s) => s.setStop);
  return (
    <div className="hero interactive">
      <div className="eyebrow">{home.eyebrow}</div>
      <h1>{home.name}</h1>
      <div className="tagline">{home.tagline}</div>
      <div className="sub">{home.sub}</div>
      <div className="cta-row">
        <button className="btn btn-primary" onClick={() => setStop('work')}>
          {home.ctaPrimary}
        </button>
        <button className="btn btn-outline" onClick={() => setStop('contact')}>
          {home.ctaSecondary}
        </button>
      </div>
    </div>
  );
}
