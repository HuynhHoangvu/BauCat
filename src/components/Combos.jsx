import { Phone } from 'lucide-react'
import ShinyText from '../animations/ShinyText'
import SplitText from '../animations/SplitText'

const COMBOS = [
// ... (keep constants as is)
  {
    id: 'song-ao',
    name: 'Combo Sống Ảo',
    code: 'BC-PHOTO',
    save: '15%',
    tag: 'Dành cho Cặp đôi',
    color: 'sky',
    styles: {
      bg: 'bg-sky-50',
      text: 'text-sky-600',
      btn: 'bg-sky-600 hover:bg-sky-700',
      ring: 'ring-sky-500/20'
    },
    image: '/camel1.jpg',
    includes: [
      'Xe Jeep tham quan toàn cảnh',
      'Cưỡi lạc đà (2 vòng / người)',
      'Thuê trang phục Bohemian',
      'Hỗ trợ chụp ảnh check-in',
    ],
  },
  {
    id: 'racer',
    name: 'Combo Racer',
    code: 'BC-SPEED',
    save: '20%',
    tag: 'Bán chạy nhất',
    color: 'orange',
    styles: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      btn: 'bg-orange-500 hover:bg-orange-600',
      ring: 'ring-orange-500/20'
    },
    image: '/atv.jpg',
    hot: true,
    includes: [
      'ATV Địa hình (600cc)',
      'Xe Jeep lao dốc cát',
      'Trượt cát tốc độ cao',
      'Nước uống & khăn lạnh',
    ],
  },
  {
    id: 'family',
    name: 'Combo Gia Đình',
    code: 'BC-FAMILY',
    save: '10%',
    tag: 'An toàn cho bé',
    color: 'emerald',
    styles: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      btn: 'bg-emerald-600 hover:bg-emerald-700',
      ring: 'ring-emerald-500/20'
    },
    image: '/jep.jpg',
    includes: [
      'Jeep 6 chỗ riêng tư',
      'Cưỡi lạc đà & đà điểu',
      'Ăn uống tại khu hồ Sen',
      'Hướng dẫn viên suốt tour',
    ],
  },
]

export default function Combos({ onBooking }) {
  return (
    <section id="combo" className="w-full bg-[#f8f9fa] py-24 lg:py-32 border-t border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8 reveal">
          <div>
            <ShinyText 
              text="Best Value Passes" 
              className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 whitespace-nowrap" 
            />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter [text-wrap:balance]">
              <SplitText text="Thẻ thông hành — giá trọn gói" delay={0.1} />
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-xs sm:text-sm leading-relaxed font-medium [text-wrap:balance]">
            Tận hưởng trọn vẹn Bàu Trắng với các gói "All-in-one" được thiết kế tối ưu, giúp bạn tiết kiệm thời gian và chi phí lên đến 20%.
          </p>
        </div>

        {/* Cards - Ticket Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COMBOS.map((c, idx) => (
            <div 
              key={c.id}
              className={`relative flex flex-col bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden border border-gray-100 reveal ${c.hot ? c.styles.ring + ' ring-4' : ''}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
              onClick={() => onBooking(c.name)}
            >
              {/* Header của vé */}
              <div className="relative h-48 overflow-hidden group">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover img-pan" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 right-6">
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1">{c.code}</p>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight">{c.name}</h3>
                </div>
                {/* Save badge */}
                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5">
                  <span className="text-white text-xs font-black uppercase tracking-widest">Tiết kiệm {c.save}</span>
                </div>
              </div>

              {/* Perforation Line */}
              <div className="relative h-4 flex items-center justify-between">
                <div className="h-6 w-6 rounded-full bg-[#f8f9fa] -ml-3 shadow-inner border border-gray-100" />
                <div className="flex-1 border-t-2 border-dashed border-gray-100 mx-2" />
                <div className="h-6 w-6 rounded-full bg-[#f8f9fa] -mr-3 shadow-inner border border-gray-100" />
              </div>

              {/* Body của vé */}
              <div className="p-8 flex-1">
                <span className={`inline-block mb-6 px-3 py-1 rounded-full ${c.styles.bg} ${c.styles.text} text-[10px] font-black uppercase tracking-widest`}>
                  {c.tag}
                </span>
                <ul className="space-y-4">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium font-sans">
                      <span className={`${c.styles.text} font-black`}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer của vé (Cuống vé) */}
              <div className="p-8 bg-[#fdfdfd] border-t border-dashed border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Giá ưu đãi</p>
                    <p className={`text-2xl font-black ${c.styles.text}`}>Liên hệ ngay</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Hạn dùng</p>
                    <p className="text-gray-900 text-xs font-black">Trong ngày</p>
                  </div>
                </div>
                <button className={`w-full py-4 rounded-xl ${c.styles.btn} text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95`}>
                  Đặt ngay →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact */}
        <div className="mt-20 flex flex-col items-center gap-8">
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                        </div>
                    ))}
                </div>
                <p className="text-gray-500 text-sm font-bold">1,200+ khách đã đặt trong tháng này</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0979391234" className="flex items-center gap-3 bg-white border-2 border-gray-900 px-8 py-4 rounded-2xl text-gray-900 font-black text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-xl">
                <Phone size={16} /> Hotline: 0979 391 234
              </a>
              <a href="https://zalo.me/0979391234" target="_blank" className="flex items-center gap-3 bg-[#0068FF] px-8 py-4 rounded-2xl text-white font-black text-xs uppercase tracking-widest hover:bg-[#0055CC] transition-all shadow-xl shadow-blue-500/20">
                Hỗ trợ qua Zalo
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}