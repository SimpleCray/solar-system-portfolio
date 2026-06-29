import { useMemo } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { MILKYWAY_TEXTURE } from '../content/bodies';

/** Generate a soft radial-gradient sprite texture for nebula clouds. */
function makeNebulaTexture(rgb: [number, number, number]): THREE.Texture {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  const [r, gn, b] = rgb;
  g.addColorStop(0, `rgba(${r},${gn},${b},0.55)`);
  g.addColorStop(0.4, `rgba(${r},${gn},${b},0.22)`);
  g.addColorStop(1, `rgba(${r},${gn},${b},0)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

interface Cloud {
  pos: [number, number, number];
  scale: number;
  color: [number, number, number];
}

// Restrained, deep tints — cyan accent, violet, deep blue. Never neon.
const CLOUDS: Cloud[] = [
  { pos: [-180, 60, -260], scale: 260, color: [91, 214, 200] },
  { pos: [220, -40, -300], scale: 320, color: [120, 90, 200] },
  { pos: [40, 120, -340], scale: 280, color: [40, 70, 160] },
  { pos: [-90, -110, -220], scale: 200, color: [180, 110, 150] },
  { pos: [300, 90, -180], scale: 240, color: [60, 150, 180] },
];

export default function Background() {
  const milky = useTexture(MILKYWAY_TEXTURE);
  useMemo(() => {
    milky.colorSpace = THREE.SRGBColorSpace;
  }, [milky]);

  const cloudTextures = useMemo(() => CLOUDS.map((c) => makeNebulaTexture(c.color)), []);

  return (
    <group>
      {/* Milky Way skydome — far inverted sphere, dim so it stays a backdrop */}
      <mesh scale={[-1, 1, 1]} position={[55, 0, 0]}>
        <sphereGeometry args={[900, 64, 64]} />
        <meshBasicMaterial
          map={milky}
          side={THREE.BackSide}
          color={'#3a4258'}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Faint colored nebula clouds, additive, behind the system */}
      {CLOUDS.map((c, i) => (
        <sprite key={i} position={c.pos} scale={[c.scale, c.scale, 1]}>
          <spriteMaterial
            map={cloudTextures[i]}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            opacity={0.4}
            transparent
          />
        </sprite>
      ))}
    </group>
  );
}
