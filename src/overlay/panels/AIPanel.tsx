import { aiWorkflow } from '../../content/portfolio';
import { bodyById } from '../../content/bodies';

const tint = bodyById('venus').tint;

export default function AIPanel() {
  return (
    <div className="panel interactive">
      <div className="eyebrow">
        <span className="dot" style={{ background: `rgb(${tint.join(',')})` }} />
        {aiWorkflow.eyebrow}
      </div>
      <h2>{aiWorkflow.headline}</h2>
      <p className="body">{aiWorkflow.sub}</p>
      <div className="pillars">
        {aiWorkflow.items.map((it, i) => (
          <div className="pillar" key={it.title}>
            <div className="num">
              0{i + 1} · <span style={{ color: 'var(--accent)' }}>{it.metric}</span>
            </div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
