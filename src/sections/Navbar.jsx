import { useState } from "react";
import { profile } from "../portfolio";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#work"],
  ["Blog", "#blog"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          <span className="monogram" aria-hidden="true">KS</span>
          Kartikeya Singh
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"} <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              event.currentTarget.previousElementSibling.focus();
            }
          }}
        >
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="header-github" href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
