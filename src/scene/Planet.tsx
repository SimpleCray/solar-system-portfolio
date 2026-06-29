import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import type { Body } from '../content/bodies';
import { RING_TEXTURE, MOON_TEXTURE } from '../content/bodies';
import { useStore } from '../state/store';

/** Number of moons per planet that has them (drives 3D moon markers). */
const MOON_COUNT: Record<string, number> = { jupiter: 4, saturn: 5 };

export default function Planet({ body }: { body: Body; active?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  const map = useTexture(body.texture!);
  useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
  }, [map]);

  const moonCount = MOON_COUNT[body.id] ?? 0;

  useFrame((_, dt) => {
    if (mesh.current) mesh.current.rotation.y += dt * 0.04;
  });

  return (
    <group ref={group} position={[body.distance, 0, 0]}>
      <mesh ref={mesh} castShadow receiveShadow rotation={[0, 0, 0.05]}>
        <sphereGeometry args={[body.radius, 64, 64]} />
        <meshStandardMaterial map={map} roughness={0.92} metalness={0.0} />
      </mesh>

      {body.ring && <SaturnRing radius={body.radius} />}

      {moonCount > 0 && <Moons planet={body.id} count={moonCount} planetRadius={body.radius} />}
    </group>
  );
}

function SaturnRing({ radius }: { radius: number }) {
  const tex = useTexture(RING_TEXTURE);
  const inner = radius * 1.35;
  const outer = radius * 2.35;

  const geom = useMemo(() => {
    const g = new THREE.RingGeometry(inner, outer, 128);
    // remap UVs so the ring texture (a radial gradient) maps across the radius
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const r = v.length();
      const u = (r - inner) / (outer - inner);
      uv.setXY(i, u, 0.5);
    }
    return g;
  }, [inner, outer]);

  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
  }, [tex]);

  return (
    <mesh geometry={geom} rotation={[-Math.PI / 2.1, 0, 0]} receiveShadow>
      <meshStandardMaterial
        map={tex}
        side={THREE.DoubleSide}
        transparent
        opacity={0.95}
        roughness={1}
        alphaTest={0.02}
      />
    </mesh>
  );
}

function Moons({ planet, count, planetRadius }: { planet: string; count: number; planetRadius: number }) {
  const selected = useStore((s) => s.selectedMoon[planet] ?? 0);
  const selectMoon = useStore((s) => s.selectMoon);
  const tex = useTexture(MOON_TEXTURE);
  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
  }, [tex]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        const r = planetRadius * 2.6;
        const pos: [number, number, number] = [
          Math.cos(a) * r,
          Math.sin(a) * r * 0.4,
          Math.sin(a) * r,
        ];
        return (
          <Moon
            key={i}
            position={pos}
            texture={tex}
            active={selected === i}
            onClick={() => selectMoon(planet, i)}
          />
        );
      })}
    </>
  );
}

function Moon({
  position,
  texture,
  active,
  onClick,
}: {
  position: [number, number, number];
  texture: THREE.Texture;
  active: boolean;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHover(false);
          document.body.style.cursor = 'auto';
        }}
        scale={active ? 1.25 : 1}
      >
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial
          map={texture}
          emissive={active ? '#5BD6C8' : hover ? '#2a3a45' : '#000000'}
          emissiveIntensity={active ? 0.55 : hover ? 0.3 : 0}
          roughness={0.9}
        />
      </mesh>
      {/* accent ring on active moon */}
      {active && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.6, 0.72, 48]} />
          <meshBasicMaterial color="#5BD6C8" transparent opacity={0.9} side={THREE.DoubleSide} />
        </mesh>
      )}
      {(active || hover) && (
        <Html center distanceFactor={26} style={{ pointerEvents: 'none' }}>
          <span className="moon-label" data-active={active}>
            ●
          </span>
        </Html>
      )}
    </group>
  );
}
