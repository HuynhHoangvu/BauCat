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
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-orange-400 hover:shadow-orange-100 transition-all animate-fade-in-up"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
              <Phone size={14} className="text-white" />
            </div>
            0979 391 234
          </a>

          {/* Phone 2 */}
          <a
            href="tel:0909737797"
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-orange-400 hover:shadow-orange-100 transition-all animate-fade-in-up"
            style={{ animationDelay: '0.05s', opacity: 0 }}
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
              <Phone size={14} className="text-white" />
            </div>
            0909 737 797
          </a>

          {/* Zalo */}
          <a
            href="https://zalo.me/0979391234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white shadow-xl border border-gray-200 rounded-full pl-3 pr-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-blue-400 hover:shadow-blue-100 transition-all animate-fade-in-up"
            style={{ animationDelay: '0.10s', opacity: 0 }}
          >
            <div className="w-8 h-8 bg-[#0068FF] rounded-full flex items-center justify-center shrink-0">
              <MessageCircle size={14} className="text-white" />
            </div>
            Chat Zalo
          </a>
        </div>
      )}

      {/* Main toggle */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-gray-700 hover:bg-gray-800 rotate-0'
            : 'bg-[#0068FF] hover:bg-[#0055CC] zalo-pulse'
        }`}
        aria-label={open ? 'Đóng' : 'Liên hệ'}
      >
        {open
          ? <X size={22} className="text-white" />
          : <MessageCircle size={22} className="text-white" />
        }
      </button>
    </div>
  )
}
