import React from 'react'

const ProjectGallery = ({
  images,
  labels = [],
  activeIndex,
  onSelect,
  showMockupOption,
  mockupActive,
  onSelectMockup,
}) => {
  if (!images?.length) return null

  return (
    <div className="w-full max-w-[240px] space-y-2">
      <p className="text-center text-[10px] text-gray-500 leading-snug">
        Tocá una captura para verla en el celular
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {showMockupOption && (
          <button
            type="button"
            onClick={onSelectMockup}
            className={`rounded-xl px-3 py-2 text-[10px] font-bold uppercase tracking-wide border-2 transition-all ${
              mockupActive
                ? 'border-primary-400 bg-primary-500/20 text-primary-200'
                : 'border-white/10 bg-white/5 text-gray-500 hover:border-white/20'
            }`}
          >
            Mockup
          </button>
        )}
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => onSelect(index)}
            className={`overflow-hidden rounded-xl border-2 transition-all ${
              !mockupActive && activeIndex === index
                ? 'border-primary-400 shadow-lg shadow-primary-500/30 scale-105'
                : 'border-transparent opacity-70 hover:opacity-100 hover:border-white/20'
            }`}
            aria-label={labels[index] || `Captura ${index + 1}`}
            aria-current={!mockupActive && activeIndex === index ? 'true' : undefined}
          >
            <img src={src} alt="" className="h-16 w-10 object-cover object-top" />
          </button>
        ))}
      </div>
      {(labels[activeIndex] || mockupActive) && (
        <p className="text-center text-xs font-medium text-primary-300">
          {mockupActive ? 'Vista mockup' : labels[activeIndex]}
        </p>
      )}
    </div>
  )
}

export default ProjectGallery
