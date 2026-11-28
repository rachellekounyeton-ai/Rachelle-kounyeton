function Competence() {
  return (
    <section className="content-section">
      <div className="section-inner">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Expertise technique</span>
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-description">
            Un aperçu des technologies et langages que j'utilise au quotidien pour concevoir des
            applications web performantes, du Front-End au Back-End.
          </p>
        </div>
        <div className="card-grid">
          <article className="skill-card">
            <span className="skill-mark">HTML</span>
            <h3 className="card-title">HTML / CSS</h3>
            <p className="card-description">Maîtrise de la structure sémantique, des feuilles de style modernes, du Responsive Design et des frameworks CSS comme Tailwind.</p>
          </article>
          <article className="skill-card">
            <span className="skill-mark">JS</span>
            <h3 className="card-title">JavaScript</h3>
            <p className="card-description">Utilisation avancée de JavaScript (ES6+) pour dynamiser les interfaces utilisateur, manipuler le DOM et gérer l'asynchrone.</p>
          </article>
          <article className="skill-card">
            <span className="skill-mark">UI</span>
            <h3 className="card-title">React</h3>
            <p className="card-description">Création d'applications web interactives et modulaires basées sur des composants, gestion des états et routage.</p>
          </article>
          <article className="skill-card">
            <span className="skill-mark">PHP</span>
            <h3 className="card-title">PHP</h3>
            <p className="card-description">Développement back-end pour la logique côté serveur, la gestion des bases de données et la création d'APIs robustes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Competence;
