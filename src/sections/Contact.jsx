import { useState } from "react";
import emailjs from "@emailjs/browser";
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
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch</h2>
          <p>Reach out about AI infrastructure, backend engineering, or developer tools.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-socials">
            <a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
            <a href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.leetcode}>LeetCode <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendMessage}>
          <div className="contact-fields">
            <label>Name<input name="name" autoComplete="name" maxLength={120} required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
          </div>
          <label>Message<textarea name="message" rows={4} maxLength={3000} required /></label>
          <div className="contact-submit">
            <button className="button button-primary" disabled={status === "sending"} type="submit">
              {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span>
            </button>
            <span role="status">
              {status === "sent" && "Message sent."}
              {status === "error" && "Couldn’t send your message. Please try again or use the email link."}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
