import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaCheckCircle, FaLock, FaArrowLeft, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { registerFreeAccess } from '../services/firebase'

const countryCodes = [
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: '+1', flag: '🇺🇸', name: 'USA/Canada' },
]

const benefits = [
  { text: 'Libreria Movement Snack para siempre', bonus: false },
  { text: 'Acceso directo por correo, al instante', bonus: false },
]

const FreeAccess = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('+56')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await registerFreeAccess({ email, name, phone: `${countryCode}${phone}` })

      if (typeof gtag !== 'undefined') {
        gtag('event', 'sign_up', {
          event_category: 'FreeAccess',
          event_label: 'Lead Magnet Form',
        })
      }

      setSubmitted(true)
      setEmail('')
      setName('')
      setPhone('')
    } catch (err) {
      setError(err.message || 'Ocurrio un error. Intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="acceso-gratis" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden flex flex-col">
      {/* Volver al inicio */}
      <div className="relative max-w-5xl mx-auto w-full mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <FaArrowLeft className="text-xs" />
          Volver al inicio
        </Link>
      </div>

      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative max-w-5xl mx-auto w-full flex-1 flex flex-col">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center py-20"
          >
            <div className="w-24 h-24 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-blue-400 text-5xl" />
            </div>
            <h3 className="text-white text-4xl font-extrabold mb-4">Todo listo!</h3>
            <p className="text-gray-300 text-xl max-w-md mb-3">
              Te enviamos el enlace de acceso a tu correo.
            </p>
            <p className="text-gray-500 text-base max-w-sm mb-10">
              Revisa tu bandeja de entrada (y la carpeta de spam por si acaso). Disfruta la libreria Movement Snack para siempre.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-2xl transition-colors text-sm font-medium"
            >
              <FaArrowLeft className="text-xs" />
              Volver al inicio
            </Link>
          </motion.div>
        ) : (
          <>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-sm font-medium">
            <FaLock className="text-xs" />
            Acceso 100% gratuito
          </span>
        </motion.div>

        {/* Titulo */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
        >
          Acceso gratis a{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Movement Snack
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-lg max-w-xl mx-auto mb-12"
        >
          Dejanos tus datos y te enviamos el acceso  para que disfrutes la libreria para siempre.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Lista de beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300 font-semibold mb-6 text-lg">Lo que vas a recibir:</p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`flex items-start gap-3 rounded-2xl p-3 ${item.bonus ? 'bg-yellow-500/10 border border-yellow-500/30' : ''}`}
                >
                  <FaCheckCircle className={`mt-0.5 shrink-0 text-lg ${item.bonus ? 'text-yellow-400' : 'text-blue-400'}`} />
                  <span className={item.bonus ? 'text-yellow-300 font-semibold' : 'text-gray-300'}>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-400 text-sm">
                Acceso inmediato por correo. Sin spam. Para siempre.
              </p>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4"
            >
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Tu nombre</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Lorenzo"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Tu correo electronico</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-white/10 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Tu telefono</label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-white/10 border border-white/15 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code} className="bg-gray-900">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <div className="relative flex-1">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="912345678"
                        className="w-full bg-white/10 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.03 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl transition-opacity disabled:opacity-60 shadow-lg shadow-blue-600/30"
                >
                  {loading ? 'Enviando...' : 'Quiero mi acceso gratis'}
                </motion.button>

                <p className="text-center text-gray-500 text-xs">
                  Tu informacion esta segura y no sera compartida.
                </p>
              </form>
          </motion.div>
        </div>
          </>
        )}
      </div>
    </section>
  )
}

export default FreeAccess
