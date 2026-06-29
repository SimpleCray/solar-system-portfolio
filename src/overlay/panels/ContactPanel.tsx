import { contact } from '../../content/portfolio';
import { bodyById } from '../../content/bodies';

const tint = bodyById('neptune').tint;

export default function ContactPanel() {
  return (
    <div className="panel interactive">
      <div className="eyebrow">
        <span className="dot" style={{ background: `rgb(${tint.join(',')})` }} />
        {contact.eyebrow}
      </div>
      <h2>{contact.headline}</h2>
      <div className="contact-rows">
        {contact.rows.map((r) => (
          <div className="row" key={r.label}>
            <div className="label">{r.label}</div>
            <div className="value">
              {r.href ? (
                <a href={r.href} target="_blank" rel="noreferrer">
                  {r.value}
                </a>
              ) : (
                r.value
              )}
            </div>
          </div>
        ))}
      </div>
      <a className="btn btn-primary" href={contact.rows[0].href!}>
        {contact.cta}
      </a>
      <div className="footer-line">{contact.footer}</div>
    </div>
  );
}
