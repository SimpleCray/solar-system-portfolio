import { experience } from '../../content/portfolio';
import { bodyById } from '../../content/bodies';
import { useStore } from '../../state/store';

const tint = bodyById('saturn').tint;
const tintStr = `rgb(${tint.join(',')})`;

export default function ExperiencePanel() {
  const selected = useStore((s) => s.selectedMoon.saturn ?? 0);
  const selectMoon = useStore((s) => s.selectMoon);
  const jobs = experience.jobs;
  const j = jobs[selected];

  return (
    <div className="panel wide interactive">
      <div className="moon-row">
        {jobs.map((job, i) => (
          <button
            key={job.company}
            className="moon-chip"
            data-active={i === selected}
            onClick={() => selectMoon('saturn', i)}
          >
            <span
              className="sphere"
              style={{ background: i === selected ? 'var(--accent)' : tintStr }}
            />
            {job.company}
          </button>
        ))}
      </div>

      <div className="detail-head">
        <div className="eyebrow">
          <span className="dot" style={{ background: tintStr }} />
          {experience.eyebrow} — MOON {selected + 1}/{jobs.length}
        </div>
        <div className="meta">{j.date}</div>
      </div>

      <h2 className="project">{j.company}</h2>
      <div className="subtitle">{j.role}</div>
      <p className="body">
        {j.type} · {j.location} · {j.mode}
      </p>
      <div style={{ marginTop: 20 }}>
        <div className="eyebrow" style={{ marginBottom: 4 }}>
          {experience.headline}
        </div>
        <p className="body" style={{ color: 'var(--text-muted)' }}>
          {experience.sub}
        </p>
      </div>
      <div className="tags">
        {j.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
