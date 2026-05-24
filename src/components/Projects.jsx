import React, { useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import ProjectShowcase from './projects/ProjectShowcase'
import TallerDbMockup from './projects/TallerDbMockup'
import SpotMockup from './projects/SpotMockup'

const projects = [
  {
    id: 'tallerdb',
    filterLabel: 'TallerDB',
    category: 'client',
    badge: 'Cliente',
    badgeColor: 'bg-red-600/90',
    title: 'TallerDB',
    subtitle: 'Taller mecánico',
    role: 'Full Stack · producción',
    description:
      'Sistema mobile-first: dashboard, servicios multi-paso, checklist, presupuesto y PDF. Cliente real con datos en vivo.',
    features: ['Dashboard métricas', 'Flujo servicio completo', 'Historial + PDF'],
    tech: ['React', 'Laravel', 'PostgreSQL'],
    Mockup: TallerDbMockup,
    gallery: [
      '/projects/tallerdb/dashboard.png',
      '/projects/tallerdb/presupuesto.png',
      '/projects/tallerdb/historial.png',
    ],
    demo: 'https://taller-app-fawn.vercel.app/',
    landing: 'https://tallerdb-chbclkqr.on-forge.com/',
    apiLabel: 'API',
  },
  {
    id: 'milogit',
    filterLabel: 'MiLogit',
    category: 'personal',
    badge: 'Personal',
    badgeColor: 'bg-primary-500/90',
    title: 'MiLogit',
    subtitle: 'Training tracker',
    role: 'Full Stack',
    description: 'Registro de entrenamientos, progreso mensual y gráficos de rendimiento.',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    image: '/milogit-dashboard.png',
    demo: 'https://training-log-drab.vercel.app/',
  },
  {
    id: 'spot',
    filterLabel: 'Spot',
    category: 'academic',
    badge: 'Facultad',
    badgeColor: 'bg-accent-600/90',
    status: 'En curso',
    title: 'Spot',
    subtitle: 'Negocios locales',
    role: 'Full Stack · académico',
    description: 'App para bares: vistas, promos activas y mapa. UI y flujos principales listos.',
    features: ['Dashboard métricas', 'Gestión promos'],
    tech: ['React', 'C#', 'SQL Server'],
    Mockup: SpotMockup,
    gallery: ['/projects/spot/dashboard.png', '/projects/spot/promos.png'],
    demo: '#',
  },
]

const Projects = () => {
  const [activeId, setActiveId] = useState('tallerdb')
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader
          compact
          label="Portfolio"
          title="Proyectos en producción"
          description="Un caso a la vez — con demo en vivo."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeId === p.id
                  ? 'bg-gradient-to-r from-primary-500/30 to-accent-500/20 text-white border border-primary-400/40 shadow-lg shadow-primary-500/10'
                  : 'glass text-gray-500 hover:text-gray-300'
              }`}
            >
              {p.filterLabel}
              {p.status && (
                <span className="ml-1.5 text-[9px] text-amber-400 font-normal">· {p.status}</span>
              )}
            </button>
          ))}
        </div>

        <ProjectShowcase key={active.id} project={active} />
      </div>
    </section>
  )
}

export default Projects
