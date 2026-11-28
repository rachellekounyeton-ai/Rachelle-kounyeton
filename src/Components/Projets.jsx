const projects = [
  {
    image: "chemin/vers/image-projet2.jpg",
    imageAlt: "Aperçu du Projet 2",
    tags: ["React", "Tailwind CSS"],
    title: "Application web Interative",
    description: "Platforme moderne dévéloppéeen react,offrant une interface dynamiqueadaptée a tous les écrans.",
  },
  {
    image: "chemin/vers/image-projet2.jpg",
    imageAlt: "Aperçu du Project 2",
    tags: ["PHP", "MySQL"],
    title: "Système de Gestion Back-End",
    description: "Application web serveur complète avec authentification sécurisée, gestion de données SQL et API personnalisée.",
  },
  {
    image: "chemin/vers/image-projet3.jpg",
    imageAlt: "Aperçu du Projecjt 3",
    tags: ["Javascript", "API"],
    title: "Application Full-Stack",
    description: "Projet combinant une interface dynamique JavaScript à la consommation d'APIs REST externes pour le traitement de données.",
  },
];

function Projets() {
  return (
    <section className="content-section section-soft">
      <div className="section-inner">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Mes Projets Réalisés</h2>
          <p className="section-description">
            Découvrez une sélection de mes récents travaux combinant intégration Front-End soignée
            et architectures Back-End robustes.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="project-image" src={project.image} alt={project.imageAlt} />
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description project-description">{project.description}</p>
                <a href="https://projet-demo.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  Voir plus <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
