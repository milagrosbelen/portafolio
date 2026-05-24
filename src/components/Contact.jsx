import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import { SOCIAL_LINKS } from '../data/links'

const linkedIn = SOCIAL_LINKS.find((l) => l.name === 'LinkedIn')
const whatsapp = SOCIAL_LINKS.find((l) => l.name === 'WhatsApp')
const github = SOCIAL_LINKS.find((l) => l.name === 'GitHub')

const Contact = () => (
  <section id="contact" className="section-compact relative pb-16">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeader compact label="Contacto" title="¿Trabajamos juntos?" />

      <div className="grid sm:grid-cols-2 gap-3">
        {linkedIn && (
          <a
            href={linkedIn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-glow rounded-xl p-5 flex items-center gap-4 hover:border-primary-400/30 transition-all group"
          >
            <FaLinkedin className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-white text-sm">Empresa / reclutador</p>
              <p className="text-xs text-gray-500 mt-0.5">LinkedIn →</p>
            </div>
          </a>
        )}
        {whatsapp && (
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-glow rounded-xl p-5 flex items-center gap-4 hover:border-emerald-400/30 transition-all group"
          >
            <FaWhatsapp className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-white text-sm">Cliente / proyecto</p>
              <p className="text-xs text-gray-500 mt-0.5">WhatsApp →</p>
            </div>
          </a>
        )}
      </div>

      {github && (
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 py-3 glass rounded-xl text-sm text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </a>
      )}
    </div>
  </section>
)

export default Contact
