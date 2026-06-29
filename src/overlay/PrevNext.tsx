import { STOPS, STOP_LABELS, bodyById, stopIndex } from '../content/bodies';
import { useStore } from '../state/store';

export default function PrevNext() {
  const currentStop = useStore((s) => s.currentStop);
  const next = useStore((s) => s.next);
  const prev = useStore((s) => s.prev);

  const i = stopIndex(currentStop);
  const nextStop = STOPS[i + 1];
  const atStart = i === 0;
  const atEnd = i === STOPS.length - 1;

  return (
    <div className="prevnext interactive">
      <button
        className="nav-btn"
        onClick={prev}
        disabled={atStart}
        aria-label="Previous section"
      >
        ‹
      </button>
      <button
        className="nav-btn next"
        onClick={next}
        disabled={atEnd}
        aria-label="Next section"
      >
        ›
      </button>
      {nextStop && (
        <span className="next-label">
          NEXT →{' '}
          <strong>
            {bodyById(nextStop.bodyId).label} · {STOP_LABELS[nextStop.id]}
          </strong>
        </span>
      )}
    </div>
  );
}
