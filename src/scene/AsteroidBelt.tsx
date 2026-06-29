import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/** Instanced asteroid belt ring, centered on the system at the given distance. */
export default function AsteroidBelt({
  distance,
  count = 900,
}: {
  distance: number;
  count?: number;
}) {
  const ref = useRef<THREE.InstancedMesh>(null);

  const matrices = useMemo(() => {
    const m = new THREE.Matrix4();
    const arr: THREE.Matrix4[] = [];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const rad = distance + (Math.random() - 0.5) * 12;
      const x = Math.cos(a) * rad;
      const z = Math.sin(a) * rad;
      const y = (Math.random() - 0.5) * 2.5;
      const s = 0.06 + Math.random() * 0.18;
      m.makeRotationY(Math.random() * Math.PI);
      m.setPosition(x, y, z);
      m.scale(new THREE.Vector3(s, s, s));
      arr.push(m.clone());
    }
    return arr;
  }, [count, distance]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    matrices.forEach((mat, i) => node.setMatrixAt(i, mat));
    node.instanceMatrix.needsUpdate = true;
  }, [matrices]);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.01;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={'#6b6151'} roughness={1} flatShading />
    </instancedMesh>
  );
}
