import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Développement web &amp; mobile</span>
          <h1 className="hero-title">
            Rachelle <span>KOUNYETON</span>
          </h1>
          <p className="hero-description">
            Je suis Rachelle KOUNYETON, une développeuse web et mobile passionnée par la création
            d'expériences numériques uniques. Mon objectif est de transformer des idées en réalité
            grâce à des solutions web innovantes.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="button-primary">Me découvrir</Link>
            <Link to="/contact" className="button-secondary">Me contacter <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



