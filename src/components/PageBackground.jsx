import React from 'react'

const PageBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute inset-0 bg-[#08080c]" />
    <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary-500/18 blur-[100px] animate-float" />
    <div className="absolute top-1/3 -right-20 h-[360px] w-[360px] rounded-full bg-accent-500/14 blur-[90px]" />
    <div className="absolute bottom-0 left-0 h-[300px] w-[500px] rounded-full bg-primary-600/10 blur-[80px]" />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(236,72,153,0.12), transparent),
          radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168,85,247,0.08), transparent)
        `,
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.4]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
      }}
    />
  </div>
)

export default PageBackground
