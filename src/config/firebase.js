// Firebase configuration
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configuración temporal - reemplazar con valores reales
const firebaseConfig = {
  apiKey: "AIzaSyAznHzu1ixgrUbtsGkzLdM_PWAhbuZa0N8",
  authDomain: "fisiomov-97eb0.firebaseapp.com",
  projectId: "fisiomov-97eb0",
  storageBucket: "fisiomov-97eb0.firebasestorage.app",
  messagingSenderId: "182950099759",
  appId: "1:182950099759:web:78092b1f3126ec24217fda"
}

// Initialize Firebase solo si las credenciales no son de demo
let app = null
let db = null

try {
  if (firebaseConfig.apiKey !== "demo-api-key") {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
  } else {
    console.log('Firebase en modo demo - configurar credenciales reales en producción')
  }
} catch (error) {
  console.log('Firebase no configurado:', error.message)
}

export { db }
export default app
