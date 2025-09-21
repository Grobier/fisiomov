import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    const phoneNumber = "56912345678"
    const message = "Hola! Me interesa conocer más sobre FISIOMOV"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const quickLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Quién soy', href: '#about' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const services = [
    'Rehabilitación de Lesiones',
    'Entrenamiento a Distancia',
    'Entrenamientos Personalizados',
    'Recovery y Masajes',
    'Talleres y Capacitación'
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo-fisiomov-white.png" 
                alt="FISIOMOV Logo" 
                className="h-8 w-auto mr-3"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div className="hidden text-2xl font-bold text-white">
                FISIOMOV
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Recupera tu movimiento, entrena sin dolor y mantente activo. 
              Fisioterapia y entrenamiento personalizado para tu bienestar.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/fisiomov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com/in/tu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <a 
                  href="tel:+56912345678" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +56 9 1234 5678
                </a>
              </div>
              
              <div className="flex items-center">
                <FaWhatsapp className="text-green-400 mr-3" />
                <button
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  WhatsApp 24/7
                </button>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a 
                  href="mailto:contacto@fisiomov.cl" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  contacto@fisiomov.cl
                </a>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Santiago, Chile<br />
                  <span className="text-sm">Atención presencial y online</span>
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Horarios de Atención</h4>
              <div className="text-sm text-gray-300">
                <p>Lunes - Viernes: 8:00 - 20:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Solo emergencias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                © {currentYear} FISIOMOV. Todos los derechos reservados. 
                Hecho con <FaHeart className="inline text-red-500 mx-1" /> para tu bienestar.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-primary-600">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-white text-sm">
              <strong>¿Lesión urgente?</strong> Contáctanos por WhatsApp para atención inmediata
              <button
                onClick={handleWhatsAppClick}
                className="ml-2 underline hover:no-underline"
              >
                +56 9 1234 5678
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
