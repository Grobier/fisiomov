import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/56963352063?text=Hola%20Lorenzo,%20vi%20tu%20web%20y%20me%20gustaria%20saber%20como%20puedes%20ayudarme%20con%20mi%20dolor'

const ImpactSection = () => {
  return (
    <section className="bg-slate-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-14 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:px-12">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Lo que necesitas saber
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl lg:text-6xl"
          >
            Tu cuerpo no esta roto.
            <br />
            Solo necesita el estimulo correcto.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mb-4 max-w-xl text-lg text-slate-600"
          >
            Con el enfoque adecuado puedes volver a moverte, entrenar y recuperar confianza en tu cuerpo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-10 text-sm text-slate-500"
          >
            Trabajo con cupos limitados cada semana para asegurar un seguimiento personalizado.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="btn-secondary relative px-10 py-4 text-base"
          >
            <FaWhatsapp className="text-xl text-green-600" />
            Hablar por WhatsApp
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
