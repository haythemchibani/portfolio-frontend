import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Haythem Echibani. All rights reserved.</p>
        <p className="mt-2 text-sm">Master's in Computer & Telecom Networks | Sousse, Tunisia</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="mailto:chibanihaythem386@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Email
          </a>
          <a href="https://linkedin.com/in/haythem-chibani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            LinkedIn
          </a>
          <a href="tel:+21625598922" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Phone
          </a>
        </div>
      </footer>
    </main>
  )
}