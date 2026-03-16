import React from 'react'
import { motion } from 'framer-motion'

const problems = [
  {
    emoji: '😓',
    step: 'Paso 01',
    title: 'Entrenas con dolor',
    text: 'Sigues empujando aunque tu cuerpo ya te esta avisando que algo no va bien.',
  },
  {
    emoji: '😰',
    step: 'Paso 02',
    title: 'Empiezas a evitar moverte',
    text: 'Dejaste de entrenar o bajaste mucho el ritmo por miedo a lesionarte otra vez.',
  },
  {
    emoji: '😕',
    step: 'Paso 03',
    title: 'Tu cuerpo ya no responde igual',
    text: 'Sientes menos confianza, menos control y mas dudas cada vez que intentas exigirte.',
  },
]

const ProblemSection = () => {
  return (
    <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="section-eyebrow bg-white">Lo que suele pasar</span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 md:text-5xl">
            Si tu cuerpo te frena, no necesitas resignarte.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Muchas personas llegan cuando entrenar, correr o incluso moverse empieza a sentirse como una amenaza.
            Estas senales suelen aparecer asi.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-100 text-3xl">
                  {problem.emoji}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{problem.step}</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950">{problem.title}</h3>
                </div>
              </div>
              <p className="text-base leading-8 text-slate-600">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
