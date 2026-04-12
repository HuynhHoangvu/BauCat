import { MapPin, Phone, Clock, Car, ShowerHead, Shirt, Droplets, Wifi, Shield } from 'lucide-react'

export default function Contact() {
  const amenities = [
    [Car, 'Bãi đậu xe'],
    [ShowerHead, 'WC'], 
    [Shirt, 'Thay đồ'],
    [Droplets, 'Nước uống'],
    [Wifi, 'WiFi'],
    [Shield, '24/7'],
  ];

  return (
    <section id="lien-he" className="w-full flex flex-col lg:flex-row min-h-[600px] lg:h-[700px] bg-black">
      
      {/* ── KHỐI THÔNG TIN BÊN TRÁI (Nền xám sáng, chữ đen đậm) ── */}
      <div className="w-full lg:w-[400px] xl:w-[450px] bg-[#F4F4F2] text-black p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
        
        {/* Tiêu đề siêu to khổng lồ (Font Black) */}
        <h2 className="text-[32px] lg:text-[40px] font-black uppercase leading-[1.1] mb-4 tracking-tight">
          Đến đây<br />Dễ dàng
        </h2>
        
        <p className="text-sm font-medium text-gray-700 mb-10 leading-relaxed pr-4">
          Hệ thống dịch vụ xe địa hình, ATV, Jeep và các trải nghiệm đồi cát đẳng cấp nhất tại Bàu Trắng. Luôn sẵn sàng đón tiếp bạn!
        </p>

        <h3 className="font-black text-lg mb-4 uppercase tracking-wider">Thông tin liên hệ</h3>

        {/* Danh sách thông tin với đường kẻ ngang (Border-b) */}
        <div className="flex-col mb-10">
           {/* Hotline */}
           <div className="flex items-center justify-between py-4 border-b border-gray-300 group cursor-pointer">
              <div className="flex gap-4 items-center">
                 <Phone size={20} className="text-orange-500" />
                 <div className="font-black uppercase text-sm group-hover:text-orange-500 transition-colors">
                   0979 391 234 <span className="text-gray-400 mx-2 font-normal">|</span> 0909 737 797
                 </div>
              </div>
           </div>

           {/* Địa chỉ */}
           <div className="flex items-center justify-between py-4 border-b border-gray-300 group cursor-pointer">
              <div className="flex gap-4 items-center">
                 <MapPin size={20} className="text-orange-500" />
                 <div className="font-black uppercase text-sm group-hover:text-orange-500 transition-colors">
                   Hồng Lâm, Hoà Thắng
                 </div>
              </div>
           </div>

           {/* Giờ mở cửa */}
           <div className="flex items-center justify-between py-4 border-b border-gray-300 group cursor-pointer">
              <div className="flex gap-4 items-center">
                 <Clock size={20} className="text-orange-500" />
                 <div className="font-black uppercase text-sm group-hover:text-orange-500 transition-colors">
                   5:00 – 17:30 Hàng ngày
                 </div>
              </div>
           </div>
        </div>

        <h3 className="font-black text-lg mb-6 uppercase tracking-wider">Tiện ích miễn phí</h3>
        
        {/* Lưới tiện ích */}
        <div className="grid grid-cols-2 gap-y-5 gap-x-2">
          {amenities.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-3 text-black font-bold text-xs uppercase tracking-wider">
              <Icon size={18} className="text-orange-500" />
              {label}
            </div>
          ))}
        </div>

      </div>

      {/* ── KHỐI BẢN ĐỒ BÊN PHẢI ── */}
      <div className="flex-1 w-full h-[400px] lg:h-full relative bg-white overflow-hidden">
        
        {/* Cụm nút CTA nổi trên mặt bản đồ (Góc trên bên phải) */}
        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-10 flex gap-2">
           <a 
             href="https://zalo.me/0979391234" 
             target="_blank"
             rel="noreferrer"
             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4 font-black text-xs uppercase tracking-widest transition-colors shadow-xl"
           >
             Chat Zalo
           </a>
           <a 
             href="tel:0979391234" 
             className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 lg:px-8 lg:py-4 font-black text-xs uppercase tracking-widest transition-colors shadow-xl"
           >
             Gọi Ngay
           </a>
        </div>

        {/* Bản đồ thật của bạn */}
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.658846134229!2d108.42467151032308!3d11.064183953775157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769535095d4b13%3A0x9386976cf4ad0ef2!2zRHUgTGnMo2NoIFRyacOqzIB1IFRyYW5n!5e0!3m2!1svi!2s!4v1776017354477!5m2!1svi!2s" 
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            backgroundColor: '#fff',
            filter: 'grayscale(0%) brightness(1.15)',
          }}
          allowFullScreen
          loading="lazy"
          title="Bàu Cát Trắng - Maps"
        />
      </div>
      
    </section>
  )
}