import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/56963352063?text=Hola%20Lorenzo,%20vi%20tu%20web%20y%20me%20gustaria%20saber%20como%20puedes%20ayudarme%20con%20mi%20dolor'

const Hero = () => {
  const trackEvent = (eventName, eventCategory, eventLabel, value = 1) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, { event_category: eventCategory, event_label: eventLabel, value })
    }
  }

  const handleWhatsAppClick = () => {
    trackEvent('click', 'whatsapp_button', 'hero_whatsapp', 1)
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-14 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_60%)]" />
        <motion.div
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute left-1/2 top-36 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl"
        />
      </div>

      <div className="container-max relative flex justify-center">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <span className="section-eyebrow bg-white">Fisioterapia · entrenamiento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold leading-[0.95] text-slate-950 sm:text-5xl md:text-6xl"
          >
            Recupera tu cuerpo.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
              Entrena mejor y vuelve a moverte con confianza.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-500 md:text-xl"
          >
            Rehabilitacion y entrenamiento personalizado para dejar atras el dolor, mejorar tu rendimiento y volver a disfrutar lo que haces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <button onClick={handleWhatsAppClick} className="btn-primary px-8 py-4 text-base">
              <FaWhatsapp className="text-xl" />
              Hablar por WhatsApp
            </button>
            <button
              onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-4 text-base"
            >
              Ver servicios
              <FaArrowRight className="text-sm" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 grid w-full gap-3 sm:grid-cols-3"
          >
            {[
              ['Atencion personalizada', 'Sin respuestas genericas'],
              ['Presencial y online', 'Segun tu contexto'],
              ['Rehabilitacion y rendimiento', 'Para volver mejor'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
