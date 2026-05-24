import React from 'react'
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineCube,
  HiOutlineTrendingUp,
  HiOutlinePlus,
} from 'react-icons/hi'
import { BsGridFill } from 'react-icons/bs'
import { FaWrench, FaHistory, FaUser } from 'react-icons/fa'
import PhoneFrame from './PhoneFrame'

const StatCard = ({ icon: Icon, value, label, sub, valueClass = 'text-white' }) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800">
      <Icon className="h-4 w-4 text-zinc-400" />
    </div>
    <p className={`text-lg font-bold leading-tight ${valueClass}`}>{value}</p>
    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
    {sub && <p className="mt-0.5 text-[8px] text-zinc-600">{sub}</p>}
  </div>
)

const ActivityItem = ({ title, meta }) => (
  <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 py-2.5 pl-2 pr-3">
    <div className="w-1 self-stretch rounded-full bg-emerald-500" />
    <div className="min-w-0 flex-1">
      <p className="truncate text-xs font-semibold text-white">{title}</p>
      <p className="truncate text-[10px] text-zinc-500">{meta}</p>
    </div>
    <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">OK</span>
    <span className="text-zinc-600">â€º</span>
  </div>
)

const BottomNav = () => (
  <div className="flex items-center justify-around border-t border-zinc-900 bg-black px-2 py-2">
    {[
      { icon: BsGridFill, label: 'Dashboard', active: true },
      { icon: FaWrench, label: 'Servicios', active: false },
      { icon: FaHistory, label: 'Historial', active: false },
      { icon: FaUser, label: 'Perfil', active: false },
    ].map(({ icon: Icon, label, active }) => (
      <div key={label} className="flex flex-col items-center gap-0.5">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            active ? 'bg-red-600/20' : ''
          }`}
        >
          <Icon className={`h-3.5 w-3.5 ${active ? 'text-red-500' : 'text-zinc-500'}`} />
        </div>
        <span className={`text-[8px] font-medium ${active ? 'text-red-500' : 'text-zinc-500'}`}>
          {label}
        </span>
      </div>
    ))}
  </div>
)

const TallerDbMockup = () => (
  <PhoneFrame>
    <div className="flex max-h-[580px] flex-col overflow-hidden bg-black text-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pb-1 pt-2 text-[10px] text-white">
        <span className="font-semibold">6:48</span>
        <div className="flex items-center gap-1">
          <span className="h-2 w-3 rounded-sm bg-white/80" />
          <span className="h-2 w-3 rounded-sm bg-white/80" />
          <span className="h-2.5 w-5 rounded-sm border border-red-500 bg-red-500/30" />
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-3 pb-2">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-red-500">Reporte mensual</p>
          <h2 className="text-base font-bold leading-tight">Buen trabajo, Lucas ðŸ”¥</h2>
          <p className="text-[10px] text-zinc-500">Taller de prueba Â· Resumen de mayo 2026</p>
        </div>

        {/* Hero card */}
        <div className="rounded-2xl bg-gradient-to-b from-red-900 via-red-700 to-red-600 p-3 shadow-lg shadow-red-900/40">
          <p className="text-[8px] font-bold uppercase tracking-wide text-white/90">
            Ganancia neta del mes
          </p>
          <p className="text-[8px] text-white/70">Mayo de 2026 Â· mano de obra, lo que te queda</p>
          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-[8px] text-white">
            â†— +100% vs mes ant.
          </span>
          <p className="mt-1 text-2xl font-bold tracking-tight">$ 815.678</p>
          <svg viewBox="0 0 200 40" className="mt-1 h-8 w-full opacity-80">
            <polyline
              fill="none"
              stroke="white"
              strokeWidth="2"
              points="0,35 60,35 100,8 140,35 200,35"
            />
          </svg>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/20 pt-2">
            <div>
              <p className="text-sm font-bold">5</p>
              <p className="text-[8px] uppercase text-white/70">Servicios cerrados</p>
            </div>
            <div>
              <p className="text-sm font-bold">2</p>
              <p className="text-[8px] uppercase text-white/70">Días activos</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-full bg-white py-2 text-[10px] font-bold uppercase text-red-600"
          >
            <HiOutlinePlus className="h-3.5 w-3.5" />
            Nuevo servicio
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard icon={HiOutlineClock} value="5" label="Servicios cerrados" />
          <StatCard
            icon={HiOutlineCurrencyDollar}
            value="$ 1.178.678"
            label="Ingreso cobrado"
            sub="Total facturado al cliente en el mes"
          />
          <StatCard icon={HiOutlineCube} value="$ 121.500" label="Repuestos del mes" sub="Costo a proveedor" />
          <StatCard
            icon={HiOutlineTrendingUp}
            value="$ 0"
            label="Ganancia de hoy"
            sub="Mano de obra del día"
            valueClass="text-red-500"
          />
        </div>

        {/* Activity preview */}
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide text-zinc-500">Actividad reciente</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-xs font-semibold">Últimos servicios</p>
            <span className="text-[10px] font-medium text-red-500">Ver todo</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            <ActivityItem title="Twister 150 2005" meta="Belen Â· Finalizado Â· 21:54hs" />
            <ActivityItem title="Honda Twister 250" meta="Jose Â· Finalizado Â· 19:00hs" />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  </PhoneFrame>
)

export default TallerDbMockup

