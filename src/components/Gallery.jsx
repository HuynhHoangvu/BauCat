/*
  Gallery – Mẫu lưới ảnh giống EagleRider.
  Dễ chỉnh ảnh ở phần cấu hình bên dưới.
*/

import { Facebook, Youtube } from 'lucide-react'

const GALLERY_CONFIG = {
  leftTall: {
    src: '/cat.png',
    label: 'Bàu Cát Trắng',
    subtitle: ' Không gian trọn vẹn, ảnh sống động',
  },
  topRow: [
    {
      src: '/view.jpg',
      label: 'View đồi cát',
      subtitle: 'Những góc nhìn đẹp mùa hoàng hôn',
    },
    {
      src: '/sigth.jpg',
      label: 'Sóng cát mênh mang',
      subtitle: 'Dẫn bước trải nghiệm khám phá',
    },
    {
      src: '/camel.jpeg',
      label: 'Cưỡi lạc đà',
      subtitle: 'Trải nghiệm hoang dã độc đáo',
    },
  ],
  bottomRight: {
    src: '/emu.jpg',
    label: 'Bầu trời xanh',
    subtitle: 'Lạc giữa thiên nhiên rộng lớn',
  },
  bottomRight2: {
    src: '/view2.jpg',
    label: 'Chuyến đi mới',
    subtitle: 'Khám phá hành trình mới cùng Bàu Cát Trắng',
  },
  shareCard: {
    title: 'Cùng cộng đồng',
    description: 'Gửi ảnh đẹp, cắm trại và cùng lan toả Bàu Cát Trắng.',
  },
}

const SOCIAL = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Youtube, label: 'YouTube' },
  { href: 'https://zalo.me/0979391234', icon: null, label: 'Zalo' },
]

export default function Gallery() {
  return (
    <section id="gallery">

      {/* ── Section header ── */}
      <div className="bg-[#f2f0ec] py-14 px-6 sm:px-8 max-w-7xl mx-auto">
        <p className="section-label mb-4">Ký ức khách hàng</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight">
            Trải nghiệm<br />
            <span className="text-orange-500">thực tế</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Hàng nghìn khoảnh khắc đáng nhớ. Để Bàu Cát Trắng là background đẹp nhất của bạn.
          </p>
        </div>
      </div>

      {/* ── EagleRider-style grid ── */}
      <div className="w-full bg-white px-0 pb-0">
        <div className="grid gap-4 lg:grid-cols-[minmax(280px,1fr)_220px_220px_260px] lg:grid-rows-[auto_300px]">
          <article className="relative overflow-hidden bg-white lg:row-span-2">
            <img
              src={GALLERY_CONFIG.leftTall.src}
              alt={GALLERY_CONFIG.leftTall.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Kỷ niệm</p>
              <h3 className="text-2xl font-black uppercase leading-tight">
                {GALLERY_CONFIG.leftTall.label}
              </h3>
            </div>
          </article>

          {GALLERY_CONFIG.topRow.map((item, index) => (
            <article
              key={index}
              className="relative overflow-hidden bg-white"
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute left-4 bottom-4 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Kỷ niệm</p>
                <h3 className="text-lg font-black uppercase leading-tight">
                  {item.label}
                </h3>
              </div>
            </article>
          ))}

          <article className="overflow-hidden bg-[#f5f3ee] p-6 flex flex-col justify-center text-center border-t border-gray-200">
            <p className="text-orange-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">Chia sẻ ký ức</p>
            <h3 className="text-2xl font-black uppercase mb-4">{GALLERY_CONFIG.shareCard.title}</h3>
            <p className="text-sm text-gray-600 mb-6">{GALLERY_CONFIG.shareCard.description}</p>
            <div className="flex items-center justify-center gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`h-9 w-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 ${
                    item.label === 'Facebook' ? 'bg-[#1877F2]' : item.label === 'YouTube' ? 'bg-[#FF0000]' : 'bg-[#0068FF]'
                  }`}
                >
                  {item.icon ? <item.icon size={14} /> : 'Zl'}
                </a>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden bg-white lg:row-span-1">
            <img
              src={GALLERY_CONFIG.bottomRight.src}
              alt={GALLERY_CONFIG.bottomRight.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Kỷ niệm</p>
              <h3 className="text-lg font-black uppercase leading-tight">
                {GALLERY_CONFIG.bottomRight.label}
              </h3>
            </div>
          </article>

          <article className="relative overflow-hidden bg-white lg:row-span-1">
            <img
              src={GALLERY_CONFIG.bottomRight2.src}
              alt={GALLERY_CONFIG.bottomRight2.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Kỷ niệm</p>
              <h3 className="text-lg font-black uppercase leading-tight">
                {GALLERY_CONFIG.bottomRight2.label}
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
