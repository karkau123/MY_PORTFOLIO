import { useEffect } from "react";
import { posts } from "../posts";

export default function Blogs() {
  useEffect(() => {
    function openLinkedNote() {
      const id = window.location.hash.slice(1);
      if (!posts.some((post) => post.id === id)) return;
      const note = document.getElementById(id);
      note.open = true;
      note.scrollIntoView();
    }
    openLinkedNote();
    window.addEventListener("hashchange", openLinkedNote);
    return () => window.removeEventListener("hashchange", openLinkedNote);
  }, []);

  return (
    <section id="blog" className="c-space section-spacing" aria-labelledby="blog-title">
      <h2 id="blog-title" className="text-heading">Engineering notes</h2>
      <p className="subtext mt-2">Practical notes on model serving, data pipelines, and retrieval.</p>
      <div className="mt-6 space-y-3">
        {posts.map(({ id, title, category, summary, sections }) => (
          <details key={id} id={id} className="rounded-2xl border border-white/10 bg-gradient-to-b from-storm to-indigo p-4 md:p-6">
            <summary className="cursor-pointer py-1 text-xl font-medium">
              {title}
              <span className="mt-1 block text-sm font-normal text-sand">{category}</span>
            </summary>
            <p className="subtext mt-3">{summary}</p>
            <div className="mt-4 max-w-3xl space-y-4">
              {sections.map(({ title: heading, text }) => (
                <div key={heading}>
                  <h3 className="mb-1 font-medium">{heading}</h3>
                  <p className="subtext">{text}</p>
                </div>
              ))}
              <a className="inline-flex min-h-11 items-center text-aqua hover:underline" href={"#" + id}>Link to this note</a>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
