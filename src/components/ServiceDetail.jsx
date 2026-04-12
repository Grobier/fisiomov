import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronLeft, Clock, Home, PlayCircle } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import services from '../data/services'

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!service) {
    navigate('/')
    return null
  }

  const trackEvent = (eventName, label) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, { event_category: 'service_detail', event_label: label })
    }
  }

  const handleWhatsApp = () => {
    trackEvent('click', `whatsapp_${service.slug}`)
    const msg = `Hola! Me interesa el servicio de ${service.title}. Podrias darme mas informacion?`
    window.open(`https://wa.me/56963352063?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleCalendar = () => {
    trackEvent('click', `calendar_${service.slug}`)
    window.open('https://calendar.app.google/ofAAA1auXWNjXKh59', '_blank')
  }

  const handlePlanWhatsApp = (planName) => {
    trackEvent('click', `whatsapp_${service.slug}_${planName.toLowerCase().replace(/\s+/g, '_')}`)
    const msg = `Hola! Me interesa contratar el ${planName} de ${service.title}. Podrias darme mas informacion?`
    window.open(`https://wa.me/56963352063?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7fb_100%)] text-slate-950">
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Home className="h-4 w-4" />
            Inicio
          </button>

          <p className="hidden text-sm font-bold uppercase tracking-[0.22em] text-slate-500 md:block">{service.title}</p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 pb-14 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute left-[18%] top-24 h-40 w-40 rounded-full bg-sky-300/12 blur-3xl" />
          <div className="absolute right-[18%] top-20 h-44 w-44 rounded-full bg-emerald-300/12 blur-3xl" />
        </div>

        <div className="container-max relative text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white/90 px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-700 shadow-[0_12px_30px_rgba(34,211,238,0.10)]">
            {service.subtitle || 'Servicio'}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-5xl text-5xl font-extrabold leading-[0.92] text-slate-950 sm:text-6xl md:text-7xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600 md:text-[1.45rem]"
          >
            {service.description}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              {service.duration}
            </span>
            {service.price ? (
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700 shadow-[0_10px_24px_rgba(16,185,129,0.08)]">
                {service.price}
              </span>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={handleWhatsApp}
              className="rounded-full bg-[linear-gradient(135deg,#2563eb_0%,#06b6d4_100%)] px-9 py-4 text-lg font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(37,99,235,0.34)]"
            >
              {service.ctaWhatsapp || 'Escribeme por WhatsApp'}
            </button>
            {service.ctaCalendar ? (
              <button
                onClick={handleCalendar}
                className="rounded-full border border-slate-200 bg-white px-9 py-4 text-lg font-semibold text-slate-800 shadow-[0_10px_26px_rgba(15,23,42,0.06)] transition-colors hover:bg-slate-50"
              >
                Reservar cupo
              </button>
            ) : null}
          </motion.div>
        </div>
      </section>

      {service.videoUrl ? (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="container-max">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center gap-3">
                <PlayCircle className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-950">Mira como funciona este servicio</h3>
              </div>
              <div className="aspect-video overflow-hidden rounded-[24px] bg-slate-900">
                <iframe
                  src={service.videoUrl}
                  title={`Video ${service.title}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.features?.length ? (
        <section className="section-padding">
          <div className="container-max">
            <div className="mb-10 text-center">
              <span className="section-eyebrow">Por que elegirlo</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Lo que hace valioso este servicio.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {service.features.map((feature) => (
                <div key={feature.title} className="mesh-card p-7">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-700">{feature.title}</p>
                  <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.planOverview || service.planTiers?.length ? (
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="container-max">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-eyebrow">Programas online</span>
                <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
                  {service.planOverview?.title || 'Planes de entrenamiento'}
                </h2>
                {service.planOverview?.intro?.[0] ? (
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {service.planOverview.intro[0]}
                  </p>
                ) : null}
              </div>

              {service.planTiers?.length ? (
                <div className="mt-10 grid gap-5 pt-6 xl:grid-cols-3">
                  {service.planTiers.map((plan, index) => (
                    <article
                      key={plan.name}
                      className={`relative flex h-full flex-col rounded-[32px] border bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.06)] ${
                        index === 0
                          ? 'border-slate-200'
                          : index === 1
                            ? 'border-slate-200'
                            : 'border-emerald-300'
                      }`}
                    >
                      <div className={`-mx-6 -mt-6 mb-6 h-2 ${index === 2 ? 'bg-emerald-400' : 'bg-slate-950'}`} />

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`text-sm font-bold uppercase tracking-[0.2em] ${
                              index === 2 ? 'text-emerald-700' : 'text-slate-500'
                            }`}
                          >
                            {`Plan 0${index + 1} - ${index === 0 ? 'Economic' : index === 1 ? 'Advance' : 'Premium'}`}
                          </p>
                          <h3 className="mt-4 text-4xl font-extrabold leading-[0.95] text-slate-950">
                            {plan.name.replace('Plan ', '')}
                          </h3>
                        </div>
                        <div
                          className={`absolute right-6 top-0 -translate-y-1/2 rounded-full px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] shadow-[0_12px_30px_rgba(15,23,42,0.12)] ${
                            index === 2 ? 'bg-emerald-500 text-white' : 'bg-slate-950 text-white'
                          }`}
                        >
                          {index === 0 ? 'Economic' : index === 1 ? 'Advance' : 'Premium'}
                        </div>
                      </div>

                      <p className="mt-6 text-base leading-8 text-slate-600">{plan.audience}</p>

                      <div className={`mt-8 rounded-[24px] border p-5 ${index === 2 ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-200 bg-slate-50/70'}`}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Valor mensual</p>
                        <div className="mt-3 flex items-end gap-3">
                          <p className="text-5xl font-extrabold leading-none text-slate-950">{plan.preferredPrice}</p>
                          <span className="pb-1 text-lg text-slate-400">CLP</span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                          <span>Precio normal</span>
                          <span className="font-semibold line-through">{plan.regularPrice}</span>
                        </div>
                      </div>

                      <div className={`mt-8 flex-1 rounded-[24px] border p-5 ${index === 2 ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 bg-white'}`}>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Incluye</p>
                        <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-4">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                            <span>Descripcion del plan</span>
                            <ChevronDown className="h-4 w-4 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
                          </summary>
                          <p className="mt-3 pr-6 text-sm leading-7 text-slate-600">{plan.audience}</p>
                        </details>
                        {plan.includes.map((item) => (
                          <details key={item.title} className="group mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                              <span className="flex items-center gap-3">
                                <Check className={`h-4 w-4 ${index === 2 ? 'text-emerald-600' : 'text-slate-900'}`} />
                                {item.title}
                              </span>
                              <ChevronDown className="h-4 w-4 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 pl-7 pr-6 text-sm leading-7 text-slate-600">{item.description}</p>
                          </details>
                        ))}
                      </div>

                      <button
                        onClick={() => handlePlanWhatsApp(plan.name)}
                        className={`mt-8 w-full rounded-full px-6 py-4 text-base font-semibold transition-all ${
                          index === 2
                            ? 'bg-emerald-500 text-white shadow-[0_14px_30px_rgba(16,185,129,0.22)] hover:bg-emerald-600'
                            : 'bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] hover:bg-slate-900'
                        }`}
                      >
                        Contratar plan
                      </button>
                    </article>
                  ))}
                </div>
              ) : null}

              {service.planOverview?.closing ? (
                <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-slate-600">
                  {service.planOverview.closing}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {service.trainingModes?.length ? (
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="container-max">
            <div className="mb-8 text-center">
              <span className="section-eyebrow">Formatos</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Modalidades de trabajo.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {service.trainingModes.map((mode) => (
                <div key={mode.mode} className="rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <div className="text-3xl font-extrabold text-slate-950">{mode.mode}</div>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{mode.name}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{mode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {(service.includes?.length || service.detailedPricing?.length) && service.slug !== 'planificacion' ? (
        <section className="section-padding">
          <div className="container-max grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Que incluye</p>
              <div className="space-y-3">
                {(service.includes || []).map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-950" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {service.detailedPricing?.length ? (
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Opciones disponibles</p>
                <div className="space-y-3">
                  {service.detailedPricing.map((option) => (
                    <div key={option.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-950">{option.name}</p>
                          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="h-4 w-4" />
                            {option.duration}
                          </div>
                        </div>
                        {option.badge ? <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{option.badge}</span> : null}
                      </div>
                    </div>
                  ))}
                </div>
                {service.pricingNote ? <p className="mt-4 text-sm leading-7 text-slate-500">{service.pricingNote}</p> : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-14 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <span className="section-eyebrow">Siguiente paso</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Listo para empezar?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Escribeme y vemos si este servicio es el que mejor encaja contigo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={handleWhatsApp} className="btn-primary px-7 py-3.5 text-base">
                {service.ctaWhatsapp || 'Escribeme por WhatsApp'}
              </button>
              {service.ctaCalendar ? (
                <button onClick={handleCalendar} className="btn-secondary px-7 py-3.5 text-base">
                  Reservar cupo
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default ServiceDetail
