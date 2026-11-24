import { experience } from "../portfolio";

export default function Experiences() {
  return (
    <section className="section section-tint" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Career</p>
            <h2 id="work-title">Work experience</h2>
          </div>
        </div>
        <div className="experience-list">
          {experience.map(({ company, role, dates, location, highlights, stack }) => (
            <article className="experience-row" key={company}>
              <div className="experience-meta">
                <h3>{company}</h3>
                <p>{dates} <span aria-hidden="true">·</span> {location}</p>
              </div>
              <div>
                <h4>{role}</h4>
                <ul className="highlights">
                  {highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
