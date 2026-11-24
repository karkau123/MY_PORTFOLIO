import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export function Timeline({ data }) {
  const timeline = useRef(null);
  const section = useRef(null);
  const [height, setHeight] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 15%", "end 65%"] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, height]);

  useEffect(() => {
    const element = timeline.current;
    const observer = new ResizeObserver(() => setHeight(element.offsetHeight));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="c-space section-spacing" ref={section}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={timeline} className="relative mt-5 pb-2">
        {data.map(({ date, title, job, location, contents, stack }) => (
          <article className="relative grid gap-3 py-5 pl-8 md:grid-cols-[0.8fr_1.4fr] md:gap-7 md:pl-12" key={job}>
            <span aria-hidden="true" className="absolute top-6.5 left-0 z-10 h-4 w-4 rounded-full border-2 border-lavender bg-midnight" />
            <div>
              <h3 className="text-xl font-semibold">{job}</h3>
              <p className="mt-1 font-medium text-neutral-200">{title}</p>
              <p className="mt-1 text-sm text-neutral-400">{date} · {location}</p>
            </div>
            <div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300 md:text-base">
                {contents.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 pl-1 text-sm text-sand">
                {stack.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <div aria-hidden="true" className="absolute top-7 bottom-0 left-[7px] w-0.5 overflow-hidden bg-white/10">
          <motion.div style={{ height: progress }} className="w-full rounded-full bg-gradient-to-b from-fuchsia to-lavender" />
        </div>
      </div>
    </div>
  );
}
