import { mySocials } from "../constants";

export default function Footer() {
  return (
    <footer className="c-space flex flex-wrap items-center justify-between gap-5 pb-20 text-sm text-neutral-400">
      <div className="mb-1 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <a href="#home" className="hover:text-white">Back to top</a>
      <div className="flex gap-3">
        {mySocials.map(({ name, href, icon }) => (
          <a href={href} key={name} className="flex min-h-11 min-w-10 items-center justify-center hover:opacity-75">
            <img src={icon} className="size-5" alt={name} />
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Kartikeya Singh</p>
    </footer>
  );
}
