import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[14%] top-28 h-64 w-64 rounded-full bg-blue-500/18 blur-3xl" />
        <div className="absolute right-[12%] top-32 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />
      </div>

      <div className="container-max relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <span className="section-eyebrow">Fisioterapia · entrenamiento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 max-w-5xl text-4xl font-extrabold leading-[0.95] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.8rem]"
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
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Rehabilitacion y entrenamiento personalizado para dejar atras el dolor, mejorar tu rendimiento y volver a disfrutar lo que haces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button onClick={handleWhatsAppClick} className="btn-primary px-7 py-3.5 text-base">
              <FaWhatsapp className="text-xl" />
              Hablar por WhatsApp
            </button>
            <button
              onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-7 py-3.5 text-base"
            >
              Ver servicios
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-500"
          >
            <span>Atencion personalizada</span>
            <span>Presencial y online</span>
            <span>Rehabilitacion y rendimiento</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
