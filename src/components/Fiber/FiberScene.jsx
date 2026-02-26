import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { LokLok } from './Lok';

// Simple example box
const Box = () => (
    <mesh>
        <boxGeometry />
        <meshNormalMaterial />
    </mesh>
);

export const FiberScene = () => {
    return (
        <Canvas>
            <ambientLight />
            {/* <Box /> */}
            <OrbitControls>
            </OrbitControls>
            <Environment background files={[`/sky.hdr`]}></Environment>
            <LokLok></LokLok>
        </Canvas>
    );
};