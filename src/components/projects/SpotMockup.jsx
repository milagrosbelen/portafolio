import React from 'react'
import {
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBookmark,
  HiOutlineFire,
} from 'react-icons/hi'
import { BsGridFill } from 'react-icons/bs'
import { FaTag, FaStore, FaUser, FaMapMarkedAlt } from 'react-icons/fa'
import PhoneFrame from './PhoneFrame'

const MetricCard = ({ icon: Icon, value, label }) => (
  <div className="rounded-2xl border border-zinc-100 bg-white p-3 shadow-sm">
    <Icon className="mb-2 h-4 w-4 text-zinc-400" />
    <p className="text-xl font-bold text-zinc-900">{value}</p>
    <p className="text-[9px] font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
  </div>
)

const PromoCard = ({ badge, badgeColor, title, expiry, footer, bg, border }) => (
  <div
    className={`min-w-[140px] flex-shrink-0 rounded-2xl border p-3 ${bg} ${border}`}
  >
    <span className={`rounded-full px-2 py-0.5 text-[8px] font-bold text-white ${badgeColor}`}>
      {badge}
    </span>
    <p className="mt-2 text-[10px] font-bold leading-tight text-zinc-900">{title}</p>
    <p className="mt-1 flex items-center gap-1 text-[8px] text-zinc-600">
      <HiOutlineFire className="h-3 w-3 text-orange-500" />
      {expiry}
    </p>
    <p className="mt-1 text-[8px] text-zinc-500">{footer}</p>
  </div>
)

const SpotMockup = () => (
  <PhoneFrame>
    <div className="flex max-h-[580px] flex-col overflow-hidden bg-zinc-50 text-zinc-900">
      <div className="flex-1 space-y-3 overflow-hidden px-3 pb-2 pt-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Resumen en Spot</p>
          <h2 className="text-base font-bold leading-tight">Buenas tardes, miriam.mauna ðŸ‘‹</h2>
          <p className="text-[10px] text-zinc-500">ANONIMO Â· mayo de 2026</p>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-3 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] font-bold uppercase text-white/80">Visibilidad en Spot</p>
              <p className="text-[8px] text-white/60">Mayo de 2026</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[8px] font-semibold text-emerald-400">
              â†— +20% vs sem. ant.
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold">0</p>
          <p className="text-[10px] text-white/70">vistas totales de tu bar</p>
          <svg viewBox="0 0 200 32" className="mt-2 h-6 w-full opacity-70">
            <polyline
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              points="0,28 40,20 80,24 120,12 160,18 200,8"
            />
          </svg>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/15 pt-2">
            <div>
              <p className="text-sm font-bold">3</p>
              <p className="text-[8px] uppercase text-white/60">Vistas hoy</p>
            </div>
            <div>
              <p className="text-sm font-bold">2</p>
              <p className="text-[8px] uppercase text-white/60">Promos activas</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl bg-white py-2 text-[10px] font-semibold text-zinc-900"
          >
            <FaMapMarkedAlt className="h-3 w-3" />
            Ver en mapa
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <MetricCard icon={HiOutlineEye} value="3" label="Vistas hoy" />
          <MetricCard icon={HiOutlineCalendar} value="24" label="Esta semana" />
          <MetricCard icon={HiOutlineLocationMarker} value="3" label="En el mapa" />
          <MetricCard icon={HiOutlineBookmark} value="0" label="Guardados" />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold">Promos activas</p>
            <span className="text-[10px] font-medium text-zinc-500">Ver todas</span>
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            <PromoCard
              badge="PROMO AZUL"
              badgeColor="bg-blue-500"
              title="Otro: 2x1 CERVEZAS ARTESANALES"
              expiry="VENCE EL 4 JUN 2026"
              footer="0 vistas · 12 días restantes"
              bg="bg-blue-50"
              border="border-blue-200"
            />
            <PromoCard
              badge="DESTACADO"
              badgeColor="bg-orange-500"
              title="Otro: TRAGOS GRATIS"
              expiry="VENCE EL 24 MAY 2026"
              footer="0 vistas · 1 día restante"
              bg="bg-amber-50"
              border="border-amber-200"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-zinc-200 bg-white px-2 pb-2 pt-1">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 shadow-lg">
            <FaMapMarkedAlt className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="flex items-end justify-around pt-4">
          {[
            { icon: BsGridFill, label: 'Dashboard', active: true },
            { icon: FaTag, label: 'Promos', active: false },
            { icon: null, label: 'Mapa', active: false, spacer: true },
            { icon: FaStore, label: 'Mi negocio', active: false },
            { icon: FaUser, label: 'Perfil', active: false },
          ].map(({ icon: Icon, label, active, spacer }) =>
            spacer ? (
              <div key={label} className="w-10" />
            ) : (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                    active ? 'bg-zinc-100' : ''
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${active ? 'text-zinc-900' : 'text-zinc-400'}`} />
                </div>
                <span
                  className={`text-[8px] font-medium ${active ? 'text-zinc-900' : 'text-zinc-400'}`}
                >
                  {label}
                </span>
                {active && <span className="h-0.5 w-4 rounded-full bg-zinc-900" />}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </PhoneFrame>
)

export default SpotMockup

