import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
const nodePositions = [[0,1.82,.1],[1.58,.45,.35],[-1.45,.62,.48],[.34,-1.57,.55],[-.86,-1.18,-.98],[1.1,-.76,-1.12]];
function Connection({ point }) { const geometry = useMemo(() => { const value = new THREE.BufferGeometry(); value.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, ...point], 3)); return value; }, [point]); return <line geometry={geometry}><lineBasicMaterial color="#54cbe9" transparent opacity={0.27} /></line>; }
export default function TechOrb({ reducedMotion }) { const group = useRef(); useFrame((state, delta) => { if (!group.current || reducedMotion) return; group.current.rotation.y += delta * 0.14; group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.13 + 0.14, 0.03); group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, state.pointer.x * -0.075, 0.03); group.current.position.y = Math.sin(state.clock.elapsedTime * 0.62) * 0.075; }); return <group ref={group} rotation={[0.14, 0.38, 0]}>
  <mesh castShadow><icosahedronGeometry args={[1.24, 2]} /><meshPhysicalMaterial color="#a3efff" emissive="#12536b" emissiveIntensity={0.5} roughness={0.19} metalness={0.84} clearcoat={0.55} /></mesh>
  <mesh scale={1.075}><icosahedronGeometry args={[1.24, 2]} /><meshBasicMaterial color="#4bd8fa" wireframe transparent opacity={0.2} /></mesh>
  <mesh rotation={[0.38, 0.8, 0.12]} scale={0.62}><octahedronGeometry args={[1, 0]} /><meshBasicMaterial color="#d8fbff" wireframe transparent opacity={0.44} /></mesh>
  {nodePositions.map((point, index) => <group key={index}><Connection point={point} /><mesh position={point}><sphereGeometry args={[0.075, 10, 10]} /><meshBasicMaterial color="#86edff" /></mesh></group>)}
  <mesh rotation={[Math.PI / 2.45, 0, 0.52]}><torusGeometry args={[1.72, 0.009, 6, 80]} /><meshBasicMaterial color="#75def5" transparent opacity={0.48} /></mesh>
  <mesh rotation={[1.04, 0.42, -0.62]}><torusGeometry args={[2.03, 0.006, 6, 80]} /><meshBasicMaterial color="#d7f7ff" transparent opacity={0.24} /></mesh>
  <mesh rotation={[-0.52, 0.78, 0.2]}><torusGeometry args={[2.28, 0.004, 5, 72]} /><meshBasicMaterial color="#4ba8e8" transparent opacity={0.18} /></mesh>
</group>; }
