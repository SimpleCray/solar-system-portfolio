import { about } from '../../content/portfolio';
import { bodyById } from '../../content/bodies';

const tint = bodyById('mercury').tint;

export default function AboutPanel() {
  return (
    <div className="panel interactive">
      <div className="eyebrow">
        <span className="dot" style={{ background: `rgb(${tint.join(',')})` }} />
        {about.eyebrow}
      </div>
      <h2>{about.title}</h2>
      <p className="body">{about.intro}</p>
      <div className="pillars">
        {about.pillars.map((p, i) => (
          <div className="pillar" key={p.title}>
            <div className="num">0{i + 1}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
