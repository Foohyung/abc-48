"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { HotelModel } from "./HotelModel";
import { FloatingParticles } from "./FloatingParticles";

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 bg-deep-charcoal">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[12, 8, 14]} fov={40} />
        
        {/* OrbitControls ensures the camera points at the center [0,0,0] and allows auto-rotation */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
        />
        
        {/* Stable manual lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={3} color="#E5CFA0" castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#FAFAF9" />
        <pointLight position={[0, -2, 5]} intensity={2} color="#C5A059" distance={15} />
        
        <Suspense fallback={null}>
          <group position={[0, -2, 0]}>
            <HotelModel />
            <FloatingParticles count={100} />
            
            <ContactShadows 
              position={[0, -2.5, 0]} 
              opacity={0.7} 
              scale={30} 
              blur={2.5} 
              far={10} 
              frames={1}
              color="#0C0A09" 
            />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
