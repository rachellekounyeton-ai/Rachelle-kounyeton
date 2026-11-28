import profil from "../assets/profil.jpeg";

function About() {
  return (
    <section className="content-section section-soft">
      <div className="section-inner about-grid">
        <div className="about-photo-frame">
          <img src={profil} alt="Photo de profil de Rachelle KOUNYETON" className="about-photo" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">À propos de moi</span>
          <h2 className="section-title">Développeuse Web Et Mobile Passionnée, Créative et Innovante</h2>
          <p className="section-description">
            Passionné par l'écosystème du web, je conçois et réalise des applications performantes,
            fluides et intuitives. À l'aise aussi bien en <strong>Front-End</strong> pour créer des
            interfaces utilisateur modernes et réactives, qu'en <strong>Back-End</strong> pour
            concevoir des architectures solides et sécurisées.
          </p>
          <div className="about-actions">
            <a href="chemin/vers/votre-cv.pdf" download className="button-primary">
              Télécharger mon CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
