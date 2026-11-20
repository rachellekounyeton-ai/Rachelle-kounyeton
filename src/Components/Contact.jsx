import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const envoyerEmail = (e) => {
    e.preventDefault();

    setStatus("Envoi en cours...");

    emailjs.sendForm(
      "service_723mg82",
      "template_x9mltfr",
      form.current,
      {
        publicKey: "vKcLiFTaE9zhF2TAX",
      }
    )
    .then(() => {
      setStatus("Votre message a été envoyé avec succès !");
      form.current.reset();
    })
    .catch((error) => {
      console.error("Erreur :", error);
      setStatus("Une erreur est survenue lors de l'envoi.");
    });
  };

  return (

<section id="contact" class="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
  <div class="max-w-6xl mx-auto">
    
   
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold">
        Restons en contact
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
        Me Contacter
      </h2>
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
        Vous avez un projet en tête, une opportunité ou simplement une question ? N'hésitez pas à me laisser un message !
      </p>
    </div>

   
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      
      <div class="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm">
        <form  ref={form} onSubmit={envoyerEmail}  className="space-y-6">
 
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom complet
              </label>
              <input 
                type="text" 
                id="name" 
                name="user_name" 
                required 
                placeholder="Votre nom"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Adresse e-mail
              </label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                required 
                placeholder="Votre email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
              />
            </div>
          </div>

          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sujet
            </label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              placeholder="Sujet de votre message"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Décrivez votre projet ou votre demande..."
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 resize-none"
            ></textarea>
          </div>

          
          <button 
            type="submit" 
            class="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Envoyer le message
          </button>
      <p className="text-sm text-center text-blue-600"> {status}</p>

        </form>
      </div>

     
     
      <div class="lg:col-span-5 space-y-6">
        
        
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <h3 class="text-xl font-bold mb-4">Coordonnées</h3>
          
          
          <div class="flex items-start gap-4">
            <div class="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Email</p>
              <a href="mailto:rachellekounyeton@gmail.com" class="text-base font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                rachellekounyeton@gmail.com
              </a>
            </div>
          </div>

          {/* <div class="flex items-start gap-4">
            <div class="p-3 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Localisation</p>
              <p class="text-base font-medium">Disponible en Remote / Présentiel</p>
            </div>
          </div> */}

          
          <div class="flex items-start gap-4">
            <div class="p-3 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Statut</p>
              <p class="text-base font-medium text-green-600 dark:text-green-400">Disponible pour de nouveaux projets</p>
            </div>
          </div>
        </div>

     
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 class="text-lg font-bold mb-4">Retrouvez-moi sur les réseaux</h3>
          <div class="flex gap-4">
         
            

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
          </div>
        </div>
        

    </div>

  </div>
</section>
    )
    
}
export default Contact;







