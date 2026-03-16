import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/56963352063?text=Hola%20Lorenzo,%20vi%20tu%20web%20y%20me%20gustaria%20saber%20como%20puedes%20ayudarme%20con%20mi%20dolor'

const checks = ['Sin compromiso', 'Te respondo personalmente', 'Primera sesion gratuita disponible']

const Contact = () => {
  return (
    <section id="contacto" className="bg-slate-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="section-eyebrow bg-white">Comienza hoy</span>
            <h2 className="mt-6 text-4xl font-bold leading-[0.98] text-slate-950 md:text-5xl">
              Cuentame que te esta pasando y definimos el siguiente paso.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Escribeme por WhatsApp. Te respondo personalmente y te digo con honestidad si este es el camino correcto para ti.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-8"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-100/70 blur-3xl" />

            <div className="relative">
              <div className="rounded-[30px] bg-slate-950 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <FaWhatsapp className="text-xl text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">WhatsApp</p>
                      <p className="text-sm text-slate-400">Respuesta directa</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Online
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white/8 px-4 py-3 text-sm leading-6 text-slate-200">
                    Hola Lorenzo, quiero volver a entrenar sin miedo al dolor.
                  </div>
                  <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-md bg-emerald-400 px-4 py-3 text-sm font-medium leading-6 text-slate-950">
                    Perfecto. Cuentame que te esta pasando y vemos cual es el mejor siguiente paso.
                  </div>
                </div>
              </div>

              <div className="mt-7 text-center">
                <h3 className="text-2xl font-bold text-slate-950">Hablar por WhatsApp</h3>
                <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600">
                  Cuanto mas contexto me des, mas facil sera orientarte bien.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {checks.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-medium text-slate-700">
                    <div className="mb-2 flex justify-center">
                      <FaCheckCircle className="text-slate-950" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                  className="btn-primary rounded-2xl px-10 py-4 text-base"
                >
                  <FaWhatsapp className="text-xl" />
                  Escribir ahora
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
