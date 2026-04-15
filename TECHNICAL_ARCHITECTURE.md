# 🌵 Bàu Cát Trắng — Technical Architecture & Design System

Tài liệu này tổng hợp các giải pháp công nghệ, kiến trúc mã nguồn và hệ thống thiết kế (Design System) được áp dụng để tạo nên trải nghiệm "Cinematic & High-end" cho website Bàu Cát Trắng.

---

## 🛠 1. Core Technology Stack

- **Framework:** [React v18+](https://react.dev/) + [Vite](https://vitejs.dev/) (Tối ưu tốc độ build và Hot Module Replacement).
- **Styling:** [TailwindCSS](https://tailwindcss.com/) (Atomic CSS approach giúp tối ưu hiệu năng và tùy chỉnh giao diện linh hoạt).
- **Icons:** [Lucide React](https://lucide.dev/) (Bộ icon vector sắc nét, đồng bộ).
- **Animations Engine:**
  - **React Spring:** Xử lý các hiệu ứng vật lý phức tạp (như SplitText).
  - **CSS Keyframes:** Xử lý các hiệu ứng lặp lại (như `shiny`, `pulse`, `fade-in-up`).
  - **Intersection Observer API:** Kích hoạt hiệu ứng animation khi người dùng cuộn trang đến đúng vị trí (Scroll-triggered animations).

---

## 🏗 2. Project Structure (Kiến trúc dự án)

```text
src/
├── animations/        # Các thành phần chuyển động tái sử dụng (Core Motion)
│   ├── ShinyText.jsx  # Hiệu ứng ánh kim loại/lấp lánh trên chữ
│   ├── SplitText.jsx  # Hiệu ứng hiện chữ từng ký tự (Anti-splitting logic)
│   └── BlurText.jsx   # Hiệu ứng làm mờ và hiện chữ cinematic
├── components/        # Các khối module giao diện chính
│   ├── Navbar.jsx     # Điều hướng thông minh & Mobile Drawer
│   ├── Hero.jsx       # Ấn tượng đầu tiên (Cinema style)
│   ├── Services.jsx   # Dịch vụ với bố cục Grid linh hoạt
│   ├── Fleet.jsx      # Đội xe & Bảng giá
│   ├── Combos.jsx     # Gói dịch vụ kiểu Ticket Design
│   └── ...
├── App.jsx            # Entry point & Quản lý trạng thái Booking
└── index.css          # Design Tokens, Giao diện nền tảng & Utilities
```

---

## 🎨 3. Design System & UX Philosophy

### A. Typographic Excellence (Nghệ thuật chữ)
- **Primary Style:** Sử dụng Font **Black/Bold**, **Uppercase**, và **Letter Spacing (Tracking)** rộng để tạo cảm giác sang trọng, tối giản.
- **Anti-Word-Split Logic:** splitText.jsx được nâng cấp để nhóm các chữ cái thành từ (`word-grouping`), ngăn chặn việc từ bị chẻ đôi khi xuống dòng (xử lý triệt để lỗi "rớt chữ vô duyên").
- **Text-Wrap Balance:** Sử dụng `text-wrap: balance` để trình duyệt tự động chia đều trọng lượng văn bản trên các dòng.

### B. Motion Strategy (Chiến lược chuyển động)
- **High-Impact Entry:** Hiệu ứng `fade-in-up` kết hợp với `SplitText` tạo cảm giác nội dung đang được "viết" trực tiếp khi khách hàng cuộn trang.
- **Micro-interactions:** 
  - Hiệu ứng ánh sáng rà chuột (Glow follow) ở Hero.
  - Hiệu ứng `ShinyText` cho các nhãn (Taglines) để tăng sự chú ý.
  - Hiệu ứng `img-pan` (di chuyển nhẹ ảnh nền) tạo chiều sâu không gian (Parallax nhẹ).

### C. Color Palette
- **Key Color:** `Orange-500` (#f97316) - Đại diện cho năng lượng mặt trời và màu cát.
- **Secondary:** `Yellow-500` - Nhãn lấp lánh (logo matching).
- **Dark Mode Nuance:** Sử dụng dải đen sâu và xám mờ (Black/80) để tôn vinh các khối nội dung sáng màu.

---

## 📱 4. Responsive Framework (Đa nền tảng)

Hệ thống được thiết kế theo tư duy **Mobile-First**:
- **Mobile (Small):** 1 cột cho Grids, tiêu đề thu nhỏ linh hoạt (`text-[36px]`).
- **Tablet (Medium):** 2 cột cho các phần Combo/Services.
- **Desktop (Large):** 3-4 cột dàn trải, tận dụng khoảng trắng (Whitespace) để tạo sự thông thoáng.
- **Navigation:** Menu di động dạng Drawer toàn màn hình, tối ưu cho việc chạm ngón cái (Thumb-friendly).

---

## 🚀 5. Performance & SEO Optimizations

- **Lazy Loading:** Hình ảnh được tải khi cần thiết giúp giảm thời gian tải ban đầu.
- **Semantic HTML:** Sử dụng đúng các thẻ `section`, `article`, `h1`-`h6` giúp Google Bot hiểu rõ cấu trúc trang.
- **Zero-Dependency Motion:** Hạn chế các thư viện nặng, tận dụng sức mạnh của CSS và Hooks tối giản.

---
*Tài liệu này được cập nhật vào: 14/04/2026*
