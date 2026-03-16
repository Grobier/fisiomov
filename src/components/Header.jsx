import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'pt-2.5' : 'pt-4'}`}>
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <span className="font-bold text-white">F</span>
            </div>
            <img
              src="/logo-fisiomov.png"
              alt="FISIOMOVE Logo"
              className="h-7 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="hidden text-base font-bold text-slate-900">FISIOMOVE</div>
          </div>

          <div className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[15px] font-semibold text-slate-500 transition-colors duration-200 hover:text-slate-950"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/recursos-gratuitos"
              className="group flex items-center gap-3 rounded-full border border-slate-900 bg-slate-950 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-900"
            >
              <span className="flex items-center gap-1 rounded-full bg-cyan-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                Gratis
              </span>
              <span>Movement Snack</span>
              <FaArrowRight className="text-xs text-cyan-300 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="glass-panel mt-3 space-y-2 rounded-[28px] px-4 py-4">
              <Link
                to="/recursos-gratuitos"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-slate-900 bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
              >
                <span className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-cyan-300 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                    Gratis
                  </span>
                  Movement Snack
                </span>
                <FaArrowRight className="text-xs text-cyan-300" />
              </Link>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
