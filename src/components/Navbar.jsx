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
        <div className="relative w-32 lg:w-40 h-full flex items-center">
          <a href="#" className="absolute top-1/2 -translate-y-1/2 group">
            <img
              src="/newlogo1.png"
              alt="Du Lịch Triều Trang"
              className="h-24 lg:h-32 w-auto pt-4 object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-float"
            />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-200 hover:text-orange-500 ${
                scrolled ? 'text-gray-500' : 'text-white/65'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:0979391234"
            className={`text-[10px] font-black tracking-widest uppercase transition-colors hover:text-orange-500 ${
              scrolled ? 'text-gray-400' : 'text-white/50'
            }`}
          >
            0979 391 234
          </a>
          <button
            onClick={onBooking}
            className="orange-pulse bg-orange-500 hover:bg-orange-600 text-white font-black text-[10px] tracking-widest uppercase px-6 py-3 transition-all active:scale-95"
          >
            ĐẶT XE →
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`${scrolled ? 'text-gray-900' : 'text-white'} md:hidden p-2 transition-transform active:scale-90`}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 top-[60px] bg-white z-40 transition-all duration-500 ease-in-out ${
        open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
          <div className="px-8 py-10 flex flex-col h-full">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-900 text-2xl font-black uppercase tracking-tighter border-b border-gray-100 pb-4 flex justify-between items-center group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {l.label}
                  <Menu size={16} className="text-orange-500 opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
            
            <div className="mt-auto space-y-6">
              <a href="tel:0979391234" className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Hotline 24/7</p>
                  <p className="text-lg font-black text-gray-900 tracking-tight">0979 391 234</p>
                </div>
              </a>
              <button
                onClick={() => { onBooking(); setOpen(false) }}
                className="w-full bg-orange-500 text-white font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-orange-500/20 active:scale-95 transition-all text-center"
              >
                Đặt xe ngay
              </button>
            </div>
          </div>
      </div>
    </nav>
  )
}
