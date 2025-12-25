export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java EE", "C", "JavaScript", "HTML/CSS", "Kotlin"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "RESTful API"]
    },
    {
      title: "Data Science & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "NLP"]
    },
    {
      title: "Networking & Security",
      skills: ["Cisco CCNA", "Wireshark", "Nmap", "OpenSSL", "Security Audits", "Linux Administration"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "CI/CD"]
    },
    {
      title: "Specialized Technologies",
      skills: ["Big Data (Hadoop, Spark)", "IoT", "Android Development", "Windows Server"]
    }
  ]

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}