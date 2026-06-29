import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { useStore } from '../state/store';

/** Ignition loader: tracks real texture-load progress, then reveals the scene. */
export default function LoadingScreen() {
  const { active, progress } = useProgress();
  const loadProgress = useStore((s) => s.loadProgress);
  const isReady = useStore((s) => s.isReady);
  const setLoadProgress = useStore((s) => s.setLoadProgress);
  const setReady = useStore((s) => s.setReady);

  // mirror drei's progress into the store (monotonic, never drops back)
  useEffect(() => {
    const next = Math.max(useStore.getState().loadProgress, Math.round(progress));
    setLoadProgress(next);
  }, [progress, setLoadProgress]);

  // reveal once assets finished loading
  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => {
        setLoadProgress(100);
        setReady(true);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [active, progress, setLoadProgress, setReady]);

  return (
    <div className={`loader${isReady ? ' done' : ''}`} aria-hidden={isReady}>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className="seed" />
        <div className="ignite">Igniting the system…</div>
        <div className="bar">
          <div className="fill" style={{ width: `${loadProgress}%` }} />
        </div>
        <div className="pct">{loadProgress}%</div>
      </div>
    </div>
  );
}
