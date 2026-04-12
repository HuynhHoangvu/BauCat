import { Check, Phone } from 'lucide-react'

const COMBOS = [
  {
    id: 'song-ao',
    emoji: '📸',
    name: 'Combo Sống Ảo',
    target: 'Hội bạn nữ & cặp đôi',
    accent: 'border-sky-400',
    tagBg: 'bg-sky-500',
    priceCls: 'text-sky-600',
    includes: [
      'Xe Jeep tham quan toàn cảnh',
      'Cưỡi lạc đà (2 vòng / người)',
      'Thuê trang phục Bohemian / Vintage',
      'Trượt cát nhẹ nhàng',
      'Hỗ trợ chụp ảnh check-in',
    ],
  },
  {
    id: 'racer',
    emoji: '🏁',
    name: 'Combo Racer',
    target: 'Nam & nhóm bạn thích tốc độ',
    accent: 'border-orange-500',
    tagBg: 'bg-orange-500',
    priceCls: 'text-orange-600',
    hot: true,
    includes: [
      'ATV / Mô tô địa hình (2 lượt)',
      'Xe Jeep lao dốc cát',
      'Trượt cát tốc độ cao',
      'Chụp ảnh action miễn phí',
      'Nước uống trong suốt tour',
    ],
  },
  {
    id: 'family',
    emoji: '👨‍👩‍👧‍👦',
    name: 'Combo Gia Đình',
    target: 'Gia đình & nhóm đông người',
    accent: 'border-emerald-400',
    tagBg: 'bg-emerald-500',
    priceCls: 'text-emerald-600',
    includes: [
      'Xe Jeep 6 chỗ cả gia đình',
      'Cưỡi lạc đà cho các bé',
      'Trượt cát có nhân viên kèm',
      'Ăn uống tại khu Bàu Trắng',
      'Hướng dẫn viên kèm suốt tour',
    ],
  },
]

export default function Combos({ onBooking }) {
  return (
    <section id="combo" className="w-full bg-white py-16 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">Combo tiết kiệm</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight">
              Đặt combo —<br />
              <span className="text-orange-500">trọn vẹn hơn</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed border-l-2 border-orange-500 pl-4">
              Đã gom sẵn những hoạt động phù hợp nhất. Bạn chỉ cần chọn và đến.
            </p>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {COMBOS.map(c => (
            <div
              key={c.id}
              className={`group card-hover bg-white border-2 ${c.accent} overflow-hidden cursor-pointer flex flex-col transition-all duration-300 ${
                c.hot ? 'shadow-xl md:-translate-y-2' : 'shadow-sm hover:shadow-lg hover:-translate-y-1'
              }`}
              onClick={() => onBooking(c.name)}
            >
              {/* Top - Giảm padding từ p-7 xuống p-5/p-6 */}
              <div className="p-5 lg:p-6 border-b border-gray-100 bg-[#fefdfb]">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl drop-shadow-sm">{c.emoji}</span>
                  {c.hot && (
                    <span className={`${c.tagBg} text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm`}>
                      Bán chạy
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-1">{c.name}</h3>
                <p className="text-gray-400 text-[11px] tracking-widest uppercase">{c.target}</p>
              </div>

              {/* Includes - Giảm khoảng cách dòng space-y-3 xuống space-y-2.5 */}
              <div className="p-5 lg:p-6 flex-1">
                <ul className="space-y-2.5">
                  {c.includes.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-orange-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer - Thu gọn nút bấm và text */}
              <div className="p-5 lg:p-6 border-t border-gray-100 bg-[#fefdfb]">
                <div className="text-gray-400 text-xs tracking-wider mb-0.5">Giá combo</div>
                <div className={`${c.priceCls} font-black text-sm lg:text-base mb-4`}>
                  Liên hệ để nhận giá tốt nhất
                </div>
                <div
                  className={`w-full text-center font-bold text-xs tracking-widest uppercase py-2.5 border-2 ${c.accent} text-gray-600 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300`}
                >
                  Đặt combo này →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-100 pt-10">
          <p className="text-gray-500 text-sm font-medium">Muốn tùy chỉnh combo riêng?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:0979391234"
              className="w-full sm:w-auto flex items-center gap-2 border border-gray-200 hover:border-orange-500 bg-white text-gray-700 hover:text-orange-600 font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-all shadow-sm hover:shadow-md"
            >
              <Phone size={14} /> 0979 391 234
            </a>
            <a
              href="https://zalo.me/0979391234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center gap-2 bg-[#0068FF] hover:bg-[#0055CC] text-white font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-all shadow-sm hover:shadow-md"
            >
              💬 Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}