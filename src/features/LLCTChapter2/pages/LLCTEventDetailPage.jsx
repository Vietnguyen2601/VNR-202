import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { eventDetails, loDescriptions } from '../data/eventDetails'
import '../LLCTChapter2Page.css'

function PlaceholderImage({ event }) {
  return <div className="event-detail-image-placeholder" role="img" aria-label={event.imageAlt}>
    <span>{event.date}</span>
    <b>{event.title}</b>
  </div>
}

function EventImage({ event }) {
  return <figure className="event-detail-image-card">
    {event.heroImage ? <img src={event.heroImage} alt={event.imageAlt} /> : <PlaceholderImage event={event} />}
    <figcaption>
      <span>{event.imageCaption}</span>
      <small>Nguồn tham khảo: {event.sourceSuggestion}</small>
    </figcaption>
  </figure>
}

function EventDetailSection({ title, children }) {
  return <section className="event-detail-section reveal">
    <h2>{title}</h2>
    {children}
  </section>
}

function RelatedEvents({ slugs }) {
  const events = slugs.map(slug => eventDetails.find(event => event.slug === slug)).filter(Boolean)
  if (!events.length) return null

  return <EventDetailSection title="Sự kiện liên quan">
    <div className="related-events-grid">
      {events.map(event => <Link className="related-event-card" to={`/llct-chapter-2/events/${event.slug}`} key={event.slug}>
        <span>{event.date}</span>
        <h3>{event.title}</h3>
        <p>{event.shortSummary}</p>
        <b>Xem tiếp →</b>
      </Link>)}
    </div>
  </EventDetailSection>
}

export default function LLCTEventDetailPage() {
  const { eventSlug } = useParams()
  const event = eventDetails.find(item => item.slug === eventSlug)

  useEffect(() => {
    document.body.classList.add('llct-body')
    window.scrollTo({ top: 0, behavior: 'auto' })
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(node => observer.observe(node))
    return () => {
      observer.disconnect()
      document.body.classList.remove('llct-body')
    }
  }, [eventSlug])

  useEffect(() => {
    document.title = event ? `${event.title} | LLCT Chapter 2` : 'Không tìm thấy sự kiện | LLCT Chapter 2'
  }, [event])

  if (!event) {
    return <main className="event-detail-page event-not-found">
      <Link className="event-back-link" to="/llct-chapter-2#evidence">← Quay lại bài thuyết trình</Link>
      <section className="event-detail-section reveal is-visible">
        <p className="event-detail-kicker">Không tìm thấy</p>
        <h1>Không tìm thấy sự kiện</h1>
        <p>Đường dẫn này không khớp với sự kiện/tư liệu nào trong bài thuyết trình.</p>
        <Link className="primary-button" to="/llct-chapter-2#evidence">Về phần tư liệu</Link>
      </section>
    </main>
  }

  return <main className="event-detail-page">
    <Link className="event-back-link" to="/llct-chapter-2#evidence">← Quay lại bài thuyết trình</Link>

    <section className="event-detail-hero">
      <div className="event-detail-hero-copy reveal">
        <div className="event-detail-meta">
          <span>{event.date}</span>
          <span>{event.region}</span>
          <span>{event.type}</span>
        </div>
        <p className="event-detail-kicker">{event.category}</p>
        <h1>{event.title}</h1>
        <p className="event-detail-subtitle">{event.subtitle}</p>
        <p className="event-detail-summary">{event.shortSummary}</p>
      </div>
      <div className="reveal">
        <EventImage event={event} />
      </div>
    </section>

    <EventDetailSection title="Bối cảnh sự kiện">
      <ul className="event-bullet-list">{event.context.map(item => <li key={item}>{item}</li>)}</ul>
    </EventDetailSection>

    <EventDetailSection title="Nội dung chính">
      <div className="event-paragraphs">{event.mainContent.map(item => <p key={item}>{item}</p>)}</div>
    </EventDetailSection>

    <EventDetailSection title="Dẫn chứng cần nhớ">
      <div className="event-evidence-grid">{event.evidence.map(item => <article className="event-quote-card" key={item.label}>
        <span>{item.label}</span>
        <blockquote>{item.content}</blockquote>
        <p>Ý nghĩa: {item.meaning}</p>
      </article>)}</div>
    </EventDetailSection>

    <EventDetailSection title="Phân tích logic">
      <div className="event-analysis-flow">
        <article><span>01</span><h3>Nguyên nhân</h3><p>{event.analysis.cause}</p></article>
        <i aria-hidden="true">→</i>
        <article><span>02</span><h3>Quyết sách của Đảng</h3><p>{event.analysis.partyDecision}</p></article>
        <i aria-hidden="true">→</i>
        <article><span>03</span><h3>Kết quả lịch sử</h3><p>{event.analysis.result}</p></article>
      </div>
    </EventDetailSection>

    <EventDetailSection title="Đánh giá ý nghĩa">
      <div className="event-evaluation-grid">
        <article><h3>Ý nghĩa lịch sử</h3><ul>{event.evaluation.historicalMeaning.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article><h3>Bài học lãnh đạo</h3><ul>{event.evaluation.leadershipLesson.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article><h3>Giá trị khi thuyết trình</h3><p>{event.evaluation.presentationValue}</p></article>
      </div>
    </EventDetailSection>

    <EventDetailSection title="Liên kết Learning Outcomes">
      <div className="event-lo-grid">{event.relatedLO.map(lo => <article key={lo}>
        <strong>{lo}</strong>
        <p>{loDescriptions[lo]}</p>
      </article>)}</div>
    </EventDetailSection>

    <EventDetailSection title="Gợi ý lời thuyết trình">
      <details className="event-speaker-notes">
        <summary>Mở gợi ý trình bày</summary>
        <ul>{event.suggestedSpeakerNotes.map(item => <li key={item}>{item}</li>)}</ul>
      </details>
    </EventDetailSection>

    <RelatedEvents slugs={event.relatedEventSlugs} />
  </main>
}
