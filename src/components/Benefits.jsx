import React from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaHeart, FaShieldAlt, FaTrophy } from 'react-icons/fa'

const benefits = [
  {
    id: 1,
    title: 'Recuperacion mas eficiente',
    description: 'Tratamientos personalizados para avanzar sin perder tiempo en protocolos genericos.',
    icon: FaClock,
  },
  {
    id: 2,
    title: 'Prevencion de recaidas',
    description: 'Aprendes a moverte mejor y a entender que necesita tu cuerpo para sostener resultados.',
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: 'Mejor rendimiento',
    description: 'El objetivo no es solo dejar de doler. Es volver a rendir con mas confianza.',
    icon: FaTrophy,
  },
  {
    id: 4,
    title: 'Confianza al entrenar',
    description: 'Recuperas seguridad para volver a cargar, correr y moverte sin estar pensando en el dolor.',
    icon: FaHeart,
  },
]

const Benefits = () => {
  return (
    <section
      id="beneficios"
      className="bg-fixed bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#eef4fb_100%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
          <span className="section-eyebrow">Por que funciona</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Menos ruido. Mas criterio. Mejor recuperacion.</h2>
          <p className="mx-auto max-w-xl text-base text-slate-600">
            Un enfoque basado en movimiento real, seguimiento cercano y decisiones que tienen sentido para tu cuerpo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="text-lg text-slate-950" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-950">{benefit.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
