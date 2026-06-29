import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpeakerScriptBox from './SpeakerScriptBox'

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? (scrollY / max) * 100 : 0)
    }
    update()
    addEventListener('scroll', update, { passive: true })
    return () => removeEventListener('scroll', update)
  }, [])
  return <div className="vnr202-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
}

const navItems = [['hero', 'Mở đầu'], ['context', 'Bối cảnh'], ['key-events', 'Sự kiện'], ['evidence', 'Tư liệu'], ['france', 'Chống Pháp'], ['1954-1960', '1954–60'], ['congress', 'Đại hội III'], ['1961-1965', '1961–65'], ['logic', 'Phân tích'], ['lo', 'LO'], ['review-game', 'Ôn tập'], ['modern', 'Liên hệ'], ['ai', 'AI Usage'], ['references', 'Nguồn']]

export function StickyNav() {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-25% 0px -65%' })
    navItems.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])
  return <nav className="vnr202-nav" aria-label="Điều hướng bài thuyết trình"><a className="vnr202-brand" href="#hero"><span>02</span> VNR-202</a><div className="vnr202-nav-scroll">{navItems.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}</div></nav>
}

export function SectionTitle({ index, eyebrow, title, subtitle }) {
  return <header className="section-heading reveal"><span className="section-index">{index}</span><div><p className="section-eyebrow">{eyebrow}</p><h2>{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}</div></header>
}

export function AudiencePrompt({ children }) {
  return <aside className="audience-prompt reveal"><span>PAUSE & THINK</span><p>{children}</p></aside>
}

export function PeriodCard({ data, tone = 'north' }) {
  return <article className={`period-card glass-card reveal ${tone}`}><p className="period-label">{data.label}</p><h3>{data.title}</h3><p className="period-thesis">{data.thesis}</p><ul className="check-list">{data.points.map(point => <li key={point}>{point}</li>)}</ul><div className="analysis-callout"><span>LOGIC LÃNH ĐẠO</span><p>{data.analysis}</p></div></article>
}

export function KeyEventsSection({ events }) {
  const filters = ['Tất cả', 'Miền Bắc', 'Miền Nam', 'Cả nước', 'Chủ trương', 'Thắng lợi']
  const [filter, setFilter] = useState(filters[0])
  const visibleEvents = filter === 'Tất cả' ? events : events.filter(event => event.region === filter || event.type === filter)
  return <div className="key-events-shell reveal">
    <div className="filter-tabs" role="tablist" aria-label="Lọc sự kiện lịch sử">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} type="button" onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="event-rail">{visibleEvents.map(event => <article className="event-card" key={`${event.date}-${event.title}`}>
      <div className="event-date">{event.date}</div>
      <div className="event-body">
        {event.image && <img className="event-image" src={event.image} alt={event.imageAlt || event.title} />}
        <div className="key-event-detail-body">
          <div className="key-event-main-content">
            <div className="event-meta"><span>{event.region}</span><span>{event.type}</span>{event.lo.map(lo => <span key={lo}>{lo}</span>)}</div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <blockquote>{event.evidence}</blockquote>
            <small>Phân tích: {event.analysis}</small>
          </div>
          {event.speakerScript && <SpeakerScriptBox {...event.speakerScript} />}
        </div>
      </div>
    </article>)}</div>
  </div>
}

export function EvidenceGallerySection({ assets }) {
  return <div className="evidence-gallery">{assets.map(asset => <Link className="visual-card reveal" key={asset.id} to={`/vnr-202/events/${asset.slug}`}>
    <div className="visual-placeholder" aria-label={`Vị trí ảnh tư liệu: ${asset.title}`}><span>{asset.year}</span><b>{asset.title}</b></div>
    <div className="visual-card-body">
      <p>{asset.caption}</p>
      <strong>Xem chi tiết →</strong>
    </div>
  </Link>)}</div>
}

export function QuoteEvidence({ evidence }) {
  return <article className="quote-evidence reveal"><span>{evidence.label}</span><blockquote>{evidence.quote}</blockquote><p>{evidence.source}</p><small>Ý nghĩa: {evidence.meaning}</small></article>
}

export function CauseEffectFlow({ items }) {
  return <div className="cause-flow">{items.map((item, index) => <article className="cause-row reveal" key={item.cause}>
    <span className="cause-number">{String(index + 1).padStart(2, '0')}</span>
    <div><b>Nguyên nhân</b><p>{item.cause}</p></div>
    <i aria-hidden="true">→</i>
    <div><b>Quyết sách của Đảng</b><p>{item.decision}</p></div>
    <i aria-hidden="true">→</i>
    <div><b>Kết quả lịch sử</b><p>{item.result}</p></div>
  </article>)}</div>
}

