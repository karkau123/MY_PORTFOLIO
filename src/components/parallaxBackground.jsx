import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = ({ hero }) => {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { damping: 32, stiffness: 125 });
  const mountain3Y = useTransform(progress, [0, 1], ["0%", "55%"]);
  const planetsX = useTransform(progress, [0, 1], ["0%", "-20%"]);
  const mountain2Y = useTransform(progress, [0, 1], ["0%", "25%"]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-black/40">
      <div className="relative h-full overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full -z-50"
          style={{
            backgroundImage: "url(./assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(./assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: reducedMotion ? 0 : mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(./assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: reducedMotion ? 0 : planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(./assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: reducedMotion ? 0 : mountain2Y,
          }}
        />
        {/* Mountain Layer 1 */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(./assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
