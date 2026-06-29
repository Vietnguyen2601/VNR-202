import { Routes, Route } from 'react-router-dom'
import About from '@pages/About/About'
import NotFound from '@pages/NotFound/NotFound'
import LLCTChapter2Page from '@/features/LLCTChapter2'
import LLCTEventDetailPage from '@/features/LLCTChapter2/pages/LLCTEventDetailPage'

/**
 * Khai bao toan bo route cua ung dung tai day.
 * Khi du an lon hon, co the tach thanh route con (nested routes)
 * hoac ap dung lazy loading voi React.lazy + Suspense.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LLCTChapter2Page />} />
      <Route path="/llct-chapter-2" element={<LLCTChapter2Page />} />
      <Route path="/llct-chapter-2/events/:eventSlug" element={<LLCTEventDetailPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
