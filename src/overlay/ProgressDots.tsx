import { STOPS } from '../content/bodies';
import { useStore } from '../state/store';

export default function ProgressDots() {
  const currentStop = useStore((s) => s.currentStop);
  const setStop = useStore((s) => s.setStop);

  return (
    <div className="dots interactive" role="tablist" aria-label="Sections">
      {STOPS.map((s) => (
        <button
          key={s.id}
          data-active={s.id === currentStop}
          aria-label={s.label}
          aria-selected={s.id === currentStop}
          role="tab"
          onClick={() => setStop(s.id)}
        />
      ))}
    </div>
  );
}
