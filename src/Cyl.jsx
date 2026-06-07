import React, { useRef, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Cyl = () => {
  const tex = useTexture("../public/grp2.png");
  const cyl = useRef(null);
  const { mouse } = useThree(); // Access mouse coordinates
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 }); // Store last mouse position

  useEffect(() => {
    // GSAP animation to scale down the cylinder on load
    gsap.fromTo(
      cyl.current.scale,
      { x: 5, y: 5, z: 5 }, // Starting scale
      {
        x: 1,
        y: 1,
        z: 1, // Target scale
        duration: 2, // Animation duration in seconds
        ease: "power2.out", // Easing for smooth animation
      }
    );
  }, []);

  useFrame((state, delta) => {
    if (cyl.current) {
      // Continuous rotation when not dragging
      if (!isDragging) {
        cyl.current.rotation.y += delta * 0.5;
      }

      // Adjust position and subtle rotation based on mouse
      const targetX = mouse.x * 0.2; // Map mouse X to position and rotation (adjust factor for sensitivity)
      const targetY = mouse.y * 0.2; // Map mouse Y to position and rotation

      // Smoothly blend position
      cyl.current.position.x = THREE.MathUtils.lerp(cyl.current.position.x, targetX, 0.1);
      cyl.current.position.y = THREE.MathUtils.lerp(cyl.current.position.y, targetY, 0.1);

      // Smoothly blend rotation
      cyl.current.rotation.x = THREE.MathUtils.lerp(cyl.current.rotation.x, targetY * 0.1, 0.1);
      cyl.current.rotation.z = THREE.MathUtils.lerp(cyl.current.rotation.z, targetX * 0.1, 0.1);
    }
  });

  // Handle dragging
  const handlePointerDown = (event) => {
    setIsDragging(true);
    setLastMousePos({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    if (isDragging && cyl.current) {
      const deltaX = (event.clientX - lastMousePos.x) * 0.0005;
      const deltaY = (event.clientY - lastMousePos.y) * 0.0005;

      // Update rotation based on dragging
      cyl.current.rotation.y += deltaX;
      cyl.current.rotation.x += deltaY;

      setLastMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <group
      rotation={[0, 1.4, 0.4]}
      position={[0, 0.4, 0]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerUp} // Stop dragging when the pointer leaves the canvas
    >
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
