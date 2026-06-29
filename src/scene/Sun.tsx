import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import type { Body } from '../content/bodies';

/** Emissive Sun. Primary light source for the scene. No corona halo. */
export default function Sun({ body }: { body: Body }) {
  const surfRef = useRef<THREE.Mesh>(null);
  const map = useTexture(body.texture!);
  useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
  }, [map]);

  useFrame((_, dt) => {
    if (surfRef.current) surfRef.current.rotation.y += dt * 0.02;
  });

  return (
    <group position={[body.distance, 0, 0]}>
      <pointLight intensity={2200} distance={400} decay={2} color={'#fff0d0'} />
      {/* hot textured surface — emissive, lit from within */}
      <mesh ref={surfRef}>
        <sphereGeometry args={[body.radius, 64, 64]} />
        <meshStandardMaterial
          emissiveMap={map}
          emissive={'#ffd089'}
          emissiveIntensity={1.4}
          color={'#000000'}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
