import { useState } from "react";
import { motion } from "motion/react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Work", "work"],
  ["Achievements", "achievements"],
  ["Blog", "blog"],
  ["Contact", "contact"],
];

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul">
      {links.map(([label, id]) => (
        <li className="nav-li" key={id}>
          <a className="nav-link" href={`#${id}`} onClick={onNavigate}>{label}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/70">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between min-h-14">
          <a href="#home" className="text-lg font-bold text-neutral-200 hover:text-white" onClick={() => setIsOpen(false)}>
            Kartikeya Singh
          </a>
          <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}
            aria-controls="mobile-navigation" aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex min-h-11 min-w-11 items-center justify-center text-neutral-200 lg:hidden">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="size-6" alt="" />
          </button>
          <nav className="hidden lg:flex" aria-label="Main navigation"><Navigation /></nav>
        </div>
      </div>
      <motion.nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen}
        className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto bg-primary/95 pb-4 text-center lg:hidden">
        <Navigation onNavigate={() => setIsOpen(false)} />
      </motion.nav>
    </header>
  );
}
