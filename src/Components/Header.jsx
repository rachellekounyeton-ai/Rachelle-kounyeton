   import { Link } from 'react-router-dom';
function Header () {
return(


     <div className="dark:bg-gray-800 text-white font-sans flex flex-col items-center relative overflow-x-hidden p-5">
            

            <header className="relative z-10 mt-2">
                <nav className="flex items-center gap-6 bg-[#121214]/75 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-[11px] font-medium">
                    <Link to="/" className="hover:text-white transition-colors">RK</Link>
                        
                    </div>

                    <ul className="flex items-center gap-5 text-xs text-gray-400">
                        <li><Link to="/about" className="hover:text-white transition-colors">A propos</Link></li>
                        <li><Link to="/skills" className="hover:text-white transition-colors">Compétences</Link></li>
                        <li><Link to="/projects" className="hover:text-white transition-colors">Projets</Link></li>
                    </ul>

                    <Link to="/contact" className="text-xs hover:text-whiteV px-3 py-1 rounded-full flex items-center gap-1 hover:opacity-80 transition-opacity">
                        Contact <span className="text-[10px]">↗</span>
                    </Link>
                </nav>
            </header>
        </div>
)
}

    export default Header;