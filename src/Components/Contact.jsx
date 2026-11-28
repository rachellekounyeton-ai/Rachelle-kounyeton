import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const envoyerEmail = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs.sendForm(
      "service_723mg82",
      "template_x9mltfr",
      form.current,
      { publicKey: "vKcLiFTaE9zhF2TAX" }
    )
      .then(() => {
        setStatus("Votre message a été envoyé avec succès !");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setStatus("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <section id="contact" className="content-section">
      <div className="section-inner">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Restons en contact</span>
          <h2 className="section-title">Me Contacter</h2>
          <p className="section-description">
            Vous avez un projet en tête, une opportunité ou simplement une question ? N'hésitez pas
            à me laisser un message !
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <form ref={form} onSubmit={envoyerEmail} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">Nom complet</label>
                  <input type="text" id="name" name="user_name" required placeholder="Votre nom" className="form-input" />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">Adresse e-mail</label>
                  <input type="email" id="email" name="user_email" required placeholder="Votre email" className="form-input" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input type="text" id="subject" name="subject" required placeholder="Sujet de votre message" className="form-input" />
              </div>
              <div className="form-field">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Décrivez votre projet ou votre demande..." className="form-input" />
              </div>
              <div>
                <button type="submit" className="button-primary">Envoyer le message <span aria-hidden="true">↗</span></button>
                <p className="form-status" role="status" aria-live="polite">{status}</p>
              </div>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="contact-card">
              <h3 className="card-title">Coordonnées</h3>
              <div className="contact-detail">
                <span className="detail-icon" aria-hidden="true">@</span>
                <div>
                  <p className="detail-label">Email</p>
                  <a href="mailto:rachellekounyeton@gmail.com" className="detail-value detail-link">rachellekounyeton@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon" aria-hidden="true">✓</span>
                <div>
                  <p className="detail-label">Statut</p>
                  <p className="detail-value">Disponible pour de nouveaux projets</p>
                </div>
              </div>
            </div>
            <div className="contact-card">
              <h3 className="card-title">Retrouvez-moi sur les réseaux</h3>
              <div className="social-links">
                <a href="cchttps://www.facebook.com/people/Rachelle-Kounyeton/61558648110463/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" fill="currentColor" /></svg>
                </a>
                <a href="https://www.instagram.com/rachelle.kounyeton/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.7" cy="6.7" r="1.1" fill="currentColor" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/rachelle-kounyeton-bbbb693a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h3v10H5zM6.5 4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM11 9h2.9v1.4h.04A3.2 3.2 0 0 1 16.8 8.8c3 0 3.7 2 3.7 4.5V19h-3v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V19h-3z" fill="currentColor" /></svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
