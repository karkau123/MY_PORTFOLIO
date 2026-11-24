import { useRef } from "react";
import { experience, projects, skillGroups } from "../portfolio";

const questions = [
  ["What does Kartikeya work on?", `Kartikeya is a ${experience[0].role} at ${experience[0].company}. His work spans vLLM serving, Triton on GPUs, and LoRA fine-tuning.`, "work", "Work experience"],
  ["What has he built outside work?", projects.slice(0, 3).map(({ title }) => title).join(", ") + ".", "projects", "Selected projects"],
  ["Which backend tools does he use?", skillGroups.find(({ name }) => name === "Backend & pipelines").skills.join(", ") + ".", "about", "About Kartikeya"],
];

export default function PortfolioGuide() {
  const dialog = useRef(null);

  return (
    <>
      <button type="button" aria-haspopup="dialog" onClick={() => dialog.current.showModal()}
        className="fixed right-5 bottom-5 z-40 min-h-11 rounded-full border border-lavender/50 bg-midnight px-4 font-medium text-white shadow-lg hover:bg-indigo">
        Ask Keeto
      </button>
      <dialog ref={dialog} aria-labelledby="keeto-title"
        className="m-auto w-[min(28rem,calc(100%-2rem))] max-h-[calc(100dvh-2rem)] rounded-2xl border border-white/15 bg-midnight p-5 text-white backdrop:bg-black/70">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 id="keeto-title" className="text-xl font-semibold">Ask Keeto</h2>
          <form method="dialog"><button type="submit" className="min-h-11 px-3 text-neutral-300 hover:text-white">Close</button></form>
        </div>
        {questions.map(([prompt, answer, id, label]) => (
          <details key={id} className="border-t border-white/10 py-2">
            <summary className="cursor-pointer py-2 font-medium">{prompt}</summary>
            <p className="text-sm text-neutral-300">{answer}</p>
            <a href={`#${id}`} onClick={() => dialog.current.close()} className="inline-flex min-h-11 items-center text-aqua">{label} ↗</a>
          </details>
        ))}
      </dialog>
    </>
  );
}
