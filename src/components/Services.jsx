import { Check, Phone, Sparkles, MapPin, Shield, Percent } from 'lucide-react'

const SERVICES = [
  {
    id: 'atv',
    title: 'ATV Địa hình',
    subtitle: 'Hành trình cát vàng',
    description: 'Lái xe ATV xuyên sa mạc, cảm giác mạnh và check-in trên cồn cát rộng lớn.',
    icon: Sparkles,
    color: 'bg-orange-500',
  },
  {
    id: 'jeep',
    title: 'Jeep Sa mạc',
    subtitle: 'Tour nhóm an toàn',
    description: 'Chèo xe Jeep qua đồi cát, ngắm toàn cảnh và chụp ảnh gia đình cực chất.',
    icon: MapPin,
    color: 'bg-sky-500',
  },
  {
    id: 'camel',
    title: 'Cưỡi lạc đà',
    subtitle: 'Khung hình hoang dã',
    description: 'Trải nghiệm cưỡi lạc đà trên nền cát vàng, phù hợp với cặp đôi và nhóm bạn.',
    icon: Shield,
    color: 'bg-emerald-500',
  },
  {
    id: 'ostrich',
    title: 'Cưỡi đà điểu',
    subtitle: 'Trải nghiệm độc lạ',
    description: 'Tư thế độc đáo, kỷ niệm khó quên và nhiều góc ảnh khác biệt.',
    icon: Percent,
    color: 'bg-fuchsia-500',
  },
]

export default function Services({ onBooking }) {
  return (
    <section id="dich-vu" className="w-full bg-[#f9f7f1] py-20 sm:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-orange-600 font-bold text-xs uppercase tracking-[0.25em] mb-3">Dịch vụ nổi bật</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight">
            Chọn dịch vụ phù hợp — <span className="text-orange-500">đi ngay hôm nay</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Sa mạc Bàu Trắng có ATV, Jeep, lạc đà và đà điểu để bạn trải nghiệm trọn vẹn một ngày trên cát.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(service => (
            <article key={service.id} className="group rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.color} text-white mb-5`}>
                <service.icon size={20} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-4">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.description}</p>
              <button
                type="button"
                onClick={() => onBooking(service.title)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-orange-600"
              >
                <Phone size={14} /> Đặt ngay
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
