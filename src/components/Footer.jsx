import { MapPin, Phone, Clock, Facebook, Youtube } from 'lucide-react'

const NAV = [
  ['Dịch vụ',         '#dich-vu'],
  ['Bảng giá',        '#bang-gia'],
  ['Combo',           '#combo'],
  ['Ký ức',           '#gallery'],
  ['Liên hệ',         '#lien-he'],
]

export default function   Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#161410]"
      style={{
        /* Sand texture via CSS noise pattern */
        backgroundImage: `
          radial-gradient(ellipse at 20% 80%, rgba(180,100,20,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(100,60,10,0.08) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")
        `,
      }}
    >
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* ── Main footer content ── */}
      <div className="relative z-10 px-6 py-10 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 text-center">
          <div className="space-y-6">
            <p className="section-label inline-flex items-center gap-2 text-sm text-orange-500 uppercase tracking-[0.35em] justify-center w-full">
              <span className="block h-px w-8 bg-orange-500" />
              Bắt đầu hôm nay
              <span className="block h-px w-8 bg-orange-500" />

            </p>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-snug">
                Chuyến đi của bạn bắt đầu ở đây
              </h2>
              <p className="mt-3 text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
                Đặt xe ngay với đội ngũ phục vụ chuyên nghiệp từ 5:00 sáng. Liên hệ nhanh để nhận hỗ trợ và tư vấn lịch trình phù hợp.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-3 gap-3">
              <a
                href="tel:0979391234"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm uppercase px-5 py-3 transition-colors"
              >
                <Phone size={14} /> 0979 391 234
              </a>
              <a
                href="https://zalo.me/0979391234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0055CC] text-white font-semibold text-sm uppercase px-5 py-3 transition-colors"
              >
                💬 Chat Zalo
              </a>
            </div>
            <div className="grid gap-6 text-center">
              <div>
                <img
                  src="/newlogo1.png"
                  alt="Du Lịch Triều Trang"
                  className="mx-auto h-12 w-auto"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
              <nav className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.25em] text-white/40">
                {NAV.map(([label, href]) => (
                  <a key={href} href={href} className="hover:text-orange-500 transition-colors">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="space-y-3 text-xs text-white/60">
                <div className="flex justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-orange-500" />
                    Thôn Hồng Lâm, xã Hoà Thắng, Lâm Đồng
                  </span>
                </div>
                <div className="flex justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-orange-500" />
                    5:00 – 17:30 hàng ngày
                  </span>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bàu Cát Trắng · All rights reserved · Lâm Đồng, Việt Nam</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition">
              <Facebook size={14} className="text-white/75" />
            </a>
            <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition">
              <Youtube size={14} className="text-white/75" />
            </a>
            <a
              href="https://zalo.me/0979391234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-[10px] font-black text-white/75"
            >
              Zl
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
