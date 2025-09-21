import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

// Newsletter subscription service
export const subscribeToNewsletter = async (email) => {
  try {
    // Si Firebase no está configurado, simular éxito
    if (!db) {
      console.log('Simulando suscripción a newsletter (Firebase no configurado):', email)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simular delay
      return { success: true, id: 'demo-id-' + Date.now() }
    }

    // Check if email already exists
    const newsletterRef = collection(db, 'newsletter')
    const q = query(newsletterRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      throw new Error('Este email ya está suscrito')
    }

    // Add new subscription
    const docRef = await addDoc(collection(db, 'newsletter'), {
      email: email,
      subscribedAt: serverTimestamp(),
      status: 'active',
      source: 'landing_page'
    })

    console.log('Newsletter subscription added with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error adding newsletter subscription: ', error)
    throw error
  }
}

// Contact form service
export const submitContactForm = async (formData) => {
  try {
    if (!db) {
      console.log('Simulando envío de formulario (Firebase no configurado):', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { success: true, id: 'demo-contact-' + Date.now() }
    }

    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'new'
    })

    console.log('Contact form submitted with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error submitting contact form: ', error)
    throw error
  }
}

// Lead tracking service
export const trackLead = async (leadData) => {
  try {
    if (!db) {
      console.log('Simulando tracking de lead (Firebase no configurado):', leadData)
      return { success: true, id: 'demo-lead-' + Date.now() }
    }

    const docRef = await addDoc(collection(db, 'leads'), {
      ...leadData,
      timestamp: serverTimestamp(),
      status: 'new'
    })

    console.log('Lead tracked with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error tracking lead: ', error)
    throw error
  }
}

// Service inquiry service
export const submitServiceInquiry = async (serviceData) => {
  try {
    if (!db) {
      console.log('Simulando consulta de servicio (Firebase no configurado):', serviceData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { success: true, id: 'demo-inquiry-' + Date.now() }
    }

    const docRef = await addDoc(collection(db, 'service_inquiries'), {
      ...serviceData,
      inquiredAt: serverTimestamp(),
      status: 'pending'
    })

    console.log('Service inquiry submitted with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error submitting service inquiry: ', error)
    throw error
  }
}

// Analytics event tracking
export const trackEvent = async (eventData) => {
  try {
    if (!db) {
      console.log('Simulando evento analytics (Firebase no configurado):', eventData)
      return { success: true, id: 'demo-event-' + Date.now() }
    }

    const docRef = await addDoc(collection(db, 'events'), {
      ...eventData,
      timestamp: serverTimestamp()
    })

    console.log('Event tracked with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error tracking event: ', error)
    // Don't throw error for analytics, just log it
    return { success: false, error: error.message }
  }
}
