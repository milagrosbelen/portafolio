import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectShowcase = ({ project }) => {
  const Mockup = project.Mockup
  const [showGallery, setShowGallery] = useState(false)

  return (
    <article className="glass-glow rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-0">
        <div className="relative bg-dark-900/80 p-5 flex items-center justify-center min-h-[280px] lg:min-h-[320px]">
          <span
            className={`absolute top-3 left-3 z-10 px-2.5 py-0.5 text-white text-[10px] font-bold rounded-full uppercase ${
              project.badgeColor || 'bg-primary-500/90'
            }`}
          >
            {project.badge}
          </span>
          {project.status && (
            <span className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-400/30">
              {project.status}
            </span>
          )}
          {Mockup ? (
            <div className="scale-[0.88] origin-center">
              <Mockup />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-[220px] rounded-xl object-cover object-top"
            />
          )}
        </div>

        <div className="p-5 md:p-6 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
          <div>
            <h3 className="text-xl font-bold text-white">
              {project.title}
              <span className="text-primary-400 font-normal text-base"> — {project.subtitle}</span>
            </h3>
            <p className="text-accent-300/90 text-xs mt-1">{project.role}</p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

          {project.features?.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-1">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="text-xs text-gray-500 flex gap-1.5">
                  <span className="text-primary-400">·</span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary-500/10 text-primary-300 border border-primary-400/15"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-1">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-500/25 text-primary-200 text-xs font-semibold border border-primary-400/30 hover:bg-primary-500/35 transition-all"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Demo
              </a>
            )}
            {project.landing && (
              <a
                href={project.landing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg glass text-gray-400 text-xs font-medium hover:text-white transition-all"
              >
                {project.apiLabel || 'API'}
              </a>
            )}
          </div>

          {project.gallery?.length > 0 && (
            <button
              type="button"
              onClick={() => setShowGallery((v) => !v)}
              className="text-left text-[10px] font-semibold text-accent-300 uppercase tracking-wider hover:text-primary-300"
            >
              {showGallery ? '▾ Ocultar' : `▸ Capturas (${project.gallery.length})`}
            </button>
          )}
          {showGallery && project.gallery?.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-24 w-14 rounded-lg object-cover object-top border border-white/10 flex-shrink-0"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectShowcase
