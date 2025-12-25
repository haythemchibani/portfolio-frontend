"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
      {/* Text Content */}
      <div className="max-w-2xl lg:mr-16 text-center lg:text-left">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello there! 👋</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          I'm <span className="text-blue-600 dark:text-blue-400">Haythem Echibani</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Computer Systems Engineer & Full-Stack Developer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Master's in Computer & Telecom Networks • Cybersecurity • MERN Stack • IoT & Big Data
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Contact Me
          </a>
          <a 
            href="#experience" 
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Experience
          </a>
        </div>
      </div>
      
      {/* Profile Photo - Simple img tag */}
      <div className="mt-12 lg:mt-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto lg:mx-0">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30"></div>
          
          {/* Profile image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <img
              src="/haythem.jpeg" // Your photo in public folder
              alt="Haythem Echibani - Computer Systems Engineer"
              className="w-96 h-96l object-cover bg-gradient-to-br from-blue-400 to-indigo-500"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      <div class="text-center">
                        <div class="text-5xl mb-2">👨‍💻</div>
                        <div class="font-semibold">Haythem Echibani</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
          
          {/* Tech badges around photo */}
          <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold text-gray-800 dark:text-white">MERN</span>
          </div>
          <div className="absolute -bottom-2 -left-2 bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">Network</span>
          </div>
        </div>
      </div>
    </section>
  )
}