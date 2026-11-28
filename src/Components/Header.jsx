   import { Link, NavLink } from "react-router-dom";

   function Header() {
     const navClass = ({ isActive }) => `nav-link${isActive ? " nav-link-active" : ""}`;

     return (
       <header className="site-header">
         <nav className="nav-bar" aria-label="Navigation principale">
           <Link to="/" className="brand-mark" aria-label="Accueil - Rachelle KOUNYETON">
             RK
           </Link>

           <ul className="nav-links">
             <li><NavLink to="/about" className={navClass}>À propos</NavLink></li>
             <li><NavLink to="/skills" className={navClass}>Compétences</NavLink></li>
             <li><NavLink to="/projects" className={navClass}>Projets</NavLink></li>
           </ul>

           <Link to="/contact" className="button-primary nav-contact">
             Contact <span aria-hidden="true">↗</span>
           </Link>
         </nav>
       </header>
     );
}

   export default Header;