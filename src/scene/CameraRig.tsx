import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { useStore } from '../state/store';
import { bodyById, stopByBody, STOPS } from '../content/bodies';

const _targetPos = new THREE.Vector3();
const _camPos = new THREE.Vector3();

export default function CameraRig() {
  const controls = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const currentStop = useStore((s) => s.currentStop);
  const cameraMode = useStore((s) => s.cameraMode);
  const setCameraMode = useStore((s) => s.setCameraMode);

  // Resolve desired camera + look-at for the active stop.
  const goal = useRef({ cam: new THREE.Vector3(20, 6, 24), look: new THREE.Vector3(0, 0, 0) });

  useEffect(() => {
    const stop = STOPS.find((s) => s.id === currentStop)!;
    const body = bodyById(stop.bodyId);
    const look = new THREE.Vector3(body.distance, 0, 0);
    // offset distance scales with body radius so big planets stay framed
    const off = Math.max(8, body.radius * 3 + 8);
    const cam = new THREE.Vector3(body.distance + off * 0.7, off * 0.4, off);
    goal.current = { cam, look };
  }, [currentStop]);

  useFrame((_, dt) => {
    if (!controls.current) return;
    if (cameraMode === 'guided') {
      const k = Math.min(1, dt * 2.4);
      _camPos.copy(camera.position).lerp(goal.current.cam, k);
      camera.position.copy(_camPos);
      _targetPos.copy(controls.current.target).lerp(goal.current.look, k);
      controls.current.target.copy(_targetPos);
      controls.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      minDistance={4}
      maxDistance={260}
      onStart={() => {
        // user grabbed the camera → free-fly
        if (useStore.getState().cameraMode !== 'free-fly') setCameraMode('free-fly');
      }}
    />
  );
}

// re-export helper so other modules can resolve a stop's body
export { stopByBody };
