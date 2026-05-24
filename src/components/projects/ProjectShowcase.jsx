import React, { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import BentoCard from '../ui/BentoCard'

const ProjectShowcase = ({ project }) => {
  const Mockup = project.Mockup
  const [showGallery, setShowGallery] = useState(false)

  return (
    <BentoCard hover={false} className="!p-0 overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,300px)_1fr]">
        <div className="relative bg-[#0c0c12] p-6 flex items-center justify-center min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
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
          {Mockup ? (
            <div className="origin-center" style={{ transform: 'scale(0.95)' }}>
              <Mockup />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-[240px] rounded-2xl object-cover object-top shadow-2xl"
            />
          )}
        </div>

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
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-6">
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Ver demo
              </a>
            )}
          </div>

          {project.gallery?.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => setShowGallery((v) => !v)}
                className="text-left text-xs font-semibold text-accent-300 uppercase tracking-wider hover:text-primary-300"
              >
                {showGallery ? '▾ Ocultar capturas' : `▸ Ver capturas (${project.gallery.length})`}
              </button>
              {showGallery && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {project.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-28 w-16 rounded-xl object-cover object-top border border-white/10 flex-shrink-0"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </BentoCard>
  )
}

export default ProjectShowcase
