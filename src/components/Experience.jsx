import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'

const experience = {
  company: 'Linkiame.com',
  url: 'https://linkiame.com',
  role: 'Frontend Developer',
  line: 'React + Tailwind · catálogos y turnos · integración REST API',
  tech: ['React', 'Tailwind', 'Laravel', 'REST API'],
}

const Experience = () => (
  <section id="experience" className="section-compact relative">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeader compact label="Experiencia" title="Trabajo actual" />

      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block glass-glow rounded-2xl overflow-hidden hover:border-accent-400/30 transition-all group"
      >
        <div className="grid md:grid-cols-[200px_1fr] gap-0">
          <div className="h-36 md:h-auto md:min-h-[140px] overflow-hidden bg-dark-800">
            <img
              src="/linkiame.png"
              alt={experience.company}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex flex-col justify-center gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <span className="text-xs font-medium text-accent-300">{experience.role}</span>
            </div>
            <p className="text-sm text-gray-400">{experience.line}</p>
            <div className="flex flex-wrap gap-1.5">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-accent-500/15 text-accent-300 border border-accent-400/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent-300 font-medium mt-1">
              <FaExternalLinkAlt className="w-3 h-3" />
              Visitar sitio
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
)

export default Experience
