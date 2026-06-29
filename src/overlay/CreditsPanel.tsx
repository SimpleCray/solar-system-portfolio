import { credits } from '../content/portfolio';
import { useStore } from '../state/store';

export default function CreditsPanel() {
  const open = useStore((s) => s.creditsOpen);
  const setOpen = useStore((s) => s.setCreditsOpen);
  if (!open) return null;

  return (
    <div
      className="credits-overlay interactive"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Credits"
    >
      <div className="credits-panel" onClick={(e) => e.stopPropagation()}>
        <h2>{credits.title}</h2>
        <p className="intro">{credits.intro}</p>
        {credits.items.map((c) => (
          <div className="credit" key={c.label}>
            <div className="clabel">{c.label}</div>
            <div className="cdetail">
              <a href={c.href} target="_blank" rel="noreferrer">
                {c.detail}
              </a>
            </div>
          </div>
        ))}
        <button className="close" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
