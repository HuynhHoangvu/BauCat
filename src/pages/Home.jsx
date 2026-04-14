import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import Combos from '../components/Combos'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'

const ZALO_URL = 'https://zalo.me/0979391234'

export default function Home() {
  const openZalo = () => window.open(ZALO_URL, '_blank', 'noopener,noreferrer')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar onBooking={openZalo} />
      <Hero onBooking={openZalo} />
      <Services onBooking={openZalo} />
      <Fleet onBooking={openZalo} />
      <Combos onBooking={openZalo} />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  )
}
