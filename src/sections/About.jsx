import { profile, skillGroups } from "../portfolio";

export default function About() {
  return (
    <section className="section section-tint" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">Beyond the work</h2>
          <p className="about-lead">I’m based in India and open to working with remote teams worldwide.</p>
          <div className="about-detail">
            <h3>Education</h3>
            <p><strong>National Institute of Technology, Patna</strong></p>
            <p>B.Tech, Computer Science and Engineering<br />2021–2025 · 8.83/10 CGPA</p>
          </div>
          <div className="about-detail" id="achievements">
            <h3>Achievements & leadership</h3>
            <ul className="highlights">
              <li><a href={profile.leetcode}>LeetCode</a> rating of 1721, top 10%, with 850+ problems solved.</li>
              <li>CodeChef rating of 1720 and global rank 520 in Starters 120.</li>
              <li>Second place at HackNITP 2.0.</li>
              <li>Runner-up at the Tata 1mg hackathon.</li>
              <li>10.0 CGPA in the eighth semester at NIT Patna.</li>
              <li>Backend team lead and DSA team member at Google Developer Student Club, 2023–2025.</li>
            </ul>
          </div>
        </div>
        <div className="stack-panel">
          <h3>Technical toolkit</h3>
          <dl className="skill-groups">
            {skillGroups.map(({ name, skills }) => (
              <div key={name}><dt>{name}</dt><dd>{skills.join(" · ")}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
