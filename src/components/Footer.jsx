import React from 'react'
import { FaEnvelope, FaHeart, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
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
            <p className="mb-6 leading-relaxed text-slate-600">
              Recupera tu movimiento, entrena sin dolor y mantente activo. Fisioterapia y entrenamiento personalizado para tu bienestar.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com/lorenzogrobier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-200 hover:bg-slate-950 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-200 hover:bg-slate-950 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
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
            <h3 className="mb-6 text-lg font-semibold">Navegacion</h3>
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
            <h3 className="mb-6 text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-slate-500" />
                <a href="tel:+56963352063" className="text-slate-600 transition-colors duration-200 hover:text-slate-950">
                  +56 9 63352063
                </a>
              </div>

              <div className="flex items-center">
                <FaWhatsapp className="mr-3 text-slate-500" />
                <button onClick={handleWhatsAppClick} className="text-slate-600 transition-colors duration-200 hover:text-slate-950">
                  WhatsApp 24/7
                </button>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-slate-500" />
                <a href="mailto:contacto@fisiomov.cl" className="text-slate-600 transition-colors duration-200 hover:text-slate-950">
                  contacto@fisiomov.cl
                </a>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-slate-500" />
                <span className="text-slate-600">
                  Santiago, Chile
                  <br />
                  <span className="text-sm">Atencion presencial y online</span>
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-50 p-4">
              <h4 className="mb-2 font-semibold">Horarios de atencion</h4>
              <div className="text-sm text-slate-600">
                <p>Lunes - Viernes: 8:00 - 20:00</p>
                <p>Sabados: 9:00 - 14:00</p>
                <p>Domingos: Solo emergencias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-max px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-slate-500 md:mb-0">
              <p>
                © {currentYear} FISIOMOVE. Todos los derechos reservados. Hecho con <FaHeart className="mx-1 inline text-red-500" /> para tu bienestar.
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <button className="text-slate-500 transition-colors duration-200 hover:text-slate-950">Politica de privacidad</button>
              <button className="text-slate-500 transition-colors duration-200 hover:text-slate-950">Terminos de servicio</button>
            </div>
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
