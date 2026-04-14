import { useState } from 'react'
import { X } from 'lucide-react'
import ShinyText from '../animations/ShinyText'
import SplitText from '../animations/SplitText'

const GALLERY_IMAGES = [
// ... (keep constants as is)
  { id: 1, src: '/atv.jpg', size: 'large', label: 'Cực đỉnh ATV' },
  { id: 2, src: '/jep.jpg', size: 'tall', label: 'Tour Jeep' },
  { id: 3, src: '/camel.jpeg', size: 'small', label: 'Check-in Lạc đà' },
  { id: 4, src: '/emu.jpg', size: 'medium', label: 'Vui cùng Đà điểu' },
  { id: 5, src: '/view.jpg', size: 'tall', label: 'Toàn cảnh Bàu Trắng' },
  { id: 6, src: '/view2.jpg', size: 'medium', label: 'Hồ sen ốc đảo' },
  { id: 7, src: '/sigth.jpg', size: 'small', label: 'Góc nhìn từ đỉnh cát' },
  { id: 8, src: '/camel1.jpg', size: 'medium', label: 'Khoảnh khắc Sahara' },
  { id: 9, src: '/atv1.jpg', size: 'large', label: 'Chinh phục dốc cát' },
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="hinh-anh" className="bg-[#fcfbf7] py-24 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-20 grid lg:grid-cols-2 items-end gap-8 reveal">
          <div>
            <ShinyText 
              text="Khoảnh khắc Bàu Trắng" 
              className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4" 
            />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter">
              <SplitText text="Góc nhìn chân thực từ khách hàng" delay={0.1} />
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm ml-auto text-right leading-relaxed font-medium">
            Mỗi bức ảnh là một câu chuyện, một khoảnh khắc khách hàng đắm mình trong vẻ đẹp vô tận của Bàu Trắng.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={img.id}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-gray-100 break-inside-avoid reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] img-pan"
                loading="lazy"
              />
              
              {/* Overlay nghệ thuật */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Bàu Cát Trắng</p>
                  <h3 className="text-white text-xl font-black uppercase italic">{img.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-10 transition-all animate-fade-in">
          <button 
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>
          
          <img 
            src={selectedImg.src} 
            alt={selectedImg.label}
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
          />
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <p className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2">Đang xem</p>
            <h4 className="text-white text-2xl font-black uppercase tracking-tighter">{selectedImg.label}</h4>
          </div>
        </div>
      )}

      {/* CSS Custom for border text */}
      <style dangerouslySetInnerHTML={{ __html: `
        .border-text-orange {
          -webkit-text-stroke: 1.5px #f97316;
          opacity: 0.8;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}} />
    </section>
  )
}
