import { Component, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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

export default function HeroScene() {
  return (
    <SceneBoundary>
      <Canvas camera={{ position: [0, 1, 3] }} dpr={[1, 1.5]} fallback={null}>
        <Suspense fallback={null}><Float><Astronaut /></Float></Suspense>
      </Canvas>
    </SceneBoundary>
  );
}
