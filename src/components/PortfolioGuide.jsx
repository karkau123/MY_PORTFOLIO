import { useRef } from "react";
import { experience, projects, skillGroups } from "../portfolio";

const questions = [
  {
    prompt: "What does Kartikeya work on?",
    answer: `Kartikeya is a ${experience[0].role} at ${experience[0].company}, where he works on model serving, GPU inference, and fine-tuning.`,
    href: "#work",
    label: "View work experience",
  },
  {
    prompt: "What has he built outside work?",
    answer: projects[0].summary + " " + projects[1].summary,
    href: "#projects",
    label: "Explore the projects",
  },
  {
    prompt: "Which backend tools does he use?",
    answer: skillGroups.find(({ name }) => name === "Backend & pipelines").skills.join(", ") + ".",
    href: "#about",
    label: "View the technical toolkit",
  },
];

export default function PortfolioGuide() {
  const dialog = useRef(null);

  return (
    <>
      <button className="faq-trigger" aria-haspopup="dialog" type="button" onClick={() => dialog.current.showModal()}>
        Ask Keeto <span aria-hidden="true">↗</span>
      </button>
      <dialog ref={dialog} className="faq" aria-labelledby="faq-title">
        <div className="faq-head">
          <h2 id="faq-title">Ask Keeto</h2>
          <form method="dialog"><button type="submit">Close</button></form>
        </div>
        {questions.map(({ prompt, answer, href, label }) => (
          <details key={prompt}>
            <summary>{prompt}</summary>
            <p>{answer}</p>
            <a className="text-link" href={href} onClick={() => dialog.current.close()}>{label}</a>
          </details>
        ))}
      </dialog>
    </>
  );
}
