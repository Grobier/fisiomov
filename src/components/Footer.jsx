import React from 'react'
import { FaEnvelope, FaHeart, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    const phoneNumber = '56963352063'
    const message = 'Hola. Me interesa conocer mas sobre FISIOMOVE'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const quickLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const services = [
    'Rehabilitacion de lesiones',
    'Entrenamiento a distancia',
    'Entrenamientos personalizados',
    'Recovery y masajes',
    'Talleres y capacitacion',
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950">
      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[32px] border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Fisiomove</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">Rehabilitacion y entrenamiento con criterio.</h2>
            </div>
            <button onClick={handleWhatsAppClick} className="btn-primary w-full justify-center md:w-auto">
              Hablar ahora
            </button>
          </div>
        </div>

        <div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="mb-5 flex items-center">
              <img
                src="/logo-fisiomov.png"
                alt="FISIOMOVE Logo"
                className="mr-3 h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div className="hidden text-2xl font-bold text-slate-950">FISIOMOVE</div>
            </div>

            <p className="max-w-md leading-relaxed text-slate-600">
              Recupera tu movimiento, entrena sin dolor y mantente activo. Fisioterapia y entrenamiento personalizado para tu bienestar.
            </p>

            <div className="mt-6 flex space-x-3">
              <a
                href="https://instagram.com/lorenzogrobier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-200 hover:bg-slate-950 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-200 hover:bg-slate-950 hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Navegacion</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="text-slate-600 transition-colors duration-200 hover:text-slate-950">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contacto</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <FaPhone className="text-slate-500" />
                <a href="tel:+56963352063" className="transition-colors duration-200 hover:text-slate-950">
                  +56 9 63352063
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-slate-500" />
                <a href="mailto:contacto@fisiomov.cl" className="transition-colors duration-200 hover:text-slate-950">
                  contacto@fisiomov.cl
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-slate-500" />
                <span>
                  Santiago, Chile
                  <br />
                  <span className="text-slate-500">Atencion presencial y online</span>
                </span>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="mb-1 font-semibold text-slate-900">Horarios de atencion</p>
                <p>Lunes - Viernes: 8:00 - 20:00</p>
                <p>Sabados: 9:00 - 14:00</p>
                <p>Domingos: Solo emergencias</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} FISIOMOVE. Todos los derechos reservados. Hecho con <FaHeart className="mx-1 inline text-red-500" /> para tu bienestar.
          </p>

          <div className="flex gap-5">
            <button className="transition-colors duration-200 hover:text-slate-950">Politica de privacidad</button>
            <button className="transition-colors duration-200 hover:text-slate-950">Terminos de servicio</button>
          </div>
        </div>
      </div>

      <div className="bg-slate-950">
        <div className="container-max px-4 py-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-white">
              <strong>Lesion urgente?</strong> Contactanos por WhatsApp para atencion inmediata
              <button onClick={handleWhatsAppClick} className="ml-2 underline hover:no-underline">
                +56 9 6335 2063
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
