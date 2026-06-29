import { create } from 'zustand';
import { STOPS, type StopId } from '../content/bodies';

export type CameraMode = 'free-fly' | 'guided';

interface AppState {
  currentStop: StopId;
  /** selected moon index per planet that has moons (jupiter 0–3, saturn 0–4) */
  selectedMoon: Record<string, number>;
  cameraMode: CameraMode;
  loadProgress: number;
  isReady: boolean;
  creditsOpen: boolean;

  setStop: (id: StopId) => void;
  next: () => void;
  prev: () => void;
  selectMoon: (planet: string, index: number) => void;
  setCameraMode: (m: CameraMode) => void;
  setLoadProgress: (n: number) => void;
  setReady: (r: boolean) => void;
  setCreditsOpen: (o: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  currentStop: 'home',
  selectedMoon: { jupiter: 0, saturn: 0 },
  cameraMode: 'free-fly',
  loadProgress: 0,
  isReady: false,
  creditsOpen: false,

  setStop: (id) => set({ currentStop: id, cameraMode: 'guided' }),
  next: () => {
    const i = STOPS.findIndex((s) => s.id === get().currentStop);
    const nextStop = STOPS[Math.min(i + 1, STOPS.length - 1)];
    set({ currentStop: nextStop.id, cameraMode: 'guided' });
  },
  prev: () => {
    const i = STOPS.findIndex((s) => s.id === get().currentStop);
    const prevStop = STOPS[Math.max(i - 1, 0)];
    set({ currentStop: prevStop.id, cameraMode: 'guided' });
  },
  selectMoon: (planet, index) =>
    set((s) => ({ selectedMoon: { ...s.selectedMoon, [planet]: index } })),
  setCameraMode: (m) => set({ cameraMode: m }),
  setLoadProgress: (n) => set({ loadProgress: n }),
  setReady: (r) => set({ isReady: r }),
  setCreditsOpen: (o) => set({ creditsOpen: o }),
}));
