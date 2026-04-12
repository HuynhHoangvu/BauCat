import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import Combos from '../components/Combos'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'

const ZALO_URL = 'https://zalo.me/0979391234'

export default function Home() {
  const openZalo = () => window.open(ZALO_URL, '_blank', 'noopener,noreferrer')

  return (
    <>
      <Navbar onBooking={openZalo} />
      <Hero onBooking={openZalo} />
      <Services onBooking={openZalo} />
      <Fleet onBooking={openZalo} />
      <Combos onBooking={openZalo} />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingContact />
    </>
  )
}
