import { useRef, useEffect, useState } from 'react'
import SplitText from '../animations/SplitText'
import ShinyText from '../animations/ShinyText'

export default function Hero({ onBooking }) {
  const videoRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleVideoLoad = () => {
    if (videoRef.current) videoRef.current.style.opacity = '1'
  }

  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-black select-none">
      
      {/* ── 1. Background Layer ── */}
      <div className="absolute inset-0 hero-gradient opacity-60 z-0" />
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-2000 scale-105 z-0"
      >
        <source src="/hero_v.mp4" type="video/mp4" />
      </video>

      {/* ── 2. Interactive Light Glow ── */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(249, 115, 22, 0.12), transparent 70%)`
        }}
      />

      {/* ── 3. Overlays (Tăng độ tương phản để chữ rõ hơn) ── */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />

      {/* ── 4. Content Layer ── */}
      <div className="relative z-20 px-6 sm:px-8 max-w-5xl w-full flex flex-col items-center text-center pt-24 sm:pt-32 lg:pt-40">
        
        {/* Tagline */}
       <div className="animate-fade-in-up mb-6 sm:mb-8">
  <div className="flex items-center justify-center gap-4 sm:gap-6 whitespace-nowrap">
    {/* Đường kẻ trái - Tăng độ dày và rực rỡ */}
    <span className="w-10 sm:w-20 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
    
    {/* Chữ lấp lánh - Tăng cỡ chữ */}
   <ShinyText 
  text="Tiểu Sa Mạc Bàu Trắng" 
  className="text-[10px] sm:text-[15px] font-black uppercase tracking-[0.3em] sm:tracking-[0.35em] text-yellow-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" 
/>  
    {/* Đường kẻ phải - Tăng độ dày và rực rỡ */}
    <span className="w-10 sm:w-20 h-[2px] sm:h-[3px] bg-gradient-to-l from-transparent via-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
  </div>
</div>

        {/* Main Title - Đã sửa lỗi chồng chữ và mất chữ */}
        <h1 className="mb-10 sm:mb-14 pointer-events-none flex flex-col items-center gap-1 sm:gap-2 w-full">
          {/* Dòng 1: CHINH PHỤC */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[90px] font-black leading-none select-none whitespace-nowrap">
            <SplitText 
              text="CHINH" 
              className="text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
              delay={0.1}
            />
            <SplitText 
              text="PHỤC" 
              className="text-orange-500 tracking-tight drop-shadow-[0_4px_12px_rgba(249,115,22,0.4)]" 
              delay={0.3}
            />
          </div>
          {/* Dòng 2: SA MẠC */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[90px] font-black leading-none select-none whitespace-nowrap">
            <SplitText 
              text="SA" 
              className="text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
              delay={0.5}
            />
            {/* Fix lỗi mất chữ MẠC bằng class outline chuẩn của Tailwind */}
            <SplitText 
              text="MẠC" 
              className="text-transparent tracking-tight [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.9)] opacity-80" 
              delay={0.7}
            />
          </div>
        </h1>

        {/* Sub-info & Buttons */}
        <div className="animate-fade-in-up anim-delay-2 flex flex-col items-center gap-8 w-full">
          <p className="text-white/60 text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] max-w-lg leading-relaxed">
            ATV <span className="mx-1 text-orange-500">•</span> 
            Jeep Địa Hình <span className="mx-1 text-orange-500">•</span> 
            Lạc Đà <span className="mx-1 text-orange-500">•</span> 
            Đà Điểu
          </p>
          
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <button
              onClick={onBooking}
              className="group relative w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 bg-orange-500 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative z-10 text-white font-black text-[11px] sm:text-xs uppercase tracking-[0.3em]">Đặt xe ngay →</span>
            </button>

            <a
              href="https://zalo.me/0979391234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 backdrop-blur-sm border border-white/20 text-white font-black text-[11px] sm:text-xs uppercase tracking-[0.3em] hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all flex items-center justify-center"
            >
              Liên hệ Zalo
            </a>
          </div>
        </div>

        {/* ── 5. Compact Statistics Card ── */}
        <div className="animate-fade-in-up anim-delay-3 mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
          
          {[
            { num: '04+',   label: 'Loại xe' },
            { num: '5.0',   label: 'Đánh giá' },
            { num: '1.2k',  label: 'Khách / tháng' },
          ].map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center justify-center text-center border-b border-white/5 last:border-0 sm:border-0 pb-4 last:pb-0 sm:pb-0">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">{s.num}</div>
              <div className="text-orange-400 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}