import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Dịch vụ',  href: '#dich-vu' },
  { label: 'Bảng giá', href: '#bang-gia' },
  { label: 'Combo',    href: '#combo' },
  { label: 'Ký ức',   href: '#gallery' },
  { label: 'Liên hệ', href: '#lien-he' },
]

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Transparent over dark hero → white + dark text on light sections
  const scrolledCls = 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3'
  const topCls      = 'bg-transparent py-5'

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? scrolledCls : topCls}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="group">
          <img
            src="/newlogo1.png"
            alt="Du Lịch Triều Trang"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-orange-500 ${
                scrolled ? 'text-gray-500' : 'text-white/65'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0979391234"
            className={`text-xs font-medium tracking-wider flex items-center gap-1.5 transition-colors hover:text-orange-500 ${
              scrolled ? 'text-gray-400' : 'text-white/50'
            }`}
          >
            <Phone size={12} /> 0979 391 234
          </a>
          <button
            onClick={onBooking}
            className="orange-pulse bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-colors"
          >
            Đặt xe ngay
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={scrolled ? 'md:hidden text-gray-900' : 'md:hidden text-white'}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-900 text-sm font-semibold tracking-wider uppercase border-b border-gray-100 pb-4 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a href="tel:0979391234" className="text-gray-400 text-sm flex items-center gap-2">
                <Phone size={14} /> 0979 391 234
              </a>
              <a href="tel:0909737797" className="text-gray-400 text-sm flex items-center gap-2">
                <Phone size={14} /> 0909 737 797
              </a>
              <button
                onClick={() => { onBooking(); setOpen(false) }}
                className="bg-orange-500 text-white font-bold text-sm tracking-widest uppercase py-3 mt-1"
              >
                Đặt xe ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
