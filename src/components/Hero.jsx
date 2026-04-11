import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL =
  'https://wa.me/56963352063?text=Hola%20Lorenzo%2C%20vi%20tu%20web%20y%20quer%C3%ADa%20hablar%20contigo'

const trustStats = [
  { value: '500+', label: 'pacientes atendidos' },
  { value: '5 años', label: 'de experiencia' },
  { value: 'Presencial · Online', label: 'según tu contexto' },
]

const Hero = () => {
  const trackEvent = (eventName, eventCategory, eventLabel, value = 1) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
        value,
      })
    }
  }

  const handleWhatsAppClick = () => {
    trackEvent('click', 'whatsapp_button', 'hero_whatsapp', 1)
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32 sm:px-10 lg:px-16">

      {/* Background: two minimal green glows — no floating blobs, no cyan/emerald noise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 75% 20%, rgba(22,163,74,0.12) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 25% 80%, rgba(22,163,74,0.07) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-max relative w-full">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#16a34a' }} />
              Fisioterapia · Entrenamiento
            </span>
          </motion.div>

          {/* Heading — original text, new dark styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl"
          >
            Recupera tu cuerpo.
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Entrena mejor y vuelve a moverte con confianza.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-xl"
          >
            Rehabilitacion y entrenamiento personalizado para dejar atras el dolor,
            mejorar tu rendimiento y volver a disfrutar lo que haces.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-[0_16px_40px_rgba(22,163,74,0.30)]"
            >
              <FaWhatsapp className="text-xl" />
              Hablar por WhatsApp
            </button>

            <button
              onClick={() =>
                document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-semibold text-white/70 transition-all duration-200 hover:border-white/30 hover:text-white"
            >
              Ver servicios
              <FaArrowRight className="text-sm" />
            </button>
          </motion.div>

          {/* Primera sesión gratis badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.5 }}
            className="mt-5 flex items-center justify-center gap-2.5"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
              <path d="M6 0L7.35 4.65L12 6L7.35 7.35L6 12L4.65 7.35L0 6L4.65 4.65L6 0Z" fill="#16a34a" />
            </svg>
            <span className="text-sm text-slate-500">
              Primera sesión de evaluación{' '}
              <span className="font-semibold text-white">sin costo</span>
              {' '}·{' '}sin compromiso
            </span>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t pt-8"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            {trustStats.map(({ value, label }, i) => (
              <React.Fragment key={value}>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                </div>
                {i < trustStats.length - 1 && (
                  <div
                    className="mt-1 hidden h-7 w-px sm:block"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero