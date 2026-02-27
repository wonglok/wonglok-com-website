import { Suspense, useRef } from "react";
import { DiamindComponent } from "../DiamondTSL/DiamondComponent";
import { useFrame } from "@react-three/fiber";

export function DiamondUnit() {
  return (
    <group position={[0, -0.5, 0]}>
      <Suspense fallback={null}>
        <group rotation={[0.25 * Math.PI, 0, 0]}>
          <Spinner>
            <DiamindComponent />
          </Spinner>
        </group>
      </Suspense>
    </group>
  );
}

function Spinner({ children }: any) {
  const ref = useRef<any>(null);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.125;
    }
  });

  return <group ref={ref}>{children}</group>;
}
