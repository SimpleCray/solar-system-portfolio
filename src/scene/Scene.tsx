import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { BODIES } from '../content/bodies';
import { useStore } from '../state/store';
import Background from './Background';
import StarField from './StarField';
import Sun from './Sun';
import Planet from './Planet';
import AsteroidBelt from './AsteroidBelt';
import CameraRig from './CameraRig';

export default function Scene() {
  const currentStop = useStore((s) => s.currentStop);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      camera={{ position: [20, 6, 24], fov: 50, near: 0.1, far: 2000 }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#05060d' }}
    >
      <color attach="background" args={['#05060d']} />
      <ambientLight intensity={0.08} />

      <StarField />

      <Suspense fallback={null}>
        <Background />
        {BODIES.map((b) => {
          if (b.id === 'sun') return <Sun key={b.id} body={b} />;
          if (b.belt) return <AsteroidBelt key={b.id} distance={b.distance} />;
          const active = b.stop !== null && b.stop === currentStop;
          return <Planet key={b.id} body={b} active={active} />;
        })}
      </Suspense>

      <CameraRig />

      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.55}
          luminanceSmoothing={0.3}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  );
}
