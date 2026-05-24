import React from 'react'

const PhoneFrame = ({ children, className = '' }) => (
  <div className={`relative mx-auto w-full max-w-[260px] ${className}`}>
    <div className="rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-black/50">
      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[2rem] bg-black">{children}</div>
    </div>
  </div>
)

export default PhoneFrame

