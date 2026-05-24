import React from 'react'

const PhoneFrame = ({ children, className = '' }) => (
  <div
    className={`relative mx-auto w-[240px] ${className}`}
    style={{ perspective: '1200px' }}
  >
    {/* Sombra 3D en el suelo */}
    <div className="absolute -bottom-4 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-[100%] bg-primary-500/20 blur-2xl" />

    <div
      className="relative rounded-[2.75rem] p-[7px] transition-transform duration-500"
      style={{
        transform: 'rotateY(-8deg) rotateX(4deg)',
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(145deg, #3f3f46 0%, #18181b 40%, #09090b 100%)',
        boxShadow:
          '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}
    >
      {/* Brillo lateral */}
      <div className="pointer-events-none absolute inset-y-8 left-0 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="absolute left-1/2 top-2.5 z-30 h-6 w-[88px] -translate-x-1/2 rounded-full bg-black shadow-inner" />

      <div
        className="relative overflow-hidden rounded-[2.25rem] bg-black"
        style={{
          aspectRatio: '9 / 19.5',
          maxHeight: '520px',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {children}
      </div>
    </div>
  </div>
)

export default PhoneFrame
