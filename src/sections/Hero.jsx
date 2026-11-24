export default function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-role"><span aria-hidden="true" /> Senior AI Engineer at InfoEdge (Naukri)</p>
            <h1 id="hero-title">I build AI systems <em>and the backends that run them.</em></h1>
            <p className="hero-description">
              I’m Kartikeya Singh. I work on LLM serving, GPU inference, and event-driven systems using Python and Go.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-outline" href={import.meta.env.BASE_URL + "resume.pdf"}>
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="benchmark" role="group" aria-labelledby="benchmark-title">
            <div className="benchmark-top">
              <span className="eyebrow"><span className="status-dot" aria-hidden="true" /> Selected result</span>
              <span className="benchmark-model">all-MiniLM-L6-v2</span>
            </div>
            <div className="benchmark-body">
              <p id="benchmark-title" className="benchmark-caption">Embedding execution time</p>
              <p className="benchmark-value">7–8 <span>ms</span></p>
              <div className="benchmark-bars">
                <div className="benchmark-row">
                  <span>CPU</span><i className="bar cpu" aria-hidden="true" /><strong>36 ms</strong>
                </div>
                <div className="benchmark-row">
                  <span>T4 GPU</span><i className="bar gpu" aria-hidden="true" /><strong>7–8 ms</strong>
                </div>
              </div>
            </div>
            <div className="benchmark-bottom"><span>Triton + gRPC</span><span>20–30 req/s</span></div>
          </div>
        </div>
      </section>
      <section className="results" aria-label="Additional engineering results">
        <dl className="shell results-grid">
          <div><dt>~87%</dt><dd>fewer recurring prompt tokens<br />at IndiaMART</dd></div>
          <div><dt>5+</dt><dd>isolated API processes consolidated<br />into one event pipeline</dd></div>
          <div><dt>$4.2k</dt><dd>annual vendor cost savings<br />at Tata 1mg</dd></div>
        </dl>
      </section>
    </>
  );
}
