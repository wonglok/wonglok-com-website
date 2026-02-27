import { Suspense, useRef } from "react";
import { CanvasGPU } from "./CanvasGPU/CanvasGPU.tsx";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { DiamindComponent } from "./DiamondTSL/DiamondComponent.tsx";
import { BloomPipeline } from "./CanvasGPU/BloomPipeline.tsx";
import { useFrame } from "@react-three/fiber";
import { EnvLoader } from "./CanvasGPU/EnvLoader.tsx";
import { LokLok } from "./Lok.jsx";

function DiamondApp() {
  return (
    <>
      <CanvasGPU>
        <Suspense fallback={null}>
          <Environment
            background
            backgroundIntensity={1.15}
            files={[`/hdr/sky.hdr`]}
          />

          <group>
            <group position={[0, 0, 0]}>
              <LokLok></LokLok>
            </group>
          </group>
        </Suspense>

        <OrbitControls
          object-position={[0, 1, 3]}
          target={[0, 0, 0]}
          makeDefault
        />

        <BloomPipeline />
      </CanvasGPU>
    </>
  );
}

//

export { DiamondApp };
