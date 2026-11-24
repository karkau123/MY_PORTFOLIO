import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(Math.max(8, Math.min(e.clientX + 20, window.innerWidth - 328)));
    y.set(Math.max(8, Math.min(e.clientY + 20, window.innerHeight - 232)));
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      id="projects" onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-5 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          alt="" className="fixed top-0 left-0 z-40 hidden object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 lg:block"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
