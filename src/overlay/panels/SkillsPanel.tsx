import { skills } from '../../content/portfolio';

export default function SkillsPanel() {
  return (
    <div className="skills-center interactive">
      <div className="glow-dot" />
      <h2>{skills.centerTitle}</h2>
      <div className="sub">{skills.centerSub}</div>
      <div className="skills-pills">
        {skills.list.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
