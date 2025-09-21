import { useEffect } from 'react'

const ScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    // Add fade-in class to elements that should animate
    const animateElements = [
      // Services cards
      '.bg-white.rounded-2xl.shadow-lg',
      // Benefits sections
      '.group',
      // Testimonials
      '.bg-white.rounded-3xl',
      // About sections
      '.bg-gray-50.rounded-xl',
      // Contact cards
      '.bg-white.rounded-xl.shadow-sm'
    ]

    animateElements.forEach((selector) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el, index) => {
        if (!el.classList.contains('fade-in')) {
          el.classList.add('fade-in')
          // Add staggered delay
          el.style.transitionDelay = `${index * 100}ms`
          observer.observe(el)
        }
      })
    })

    // Smooth scroll behavior for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]')
    scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          const headerHeight = 80 // Adjust based on your header height
          const targetPosition = targetElement.offsetTop - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      })
    })

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroSection = document.querySelector('.hero-bg')
      
      if (heroSection) {
        const speed = 0.5
        heroSection.style.transform = `translateY(${scrolled * speed}px)`
      }

      // Header background change on scroll
      const header = document.querySelector('header')
      if (header) {
        if (scrolled > 50) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Add CSS for animations
    const style = document.createElement('style')
    style.textContent = `
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Staggered animations for grids */
      .fade-in:nth-child(1) { transition-delay: 0ms; }
      .fade-in:nth-child(2) { transition-delay: 100ms; }
      .fade-in:nth-child(3) { transition-delay: 200ms; }
      .fade-in:nth-child(4) { transition-delay: 300ms; }
      .fade-in:nth-child(5) { transition-delay: 400ms; }
      .fade-in:nth-child(6) { transition-delay: 500ms; }
      
      /* Hover animations */
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      
      /* Button animations */
      .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
      }
      
      .btn-primary::before, .btn-secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }
      
      .btn-primary:hover::before, .btn-secondary:hover::before {
        left: 100%;
      }
      
      /* Smooth transitions for all interactive elements */
      a, button, .card {
        transition: all 0.3s ease;
      }
      
      /* Header scroll effect */
      header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      }
      
      /* Loading animations */
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
      }
      
      .loading-shimmer {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200px 100%;
        animation: shimmer 1.5s infinite;
      }
      
      /* Pulse animation for important elements */
      .pulse-glow {
        animation: pulse-glow 2s infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      }
      
      /* Scroll indicator animation */
      .scroll-indicator {
        animation: bounce 2s infinite;
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }
      
      /* Mobile optimizations */
      @media (max-width: 768px) {
        .fade-in {
          transform: translateY(20px);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        .fade-in,
        .hover-lift,
        .btn-primary,
        .btn-secondary {
          transition: none;
        }
        
        .scroll-indicator,
        .pulse-glow {
          animation: none;
        }
      }
    `
    
    document.head.appendChild(style)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', () => {})
      })
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // This component doesn't render anything
  return null
}

export default ScrollAnimations
