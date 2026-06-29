// Solar bodies in true order. Some are nav stops (sections); some are scenery.
// `distance` is the X position along the system axis (scene units). Glow tint
// comes from the README per-planet reference tones.

export type StopId =
  | 'home'
  | 'about'
  | 'ai'
  | 'skills'
  | 'work'
  | 'experience'
  | 'contact';

export interface Body {
  id: string;
  label: string;
  /** nav stop id if this body is a section, else null (scenery) */
  stop: StopId | null;
  distance: number;
  radius: number;
  /** glow / tint color as RGB triplet (matches README reference tones) */
  tint: [number, number, number];
  texture?: string;
  ring?: boolean;
  belt?: boolean;
}

// RGB triplets reused for the focus glow rgba(<planet>, …)
export const BODIES: Body[] = [
  { id: 'sun', label: 'Sun', stop: 'home', distance: 0, radius: 7, tint: [255, 140, 66], texture: '/textures/sun.jpg' },
  { id: 'mercury', label: 'Mercury', stop: 'about', distance: 16, radius: 0.9, tint: [200, 180, 143], texture: '/textures/mercury.jpg' },
  { id: 'venus', label: 'Venus', stop: 'ai', distance: 22, radius: 1.5, tint: [232, 197, 122], texture: '/textures/venus.jpg' },
  { id: 'earth', label: 'Earth', stop: null, distance: 30, radius: 1.6, tint: [74, 157, 91], texture: '/textures/earth.jpg' },
  { id: 'mars', label: 'Mars', stop: null, distance: 38, radius: 1.2, tint: [193, 68, 14], texture: '/textures/mars.jpg' },
  { id: 'belt', label: 'Asteroid Belt', stop: 'skills', distance: 48, radius: 0, tint: [91, 214, 200], belt: true },
  { id: 'jupiter', label: 'Jupiter', stop: 'work', distance: 62, radius: 4.2, tint: [201, 168, 119], texture: '/textures/jupiter.jpg' },
  { id: 'saturn', label: 'Saturn', stop: 'experience', distance: 80, radius: 3.6, tint: [227, 197, 138], ring: true, texture: '/textures/saturn.jpg' },
  { id: 'uranus', label: 'Uranus', stop: null, distance: 96, radius: 2.2, tint: [159, 227, 224], texture: '/textures/uranus.jpg' },
  { id: 'neptune', label: 'Neptune', stop: 'contact', distance: 110, radius: 2.1, tint: [59, 91, 219], texture: '/textures/neptune.jpg' },
];

export const RING_TEXTURE = '/textures/saturn_ring.png';
export const MOON_TEXTURE = '/textures/moon.jpg';
export const MILKYWAY_TEXTURE = '/textures/stars_milky_way.jpg';

// Ordered nav stops for prev/next + progress dots.
export const STOPS: { id: StopId; bodyId: string; label: string }[] = [
  { id: 'home', bodyId: 'sun', label: 'Home' },
  { id: 'about', bodyId: 'mercury', label: 'About' },
  { id: 'ai', bodyId: 'venus', label: 'AI Workflow' },
  { id: 'skills', bodyId: 'belt', label: 'Skills' },
  { id: 'work', bodyId: 'jupiter', label: 'Work' },
  { id: 'experience', bodyId: 'saturn', label: 'Experience' },
  { id: 'contact', bodyId: 'neptune', label: 'Contact' },
];

export const STOP_LABELS: Record<StopId, string> = {
  home: 'Home',
  about: 'About',
  ai: 'AI Workflow',
  skills: 'Skills',
  work: 'Work',
  experience: 'Experience',
  contact: 'Contact',
};

export const bodyById = (id: string) => BODIES.find((b) => b.id === id)!;
export const stopByBody = (bodyId: string) => STOPS.find((s) => s.bodyId === bodyId);
export const stopIndex = (id: StopId) => STOPS.findIndex((s) => s.id === id);
