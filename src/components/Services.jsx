import { ArrowRight } from 'lucide-react'
import ShinyText from '../animations/ShinyText'
import SplitText from '../animations/SplitText'

const SERVICES = [
  {
    id: 'atv-adventure',
    title: 'Chinh phục Đỉnh Cát',
    subtitle: 'Hành trình tốc độ',
    description: 'Tự tay cầm lái "quái vật" ATV 600cc vượt qua những dốc cát dựng đứng, cảm nhận sức mạnh động cơ và sự tự do tuyệt đối giữa sa mạc.',
    price: 'Từ 800k',
    image: '/atv1.jpg',
    color: 'text-orange-500',
    badge: 'Phổ biến nhất',
  },
  {
    id: 'jeep-coastline',
    title: 'Tour Cung Đường Biển',
    subtitle: 'Vẻ đẹp triệu đô',
    description: 'Ngồi trên xe Jeep mui trần xuyên qua những cung đường ven biển đẹp nhất Việt Nam, dừng chân check-in tại những góc view vạn người mê.',
    price: 'Từ 800k',
    image: '/jeep.jpg',
    color: 'text-sky-500',
    badge: 'Tour Highlight',
  },
  {
    id: 'camel-photo',
    title: 'Concept Sahara Artist',
    subtitle: 'Nghệ thuật check-in',
    description: 'Dịch vụ chụp ảnh chuyên nghiệp cùng đàn lạc đà duyên dáng. Chúng tôi chuẩn bị sẵn concept, góc chụp để bạn có bộ ảnh "nghìn tim".',
    price: 'Từ 200k',
    image: '/camel1.jpg',
    color: 'text-emerald-500',
    badge: 'Yêu thích',
  },
  {
    id: 'family-fun',
    title: 'Vui cùng Đà Điểu',
    subtitle: 'Khoảnh khắc gia đình',
    description: 'Trải nghiệm cưỡi đà điểu đầy tính giải trí và an toàn. Phù hợp cho cả gia đình và trẻ nhỏ muốn khám phá thế giới động vật thú vị.',
    price: 'Từ 100k',
    image: '/obstic.jpg',
    color: 'text-fuchsia-500',
  },
]

export default function Services({ onBooking }) {
  return (
    <section id="dich-vu" className="w-full bg-[#f9f7f1] py-24 sm:py-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-14 reveal">
          <ShinyText 
            text="Trải nghiệm độc bản" 
            className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 whitespace-nowrap" 
          />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter max-w-2xl [text-wrap:balance]">
              <SplitText text="Viết nên câu chuyện của riêng bạn" delay={0.1} />
            </h2>
            <p className="max-w-sm text-gray-500 text-xs sm:text-sm leading-relaxed font-medium [text-wrap:balance]">
              Không chỉ là di chuyển, chúng tôi mang đến những hành trình đánh thức mọi giác quan giữa lòng sa mạc Bàu Trắng.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <article 
              key={service.id} 
              className="group flex flex-col sm:flex-row gap-6 bg-white rounded-[40px] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 reveal"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="sm:w-1/2 aspect-[4/5] sm:aspect-square overflow-hidden rounded-[30px] relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover img-pan"
                />
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {service.badge}
                  </div>
                )}
              </div>

              <div className="sm:w-1/2 flex flex-col justify-center p-4">
                <div className={`flex items-center gap-2 ${service.color} mb-3`}>
                  <span className="text-xs font-black uppercase tracking-widest">{service.subtitle}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-black text-orange-600">{service.price}</span>
                  <button
                    onClick={() => onBooking(service.title)}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-orange-500 transition-colors"
                  >
                    Xem chi tiết <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}