import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import BentoCard from '../ui/BentoCard'
import PhoneScreenshot from './PhoneScreenshot'
import ProjectGallery from './ProjectGallery'

const ProjectShowcase = ({ project }) => {
  const Mockup = project.Mockup
  const hasGallery = project.gallery?.length > 0

  const [viewMode, setViewMode] = useState('screenshot')
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
    setViewMode(hasGallery ? 'screenshot' : 'mockup')
  }, [project.id, hasGallery])

  const showMockup = viewMode === 'mockup' && Mockup
  const showScreenshot = hasGallery && viewMode === 'screenshot'
  const showStaticImage = !Mockup && project.image && !hasGallery

  return (
    <BentoCard hover={false} className="!p-0 overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Columna celular */}
        <div className="relative flex flex-col items-center gap-4 p-6 bg-[#0c0c12] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1 text-white text-[10px] font-bold rounded-full uppercase tracking-wider ${
              project.badgeColor || 'bg-primary-500/90'
            }`}
          >
            {project.badge}
          </span>
          {project.status && (
            <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-400/30">
              {project.status}
            </span>
          )}

          <div className="mt-8 w-full flex justify-center">
            {showMockup && <Mockup />}
            {showScreenshot && (
              <PhoneScreenshot
                key={project.gallery[activeIndex]}
                src={project.gallery[activeIndex]}
                alt={`${project.title} - ${project.galleryLabels?.[activeIndex] || 'captura'}`}
              />
            )}
            {showStaticImage && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[240px] rounded-2xl object-cover object-top shadow-2xl"
              />
            )}
          </div>

          {hasGallery && (
            <ProjectGallery
              images={project.gallery}
              labels={project.galleryLabels}
              activeIndex={activeIndex}
              onSelect={(index) => {
                setActiveIndex(index)
                setViewMode('screenshot')
              }}
              showMockupOption={!!Mockup}
              mockupActive={viewMode === 'mockup'}
              onSelectMockup={() => setViewMode('mockup')}
            />
          )}
        </div>

        {/* Info del proyecto */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-primary-400 text-sm font-medium mt-1">{project.subtitle}</p>
            <p className="text-gray-500 text-xs mt-2">{project.role}</p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-primary-500/10 text-primary-200 border border-primary-400/15"
              >
                {t}
              </span>
            ))}
          </div>

          {project.deployment?.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Deploy
              </span>
              <div className="flex flex-wrap gap-2">
                {project.deployment.map((item) => (
                  <span
                    key={item.label}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-500/10 text-accent-200 border border-accent-400/15"
                  >
                    <span className="text-gray-500">{item.label}:</span> {item.value}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-6"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Ver demo
              </a>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

export default ProjectShowcase
