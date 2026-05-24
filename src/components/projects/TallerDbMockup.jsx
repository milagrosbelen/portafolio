import React from 'react'
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlinePlus,
  HiOutlineTrendingUp,
} from 'react-icons/hi'
import { BsGridFill } from 'react-icons/bs'
import { FaWrench, FaHistory, FaUser } from 'react-icons/fa'
import PhoneFrame from './PhoneFrame'

const MiniStat = ({ icon: Icon, value, label }) => (
  <div
    className="rounded-xl p-2.5 border border-zinc-700/50"
    style={{
      background: 'linear-gradient(160deg, rgba(39,39,42,0.95) 0%, rgba(24,24,27,0.98) 100%)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
    }}
  >
    <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-md bg-zinc-800/80">
      <Icon className="h-3 w-3 text-zinc-400" />
    </div>
    <p className="text-sm font-bold text-white leading-none">{value}</p>
    <p className="text-[7px] font-semibold uppercase tracking-wide text-zinc-500 mt-1 leading-tight">
      {label}
    </p>
  </div>
)

const BottomNav = () => (
  <div
    className="flex shrink-0 items-center justify-around border-t border-zinc-800/80 px-1 py-2"
    style={{
      background: 'linear-gradient(180deg, rgba(9,9,11,0.9) 0%, #000 100%)',
      boxShadow: '0 -8px 24px rgba(0,0,0,0.5)',
    }}
  >
    {[
      { icon: BsGridFill, label: 'Dashboard', active: true },
      { icon: FaWrench, label: 'Servicios', active: false },
      { icon: FaHistory, label: 'Historial', active: false },
      { icon: FaUser, label: 'Perfil', active: false },
    ].map(({ icon: Icon, label, active }) => (
      <div key={label} className="flex flex-col items-center gap-0.5">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            active ? 'bg-red-600/25 shadow-[0_0_12px_rgba(220,38,38,0.35)]' : ''
          }`}
        >
          <Icon className={`h-3 w-3 ${active ? 'text-red-500' : 'text-zinc-600'}`} />
        </div>
        <span className={`text-[7px] font-medium ${active ? 'text-red-500' : 'text-zinc-600'}`}>
          {label}
        </span>
      </div>
    ))}
  </div>
)

const TallerDbMockup = () => (
  <PhoneFrame>
    <div className="flex h-full flex-col bg-black text-white overflow-hidden">
      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between px-4 pt-2 pb-0.5 text-[9px] text-white/90">
        <span className="font-semibold tabular-nums">6:48</span>
        <div className="flex items-center gap-0.5">
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="w-[3px] rounded-sm bg-white/70" style={{ height: 4 + i }} />
            ))}
          </div>
          <span className="ml-1 h-2 w-3 rounded-[2px] border border-red-500/60 bg-red-500/20" />
        </div>
      </div>

      {/* Contenido — solo lo que cabe en 1 pantalla */}
      <div className="flex flex-1 flex-col gap-2 overflow-hidden px-3 pb-1 pt-1 min-h-0">
        {/* Header */}
        <header className="shrink-0">
          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-red-500">
            Reporte mensual
          </p>
          <h2 className="text-[13px] font-bold leading-tight mt-0.5">
            Buen trabajo, Lucas{' '}
            <span role="img" aria-label="fuego">
              🔥
            </span>
          </h2>
          <p className="text-[8px] text-zinc-500 mt-0.5">Taller de prueba · Mayo 2026</p>
        </header>

        {/* Card principal — efecto 3D */}
        <div
          className="shrink-0 rounded-2xl p-2.5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(165deg, #b91c1c 0%, #dc2626 45%, #991b1b 100%)',
            boxShadow:
              '0 12px 28px -6px rgba(220,38,38,0.55), 0 4px 0 0 rgba(127,29,29,0.8), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -2px 8px rgba(0,0,0,0.2)',
            transform: 'translateZ(8px)',
          }}
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />

          <p className="text-[7px] font-bold uppercase tracking-wide text-white/95 relative z-10">
            Ganancia neta del mes
          </p>
          <p className="text-[7px] text-white/65 relative z-10">Mano de obra · Mayo 2026</p>

          <span
            className="relative z-10 mt-1 inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[7px] font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.25)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <HiOutlineTrendingUp className="h-2.5 w-2.5" />
            +100% vs mes ant.
          </span>

          <p className="relative z-10 mt-1 text-xl font-bold tracking-tight tabular-nums">
            $ 815.678
          </p>

          <svg viewBox="0 0 200 28" className="relative z-10 mt-0.5 h-5 w-full opacity-90">
            <polyline
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="2"
              strokeLinecap="round"
              points="0,24 50,24 100,6 150,24 200,24"
            />
          </svg>

          <div className="relative z-10 mt-1.5 grid grid-cols-2 gap-2 border-t border-white/20 pt-1.5">
            <div>
              <p className="text-xs font-bold tabular-nums">5</p>
              <p className="text-[6px] uppercase text-white/65 leading-tight">Servicios cerrados</p>
            </div>
            <div>
              <p className="text-xs font-bold tabular-nums">2</p>
              <p className="text-[6px] uppercase text-white/65 leading-tight">Días activos</p>
            </div>
          </div>

          <button
            type="button"
            className="relative z-10 mt-2 flex w-full items-center justify-center gap-1 rounded-full py-1.5 text-[8px] font-bold uppercase text-red-600"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, #f4f4f5 100%)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)',
            }}
          >
            <HiOutlinePlus className="h-3 w-3" />
            Nuevo servicio
          </button>
        </div>

        {/* 2 mini stats — como en la captura real */}
        <div className="grid shrink-0 grid-cols-2 gap-2">
          <MiniStat icon={HiOutlineClock} value="5" label="Servicios cerrados" />
          <MiniStat
            icon={HiOutlineCurrencyDollar}
            value="$ 1.178.678"
            label="Ingreso cobrado"
          />
        </div>
      </div>

      <BottomNav />
    </div>
  </PhoneFrame>
)

export default TallerDbMockup
