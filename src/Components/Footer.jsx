

import { Link } from 'react-router-dom';
function Footer () {
return(

<footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        
        <Link to="/about" className="hover:text-gray-900">A propos</Link>
        <Link to="/skills" className="hover:text-gray-900">Compétences</Link>
        <Link to="/projects" className="hover:text-gray-900">Projets</Link>
        <Link to="/contact" className="hover:text-gray-900">Contact</Link>
        
    </nav>

    <div className="flex justify-center space-x-5">
        
        <a href="https://www.facebook.com/profile.php?id=61558648110463" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>

         <a href="https://www.instagram.com/rachelle.kounyeton/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </a>
          
          <a href="https://www.linkedin.com/in/rachelle-kounyeton-bbbb693a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin.png" alt="LinkedIn" />
        </a>
        
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2026 Rachelle Kounyeton.</p>
</footer>
)
}
export default Footer;