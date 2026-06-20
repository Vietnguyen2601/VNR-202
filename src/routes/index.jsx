import { Routes, Route } from 'react-router-dom'
import About from '@pages/About/About'
import NotFound from '@pages/NotFound/NotFound'
import LLCTChapter2Page from '@/features/LLCTChapter2'

/**
 * Khai bao toan bo route cua ung dung tai day.
 * Khi du an lon hon, co the tach thanh route con (nested routes)
 * hoac ap dung lazy loading voi React.lazy + Suspense.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LLCTChapter2Page />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
