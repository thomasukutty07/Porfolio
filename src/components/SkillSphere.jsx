import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

const SkillIcon = ({ position, skill }) => {
  return (
    <group position={position}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          transparent
          opacity={0}
        />
      </Sphere>
      <Html center>
        <div style={{ pointerEvents: 'none' }}>
          <skill.icon style={{ fontSize: '3rem', color: skill.color }} />
        </div>
      </Html>
    </group>
  );
};

const SphereContent = ({ skills }) => {
  const groupRef = useRef();

  const points = useMemo(() => {
    const fibonacciSphere = (samples) => {
      const points = [];
      const phi = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        points.push(new THREE.Vector3(x, y, z).multiplyScalar(5));
      }
      return points;
    };
    return fibonacciSphere(skills.length);
  }, [skills.length]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <group ref={groupRef}>
        {skills.map((skill, i) => (
          <SkillIcon key={i} position={points[i]} skill={skill} />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

const SkillSphere = ({ skills }) => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <SphereContent skills={skills} />
    </Canvas>
  );
};

export default SkillSphere; 