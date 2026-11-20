import profil from "../assets/profil.jpeg";
function About() {
    return (
       <section class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
    
    
    <div class="w-full md:w-1/2 flex justify-center">
      <div class="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
      
        <div class="absolute -inset-1 from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
      
        <img 
          src={profil} 
          alt="Photo de profil" 
          class="relative w-full h-full object-cover rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
        />
      </div>
    </div>

 
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      <span class="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold">
        À Propos de Moi
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Développeuse Web Et Mobile Passionnée, Créative et Innovante
      </h2>
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Passionné par l'écosystème du web, je conçois et réalise des applications performantes, fluides et intuitives. À l'aise aussi bien en <strong class="text-gray-900 dark:text-white">Front-End</strong> pour créer des interfaces utilisateur modernes et réactives, qu'en <strong class="text-gray-900 dark:text-white">Back-End</strong> pour concevoir des architectures solides et sécurisées.
      </p>

      
      {/* <div class="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
        <span class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">HTML / CSS / Tailwind</span>
        <span class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">JavaScript / React</span>
        <span class="px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 rounded-full">Node.js / Express</span>
        <span class="px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 rounded-full">Base de données (SQL/NoSQL)</span>
      </div> */}

    
      <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
      
        <a 
          href="chemin/vers/votre-cv.pdf" 
          download 
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Télécharger mon CV
        </a>
    {/* <a 
          href="#contact" 
          class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Me contacter
        </a> */}
      </div>

    </div>

  </div>
</section>
    )
    }


export default About;



