import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function UltraLiquidCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />

        <Sphere args={[2, 128, 128]} scale={2.8}>
          <MeshDistortMaterial
            color="#7c3aed"
            distort={0.3}   // reduced distortion
            speed={1}       // slower movement
            roughness={0.2}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}