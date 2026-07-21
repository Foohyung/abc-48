"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingParticles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random positions and phases for animation
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 15 - 5;
      const z = (Math.random() - 0.5) * 20;
      const phase = Math.random() * Math.PI * 2;
      const speed = 0.1 + Math.random() * 0.2;
      temp.push({ x, y, z, phase, speed });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      const { x, y, z, phase, speed } = particle;
      const time = state.clock.elapsedTime;
      
      dummy.position.set(
        x + Math.sin(time * speed + phase) * 2,
        y + Math.cos(time * speed * 0.5 + phase) * 1,
        z
      );
      
      const scale = (Math.sin(time * speed * 2 + phase) + 1.5) * 0.05;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#C4A87C" transparent opacity={0.6} />
    </instancedMesh>
  );
}
