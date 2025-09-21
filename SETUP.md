# Guía de Configuración FISIOMOV

## 📋 Lista de Verificación Pre-Deploy

### 1. Instalación de Dependencias
```bash
# En el directorio del proyecto
npm install
```

### 2. Configuración de Firebase

#### Crear Proyecto Firebase:
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en "Crear un proyecto"
3. Nombre: `fisiomov-landing`
4. Habilita Google Analytics (opcional)

#### Configurar Firestore:
1. En el panel de Firebase, ve a "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba"
4. Elige la ubicación más cercana

#### Obtener Credenciales:
1. Ve a Configuración del proyecto (ícono de engranaje)
2. En la pestaña "General", baja hasta "Tus apps"
3. Haz clic en "Agregar app" y selecciona "Web"
4. Registra la app con nombre "FISIOMOV Landing"
5. Copia la configuración de Firebase

#### Actualizar Configuración:
Edita `src/config/firebase.js` con tus credenciales:
```javascript
const firebaseConfig = {
  apiKey: "tu-api-key-aqui",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-ABCDEF1234"
}
```

### 3. Configuración de Google Analytics

#### Crear Cuenta:
1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una cuenta nueva
3. Configura una propiedad para tu sitio web
4. Obtén el Measurement ID (formato: G-XXXXXXXXXX)

#### Actualizar Código:
Edita `index.html` línea 31:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_MEASUREMENT_ID');
</script>
```

### 4. Configuración de Meta Pixel

#### Crear Pixel:
1. Ve a [Meta Business Manager](https://business.facebook.com)
2. Ve a "Herramientas de eventos" > "Píxeles"
3. Haz clic en "Crear un píxel"
4. Nombra tu píxel "FISIOMOV Landing"
5. Copia el Pixel ID

#### Actualizar Código:
Edita `index.html` línea 45:
```html
<script>
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

### 5. Configuración de WhatsApp

#### Actualizar Número:
Busca y reemplaza `56912345678` en estos archivos:
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/components/Contact.jsx`
- `src/components/WhatsAppFloat.jsx`
- `src/components/Footer.jsx`

Formato: código país + número (sin espacios ni símbolos)
Ejemplo: `56987654321` para Chile

### 6. Configuración de Google Calendar

#### Crear Enlace de Agendamiento:
1. Ve a [Google Calendar](https://calendar.google.com)
2. Configura horarios de disponibilidad
3. Crea un enlace de agendamiento público
4. Copia la URL

#### Actualizar Enlaces:
Busca y reemplaza la URL en estos archivos:
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/components/Contact.jsx`

### 7. Personalización de Contenido

#### Información Personal:
- `src/components/About.jsx`: Actualiza nombre, biografía, credenciales
- `src/components/Header.jsx`: Logo y navegación
- `src/components/Footer.jsx`: Información de contacto

#### Servicios y Precios:
- `src/components/Services.jsx`: Actualiza servicios, precios y descripciones

#### Testimonios:
- `src/components/Testimonials.jsx`: Reemplaza con testimonios reales

### 8. Imágenes

Reemplaza las imágenes en `/public/`:
- `logo-fisiomov.png` - Logo principal (recomendado: 200x60px)
- `logo-fisiomov-white.png` - Logo blanco para footer
- `hero-bg.jpg` - Imagen hero (recomendado: 1920x1080px)
- `service-*.jpg` - Imágenes servicios (recomendado: 600x400px)
- `benefit-*.jpg` - Imágenes beneficios (recomendado: 600x400px)
- `testimonial-*.jpg` - Fotos testimonios (recomendado: 300x300px)
- `about-professional.jpg` - Tu foto profesional (recomendado: 600x800px)
- `og-image.jpg` - Imagen para redes sociales (recomendado: 1200x630px)

### 9. Testing Local

```bash
# Ejecutar en desarrollo
npm run dev

# Verificar en el navegador
# http://localhost:5173
```

#### Verificaciones:
- ✅ Navegación funciona
- ✅ Botones de WhatsApp abren chat
- ✅ Newsletter se puede suscribir
- ✅ Animaciones funcionan
- ✅ Responsive en móvil
- ✅ SEO tags correctos

### 10. Deploy en Render

#### Preparación:
1. Sube el código a GitHub
2. Ve a [Render](https://render.com)
3. Conecta tu repositorio

#### Configuración:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

#### Variables de Entorno:
Si usas variables de entorno, configúralas en Render.

### 11. Post-Deploy

#### Verificaciones Finales:
- ✅ Sitio carga correctamente
- ✅ Firebase funciona (newsletter)
- ✅ Google Analytics recibe datos
- ✅ Meta Pixel funciona
- ✅ WhatsApp links funcionan
- ✅ Google Calendar funciona

#### SEO:
- Envía sitemap a Google Search Console
- Configura Google My Business
- Optimiza velocidad de carga

## 🆘 Resolución de Problemas

### Firebase no funciona:
- Verifica las reglas de Firestore
- Confirma que el dominio está autorizado
- Revisa la consola del navegador

### Analytics no recibe datos:
- Verifica el Measurement ID
- Confirma que el código está en `<head>`
- Espera 24-48 horas para ver datos

### WhatsApp no abre:
- Verifica el formato del número
- Confirma que WhatsApp está instalado
- Prueba en diferentes dispositivos

## 📞 Contacto

Para soporte durante la configuración, contacta al desarrollador.
