import SliderImport from "react-slick";
const Slider = SliderImport.default || SliderImport;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShinyText from "../animations/ShinyText";
import SplitText from "../animations/SplitText";

const FEEDBACKS = [
// ... (keep constant as is)
  {
    id: 1,
    name: 'Khánh An',
    role: 'Hà Nội',
    comment: 'Trải nghiệm xe ATV thực sự đỉnh cao. Các bạn nhân viên hỗ trợ rất nhiệt tình, hướng dẫn lái chi tiết nên mình cảm thấy rất an toàn. Chắc chắn sẽ quay lại lần sau!',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=200',
    date: '12/03/2024'
  },
  {
    id: 2,
    name: 'Minh Quân',
    role: 'TP. Hồ Chí Minh',
    comment: 'Lần nào dẫn đoàn về Bàu Trắng cũng chọn dịch vụ ở đây. Xe Jeep đời mới, sạch sẽ và quan trọng nhất là các bác tài chụp ảnh cực kỳ "có tâm". Rất hài lòng.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=200',
    date: '02/04/2024'
  },
  {
    id: 3,
    name: 'Thùy Dương',
    role: 'Đà Nẵng',
    comment: 'Bộ ảnh chụp cùng lạc đà ở đây lung linh như ở Dubai vậy. Các bạn nhân viên chuẩn bị concept góc chụp rất chuyên nghiệp. Một trải nghiệm không thể quên!',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    date: '28/03/2024'
  },
  {
    id: 4,
    name: 'Tuấn Trần',
    role: 'Bình Dương',
    comment: 'Cảm giác lái ATV băng qua những đồi cát dựng đứng thật sự là một thử thách phấn khích. Dịch vụ uy tín, giá cả hợp lý so với chất lượng nhận được.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: '10/04/2024'
  },
  {
    id: 5,
    name: 'Hà Linh',
    role: 'Cần Thơ',
    comment: 'Mình đi tour xe Jeep lúc hoàng hôn, cảnh đẹp tuyệt mỹ. Xe chạy rất lướt và an toàn cho bé nhỏ nhà mình. Gia đình mình đã có những kỷ niệm thật đẹp.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    date: '05/04/2024'
  },
  {
    id: 6,
    name: 'Hoàng Long',
    role: 'Hải Phòng',
    comment: 'Dịch vụ cưỡi lạc đà rất thú vị, trang phục Bohemian thuê tại đây rất mới và đa dạng. Đội ngũ support hình ảnh làm việc rất nhanh chóng và chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=200',
    date: '15/04/2024'
  }
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="feedback" className="w-full bg-[#fafafa] py-24 sm:py-32 overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-20 text-center reveal">
          <ShinyText 
            text="Phản hồi từ khách hàng" 
            className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4" 
          />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter">
            <SplitText text="Lời hồi đáp từ trái tim" delay={0.1} />
          </h2>
        </div>

        {/* Slick Slider */}
        <div className="testimonial-slider-container reveal">
          <Slider {...settings}>
            {FEEDBACKS.map((f) => (
              <div key={f.id} className="px-4 pb-12">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center h-[420px] justify-between transition-all hover:shadow-xl group">
                  
                  {/* Avatar - Ảnh khách đi du lịch */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      <img 
                        src={f.image} 
                        alt={f.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>

                  {/* 5 sao - Text based */}
                  <div className="mt-6 text-orange-500 text-xl tracking-widest font-black leading-none">
                    ★★★★★
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium line-clamp-4 mt-4 px-4">
                    "{f.comment}"
                  </p>

                  {/* Info */}
                  <div className="mt-auto pt-8 border-t border-gray-50 w-full">
                    <h4 className="text-gray-900 font-black text-xs uppercase tracking-widest">{f.name}</h4>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">{f.role} · {f.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonial-slider-container .slick-dots {
          bottom: -40px;
        }
        .testimonial-slider-container .slick-dots li button:before {
          font-size: 10px;
          color: #f97316;
          opacity: 0.2;
        }
        .testimonial-slider-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #f97316;
        }
        .testimonial-slider-container .slick-prev, 
        .testimonial-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .testimonial-slider-container .slick-prev:hover, 
        .testimonial-slider-container .slick-next:hover {
          background: #f97316;
        }
        .testimonial-slider-container .slick-prev:before, 
        .testimonial-slider-container .slick-next:before {
          color: #000;
          font-family: inherit;
          font-weight: 900;
        }
        .testimonial-slider-container .slick-prev:hover:before, 
        .testimonial-slider-container .slick-next:hover:before {
          color: white;
        }
        .testimonial-slider-container .slick-prev { left: -20px; }
        .testimonial-slider-container .slick-next { right: -20px; }
        .testimonial-slider-container .slick-prev:before { content: '←'; }
        .testimonial-slider-container .slick-next:before { content: '→'; }
      `}</style>
    </section>
  )
}
