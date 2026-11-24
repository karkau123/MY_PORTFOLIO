import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FlipWords } from "./FlipWords";
import ResumeModal from "./ResumeModal";

const words = ["Scalable", "Reliable", "Real-world"];
const entrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const line = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroText() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative z-10 w-full min-w-0 max-w-3xl pt-28 pb-20 text-center lg:py-24 lg:text-left">
      <motion.div variants={entrance} initial={reducedMotion ? false : "hidden"} animate="visible">
        <motion.p variants={line} className="mb-3 text-base font-medium text-neutral-200 sm:text-xl">
          Hi, I’m Kartikeya Singh
        </motion.p>
        <motion.h1 variants={line} className="text-[clamp(2.35rem,6.5vw,5.3rem)] font-black leading-[1.05] tracking-tight">
          {reducedMotion ? "Scalable" : <FlipWords words={words} duration={3600} />}
          <br />AI &amp; backend systems
        </motion.h1>
        <motion.p variants={line} className="mx-auto mt-5 max-w-lg text-base text-neutral-200 sm:text-lg lg:mx-0">
          Senior AI Engineer at InfoEdge (Naukri). I work on model serving,
          GPU inference, and the event-driven backends that support them.
        </motion.p>
        <motion.button variants={line} type="button" onClick={() => setIsResumeOpen(true)}
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
          View résumé <span aria-hidden="true">↗</span>
        </motion.button>
      </motion.div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
