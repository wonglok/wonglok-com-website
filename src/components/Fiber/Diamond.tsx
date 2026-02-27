import { Suspense, useRef } from "react";
import { CanvasGPU } from "./CanvasGPU/CanvasGPU.tsx";
import { Environment, OrbitControls } from "@react-three/drei";
// import { DiamindComponent } from "./DiamondTSL/DiamondComponent.tsx";
import { BloomPipeline } from "./CanvasGPU/BloomPipeline.tsx";
// import { useFrame } from "@react-three/fiber";
// import { EnvLoader } from "./CanvasGPU/EnvLoader.tsx";
import { LokLok } from "./Objects/Lok.jsx";
import { DiamondUnit } from "./Objects/Diamond.tsx";
function DiamondApp() {
  //

  return (
    <>
      <CanvasGPU>
        <Suspense fallback={null}>
          <BloomPipeline />

          <Environment
            background
            backgroundIntensity={1.2}
            files={[`/hdr/sky.hdr`]}
          />

          <LokLok></LokLok>

          <DiamondUnit></DiamondUnit>
        </Suspense>

        <OrbitControls
          //
          object-position={[0, 1, 3]}
          target={[0, -0.5, 0]}
          makeDefault
        />
      </CanvasGPU>
    </>
  );
}

//

export { DiamondApp };
