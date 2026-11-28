import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Navigation de pied de page">
          <Link to="/about" className="footer-link">À propos</Link>
          <Link to="/skills" className="footer-link">Compétences</Link>
          <Link to="/projects" className="footer-link">Projets</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>
        <div className="footer-socials">
          <a href="https://www.facebook.com/people/Rachelle-Kounyeton/61558648110463" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href="https://www.instagram.com/rachelle.kounyeton" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://www.linkedin.com/in/rachelle-kounyeton-bbbb693a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
        <p className="footer-copy">&copy; 2026 Rachelle KOUNYETON.</p>
      </div>
    </footer>
  );
}

export default Footer;
