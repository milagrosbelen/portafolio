import React from 'react'
import SectionHeader from './ui/SectionHeader'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiWordpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
} from 'react-icons/si'
import { TbApi, TbPlugConnected, TbLanguage } from 'react-icons/tb'
import { HiOutlineSparkles } from 'react-icons/hi2'
import TechCard from './TechCard'

const techStack = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Tecnologías de interfaz de usuario',
    technologies: [
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-sky-400' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Lenguajes y frameworks de servidor',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
      { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
      { name: 'C#', icon: SiCsharp, color: 'text-purple-400' },
    ],
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    description: 'Sistemas de gestión de datos',
    technologies: [
      { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: 'text-red-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    ],
  },
  {
    id: 'apis',
    title: 'APIs',
    description: 'Desarrollo e integración de interfaces de programación',
    technologies: [
      { name: 'REST API Development', icon: TbApi, color: 'text-emerald-400' },
      { name: 'REST API Integration', icon: TbPlugConnected, color: 'text-teal-400' },
    ],
  },
  {
    id: 'api-tools',
    title: 'API Tools',
    description: 'Herramientas para testing y documentación de APIs',
    technologies: [
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'Swagger', icon: SiSwagger, color: 'text-green-500' },
    ],
  },
  {
    id: 'version-control',
    title: 'Control de versiones',
    description: 'Gestión de código y colaboración',
    technologies: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-gray-100' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS',
    description: 'Gestión de contenidos',
    technologies: [
      { name: 'WordPress', icon: SiWordpress, color: 'text-blue-600' },
    ],
  },
  {
    id: 'workflow',
    title: 'Development Workflow',
    description: 'Herramientas de productividad para desarrollo',
    technologies: [
      {
        name: 'AI-Assisted Development',
        icon: HiOutlineSparkles,
        color: 'text-accent-400',
        subtitle: 'Cursor, ChatGPT, Claude',
      },
    ],
  },
  {
    id: 'languages',
    title: 'Idiomas',
    description: 'Habilidades de comunicación para el ámbito técnico',
    technologies: [
      {
        name: 'English — Technical Reading',
        icon: TbLanguage,
        color: 'text-sky-300',
        subtitle: 'Ability to read and understand technical documentation in English.',
      },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-950 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Stack Tecnológico"
          title="Tecnologías que domino"
          description="Organizado por categorías profesionales para una visión clara de mi expertise"
        />

        {/* Categorías */}
        <div className="space-y-16">
          {techStack.map((category) => (
            <div key={category.id} className="animate-fade-in">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="relative">
                    <TechCard
                      icon={tech.icon}
                      name={tech.name}
                      colorClass={tech.color}
                    />
                    {tech.subtitle && (
                      <p className="text-gray-500 text-xs text-center mt-2 px-1">
                        {tech.subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
