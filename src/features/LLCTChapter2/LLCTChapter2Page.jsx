import { useEffect } from 'react'
import { aiTools, antiFrench, causeEffectFlow, evidenceQuotes, keyEvents, logic, modern, notes, outcomes, periods, references, timeline, visualAssets } from './data/content'
import { AudiencePrompt, CauseEffectFlow, EvidenceGallerySection, KeyEventsSection, PeriodCard, ProgressBar, QuoteEvidence, SectionTitle, SpeakerNotes, StickyNav } from './components/PresentationComponents'
import './LLCTChapter2Page.css'

const Arrow = () => <span className="flow-arrow" aria-hidden="true">→</span>

export default function LLCTChapter2Page() {
  useEffect(() => {
    document.title = 'LLCT Chapter 2 Presentation'
    document.body.classList.add('llct-body')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(node => observer.observe(node))
    return () => { observer.disconnect(); document.body.classList.remove('llct-body') }
  }, [])

  return <main className="llct-page">
    <ProgressBar /><StickyNav />
    <section id="hero" className="llct-hero">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="hero-content reveal">
        <p className="hero-kicker">LÝ LUẬN CHÍNH TRỊ · CHƯƠNG 2 · 1945–1965</p>
        <h1>Hai miền<br /><em>Một mục tiêu</em></h1>
        <p className="hero-lead">Hành trình Đảng lãnh đạo cách mạng Việt Nam từ kháng chiến chống Pháp đến xây dựng miền Bắc và đấu tranh giải phóng miền Nam.</p>
        <div className="hero-question"><span>CÂU HỎI TRUNG TÂM</span><p>Vì sao tiến hành đồng thời hai chiến lược cách mạng là lựa chọn đúng đắn và sáng tạo?</p></div>
        <div className="hero-actions"><a className="primary-button" href="#context">Bắt đầu trình bày <Arrow /></a><a className="text-button" href="#lo">Xem LO Mapping</a><a className="text-button" href="#ai">AI Usage</a></div>
      </div>
      <div className="hero-axis reveal" aria-label="Hai miền cùng hướng tới một mục tiêu"><div><span>MIỀN BẮC</span><strong>Hậu phương</strong></div><div className="axis-line"><i /><b>THỐNG NHẤT</b><i /></div><div><span>MIỀN NAM</span><strong>Tiền tuyến</strong></div></div>
      <SpeakerNotes notes={notes.opening} />
    </section>

    <section id="context" className="llct-section timeline-section">
      <SectionTitle index="01" eyebrow="Bối cảnh lịch sử · LO1" title="Hai thập niên, một dòng chảy" subtitle="Mỗi mốc không đứng riêng lẻ: quyết định sau được hình thành từ điều kiện và kinh nghiệm của mốc trước." />
      <div className="timeline">{timeline.map(([year, title, description], index) => <article className="timeline-item reveal" style={{ '--delay': `${index * 60}ms` }} key={year}><span className="timeline-dot" /><time>{year}</time><h3>{title}</h3><p>{description}</p></article>)}</div>
      <AudiencePrompt>Theo bạn, vì sao Đảng không chỉ tập trung vào một miền mà phải lãnh đạo đồng thời cả hai miền?</AudiencePrompt>
    </section>

    <section id="key-events" className="llct-section key-events-section">
      <SectionTitle index="02" eyebrow="Sự kiện trọng tâm · LO1 + LO2 + LO3" title="Từ mốc thời gian đến quyết sách" subtitle="Phần này giúp người nghe không bị trôi trong chuỗi sự kiện: mỗi mốc đều có bối cảnh, dẫn chứng và ý nghĩa phân tích." />
      <KeyEventsSection events={keyEvents} />
    </section>

    <section id="evidence" className="llct-section evidence-section">
      <SectionTitle index="03" eyebrow="Tư liệu trực quan · Visual Evidence" title="Nhìn thấy lịch sử trước khi phân tích lịch sử" subtitle="Các ô dưới đây là placeholder có định hướng nguồn. Khi nhóm có ảnh chính thống, chỉ cần thay vào đúng thẻ tư liệu tương ứng." />
      <EvidenceGallerySection assets={visualAssets} />
      <div className="quote-grid">{evidenceQuotes.map(evidence => <QuoteEvidence evidence={evidence} key={evidence.label} />)}</div>
      <p className="source-warning reveal">Lưu ý: không dùng ảnh không rõ nguồn như bằng chứng cuối cùng. Hãy thay placeholder bằng ảnh từ bảo tàng, TTXVN, Báo Quân đội nhân dân, Cổng thông tin Đảng hoặc tài liệu giảng viên cung cấp.</p>
    </section>

    <section id="france" className="llct-section dark-panel">
      <SectionTitle index="04" eyebrow="Kháng chiến chống Pháp · LO2 + LO3" title="Thắng lợi để lại điều gì?" subtitle="Không chỉ một kết quả quân sự, mà còn là nền tảng chính trị và hệ kinh nghiệm lãnh đạo cho chặng đường tiếp theo." />
      <div className="tab-groups"><div><p className="group-label">Ý NGHĨA LỊCH SỬ</p><div className="card-grid">{antiFrench.meaning.map(([title, text], i) => <article className="mini-card reveal" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div><div><p className="group-label gold">KINH NGHIỆM LÃNH ĐẠO</p><div className="lesson-row">{antiFrench.lessons.map(([title, text]) => <article className="lesson-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div>
    </section>

    <section id="1954-1960" className="llct-section split-era">
      <SectionTitle index="05" eyebrow="1954–1960 · LO2 + LO3" title="Khác nhiệm vụ. Chung phương hướng." subtitle="Hai miền vận động theo điều kiện riêng nhưng tương tác trong một chiến lược cách mạng thống nhất." />
      <div className="period-grid"><PeriodCard data={periods.north54} /><PeriodCard data={periods.south54} tone="south" /></div>
      <div className="transition-flow reveal"><span>Giữ gìn lực lượng</span><Arrow /><strong>Nghị quyết 15</strong><Arrow /><span>Đồng khởi · Thế tiến công</span></div>
      <AudiencePrompt>Điều gì khiến cách mạng miền Nam phải chuyển từ giữ gìn lực lượng sang thế tiến công?</AudiencePrompt>
      <div className="notes-grid"><SpeakerNotes notes={notes.north54} /><SpeakerNotes notes={notes.south54} /></div>
    </section>

    <section id="congress" className="llct-section congress-section">
      <SectionTitle index="06" eyebrow="Đại hội III · 9/1960" title="Một đất nước · Hai chiến lược · Một mục tiêu" />
      <div className="strategy-map reveal"><article><span>MIỀN BẮC</span><h3>Cách mạng xã hội chủ nghĩa</h3><strong>Quyết định nhất</strong><p>Xây dựng căn cứ địa và tiềm lực chính trị, kinh tế, quốc phòng.</p></article><div className="strategy-center"><small>CÙNG HƯỚNG TỚI</small><b>HÒA BÌNH<br />THỐNG NHẤT</b></div><article><span>MIỀN NAM</span><h3>Cách mạng dân tộc dân chủ nhân dân</h3><strong>Quyết định trực tiếp</strong><p>Trực tiếp đấu tranh chống Mỹ và chính quyền Sài Gòn.</p></article></div>
      <p className="big-thesis reveal">“Hai chiến lược khác nhau về nhiệm vụ cụ thể, thống nhất trong mục tiêu chung.”</p>
      <SpeakerNotes notes={notes.congress} />
    </section>

    <section id="1961-1965" className="llct-section split-era latter-era">
      <SectionTitle index="07" eyebrow="1961–1965 · LO2 + LO3" title="Hậu phương tạo lực. Tiền tuyến tạo thế." />
      <div className="supply-line reveal"><b>MIỀN BẮC</b><span>Đường 559 · Đường 759</span><i /><strong>CHI VIỆN</strong><i /><span>Sức người · Sức của</span><b>MIỀN NAM</b></div>
      <div className="period-grid"><PeriodCard data={periods.north61} /><PeriodCard data={periods.south61} tone="south" /></div>
      <SpeakerNotes notes={notes.south61} />
    </section>

    <section id="logic" className="llct-section logic-section">
      <SectionTitle index="08" eyebrow="Phân tích · Không chỉ kể sự kiện" title="Từ sự kiện đến tư duy lãnh đạo" subtitle="Mở từng câu hỏi để đi qua chuỗi: hoàn cảnh → quyết định → ý nghĩa." />
      <CauseEffectFlow items={causeEffectFlow} />
      <div className="logic-list">{logic.map(([question, answer], i) => <details className="logic-card reveal" key={question} open={i === 0}><summary><span>0{i + 1}</span><h3>{question}</h3><b>+</b></summary><div><p>{answer}</p><small>HOÀN CẢNH <Arrow /> QUYẾT ĐỊNH <Arrow /> Ý NGHĨA</small></div></details>)}</div>
    </section>

    <section id="lo" className="llct-section lo-section">
      <SectionTitle index="09" eyebrow="Learning Outcomes" title="Học để nhận diện, phân tích và vận dụng" />
      <div className="lo-grid">{outcomes.map(([code, title, text]) => <article className="lo-card reveal" key={code}><strong>{code}</strong><h3>{title}</h3><p>{text}</p><div className="lo-meter"><i /><i /><i /><i /></div></article>)}</div>
    </section>

    <section id="modern" className="llct-section modern-section">
      <SectionTitle index="10" eyebrow="Liên hệ hiện nay · LO4" title="Lịch sử không ở lại phía sau" subtitle="Giá trị của bài học nằm ở nguyên tắc tư duy, không phải sao chép máy móc giải pháp của quá khứ." />
      <div className="modern-grid">{modern.map(([title, text], i) => <article className="modern-card reveal" key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <AudiencePrompt>Bài học “độc lập, tự chủ, sáng tạo” có ý nghĩa gì trong thời đại AI và chuyển đổi số?</AudiencePrompt>
    </section>

    <section id="ai" className="llct-section ai-section">
      <SectionTitle index="11" eyebrow="AI Usage & Academic Integrity" title="AI hỗ trợ. Sinh viên chịu trách nhiệm." />
      <div className="commitment reveal"><span>CAM KẾT HỌC THUẬT</span><p>Nhóm cam kết không để AI làm thay hoàn toàn bài thuyết trình. AI chỉ hỗ trợ lên ý tưởng, tổ chức nội dung và tạo cấu trúc web. Nội dung cuối cùng được nhóm kiểm chứng, chỉnh sửa và chịu trách nhiệm.</p></div>
      <div className="ai-tools">{aiTools.map(item => <article className="ai-card reveal" key={item.tool}><header><span>CÔNG CỤ</span><h3>{item.tool}</h3></header><dl><dt>Mục đích</dt><dd>{item.purpose}</dd><dt>Prompt chính</dt><dd>{item.prompt}</dd><dt>AI tạo ra</dt><dd>{item.output}</dd><dt>Nhóm chỉnh sửa</dt><dd>{item.revision}</dd></dl></article>)}</div>
      <div className="boundaries reveal"><span>✓ AI không thay thế việc đọc giáo trình</span><span>✓ Không dùng thông tin chưa kiểm chứng</span><span>✓ Phân biệt rõ AI và phần nhóm biên soạn</span></div>
    </section>

    <section id="references" className="llct-section references-section">
      <SectionTitle index="12" eyebrow="Nguồn & đối chiếu" title="Đặt độ tin cậy lên trước tốc độ" />
      <div className="reference-list">{references.map(([title, note], i) => <article className="reference-item reveal" key={title}><span>[{String(i + 1).padStart(2, '0')}]</span><div><h3>{title}</h3><p>{note}</p></div></article>)}</div>
      <p className="source-warning reveal">Lưu ý: danh mục này cần được nhóm bổ sung số trang giáo trình và đường dẫn văn bản chính thức đã thực tế sử dụng trước khi nộp.</p>
    </section>

    <section id="conclusion" className="llct-conclusion">
      <p className="hero-kicker reveal">KẾT LUẬN · LO3 + LO4</p><h2 className="reveal">Hai miền là hai nhiệm vụ.<br /><em>Thống nhất là một ý chí.</em></h2><p className="conclusion-copy reveal">Giai đoạn 1954–1965 cho thấy tư duy lãnh đạo độc lập, tự chủ và sáng tạo: xác định đúng nhiệm vụ từng miền, gắn hậu phương miền Bắc với tiền tuyến miền Nam, kết hợp sức mạnh dân tộc với sức mạnh thời đại. Bài học ấy vẫn có giá trị cho phát triển bền vững hôm nay: nền tảng vững chắc, đoàn kết, tự chủ và vận dụng có trách nhiệm tri thức, công nghệ mới.</p><a href="#hero" className="primary-button reveal">Trở về mở đầu ↑</a>
    </section>
  </main>
}
