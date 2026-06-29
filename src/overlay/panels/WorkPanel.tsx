import { work } from '../../content/portfolio';
import { bodyById } from '../../content/bodies';
import { useStore } from '../../state/store';

const tint = bodyById('jupiter').tint;
const tintStr = `rgb(${tint.join(',')})`;

export default function WorkPanel() {
  const selected = useStore((s) => s.selectedMoon.jupiter ?? 0);
  const selectMoon = useStore((s) => s.selectMoon);
  const projects = work.projects;
  const p = projects[selected];

  return (
    <div className="panel wide interactive">
      {/* moon selector mirrors the 3D clickable moons */}
      <div className="moon-row">
        {projects.map((proj, i) => (
          <button
            key={proj.name}
            className="moon-chip"
            data-active={i === selected}
            onClick={() => selectMoon('jupiter', i)}
          >
            <span
              className="sphere"
              style={{ background: i === selected ? 'var(--accent)' : tintStr }}
            />
            {proj.name}
          </button>
        ))}
      </div>

      <div className="detail-head">
        <div className="eyebrow">
          <span className="dot" style={{ background: tintStr }} />
          {work.eyebrow} — MOON {selected + 1}/{projects.length}
        </div>
        <div className="meta">
          {p.date} · {p.role}
        </div>
      </div>

      <h2 className="project">{p.name}</h2>
      <div className="subtitle">{p.subtitle}</div>
      <p className="body">{p.description}</p>
      <ul className="bullets">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="tags">
        {p.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
