// src/components/Projects.tsx

import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="border p-4 mb-4 rounded">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
          <p className="text-sm text-gray-500">{project.tech}</p>
          <a href={project.github} className="text-blue-600">
            GitHub
          </a>
        </div>
      ))}
    </section>
  )
}
