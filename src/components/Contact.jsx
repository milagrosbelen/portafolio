import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import BentoCard from './ui/BentoCard'
import { SOCIAL_LINKS } from '../data/links'

const linkedIn = SOCIAL_LINKS.find((l) => l.name === 'LinkedIn')
const whatsapp = SOCIAL_LINKS.find((l) => l.name === 'WhatsApp')
const github = SOCIAL_LINKS.find((l) => l.name === 'GitHub')

const Contact = () => (
  <section id="contact" className="section-compact relative pb-20">
    <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
      <SectionHeader compact label="Contacto" title="¿Trabajamos juntos?" />

      <div className="grid sm:grid-cols-2 gap-4">
        {linkedIn && (
          <BentoCard
            as="a"
            href={linkedIn.href}
            target="_blank"
            rel="noopener noreferrer"
            accent="primary"
            className="!p-6 flex items-center gap-5 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 border border-primary-400/20">
              <FaLinkedin className="w-7 h-7 text-primary-400" />
            </div>
            <div>
              <p className="font-bold text-white">Empresa / reclutador</p>
              <p className="text-xs text-gray-500 mt-1">LinkedIn →</p>
            </div>
          </BentoCard>
        )}
        {whatsapp && (
          <BentoCard
            as="a"
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            accent="emerald"
            className="!p-6 flex items-center gap-5 group"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/25">
              <FaWhatsapp className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-white">Cliente / proyecto</p>
              <p className="text-xs text-gray-500 mt-1">WhatsApp →</p>
            </div>
          </BentoCard>
        )}
      </div>

      {github && (
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-sm text-gray-400 hover:text-white hover:border-primary-400/20 transition-all"
        >
          <FaGithub className="w-5 h-5" />
          Ver código en GitHub
        </a>
      )}
    </div>
  </section>
)

export default Contact
