import { useRef } from 'react'
import { ChevronDown, Calendar, MessageCircle } from 'lucide-react'

// ─────────────────────────────────────────────
//  HƯỚNG DẪN THÊM VIDEO
//
//  CÁCH 1 – Video local (file mp4 của bạn):
//    1. Nén video xuống ~10 MB (dùng HandBrake / ffmpeg)
//    2. Đổi tên thành hero.mp4, đặt vào thư mục public/
//    3. Để YOUTUBE_ID = '' (rỗng)
//
//  CÁCH 2 – YouTube (tiện hơn, không cần nén):
//    1. Upload video lên YouTube (có thể để Unlisted)
//    2. Copy VIDEO_ID từ URL: youtube.com/watch?v=VIDEO_ID
//    3. Paste vào YOUTUBE_ID bên dưới
//
//  Ví dụ: const YOUTUBE_ID = 'dQw4w9WgXcQ'
// ─────────────────────────────────────────────
const YOUTUBE_ID = '' // ← dán YouTube ID vào đây

export default function Hero({ onBooking }) {
  const videoRef = useRef(null)

  const handleVideoLoad = () => {
    if (videoRef.current) videoRef.current.style.opacity = '1'
  }

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden bg-black">

      {/* ── 1. Fallback gradient (hiển thị khi chưa có video) ── */}
      <div className="absolute inset-0 hero-gradient" />

      {/* ── 2a. YouTube background (nếu có YOUTUBE_ID) ── */}
      {YOUTUBE_ID && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=${YOUTUBE_ID}&iv_load_policy=3&disablekb=1`}
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]"
            title="Hero background"
          />
        </div>
      )}

      {/* ── 2b. Local video (nếu không có YOUTUBE_ID) ── */}
      {!YOUTUBE_ID && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        >
          <source src="/hero_v.mp4" type="video/mp4" />
          {/* Không có file → gradient phía sau tự hiện */}
        </video>
      )}

      {/* ── 3. Overlays ── */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute bottom-1/3 left-1/3 w-125 h-125 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── 4. Hero content ── */}
      {/*  pb-16 sm:pb-0 + pt-24: tránh bị nav đè, và nhô lên từ đáy trên mobile  */}
      <div className="relative z-10 px-8 sm:px-12 max-w-3xl pt-20 text-center mx-auto">

        <div className="animate-fade-in-up">
          <p className="section-label mb-6 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-orange-500" />
            Tiểu Sa Mạc Bàu Trắng &nbsp;·&nbsp; Lâm Đồng
            <span className="inline-block w-8 h-px bg-orange-500" />
          </p>
        </div>

        <h1 className="animate-fade-in-up anim-delay-1 font-black leading-[0.9] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight">
            Chinh
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-orange-500 uppercase tracking-tight">
            Phục
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight">
            Sa Mạc
          </span>
        </h1>

        <p className="animate-fade-in-up anim-delay-2 text-white/65 text-base sm:text-lg max-w-md mb-2 leading-relaxed">
          ATV · Jeep địa hình · Lạc đà · Đà điểu
        </p>
        <p className="animate-fade-in-up anim-delay-2 text-white/40 text-sm mb-10 tracking-wider">
          ⏰ 05:00 – 17:30 · Mở hàng ngày
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBooking}
            className="orange-pulse bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-widest uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-colors"
          >
            <Calendar size={16} />
            Đặt xe ngay
          </button>
          <a
            href="https://zalo.me/0979391234"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:border-white/70 text-white font-bold text-sm tracking-widest uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-colors"
          >
            <MessageCircle size={16} />
            Chat Zalo
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up anim-delay-4 mt-5 flex items-center justify-center gap-10 border-t border-white/12 pt-8">
          {[
            { num: '4+',    label: 'Loại xe' },
            { num: '5★',    label: 'Đánh giá' },
            { num: '1000+', label: 'Lượt / tháng' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-black text-orange-500">{s.num}</div>
              <div className="text-white/40 text-xs tracking-widest uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
    </section>
  )
}
