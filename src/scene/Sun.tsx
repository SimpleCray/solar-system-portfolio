import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import type { Body } from '../content/bodies';

/**
 * Emissive Sun. Acts as the scene's primary light source. Gentle pulse on the
 * surrounding corona sprite — the one slightly-stronger glow (bloom picks it up).
 */
export default function Sun({ body }: { body: Body }) {
  const coronaRef = useRef<THREE.Mesh>(null);
  const surfRef = useRef<THREE.Mesh>(null);
  const map = useTexture(body.texture!);
  useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
  }, [map]);

  useFrame(({ clock }, dt) => {
    if (surfRef.current) surfRef.current.rotation.y += dt * 0.02;
    if (coronaRef.current) {
      // 7s ease-in-out pulse between restrained bounds
      const t = (Math.sin((clock.elapsedTime / 7) * Math.PI * 2) + 1) / 2;
      const s = 1.18 + t * 0.08;
      coronaRef.current.scale.setScalar(s);
      (coronaRef.current.material as THREE.MeshBasicMaterial).opacity = 0.18 + t * 0.1;
    }
  });

  return (
    <group position={[body.distance, 0, 0]}>
      <pointLight intensity={2200} distance={400} decay={2} color={'#fff0d0'} />
      {/* hot textured surface — emissive so bloom catches it */}
      <mesh ref={surfRef}>
        <sphereGeometry args={[body.radius, 64, 64]} />
        <meshBasicMaterial map={map} color={'#ffd089'} toneMapped={false} />
      </mesh>
      {/* corona shell */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[body.radius, 32, 32]} />
        <meshBasicMaterial
          color={'#FF8C42'}
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
