import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Particles } from "../components/Particles";
import { profile } from "../portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function sendMessage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");

    try {
      await emailjs.send("service_d86wjik", "template_lg24x6c", {
        name: fields.get("name"),
        email: fields.get("email"),
        message: fields.get("message"),
        time: new Date().toLocaleString(),
      }, { publicKey: "8Q_u_fcLaV-KXH3sw" });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative isolate flex items-center c-space section-spacing pb-12" aria-labelledby="contact-title">
      <Particles className="pointer-events-none absolute inset-0 -z-10" quantity={50} ease={80} color="#ffffff" refresh />
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-primary p-5 md:p-7">
        <h2 id="contact-title" className="text-heading">Let’s Talk</h2>
        <p className="subtext mt-2">Reach out about AI infrastructure, backend engineering, or developer tools.</p>
        <a className="mt-1 inline-flex min-h-11 items-center break-all text-aqua hover:underline" href={"mailto:" + profile.email}>{profile.email}</a>
        <form className="mt-3 space-y-4" onSubmit={sendMessage}>
          <label className="field-label block">Name<input className="field-input field-input-focus" name="name" autoComplete="name" maxLength={120} required /></label>
          <label className="field-label block">Email<input className="field-input field-input-focus" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
          <label className="field-label block">Message<textarea className="field-input field-input-focus" name="message" rows={4} maxLength={3000} required /></label>
          <button className="min-h-11 w-full rounded-md bg-gradient-to-r from-royal to-lavender px-4 font-medium disabled:opacity-60" disabled={status === "sending"} type="submit">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className="subtext">
            {status === "sent" && "Message sent."}
            {status === "error" && "Couldn’t send your message. Please try again or use the email link."}
          </p>
        </form>
      </div>
    </section>
  );
}
