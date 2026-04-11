import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import services from '../data/services'

const Services = () => {
  const navigate = useNavigate()
  const [activeServiceId, setActiveServiceId] = useState(services[0]?.id ?? null)

  const activeService = services.find((service) => service.id === activeServiceId) ?? services[0]

  const trackEvent = (label) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', { event_category: 'service_card', event_label: label })
    }
  }

  const openServicePage = (service) => {
    trackEvent(service.slug)
    if (service.externalRoute) {
      navigate(service.externalRoute)
      window.scrollTo(0, 0)
      return
    }

    navigate(`/servicios/${service.slug}`)
    window.scrollTo(0, 0)
  }

  return (
    <section id="servicios" className="section-padding bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f4fbff_100%)]">
      <div className="container-max">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-slate-950 md:text-5xl">
            Elige el servicio que mejor se adapta a tu objetivo.
          </h2>
        
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isActive = service.id === activeService.id

            return (
              <motion.button
                key={service.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onFocus={() => setActiveServiceId(service.id)}
                onClick={() => openServicePage(service)}
                className={`rounded-[28px] border p-6 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-500 bg-[linear-gradient(135deg,#0f172a_0%,#0f3b46_48%,#0f766e_100%)] text-white shadow-[0_24px_60px_rgba(8,145,178,0.24)]'
                    : 'border-slate-200 bg-white/85 text-slate-950 hover:border-cyan-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(14,165,233,0.10)]'
                }`}
              >
                <div className="mb-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isActive ? 'bg-white/10' : 'bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_100%)]'}`}>
                    <IconComponent className={`text-xl ${isActive ? 'text-white' : 'text-slate-950'}`} />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className={`line-clamp-3 text-sm leading-7 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>{service.description}</p>

                <div className={`mt-6 flex items-center gap-2 text-sm font-semibold ${isActive ? 'text-cyan-100' : 'text-slate-700'}`}>
                  <span>Ir a la seccion</span>
                  <FaArrowRight />
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
