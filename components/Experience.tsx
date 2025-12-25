export default function Experience() {
  const experiences = [
    {
      company: "LEON! Wiring Systems",
      position: "Final Year Project Intern",
      period: "Feb 2025 - May 2025",
      location: "Sousse, Tunisia",
      description: "Development of an Intelligent Application for Automated Management of Quality Control System using MERN stack",
      technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      company: "Sotetel",
      position: "Telecom Intern",
      period: "Aug 2024",
      location: "Sousse, Tunisia",
      description: "Participated in optical fiber installation, splicing, quality control, and firewall configuration in data centers",
      technologies: ["Optical Fiber", "Firewall Configuration", "Data Center"]
    },
    {
      company: "Tunisie Telecom",
      position: "Network Intern",
      period: "Aug 2022",
      location: "Gafsa & Medenine, Tunisia",
      description: "Studied ADSL/MSAN technologies, MSAN IP configurations, and telephone switch components (EWSD system)",
      technologies: ["ADSL", "MSAN", "EWSD", "Telephone Networks"]
    }
  ]

  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{exp.location}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}