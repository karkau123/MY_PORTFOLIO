import { lazy, Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const HeroScene = lazy(() => import("../components/HeroScene"));

export default function Hero() {
  const showScene = useMediaQuery({ minWidth: 1024, prefersReducedMotion: "no-preference" });
  const hero = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });

  function followPointer(event) {
    if (!showScene || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.current.y = 1 - ((event.clientY - bounds.top) / bounds.height) * 2;
  }

  return (
    <section
      id="home"
      ref={hero}
      onPointerMove={followPointer}
      onPointerLeave={() => { pointer.current = { x: 0, y: 0 }; }}
      className="relative isolate flex min-h-[min(680px,90svh)] w-full items-center overflow-hidden lg:min-h-svh"
    >
      <ParallaxBackground hero={hero} />
      <div className="pointer-events-none absolute inset-0 bg-primary/35 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary/60 lg:via-primary/15 lg:to-transparent" />
      {showScene && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Suspense fallback={null}><HeroScene pointer={pointer} /></Suspense>
        </div>
      )}
      <div className="c-space mx-auto w-full max-w-7xl">
        <HeroText />
      </div>
    </section>
  );
}
