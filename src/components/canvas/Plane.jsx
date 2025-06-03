import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";

const PaperPlane = () => {
  const gltf = useGLTF("/paper_plane/scene.gltf");
  const planeRef = useRef();
  const tRef = useRef(0);

  // Define a closed CatmullRom curve through 4 points
  const curve = useMemo(() => {
    const pts = [
      new THREE.Vector3(3, 1, 0),
      new THREE.Vector3(1.5, 3, -2),
      new THREE.Vector3(-1, 5, 2),
      new THREE.Vector3(-3, 1, 1),
      new THREE.Vector3(2, 1, 0),
      new THREE.Vector3(-3, 1, 0),
      new THREE.Vector3(2, -1, 2),
      new THREE.Vector3(1, -3, 0.2),
      new THREE.Vector3(-3, 1, 1),
      new THREE.Vector3(0.2, -1, 1),

    ];
    return new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
  }, []);

  // On mount: place plane at start and orient it
  useEffect(() => {
    if (!planeRef.current) return;
    const start = curve.getPointAt(0);
    planeRef.current.position.copy(start);
    const tangent = curve.getTangentAt(0);
    planeRef.current.lookAt(start.clone().add(tangent));
    planeRef.current.rotation.x -= 0.5; // slight nose‐down tilt
  }, [gltf, curve]);

  useFrame((_, delta) => {
    if (!planeRef.current) return;

    // Move t forward, wrap with %1
    tRef.current = (tRef.current + delta * 0.1) % 1;
    const pos = curve.getPointAt(tRef.current);
    const tangent = curve.getTangentAt(tRef.current);

    planeRef.current.position.copy(pos);
    planeRef.current.lookAt(pos.clone().add(tangent));
    planeRef.current.rotation.x -= 0; // keep nose tilted
    const rollSpeed = Math.PI;
    planeRef.current.rotateOnAxis(new THREE.Vector3(0, 0, 1), rollSpeed * delta);
  });

  return (
    <group ref={planeRef}>
      <primitive object={gltf.scene} scale={0.3} />
    </group>
  );
};

const PlaneCanvas = () => {
  return (
    <Canvas camera={{ fov: 50, position: [0, 2.5, 6], near: 0.1, far: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <PaperPlane />
      <Preload all />
    </Canvas>
  );
};

export default PlaneCanvas;
