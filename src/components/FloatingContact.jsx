import { useState } from 'react'
import { X, Phone, MessageCircle } from 'lucide-react'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end gap-3">

      {/* Expanded menu */}
      {open && (
        <div className="flex flex-col gap-2.5 mb-1">
          {/* Phone 1 */}
          <a
            href="tel:0979391234"
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-[10px] font-black uppercase text-gray-800 hover:border-orange-400 hover:shadow-orange-100 transition-all animate-fade-in-up"
          >
            <div className="bg-orange-500 text-white px-2 py-1 rounded-full shrink-0">
              GỌI
            </div>
            0979 391 234
          </a>

          {/* Phone 2 */}
          <a
            href="tel:0909737797"
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-[10px] font-black uppercase text-gray-800 hover:border-orange-400 hover:shadow-orange-100 transition-all animate-fade-in-up"
            style={{ animationDelay: '0.05s', opacity: 0 }}
          >
            <div className="bg-orange-500 text-white px-2 py-1 rounded-full shrink-0">
              GỌI
            </div>
            0909 737 797
          </a>

          {/* Zalo */}
          <a
            href="https://zalo.me/0979391234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-[10px] font-black uppercase text-gray-800 hover:border-blue-400 hover:shadow-blue-100 transition-all animate-fade-in-up"
            style={{ animationDelay: '0.10s', opacity: 0 }}
          >
            <div className="bg-[#0068FF] text-white px-2 py-1 rounded-full shrink-0">
              ZALO
            </div>
            Chat Zalo
          </a>
        </div>
      )}

      {/* Main toggle */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 group ${
          open
            ? 'bg-gray-800 text-white'
            : 'bg-orange-500 text-white animate-pulse'
        }`}
        aria-label={open ? 'Đóng' : 'Liên hệ'}
      >
        {open ? (
          <X className="transition-transform duration-300 rotate-0 group-hover:rotate-90" size={24} />
        ) : (
          <MessageCircle className="transition-transform duration-300 scale-110" size={24} />
        )}
      </button>
    </div>
  )
}
