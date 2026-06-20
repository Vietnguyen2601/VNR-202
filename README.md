# VNR

Boilerplate Frontend React chuẩn, dùng **Vite** làm build tool, sẵn sàng mở rộng cho dự án thực tế.

## Công nghệ sử dụng

- React 18
- React Router DOM v6
- Axios (gọi API)
- Vite (build/dev server)
- CSS Modules (style scoped theo component)
- ESLint + Prettier

## Cài đặt

```bash
npm i
npm run dev
```

Ứng dụng chạy tại `http://localhost:3000`.

Các lệnh khác:

```bash
npm run build     # build production vào thư mục dist/
npm run preview   # preview bản build
npm run lint       # kiểm tra lỗi code
npm run format     # format code với Prettier
```

Sao chép `.env.example` thành `.env` và chỉnh lại `VITE_API_BASE_URL` cho phù hợp với backend của bạn.

## Cấu trúc thư mục

```
vnr/
├── public/                  # Tài nguyên tĩnh (favicon, robots.txt...)
├── src/
│   ├── assets/               # Hình ảnh, icon, font...
│   ├── components/
│   │   ├── common/            # Component dùng chung, không gắn nghiệp vụ (Button, Loader...)
│   │   └── layout/             # Component bố cục (Header, Footer, Sidebar...)
│   ├── pages/                 # Mỗi route ứng với 1 page riêng (Home, About, NotFound...)
│   ├── routes/                # Khai báo route tập trung (react-router-dom)
│   ├── hooks/                  # Custom hooks dùng chung (useFetch, useLocalStorage...)
│   ├── services/
│   │   ├── axiosClient.js      # Cấu hình axios instance, interceptor
│   │   └── api/                 # Mỗi resource API 1 file (userApi.js, productApi.js...)
│   ├── store/                  # Quản lý state toàn cục (Context API, có thể thay bằng Redux/Zustand)
│   ├── utils/                   # Hàm tiện ích thuần (format, debounce...)
│   ├── constants/                # Hằng số dùng chung
│   ├── config/                    # Cấu hình biến môi trường tập trung
│   ├── styles/                    # CSS biến toàn cục, reset, design tokens
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Quy ước

- Mỗi component đặt trong thư mục riêng cùng file CSS Module (`Tên.jsx` + `Tên.module.css`).
- Gọi API qua `src/services/api/*`, không gọi axios trực tiếp trong component.
- Alias import sẵn có: `@`, `@components`, `@pages`, `@hooks`, `@services`, `@store`, `@utils`, `@assets`, `@styles`, `@constants`, `@config` (cấu hình trong `vite.config.js`).
- State toàn cục dùng `AppContext` (`src/store/AppContext.jsx`) — có thể thay bằng Redux Toolkit hoặc Zustand nếu dự án lớn hơn.

## Thêm một page mới

1. Tạo thư mục trong `src/pages/TenPage/` gồm `TenPage.jsx` và `TenPage.module.css`.
2. Khai báo route mới trong `src/routes/index.jsx`.

## Thêm một API module mới

1. Tạo file trong `src/services/api/tenResourceApi.js`, export các hàm gọi `axiosClient`.
2. Export lại trong `src/services/api/index.js`.
