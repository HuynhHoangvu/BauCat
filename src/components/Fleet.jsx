import { useEffect, useRef } from 'react'
import ShinyText from '../animations/ShinyText'
import SplitText from '../animations/SplitText'

const VEHICLES = [
// ... (keep VEHICLES as is)
  {
    id: 'atv',
    name: 'ATV / Mô tô địa hình',
    short: 'ATV',
    desc: 'Chinh phục địa hình cát với xe gầm cao cực mạnh.',
    price: '800.000đ',
    unit: '1–2 người · 20 phút',
    capacity: '1–2 người',
    duration: '20 phút / lượt',
    img: '/atv.jpg',
    hot: true,
  },
  {
    id: 'jeep',
    name: 'Xe Jeep địa hình',
    short: 'JEEP',
    desc: 'Lao dốc cát, tham quan toàn cảnh sa mạc cùng cả nhóm.',
    price: '800.000đ',
    unit: 'Tối đa 6 khách · Theo tour',
    capacity: 'Tối đa 6 người',
    duration: 'Theo tour',
    img: '/jep.jpg',
    hot: false,
  },
  {
    id: 'camel',
    name: 'Cưỡi lạc đà',
    short: 'LẠC ĐÀ',
    desc: 'Cưỡi lạc đà giữa sa mạc – background check-in cực chất.',
    price: '200.000đ',
    unit: '1 người · 1 vòng',
    capacity: '1 người',
    duration: '1 vòng',
    img: '/camel.jpeg',
    hot: false,
  },
  {
    id: 'ostrich',
    name: 'Cưỡi đà điểu',
    short: 'ĐÀ ĐIỂU',
    desc: 'Trải nghiệm độc đáo hiếm có – vui nhộn và đáng nhớ.',
    price: '100.000đ',
    unit: '1 người · 1 vòng',
    capacity: '1 người',
    duration: '1 vòng',
    img: '/emu.jpg',
    hot: false,
  },
]

export default function Fleet({ onBooking }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.classList.add('animate-fade-in-up')
        }
      }),
      { threshold: 0.08 },
    )
    ref.current?.querySelectorAll('.fleet-card').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="bang-gia" className="bg-white py-24 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-16 reveal">
          <ShinyText 
            text="Đội xe & Bảng giá" 
            className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-5 whitespace-nowrap" 
          />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 uppercase leading-tight tracking-tighter [text-wrap:balance] max-w-3xl">
              <SplitText text="Chọn xe — giá rõ ràng" delay={0.1} />
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed lg:text-right font-medium [text-wrap:balance]">
              Không phụ thu ẩn. Xe sạch bóng, sẵn sàng từ 5:00 sáng.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {VEHICLES.map((v, i) => (
            <div
              key={v.id}
              className={`fleet-card group relative overflow-hidden cursor-pointer bg-white border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all reveal ${
                v.hot ? 'ring-2 ring-orange-400 ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => onBooking(v.name)}
            >
              {/* Image area */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-cover img-pan"
                />

                {v.hot && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1">
                    Hot
                  </div>
                )}

                {/* Watermark */}
                <span className="absolute bottom-2 right-3 text-white/10 font-black text-3xl uppercase tracking-tighter select-none">
                  {v.short}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-1">{v.name}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">{v.desc}</p>

                <div className="flex items-center gap-3 text-gray-400 text-xs mb-4 uppercase font-bold tracking-tighter">
                  <span>{v.capacity}</span>
                  <span className="w-px h-3 bg-gray-200" />
                  <span>{v.duration}</span>
                </div>

                <div className="flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-xl font-black text-orange-500 leading-none">{v.price}</div>
                    <div className="text-gray-400 text-[10px] tracking-wider mt-0.5">{v.unit}</div>
                  </div>
                  <div className="w-auto px-3 py-1.5 border border-orange-300 group-hover:bg-orange-500 group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 text-[10px] font-black uppercase text-orange-400 group-hover:text-white">
                    Đặt ngay
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hours note */}
        <div className="mt-10 flex items-center gap-4 border-t border-gray-200 pt-8">
          <span className="text-gray-400 text-sm tracking-widest uppercase">
            Giờ phục vụ: <span className="text-gray-900 font-black">5:00 – 17:30</span> · Hàng ngày
          </span>
        </div>
      </div>
    </section>
  )
}
