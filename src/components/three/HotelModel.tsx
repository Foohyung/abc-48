"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function HotelModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      
      {/* Base / Podium */}
      <mesh position={[0, -2, 0]} receiveShadow castShadow>
        <boxGeometry args={[8, 1, 6]} />
        <meshStandardMaterial color="#FAFAF9" roughness={0.9} />
      </mesh>

      {/* Main Glass Tower */}
      <mesh position={[0, 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 7, 3]} />
        <meshPhysicalMaterial 
          color="#1C1917" 
          metalness={0.9} 
          roughness={0.1} 
          clearcoat={1} 
        />
      </mesh>

      {/* Entrance / Canopy */}
      <mesh position={[0, -1.4, 3.2]} receiveShadow castShadow>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#C5A059" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Pillars for Canopy */}
      <mesh position={[1.3, -1.7, 4]} receiveShadow castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.6]} />
        <meshStandardMaterial color="#C5A059" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-1.3, -1.7, 4]} receiveShadow castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.6]} />
        <meshStandardMaterial color="#C5A059" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Vertical Gold Accents (Left & Right) */}
      <mesh position={[1.6, 2, 1.55]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 7.2, 0.1]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.6, 2, 1.55]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 7.2, 0.1]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Vertical Gold Accents (Back) */}
      <mesh position={[0, 2, -1.55]} receiveShadow castShadow>
        <boxGeometry args={[0.4, 7.2, 0.1]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rooftop Crown */}
      <mesh position={[0, 5.75, 0]} receiveShadow castShadow>
        <boxGeometry args={[3.5, 0.5, 2.5]} />
        <meshStandardMaterial color="#FAFAF9" roughness={0.9} />
      </mesh>
      
      {/* Rooftop Glow (Logo stand-in) */}
      <mesh position={[0, 6.2, 0]} receiveShadow castShadow>
        <boxGeometry args={[1, 0.4, 0.2]} />
        <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.5} />
      </mesh>

      {/* Stylized Trees on the Podium */}
      {[-3.2, 3.2].map((x, i) => (
        <group key={i} position={[x, -1.5, 2.2]}>
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.4]} />
            <meshStandardMaterial color="#3A3530" />
          </mesh>
          <mesh position={[0, 0.4, 0]} castShadow>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#C5A059" roughness={0.6} />
          </mesh>
        </group>
      ))}
      
    </group>
  );
}
