import { Component, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Astronaut } from "./Astronaut";

class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function CameraRig({ pointer }) {
  useFrame(({ camera }, delta) => {
    const { x, y } = pointer.current;
    easing.damp3(camera.position, [x / 10, 1 + y / 10, 3], 0.5, delta);
  });
  return null;
}

export default function HeroScene({ pointer }) {
  return (
    <SceneBoundary>
      <Canvas camera={{ position: [0, 1, 3] }} dpr={[1, 1.5]} fallback={null}>
        <Suspense fallback={null}><Float><Astronaut /></Float></Suspense>
        <CameraRig pointer={pointer} />
      </Canvas>
    </SceneBoundary>
  );
}
