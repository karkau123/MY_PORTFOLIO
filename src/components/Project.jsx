import { useRef } from "react";

export default function Project({ title, summary, impact, image, stack, links, setPreview }) {
  const modal = useRef(null);

  return (
    <article className="flex flex-col gap-3 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-8"
      onMouseEnter={() => image && setPreview(image)} onMouseLeave={() => setPreview(null)}>
      <div className="min-w-0">
        <h3 className="text-xl font-medium sm:text-2xl">{title}</h3>
        <p className="subtext mt-1 max-w-2xl">{summary}</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-sand">
          {stack.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <button type="button" aria-haspopup="dialog"
        onClick={() => { setPreview(null); modal.current.showModal(); }}
        className="flex min-h-11 shrink-0 items-center gap-1 self-start hover-animation sm:self-center">
        Read more <img src="assets/arrow-right.svg" className="w-5" alt="" />
      </button>
      <dialog ref={modal} aria-label={title}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy text-white backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        {image && <img src={image} alt="" loading="lazy" className="max-h-64 w-full object-cover" />}
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <form method="dialog">
              <button type="submit" aria-label="Close project details" className="min-h-11 min-w-11 rounded bg-midnight p-2 hover:bg-storm">
                <img src="assets/close.svg" className="mx-auto size-5" alt="" />
              </button>
            </form>
          </div>
          <p className="subtext mt-3">{summary}</p>
          {impact && <p className="subtext mt-3">{impact}</p>}
          <div className="mt-3 flex flex-wrap gap-x-5">
            {links.map(({ href, label }) => (
              <a key={href} className="inline-flex min-h-11 items-center font-medium text-aqua hover:underline" href={href}>{label} ↗</a>
            ))}
          </div>
        </div>
      </dialog>
    </article>
  );
}
