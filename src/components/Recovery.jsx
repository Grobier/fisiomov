import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Clock, Home, PlayCircle, Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

const plans = [
  {
    planLabel: 'Plan 01 - Esencial',
    title: 'Recovery Esencial',
    subtitle: 'La forma mas simple de resetear el cuerpo y volver a sentirte liviano.',
    price: '$35.000',
    duration: '45 min',
    action: 'esencial',
    protocol: [
      {
        range: '0-10',
        step: 'Sauna de vapor',
        detail: 'Apertura termica, vasodilatacion inicial',
        type: 'pasivo',
      },
      {
        range: '10-20',
        step: 'Pistola de percusion',
        detail: 'Flush de metabolitos, zona de mayor carga del entrenamiento',
        type: 'semi',
      },
      {
        range: '20-45',
        step: 'Presoterapia (silla zero gravity)',
        detail: 'Drenaje venoso y linfatico pasivo, cierre de sesion',
        type: 'pasivo',
      },
    ],
  },
  {
    planLabel: 'Plan 02 - Completo',
    title: 'Recovery Completo',
    subtitle: 'Mas acompanamiento, mas precision y el toque justo de trabajo manual.',
    price: '$55.000',
    duration: '55 min',
    action: 'completo',
    protocol: [
      {
        range: '0-10',
        step: 'Sauna de vapor',
        detail: 'Apertura termica, preparacion fascial pre-masaje',
        type: 'pasivo',
      },
      {
        range: '10-20',
        step: 'Pistola de percusion',
        detail: 'Flush post-sauna, tejido preparado para masaje manual',
        type: 'semi',
      },
      {
        range: '20-30',
        step: 'Masaje manual',
        detail: 'Intervencion manual puntual para descargar las zonas con mayor tension',
        type: 'activo',
      },
      {
        range: '30-55',
        step: 'Presoterapia (silla zero gravity)',
        detail: 'Drenaje y cierre pasivo de sesion',
        type: 'pasivo',
      },
    ],
  },
  {
    planLabel: 'Plan 03 - Premium',
    title: 'Full Recovery',
    subtitle: 'La experiencia mas completa para recuperarte mejor, por mas tiempo y contigo presente.',
    price: '$65.000',
    duration: '65 min',
    action: 'premium',
    featured: true,
    protocol: [
      {
        range: '0-20',
        step: 'Sauna de vapor',
        detail: 'Sesion termica extendida, maxima relajacion del SNC',
        type: 'pasivo',
      },
      {
        range: '20-30',
        step: 'Pistola de percusion',
        detail: 'Flush profundo, tejido optimamente preparado',
        type: 'semi',
      },
      {
        range: '30-50',
        step: 'Masaje manual',
        detail: 'Trabajo manual profundo, mas presente y mas protagonista en la sesion',
        type: 'activo',
      },
      {
        range: '50-65',
        step: 'Presoterapia (silla zero gravity)',
        detail: 'Drenaje extendido, cierre completo en reposo total',
        type: 'pasivo',
      },
    ],
  },
]

const monthlyPacks = [
  {
    title: 'Recovery Esencial x 4',
    subtitle: '1 sesion por semana - 45 min',
    savings: 'Ahorras $10.000',
    price: '$130.000',
    action: 'pack_esencial',
  },
  {
    title: 'Recovery Completo x 4',
    subtitle: '1 sesion por semana - 55 min',
    savings: 'Ahorras $20.000',
    price: '$200.000',
    action: 'pack_completo',
  },
  {
    title: 'Full Recovery x 4',
    subtitle: '1 sesion por semana - 65 min - mejor valor mensual',
    savings: 'Ahorras $30.000',
    price: '$230.000',
    action: 'pack_premium',
  },
]

const testimonials = [
  {
    name: 'Cliente Recovery',
    text: 'Quede como nueva luego del sauna y el masaje. El servicio fue cercano, profesional y realmente se siente la diferencia.',
  },
  {
    name: 'Post entrenamiento',
    text: 'Me ayudo a bajar la carga del cuerpo mucho mas rapido. Ideal para sostener entrenamientos intensos.',
  },
]

const Recovery = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const trackEvent = (eventName, eventCategory, eventLabel, value = 1) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
        value,
      })
    }
  }

  const handleBackClick = () => {
    trackEvent('click', 'navigation', 'home_button', 1)
    navigate('/')
  }

  const handleWhatsAppClick = (serviceName = 'default') => {
    const phoneNumber = '56963352063'
    const messages = {
      default: 'Hola! Quiero reservar una sesion de recovery. Cuando podemos agendar?',
      esencial: 'Hola! Quiero reservar el plan Recovery Esencial. Cuando podemos agendar?',
      completo: 'Hola! Quiero reservar el plan Recovery Completo. Cuando podemos agendar?',
      premium: 'Hola! Quiero reservar el plan Full Recovery. Cuando podemos agendar?',
      pack_esencial: 'Hola! Quiero contratar el pack Recovery Esencial x 4. Cuando podemos agendar?',
      pack_completo: 'Hola! Quiero contratar el pack Recovery Completo x 4. Cuando podemos agendar?',
      pack_premium: 'Hola! Quiero contratar el pack Full Recovery x 4. Cuando podemos agendar?',
    }

    trackEvent('click', 'whatsapp_button', serviceName, 1)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages[serviceName] || messages.default)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7fb_100%)] text-slate-950">
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Home className="h-4 w-4" />
            Inicio
          </button>

          <p className="hidden text-sm font-bold uppercase tracking-[0.22em] text-slate-500 md:block">Recovery</p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 pb-10 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container-max relative text-center">
          <span className="section-eyebrow">Recovery</span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[0.98] text-slate-950 sm:text-5xl md:text-6xl"
          >
            Recuperacion muscular para volver a entrenar mejor.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Sauna, masaje manual y trabajo de descarga para bajar tension, mejorar sensaciones y sostener tu rendimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button onClick={() => handleWhatsAppClick('default')} className="btn-primary px-7 py-3.5 text-base">
              Reservar recovery
            </button>
            <button
              onClick={() => document.querySelector('#planes-recovery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-7 py-3.5 text-base"
            >
              Ver planes
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Por que recovery</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Una recuperacion mas inteligente.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Baja fatiga', text: 'Reduce sensacion de carga y mejora percepcion corporal despues de entrenar.' },
              { title: 'Mejora sensaciones', text: 'Sales con mas soltura, menos rigidez y mejor disposicion para seguir moviendote.' },
              { title: 'Sostiene rendimiento', text: 'Te ayuda a recuperar mejor para entrenar con mas continuidad.' },
            ].map((item) => (
              <div key={item.title} className="mesh-card p-7">
                <p className="mb-3 text-base font-bold uppercase tracking-[0.16em] text-slate-800">{item.title}</p>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="container-max grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-5 flex items-center gap-3">
              <PlayCircle className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">Como el sauna apoya tu estado fisico</h3>
            </div>
            <div className="aspect-video overflow-hidden rounded-[24px] bg-slate-900">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/USoDC7SLTT8?start=518&rel=0&modestbranding=1&showinfo=0"
                title="Beneficios del sauna"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-5 flex items-center gap-3">
              <PlayCircle className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">Testimonio recovery</h3>
            </div>
            <div className="aspect-video overflow-hidden rounded-[24px] bg-slate-900">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ZCMvj5FOS44?rel=0&modestbranding=1&showinfo=0"
                title="Testimonio recovery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="planes-recovery" className="section-padding">
        <div className="container-max">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Planes</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Elige el formato que mejor te acomoda.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Tres formatos de recovery y packs mensuales para sostener la recuperacion con continuidad.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border p-0 shadow-[0_22px_60px_rgba(15,23,42,0.10)] ${
                  plan.featured
                    ? 'border-emerald-400 bg-[linear-gradient(180deg,#ffffff_0%,#f3fbf7_100%)] text-slate-950 ring-2 ring-emerald-100 transition-transform duration-300 hover:shadow-[0_32px_80px_rgba(16,185,129,0.24)]'
                    : 'border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafd_100%)] text-slate-950 transition-transform duration-300 hover:border-slate-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]'
                }`}
              >
                <div
                  className={`h-2 w-full ${
                    plan.featured ? 'bg-[linear-gradient(90deg,#34d399_0%,#10b981_100%)]' : 'bg-[linear-gradient(90deg,#0f172a_0%,#334155_100%)]'
                  }`}
                />

                <div className="relative flex h-full flex-col p-6">
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl opacity-60">
                    <div className={`h-full w-full ${plan.featured ? 'bg-emerald-200/70' : 'bg-slate-200/70'}`} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-[0.24em] ${plan.featured ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {plan.planLabel}
                        </p>
                        <h3 className="mt-3 text-3xl font-black leading-none text-slate-950">{plan.title}</h3>
                      </div>

                      <div
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
                          plan.featured ? 'bg-emerald-500 text-white' : 'bg-slate-950 text-white'
                        }`}
                      >
                        {plan.duration}
                      </div>
                    </div>

                    <p className="mt-4 max-w-[34ch] text-sm leading-6 text-slate-600 md:text-base">{plan.subtitle}</p>

                    <div
                      className={`mt-6 flex items-end justify-between rounded-[24px] border px-5 py-4 ${
                        plan.featured ? 'border-emerald-200 bg-white/80' : 'border-slate-200 bg-white/85'
                      }`}
                    >
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Valor sesion</p>
                        <div className="mt-2 flex items-end gap-2">
                          <p className="text-4xl font-black leading-none text-slate-950">{plan.price}</p>
                          <p className="pb-1 text-xs uppercase tracking-[0.12em] text-slate-500">CLP</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mt-6 rounded-[24px] border px-5 py-5 ${
                        plan.featured ? 'border-emerald-200 bg-emerald-50/70' : 'border-slate-200 bg-slate-50/85'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Protocolo</p>
                      <div className="mt-4 space-y-4">
                        {plan.protocol.map((item) => (
                          <div key={`${plan.title}-${item.range}-${item.step}`} className="grid grid-cols-[62px_1fr] gap-4 border-b border-slate-200/70 pb-3 last:border-b-0 last:pb-0">
                            <p className="text-sm font-semibold text-slate-400">{item.range}'</p>
                            <div>
                              <p className="text-base font-semibold text-slate-950 md:text-lg">{item.step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <button
                      onClick={() => handleWhatsAppClick(plan.action)}
                      className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-semibold leading-none transition-all duration-300 ${
                        plan.featured
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-[0_18px_40px_rgba(16,185,129,0.28)]'
                          : 'bg-slate-950 text-white hover:bg-slate-900 hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)]'
                      }`}
                    >
                      Contratar plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Packs mensuales</p>
            <div className="mt-4 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              {monthlyPacks.map((pack, index) => (
                <div key={pack.title} className={`flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between ${index !== monthlyPacks.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <div>
                    <p className="text-xl font-semibold text-slate-950 md:text-2xl">{pack.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">{pack.subtitle}</p>
                  </div>
                  <div className="flex min-w-[260px] flex-col items-start gap-3 md:items-end">
                    <div className="flex items-baseline gap-4 md:justify-end">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-600 md:text-base md:normal-case md:tracking-normal">{pack.savings}</p>
                      <p className="text-2xl font-semibold text-slate-950">{pack.price}</p>
                    </div>
                    <button
                      onClick={() => handleWhatsAppClick(pack.action)}
                      className="inline-flex w-[160px] items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
                    >
                      Reservar pack
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white/80 px-5 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">Consulta por servicio individual</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Si quieres un servicio por si solo, escribeme y te ayudo a elegir la mejor opcion.</p>
              </div>
              <button
                onClick={() => handleWhatsAppClick('default')}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
              >
                Consultar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="container-max">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Testimonios</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Lo que dicen quienes ya lo probaron.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="mesh-card p-7">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base leading-8 text-slate-700">"{item.text}"</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-14 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <span className="section-eyebrow">Reserva tu sesion</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Listo para recuperar mejor?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Escribeme y agendamos la opcion que mas sentido tenga para tu entrenamiento y tu cuerpo.
            </p>
            <div className="mt-8">
              <button onClick={() => handleWhatsAppClick('default')} className="btn-primary px-8 py-4 text-base">
                Reservar mi sesion
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Recovery
