import { useEffect, useRef } from "react";
import { posts } from "../posts";

export default function Blogs() {
  const postDetails = useRef(null);

  useEffect(() => {
    function openLinkedPost() {
      const post = document.getElementById(window.location.hash.slice(1));
      if (post && postDetails.current?.contains(post) && post.tagName === "DETAILS") {
        post.open = true;
        post.scrollIntoView();
      }
    }

    openLinkedPost();
    window.addEventListener("hashchange", openLinkedPost);
    return () => window.removeEventListener("hashchange", openLinkedPost);
  }, []);

  return (
    <section className="section shell" id="blog" aria-labelledby="blog-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Blog</p>
          <h2 id="blog-title">Engineering notes</h2>
        </div>
        <p>Practical notes on running models and building reliable backends.</p>
      </div>
      <div className="blog-list" ref={postDetails}>
        {posts.map(({ id, title, summary, category, sections }) => (
          <details className="blog-post" key={id} id={id}>
            <summary>
              <span className="eyebrow">{category}</span>
              <h3>{title}</h3>
              <span className="blog-summary">{summary}</span>
              <span className="blog-toggle" aria-hidden="true" />
            </summary>
            <div className="article-body">
              {sections.map((section) => (
                <section key={section.title}>
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </section>
              ))}
              <a className="text-link" href={`#${id}`}>Link to this note <span aria-hidden="true">↗</span></a>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
