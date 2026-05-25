import React, { useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import ProjectShowcase from './projects/ProjectShowcase'
import TallerDbMockup from './projects/TallerDbMockup'
import SpotMockup from './projects/SpotMockup'

const projects = [
  {
    id: 'tallerdb',
    filterLabel: 'TallerDB',
    badge: 'Cliente',
    badgeColor: 'bg-red-600/90',
    title: 'TallerDB',
    subtitle: 'Taller mecánico',
    role: 'Full Stack · producción',
    description:
      'Sistema mobile-first: dashboard, servicios, checklist, presupuesto y PDF. Cliente real en vivo.',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    Mockup: TallerDbMockup,
    gallery: [
      '/projects/tallerdb/dashboard.png',
      '/projects/tallerdb/dashboard-2.png',
      '/projects/tallerdb/presupuesto.png',
      '/projects/tallerdb/historial.png',
    ],
    galleryLabels: ['Dashboard', 'Métricas', 'Presupuesto', 'Historial'],
    demo: 'https://taller-app-fawn.vercel.app/',
    deployment: [
      { label: 'Frontend', value: 'Vercel' },
      { label: 'Backend', value: 'Laravel Forge' },
      { label: 'Base de datos', value: 'Neon (PostgreSQL)' },
    ],
  },
  {
    id: 'milogit',
    filterLabel: 'MiLogit',
    badge: 'Personal',
    badgeColor: 'bg-primary-500/90',
    title: 'MiLogit',
    subtitle: 'Training tracker',
    role: 'Full Stack',
    description: 'Entrenamientos, progreso mensual y métricas con gráficos.',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    image: '/milogit-dashboard.png',
    demo: 'https://training-log-drab.vercel.app/',
    deployment: [
      { label: 'Frontend', value: 'Vercel' },
      { label: 'Backend', value: 'Render' },
      { label: 'Base de datos', value: 'PostgreSQL' },
    ],
  },
  {
    id: 'spot',
    filterLabel: 'Spot',
    badge: 'Facultad',
    badgeColor: 'bg-accent-600/90',
    status: 'En curso',
    title: 'Spot',
    subtitle: 'Negocios locales',
    role: 'Full Stack · académico',
    description: 'Vistas, promos y mapa para bares. UI funcional.',
    tech: ['React', 'C#', 'SQL Server'],
    Mockup: SpotMockup,
    gallery: ['/projects/spot/dashboard.png', '/projects/spot/promos.png'],
    galleryLabels: ['Dashboard', 'Promos'],
    demo: '#',
  },
]

const Projects = () => {
  const [activeId, setActiveId] = useState('tallerdb')
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
        <SectionHeader compact label="Portfolio" title="Proyectos" description="Demo en vivo." />

        <div className="flex flex-wrap justify-center gap-2 mb-8 p-1.5 rounded-2xl glass max-w-md mx-auto">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`flex-1 min-w-[90px] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeId === p.id
                  ? 'bg-gradient-to-r from-primary-500/40 to-accent-500/25 text-white shadow-lg shadow-primary-500/15 border border-primary-400/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {p.filterLabel}
            </button>
          ))}
        </div>

        <ProjectShowcase key={active.id} project={active} />
      </div>
    </section>
  )
}

export default Projects
