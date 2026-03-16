import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const items = [
  'Librería Movement Snack para siempre',
  'Acceso inmediato por correo',
]

const FreeResourcesSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              100% gratuito
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Recursos gratuitos para{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                empezar hoy
              </span>
            </h2>

            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              Accede gratis a la librería Movement Snack con ejercicios simples para empezar a moverte mejor hoy.
            </p>

            <ul className="space-y-3 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <FaCheckCircle className="text-blue-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/recursos-gratuitos"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              Acceder gratis
            </Link>
          </motion.div>

          {/* Card visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
              <span className="text-white text-2xl">🏃</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Movement Snack</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ejercicios cortos y simples que puedes hacer en cualquier momento del día para mejorar tu movilidad y recuperarte mejor.
            </p>
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-gray-500 text-xs">
              Sin spam. Acceso inmediato por correo. Para siempre.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FreeResourcesSection
