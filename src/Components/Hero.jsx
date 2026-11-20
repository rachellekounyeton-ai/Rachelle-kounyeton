// /
function Hero(){
  return (
<>

<div className="dark:bg-gray-800 text-white font-sans min-h-screen flex flex-col justify-start items-center relative overflow-x-hidden p-4">
            
            <div className="relative z-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_#ffffff] my-6"></div>

            <main className="relative z-10 text-center max-w-xl flex flex-col items-center mt-8">
                <span className="text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-4">
                    JE SUIS
                </span>

                <h1 className="font-serif italic text-6xl md:text-7xl font-medium tracking-tight text-gray-100 mb-4">
                    Rachelle KOUNYETON
                </h1>

                

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                    Je suis Rachelle KOUNYETON une developpeuse web et mobilepassionnée par la création d'expériences numériques uniques . Mon objectif est de transformer des idées en réalité grâce à des solutions web innovantes .
                </p>

                <div className="flex items-center gap-3">
                    <a href="/About" className="bg-white text-black text-xs font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-all">
                        Me decouvrir
                    </a>
                    <a href="/Contact" className="bg-[#121214] text-gray-400 text-xs font-medium px-6 py-3 rounded-full border border-white/10 hover:text-white hover:border-white/20 transition-all">
                        Me contacter
                    </a>
                </div>
            </main>

            <footer className="relative z-10 flex flex-col items-center gap-3 mb-2 mt-auto">
                <span className="text-[10px] tracking-[0.2em] text-gray-500 font-medium">SCROLL</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            </footer>
        </div>
</>
  )
}

export default Hero;



