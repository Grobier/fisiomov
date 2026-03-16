import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronLeft, Clock, Home, PlayCircle, Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

const plans = [
  {
    title: 'Sauna unica',
    subtitle: 'Solo sauna',
    price: '$20.000',
    duration: '20 min',
    description: 'Una sesion puntual para bajar carga, relajar el cuerpo y acelerar recuperacion.',
    features: ['Sauna de 20 minutos', 'Recuperacion inmediata', 'Ideal post entrenamiento'],
    action: 'sauna_unica',
  },
  {
    title: 'Recovery unico',
    subtitle: 'Masaje + pistola + sauna',
    price: '$33.000',
    duration: '60 min',
    description: 'La sesion mas completa para descargar tension, mejorar sensaciones y salir renovado.',
    features: ['Masaje manual', 'Pistola de percusion', 'Sauna', 'Recuperacion total'],
    action: 'recovery_unico',
    featured: true,
  },
  {
    title: 'Plan mensual',
    subtitle: 'Sauna semanal',
    price: '$39.990',
    duration: '4 sesiones',
    description: 'Para quienes quieren sumar recuperacion de forma constante en la semana.',
    features: ['1 sesion semanal', '20 min cada una', 'Mejor constancia', 'Ahorro mensual'],
    action: 'basico',
  },
  {
    title: 'Plan plus',
    subtitle: 'Sauna dos veces por semana',
    price: '$59.990',
    duration: '8 sesiones',
    description: 'Mas frecuencia para quienes entrenan mas y necesitan sostener mejor el rendimiento.',
    features: ['2 sesiones semanales', 'Mejor descarga', 'Mas recuperacion', 'Menor costo por sesion'],
    action: 'plus',
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
      sauna_unica: 'Hola! Quiero reservar una sesion unica de sauna. Cuando podemos agendar?',
      recovery_unico: 'Hola! Quiero reservar una sesion unica de recovery. Cuando podemos agendar?',
      basico: 'Hola! Quiero contratar el plan mensual de recovery. Cuando podemos agendar?',
      plus: 'Hola! Quiero contratar el plan plus de recovery. Cuando podemos agendar?',
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
            <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Una recuperacion mas inteligente.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Baja fatiga', text: 'Reduce sensacion de carga y mejora percepcion corporal despues de entrenar.' },
              { title: 'Mejora sensaciones', text: 'Sales con mas soltura, menos rigidez y mejor disposicion para seguir moviendote.' },
              { title: 'Sostiene rendimiento', text: 'Te ayuda a recuperar mejor para entrenar con mas continuidad.' },
            ].map((item) => (
              <div key={item.title} className="mesh-card p-7">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-700">{item.title}</p>
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
              <h3 className="text-2xl font-bold text-slate-950">Como el sauna apoya tu estado fisico</h3>
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
              <h3 className="text-2xl font-bold text-slate-950">Testimonio recovery</h3>
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
            <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Elige el formato que mejor te acomoda.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Sesiones unicas o planes para sostener tu recuperacion con mas frecuencia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-[30px] border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
                  plan.featured ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-950'
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${plan.featured ? 'bg-white/10 text-slate-200' : 'bg-slate-100 text-slate-600'}`}>
                    {plan.subtitle}
                  </span>
                  <div className={`flex items-center gap-1 text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    <Clock className="h-4 w-4" />
                    {plan.duration}
                  </div>
                </div>

                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className={`mt-2 text-3xl font-extrabold ${plan.featured ? 'text-white' : 'text-slate-950'}`}>{plan.price}</p>
                <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>

                <div className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-cyan-300' : 'text-slate-950'}`} />
                      <p className={`text-sm leading-6 ${plan.featured ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppClick(plan.action)}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-colors ${
                    plan.featured ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-slate-950 text-white hover:bg-slate-900'
                  }`}
                >
                  Reservar plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="container-max">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Testimonios</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Lo que dicen quienes ya lo probaron.</h2>
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
            <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Listo para recuperar mejor?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
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
