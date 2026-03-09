import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'

const showcaseProject = {
  title: 'MiLogit',
  subtitle: 'Full Stack Training Tracker',
  description:
    'Aplicación web que permite registrar entrenamientos, visualizar progreso mensual y analizar métricas de rendimiento mediante gráficos y estadísticas.',
  image: '/milogit-dashboard.png',
  tech: ['React', 'TailwindCSS', 'Laravel', 'PHP', 'PostgreSQL'],
  role: 'Full Stack Developer',
  demo: 'https://training-log-drab.vercel.app/',
  github: '#',
}

const ProjectShowcase = ({ project }) => {
  return (
    <article className="w-full max-w-5xl mx-auto">
      <div className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/15 transition-all duration-300 flex flex-col">
        {/* Imagen principal - order-1 mobile y desktop */}
        <div className="relative w-full overflow-hidden bg-dark-800 order-1 md:order-1">
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              Proyecto personal
            </span>
          </div>
          <img
            src={project.image}
            alt={`Dashboard de ${project.title}`}
            className="w-full h-auto min-h-[320px] md:min-h-[420px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Contenido - flex para orden en mobile */}
        <div className="p-6 md:p-10 flex flex-col gap-6 order-2 md:order-2">
          {/* Badges - mobile: 2º, desktop: 4º */}
          <div className="flex flex-wrap gap-2 order-2 md:order-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-500/15 text-primary-300 rounded-lg text-sm font-medium border border-primary-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Título - mobile: 3º, desktop: 1º */}
          <div className="order-3 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
              <span className="text-primary-400 font-normal"> — {project.subtitle}</span>
            </h3>
          </div>

          {/* Rol - mobile: 4º, desktop: 5º */}
          <p className="text-accent-300 text-sm font-medium order-4 md:order-5">
            {project.role}
          </p>

          {/* Descripción - mobile: 5º, desktop: 2º */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl order-5 md:order-2">
            {project.description}
          </p>

          {/* Botones - mobile: 6º, desktop: 6º */}
          <div className="flex flex-wrap gap-4 pt-2 order-6 md:order-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 hover:scale-105 border border-primary-400/30 hover:border-primary-400/50 transition-all duration-300 text-base font-medium"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Ver Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 text-gray-300 hover:text-primary-300 hover:scale-105 transition-all duration-300 text-base font-medium"
            >
              <FaGithub className="w-4 h-4" />
              Ver Código
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-900/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          label="Proyecto personal"
          title="Desarrollo propio"
          description="Proyecto full stack desarrollado de principio a fin. Refleja mi enfoque técnico y capacidad de llevar ideas a producción."
        />

        <div className="w-full flex justify-center">
          <div className="w-full md:max-w-[80%] lg:max-w-[75%] max-w-5xl">
            <ProjectShowcase project={showcaseProject} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
