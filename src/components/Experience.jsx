import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'

const experiences = [
  {
    company: 'Linkiame.com',
    url: 'https://linkiame.com',
    description:
      'Aplicación web que permite a los usuarios gestionar páginas de catálogo y sistemas de turnos mediante un sistema de suscripciones.',
    image: '/linkiame.png',
    role: 'Frontend Developer',
    responsibilities: [
      'Desarrollo de interfaces en React',
      'Implementación del frontend de las páginas de catálogo',
      'Implementación del frontend de la sección de turnos',
      'Consumo de APIs del backend',
      'Integración de funcionalidades existentes',
    ],
    tech: ['React', 'TailwindCSS', 'Laravel', 'PHP', 'REST API'],
  },
]

const ExperienceCard = ({ experience }) => {
  return (
    <article className="w-full max-w-4xl mx-auto">
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
          <div className="rounded-2xl overflow-hidden border-l-4 border-accent-500 bg-dark-800/50 hover:bg-dark-800/70 border border-white/5 hover:border-accent-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10">
          <div className="relative h-56 md:h-64 overflow-hidden bg-dark-700">
            <img
              src={experience.image}
              alt={experience.company}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-accent-500/90 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                Experiencia actual
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {experience.company}
              </h3>
              <span className="text-accent-300 font-medium">{experience.role}</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {experience.description}
            </p>

            <ul className="space-y-2">
              {experience.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 text-sm flex items-start gap-2"
                >
                  <span className="text-accent-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-accent-500/15 text-accent-300 rounded-lg text-sm font-medium border border-accent-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-accent-300 text-sm font-medium group-hover:gap-3 transition-all duration-300">
              <FaExternalLinkAlt className="w-4 h-4" />
              Visitar sitio
            </div>
          </div>
        </div>
      </a>
    </article>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          label="Experiencia profesional"
          title="Colaboraciones"
          description="Empresa en la que desarrollo actualmente como Frontend Developer"
          labelClassName="text-accent-300"
        />

        <div className="flex justify-center">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
