import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowDown,
  FaCheckCircle,
  FaChevronDown,
  FaCoins,
  FaFlask,
  FaHandPaper,
  FaUserGraduate,
  FaWhatsapp,
  FaUsers,
} from 'react-icons/fa'

const WHATSAPP_URL =
  'https://wa.me/56963352063?text=Hola%20Lorenzo%2C%20vi%20el%20curso%20de%20Stretching%20Asistido%20y%20quiero%20inscribirme%20en%20preventa.%20%C2%BFC%C3%B3mo%20lo%20hago%3F'

const programName = 'Especializacion en Stretching Asistido Profesional'

const targetProfiles = [
  {
    icon: '🫁',
    role: 'Kinesiólogos',
    description:
      'Que quieren agregar un servicio de alto valor a su práctica clínica o deportiva.',
  },
  {
    icon: '🏋️',
    role: 'Entrenadores y preparadores físicos',
    description:
      'Que trabajan con atletas o población general y quieren ofrecer movilidad y recuperación de forma más completa.',
  },
  {
    icon: '🤲',
    role: 'Terapeutas manuales',
    description:
      'Que ya trabajan con el cuerpo y quieren ampliar su herramienta con stretching asistido estructurado.',
  },
  {
    icon: '📈',
    role: 'Profesionales que ya aplican estiramiento',
    description:
      'Sin formación específica — y quieren hacerlo con más seguridad, técnica y respaldo para cobrarlo.',
  },
]

const learnings = [
  {
    icon: FaHandPaper,
    title: 'Aplicar stretching asistido con seguridad',
    description:
      'Aprenderas posiciones, soporte corporal, progresion de tension y comunicacion para guiar sesiones con confianza.',
  },
  {
    icon: FaUserGraduate,
    title: 'Evaluar antes de intervenir',
    description:
      'Veras criterios simples de observacion, movilidad y seleccion de tecnicas para decidir mejor que hacer en cada caso.',
  },
  {
    icon: FaFlask,
    title: 'Trabajar con un enfoque basado en evidencia',
    description:
      'Integraras principios actualizados sobre rango de movimiento, tolerancia al estiramiento y aplicacion practica.',
  },
  {
    icon: FaCoins,
    title: 'Convertirlo en un servicio profesional',
    description:
      'Tambien aprenderas como estructurar la experiencia, fijar precios y presentar el servicio de forma atractiva.',
  },
]

const evidenceCards = [
  {
    title: 'Mejora del rango de movimiento',
    text: 'Las revisiones recientes muestran que los programas de estiramiento pueden mejorar el rango de movimiento, especialmente cuando se aplican de forma consistente.',
  },
  {
    title: 'Importancia de la dosis y la regularidad',
    text: 'La evidencia actual sugiere que la frecuencia, el tiempo total de exposicion y la progresion importan mas que una sola sesion aislada.',
  },
  {
    title: 'Aplicacion mas inteligente',
    text: 'Hoy se entiende mejor que el estiramiento no es solo "tirar del musculo": tambien influye la tolerancia al estiramiento, el control y el contexto de uso.',
  },
]

const programDays = [
  {
    id: 'sb1',
    badge: 'Sabado 1',
    title: 'Fundamentos del stretching asistido',
    subtitle: 'Base tecnica para entender cuerpo, movimiento y respuesta al estiramiento',
    bullets: [
      'Anatomia funcional aplicada al stretching.',
      'Fascia, movilidad, flexibilidad y restricciones frecuentes.',
      'Lectura corporal inicial y evaluacion basica.',
      'Practica guiada de observacion y correccion.',
    ],
  },
  {
    id: 'sb2',
    badge: 'Sabado 2',
    title: 'Tecnicas esenciales de aplicacion',
    subtitle: 'Bloque practico para empezar a trabajar con mas seguridad',
    bullets: [
      'Estiramiento asistido base y posicionamiento del cliente.',
      'PNF y variantes de contraccion-relajacion.',
      'AIS y manejo de repeticiones cortas.',
      'Practica intensiva en parejas y correccion en vivo.',
    ],
  },
  {
    id: 'sb3',
    badge: 'Sabado 3',
    title: 'Tecnicas avanzadas y criterio de uso',
    subtitle: 'Como elegir mejor cada tecnica segun objetivo, cuerpo y contexto',
    bullets: [
      'Introduccion a FST y recursos miofasciales.',
      'Tests simples para decidir que aplicar.',
      'Construccion de una sesion mas coherente y efectiva.',
      'Feedback practico para mejorar ejecucion y seguridad.',
    ],
  },
  {
    id: 'sb4',
    badge: 'Sabado 4',
    title: 'Aplicacion profesional y certificacion',
    subtitle: 'Cierre del metodo, salida comercial y evaluacion final',
    bullets: [
      'Casos frecuentes, adaptaciones y limites de atencion.',
      'Como ofrecer el servicio y estructurar tu propuesta.',
      'Evaluacion final teorica y practica.',
      `Entrega de certificacion ${programName}.`,
    ],
  },
]

const includes = [
  '4 clases presenciales intensivas.',
  'Practica guiada durante el curso.',
  'Material de apoyo para repasar el metodo.',
  `Certificacion final ${programName}.`,
  'Base comercial para presentar y vender el servicio.',
]

const faqs = [
  {
    question: '¿Para quién es este curso?',
    answer:
      'Para kinesiólogos, preparadores físicos, entrenadores personales y terapeutas manuales que quieren incorporar el stretching asistido como servicio profesional. No se requiere experiencia previa específica en esta técnica, pero sí se espera una base en anatomía y movimiento.',
  },
  {
    question: '¿Necesito ser kinesiólogo para inscribirme?',
    answer:
      'No. El curso está diseñado para cualquier profesional que trabaje con el cuerpo. Si ya tienes una base en anatomía y movimiento — como entrenador, terapeuta o preparador físico — puedes aprovechar el contenido al máximo.',
  },
  {
    question: '¿Puedo empezar a ofrecer este servicio apenas termine el curso?',
    answer:
      'Sí. El Sábado 4 está diseñado específicamente para eso: cómo estructurar la experiencia, fijar precios y presentar el servicio. El curso cierra con evaluación final y certificación, que puedes usar desde el primer día.',
  },
  {
    question: '¿Cuántos cupos hay disponibles?',
    answer:
      'El formato es presencial e intensivo, por lo que los cupos son limitados para garantizar calidad en la práctica. Una vez completos, el curso se cierra hasta la próxima edición. Te recomiendo asegurar tu lugar antes del 18 de abril.',
  },
  {
    question: '¿Cómo me inscribo y cómo pago?',
    answer:
      'Escríbeme por WhatsApp. Te confirmo disponibilidad, te explico el proceso de pago y reservas tu cupo. La preventa está disponible hasta el sábado 18 de abril — después de esa fecha, el valor sube a $250.000.',
  },
  {
    question: '¿A qué hora se realiza el curso?',
    answer:
      'Cada jornada se realiza de 9:00 a 15:00 hrs.',
  },
  {
    question: '¿Cuánto dura el programa completo?',
    answer:
      'El curso se desarrolla en 4 sabados, de 9:00 a 15:00 hrs cada uno.',
  },
  {
    question: '¿Se entrega certificado?',
    answer: `Si. Al completar el proceso recibes la certificacion ${programName}.`,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const StretchTherapistCourse = () => {
  const [openDay, setOpenDay] = useState('sb1')
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleWhatsApp = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'whatsapp_curso',
        event_label: 'stretch_therapist_cta',
        value: 1,
      })
    }
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_34%,#eef4ff_100%)] text-slate-950">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#07112B] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_30%)]" />
        <div className="absolute -right-24 top-[-60px] h-80 w-80 rounded-full border border-sky-400/10" />
        <div className="absolute -right-36 top-[-140px] h-[34rem] w-[34rem] rounded-full border border-sky-400/5" />
        <div className="absolute -left-24 bottom-10 h-60 w-60 rounded-full border border-sky-400/10" />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">

          {/* Top bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">
                Stretching Asistido Profesional
              </p>
              <p className="mt-2 text-sm text-slate-300">Curso intensivo presencial 2026</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-red-300">
                ⏳ Preventa cierra el sábado 18 de abril
              </div>
              <div className="rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-200">
                Cupos limitados
              </div>
            </div>
          </motion.div>

          {/* Hero grid */}
          <div className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center lg:py-20">

            {/* Left: headline + CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-200">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                4 sábados · 9:00 a 15:00 hrs · Presencial
              </div>

              {/* BENEFIT HEADLINE — not just the program name */}
              <h1 className="max-w-3xl text-4xl font-black leading-[1.0] md:text-6xl">
                Aprende a aplicar stretching asistido
                <span className="block text-sky-300"> y conviértelo en un servicio que puedes cobrar.</span>
              </h1>

              <p className="mt-6 max-w-2xl border-l-2 border-sky-400/30 pl-5 text-base leading-8 text-slate-300 md:text-lg">
                Una formación intensiva de 4 sábados para dominar la técnica, entender cuándo y cómo aplicarla,
                y tener una salida comercial real para ofrecer este servicio con seguridad.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  <FaWhatsapp className="text-lg" />
                  Inscribirme en preventa — $120.000
                </button>
                <a
                  href="#programa"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-sky-100 backdrop-blur transition-colors hover:bg-white/10"
                >
                  Ver programa completo
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Escríbeme por WhatsApp · Te confirmo disponibilidad y proceso de pago
              </p>
            </motion.div>

            {/* Right: pricing card */}
            <motion.aside
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_28px_80px_rgba(7,17,43,0.45)] backdrop-blur-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
                Precio de lanzamiento
              </p>
              <h2 className="mt-3 text-xl font-black text-white">{programName}</h2>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Valor regular
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-400 line-through">$250.000</p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                  Preventa hasta el sábado 18 de abril
                </p>
                <p className="mt-2 text-5xl font-black text-white">$120.000</p>
                <p className="mt-1 text-xs text-slate-400">Ahorras $130.000 al inscribirte ahora</p>
              </div>

              <div className="mt-5 space-y-2">
                {[
                  '4 sábados de formación aplicada.',
                  'Horario de 9:00 a 15:00 hrs.',
                  `Certificación ${programName}.`,
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-sky-300" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTA inside card */}
              <button
                onClick={handleWhatsApp}
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-500 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-sky-400 hover:shadow-[0_16px_40px_rgba(14,165,233,0.30)]"
              >
                <FaWhatsapp className="text-lg" />
                Reservar mi cupo ahora
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                Cupos limitados · Precio sube a $250.000 el 19 de abril
              </p>
            </motion.aside>
          </div>

          {/* Tag cloud */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6"
          >
            <div className="flex flex-wrap gap-2">
              {['Stretching asistido', 'PNF', 'AIS', 'FST', 'Evaluacion aplicada', 'Certificacion final'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-300/15 bg-white/5 px-4 py-2 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <a
              href="#para-quien"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-300"
            >
              Ver para quién es
              <FaArrowDown />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY NAV ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-900">
            Stretching Asistido
          </p>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ['¿Para quién?', '#para-quien'],
              ['Aprenderás', '#aprenderas'],
              ['Programa', '#programa'],
              ['Precio', '#precio'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                {label}
              </a>
            ))}
          </nav>
          {/* CTA in nav */}
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-sky-600"
          >
            <FaWhatsapp />
            <span className="hidden sm:inline">Inscribirme</span>
            <span className="sm:hidden">$120.000</span>
          </button>
        </div>
      </div>

      {/* ── ¿PARA QUIÉN? ─────────────────────────────────────────── */}
      <section id="para-quien" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">
            <FaUsers className="text-xs" />
            ¿Es este curso para ti?
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl font-black text-slate-950 md:text-5xl">
            Este curso es para profesionales que trabajan con el cuerpo.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            No se requiere experiencia previa en stretching asistido — sí se espera una base en
            anatomía y movimiento. Si eso te describe, estás en el lugar correcto.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {targetProfiles.map((profile, index) => (
            <motion.div
              key={profile.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-4 text-3xl">{profile.icon}</div>
              <h3 className="text-lg font-bold text-slate-950">{profile.role}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{profile.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 rounded-[28px] border border-sky-100 bg-sky-50 px-6 py-8 text-center sm:flex-row sm:text-left"
        >
          <div className="flex-1">
            <p className="text-lg font-bold text-slate-950">¿Eso te describe?</p>
            <p className="mt-1 text-sm text-slate-600">
              La preventa cierra el sábado 18 de abril. Los cupos son limitados.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-[0_12px_32px_rgba(14,165,233,0.30)]"
          >
            <FaWhatsapp />
            Reservar mi cupo — $120.000
          </button>
        </motion.div>
      </section>

      {/* ── RESUMEN ──────────────────────────────────────────────── */}
      <section id="resumen" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Vision general</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-black text-slate-950 md:text-5xl">
            Una formacion intensiva para aprender, practicar y proyectar este servicio de forma profesional.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            El curso se desarrolla en 4 sabados, de 9:00 a 15:00 hrs, con enfoque tecnico, comercial y basado en evidencia.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
          >
            <h3 className="text-2xl font-black text-slate-950">Una estructura simple para aprender rapido</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              El formato de 4 sabados fue pensado para que avances sin perder continuidad. Cada jornada se enfoca
              en un bloque claro: fundamentos, tecnica, criterio de uso y aplicacion profesional.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Asi evitas informacion suelta y construyes una progresion real: entiendes el metodo, lo practicas,
              lo corriges y cierras con una evaluacion final.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-7 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">Resumen del formato</p>
            <div className="mt-5 space-y-4">
              {[
                '4 sabados presenciales.',
                'Horario de 9:00 a 15:00 hrs.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-sky-600" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LO QUE APRENDERÁS ────────────────────────────────────── */}
      <section id="aprenderas" className="bg-[#07112B] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
              Lo que aprenderás
            </span>
            <h2 className="mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Una experiencia pensada para que puedas aplicar lo aprendido en la vida real.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Este curso mezcla fundamentos, practica guiada y criterio profesional para que no solo entiendas
              las tecnicas, sino que sepas cuando, como y para quien usarlas.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {learnings.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.article>
              )
            })}
          </div>

          {/* ── INSTRUCTOR ─────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
              Quién enseña este curso
            </p>
            <div className="mt-6 grid gap-8 md:grid-cols-[auto_1fr]">
              {/* Avatar placeholder */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-4xl">
                👨‍⚕️
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Lorenzo Grobier</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Kinesiólogo · Santiago, Chile
                </p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Kinesiólogo con más de 5 años trabajando con atletas y personas activas en Santiago.
                  Especializado en rehabilitación deportiva, movilidad y recuperación — ya ofrece sesiones
                  de stretching asistido dentro de su práctica clínica en Kutral. Este curso nace de lo que
                  realmente funciona en consulta.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    'Kinesiólogo titulado',
                    'Especialización deportiva',
                    'Certificación Recovery',
                    '5+ años en práctica activa',
                  ].map((cred) => (
                    <span
                      key={cred}
                      className="rounded-full border border-sky-300/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EVIDENCIA ────────────────────────────────────────────── */}
      <section id="evidencia" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Basado en evidencia actual</span>
          <h2 className="mt-5 max-w-4xl text-3xl font-black text-slate-950 md:text-5xl">
            El programa integra conocimiento alineado con revisiones cientificas recientes.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            La literatura reciente sobre estiramiento y flexibilidad muestra que la exposicion repetida, la
            calidad de la aplicacion y el contexto de uso importan. Por eso el curso se centra en progresion,
            seleccion de tecnica y criterio practico, no solo en repetir maniobras.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {evidenceCards.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <FaFlask />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── PROGRAMA ─────────────────────────────────────────────── */}
      <section id="programa" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">Programa del curso</span>
            <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">
              Asi se estructura la experiencia de aprendizaje
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Cada sabado abre un nivel nuevo del metodo para que avances desde fundamentos y tecnica hasta
              evaluacion y aplicacion profesional.
            </p>
          </motion.div>

          <div className="mt-10 space-y-5">
            {programDays.map((day, index) => {
              const isOpen = openDay === day.id
              return (
                <motion.article
                  key={day.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenDay(isOpen ? '' : day.id)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                  >
                    <div className="flex gap-4">
                      <span className="inline-flex h-11 shrink-0 items-center rounded-full bg-[linear-gradient(135deg,#1d4ed8_0%,#3b82f6_100%)] px-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(29,78,216,0.28)]">
                        {day.badge}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-950">{day.title}</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{day.subtitle}</p>
                      </div>
                    </div>
                    <span
                      className={`mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <FaChevronDown />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-6">
                      <ul className="grid gap-4 md:grid-cols-2">
                        {day.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────────────────── */}
      <section id="incluye" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Que incluye</span>
          <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">Todo lo que recibes al entrar</h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {includes.map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-3 rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
            >
              <FaCheckCircle className="mt-1 shrink-0 text-sky-600" />
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PRECIO ───────────────────────────────────────────────── */}
      <section id="precio" className="bg-[#07112B] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_430px]"
          >
            {/* Left: copy */}
            <div>
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Precio de lanzamiento
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-black md:text-5xl">
                El valor real del curso es $250.000.
                <span className="block text-sky-300">
                  Hasta el sábado 18 de abril puedes entrar por $120.000.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                La preventa existe porque los primeros en entrar se comprometen antes de que el curso
                esté lleno. A cambio, acceden al precio más bajo que habrá. Después del 18 de abril,
                el valor vuelve a $250.000.
              </p>

              {/* Urgency bullets */}
              <div className="mt-8 space-y-3">
                {[
                  'Cupos limitados por formato presencial e intensivo.',
                  'Precio sube a $250.000 el 19 de abril.',
                  'Una vez completos los cupos, el curso se cierra.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: pricing card with CTA */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_80px_rgba(7,17,43,0.42)] backdrop-blur-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Valor regular
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-400 line-through">$250.000</p>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Preventa hasta el sábado 18 de abril
              </p>
              <p className="mt-2 text-6xl font-black text-white">$120.000</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Incluye las 4 jornadas, practica guiada y certificacion final.
              </p>

              <div className="mt-5 space-y-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  4 sabados presenciales
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Horario: 9:00 a 15:00 hrs
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Certificacion incluida
                </div>
              </div>

              {/* PRIMARY BUY BUTTON */}
              <button
                onClick={handleWhatsApp}
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-500 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(14,165,233,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
              >
                <FaWhatsapp className="text-xl" />
                Inscribirme en preventa
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                Escríbeme por WhatsApp · Te confirmo cupo y proceso de pago
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">
            Lo que necesitas saber antes de inscribirte
          </h2>
        </motion.div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <motion.article
                key={item.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-base font-bold text-slate-950 md:text-lg">{item.question}</h3>
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <FaChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-[#07112B] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-red-300">
              ⏳ Preventa cierra el sábado 18 de abril
            </span>
            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Asegura tu cupo antes de que el precio suba.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300">
              Después del 18 de abril, el valor vuelve a $250.000. Escríbeme por WhatsApp,
              te confirmo disponibilidad y reservas con el precio de preventa.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 rounded-full bg-sky-500 px-8 py-4 text-base font-bold text-white shadow-[0_18px_48px_rgba(14,165,233,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
              >
                <FaWhatsapp className="text-xl" />
                Inscribirme ahora — $120.000
              </button>
              <a
                href="#faq"
                className="text-sm font-semibold text-slate-400 underline underline-offset-4 hover:text-white"
              >
                Tengo una pregunta primero
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Cupos limitados · Presencial en Santiago · Certificación incluida
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-[#050d1f] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-black">{programName}</p>
            <p className="mt-1 text-sm text-slate-400">
              Valor regular $250.000 · Preventa hasta el sábado 18 de abril por $120.000
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-sky-400"
          >
            <FaWhatsapp />
            Inscribirme en preventa
          </button>
        </div>
      </footer>

    </div>
  )
}

export default StretchTherapistCourse