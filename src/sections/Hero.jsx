import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const HeroScene = lazy(() => import("../components/HeroScene"));

export default function Hero() {
  const showScene = useMediaQuery({ minWidth: 1024, prefersReducedMotion: "no-preference" });

  return (
    <section id="home" className="relative isolate flex min-h-[min(680px,90svh)] items-center overflow-hidden c-space lg:min-h-[min(850px,100svh)]">
      <ParallaxBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/15 to-transparent" />
      {showScene && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Suspense fallback={null}><HeroScene /></Suspense>
        </div>
      )}
      <HeroText />
    </section>
  );
}
