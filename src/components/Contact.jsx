import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import { SOCIAL_LINKS } from '../data/links'

const ICON_MAP = { GitHub: FaGithub, LinkedIn: FaLinkedin, WhatsApp: FaWhatsapp }

const Contact = () => (
  <section id="contact" className="section-padding bg-dark-950 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <SectionHeader
          label="Contacto"
          title="¿Trabajamos juntos?"
          description="Estoy abierta a nuevas oportunidades y proyectos interesantes. Conectemos a través de mis redes profesionales."
          className="mb-8"
        />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICON_MAP[link.name]
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 glass-rose rounded-xl hover:scale-105 transition-all duration-300 border-primary-400/20"
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-primary-300 transition-colors" />
                <span className="text-white font-medium">{link.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Contact

