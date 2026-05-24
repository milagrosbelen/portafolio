import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import BentoCard from './ui/BentoCard'

const experience = {
  company: 'Linkiame.com',
  url: 'https://linkiame.com',
  role: 'Frontend Developer',
  line: 'React + Tailwind · catálogos y turnos · REST API',
  tech: ['React', 'Tailwind', 'Laravel', 'REST API'],
}

const Experience = () => (
  <section id="experience" className="section-compact relative">
    <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
      <SectionHeader compact label="Experiencia" title="Trabajo actual" />

      <BentoCard as="a" href={experience.url} target="_blank" rel="noopener noreferrer" className="!p-0 block group">
        <div className="grid md:grid-cols-[220px_1fr]">
          <div className="h-40 md:h-full min-h-[160px] overflow-hidden">
            <img
              src="/linkiame.png"
              alt={experience.company}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col justify-center gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <span className="text-xs font-semibold text-accent-300 bg-accent-500/15 px-3 py-1 rounded-full border border-accent-400/20">
                {experience.role}
              </span>
            </div>
            <p className="text-sm text-gray-400">{experience.line}</p>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-primary-300 font-medium mt-1">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Visitar sitio
            </span>
          </div>
        </div>
      </BentoCard>
    </div>
  </section>
)

export default Experience
