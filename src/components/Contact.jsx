import { 
  ParkingCircle, 
  Bath, 
  Shirt, 
  Coffee, 
  Wifi, 
  Clock 
} from 'lucide-react';
import ShinyText from '../animations/ShinyText';
import SplitText from '../animations/SplitText';

export default function Contact() {
  const amenities = [
// ... (keep constants as is)
    { label: 'Bãi đậu xe', icon: <ParkingCircle size={14} /> },
    { label: 'WC', icon: <Bath size={14} /> },
    { label: 'Thay đồ', icon: <Shirt size={14} /> },
    { label: 'Nước uống', icon: <Coffee size={14} /> },
    { label: 'WiFi', icon: <Wifi size={14} /> },
    { label: 'Mở cửa 24/7', icon: <Clock size={14} /> },
  ];

  return (
    <section id="lien-he" className="w-full flex flex-col lg:flex-row min-h-[600px] lg:h-[700px] bg-black">
      
      {/* ── KHỐI THÔNG TIN BÊN TRÁI ── */}
      <div className="w-full lg:w-[400px] xl:w-[450px] bg-[#F4F4F2] text-black p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
        
        <ShinyText 
          text="Liên hệ với chúng tôi" 
          className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4" 
        />
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">
          <SplitText text="Đến đây dễ dàng" delay={0.1} />
        </h2>
        
        <p className="text-sm font-medium text-gray-700 mb-10 leading-relaxed pr-4">
          Hệ thống dịch vụ xe địa hình, ATV, Jeep và các trải nghiệm đồi cát đẳng cấp nhất tại Bàu Trắng. Luôn sẵn sàng đón tiếp bạn!
        </p>

        <h3 className="font-black text-lg mb-4 uppercase tracking-wider">Thông tin liên hệ</h3>

        <div className="flex-col mb-10">
           <div className="py-4 border-b border-gray-300">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Hotline</p>
              <div className="font-black uppercase text-sm">
                <a href="tel:0979391234" className="hover:text-orange-500 transition-colors">0979 391 234</a> 
                <span className="text-gray-400 mx-1">/</span> 
                <a href="tel:0909737797" className="hover:text-orange-500 transition-colors">0909 737 797</a>
              </div>
           </div>

           <div className="py-4 border-b border-gray-300">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Địa chỉ</p>
            <div className="font-black uppercase text-sm">
              <a href="https://maps.app.goo.gl/TLHNvxT7k9VyjmmA9">HÒA THẮNG, LÂM ĐỒNG</a>
                
              </div>
           </div>

           <div className="py-4 border-b border-gray-300">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Giờ mở cửa</p>
              <div className="font-black uppercase text-sm text-gray-900">
                5:00 – 17:30 Hàng ngày
              </div>
           </div>
        </div>

        <h3 className="font-black text-lg mb-6 uppercase tracking-wider">Tiện ích</h3>
        
        <div className="grid grid-cols-2 gap-y-4">
          {amenities.map(item => (
            <div key={item.label} className="flex items-center gap-2 text-black font-black text-[10px] uppercase tracking-widest group">
              <span className="text-orange-500 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </span> 
              {item.label}
            </div>
          ))}
        </div>

      </div>

      {/* ── KHỐI BẢN ĐỒ ── */}
      <div className="flex-1 w-full h-[400px] lg:h-full relative bg-white overflow-hidden">
        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-10 flex gap-2">
           <a 
             href="tel:0979391234" 
             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-xs uppercase tracking-widest transition-colors shadow-2xl"
           >
             Gọi Ngay
           </a>
        </div>

        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.658846134229!2d108.42467151032308!3d11.064183953775157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769535095d4b13%3A0x9386976cf4ad0ef2!2zRHUgTGnMo2NoIFRyacOqzIB1IFRyYW5n!5e0!3m2!1svi!2s!4v1776017354477!5m2!1svi!2s" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Bàu Cát Trắng - Maps"
        />
      </div>
    </section>
  )
}