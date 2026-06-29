import { Routes, Route } from 'react-router-dom'
import About from '@pages/About/About'
import NotFound from '@pages/NotFound/NotFound'
import VNR202Chapter2Page from '@/features/VNR202Chapter2'
import VNR202EventDetailPage from '@/features/VNR202Chapter2/pages/VNR202EventDetailPage'

/**
 * Khai bao toan bo route cua ung dung tai day.
 * Khi du an lon hon, co the tach thanh route con (nested routes)
 * hoac ap dung lazy loading voi React.lazy + Suspense.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VNR202Chapter2Page />} />
      <Route path="/vnr-202" element={<VNR202Chapter2Page />} />
      <Route path="/vnr-202/events/:eventSlug" element={<VNR202EventDetailPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes

