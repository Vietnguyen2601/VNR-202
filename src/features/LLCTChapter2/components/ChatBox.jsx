import { useEffect, useRef, useState } from 'react'
import { sendChatMessage } from '@services/api/chatApi'
import './ChatBox.css'

const WELCOME = {
  role: 'assistant',
  content: 'Xin chào! Tôi có thể giải đáp thắc mắc cho bạn về nội dung Chương 2. Bạn có thể chọn câu hỏi gợi ý bên dưới hoặc tự nhập câu hỏi.',
}

const SUGGESTIONS = [
  'Ý nghĩa lịch sử của cuộc kháng chiến chống Pháp là gì?',
  'Đảng rút ra những kinh nghiệm gì từ kháng chiến chống Pháp?',
  'Vì sao sau Hiệp định Giơnevơ phải có đường lối riêng cho hai miền?',
  'Nghị quyết 15 có vai trò gì với cách mạng miền Nam?',
  'Đại hội III xác định như thế nào về hai chiến lược cách mạng?',
  'Miền Bắc đã chi viện cho miền Nam như thế nào giai đoạn 1961–1965?',
]

const MAX_SESSION_MESSAGES = 15
const COOLDOWN_MS = 4000

function ChatBox() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([WELCOME])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cooldownSec, setCooldownSec] = useState(0)
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const lastSubmitAtRef = useRef(0)
  const userMessageCount = messages.filter(msg => msg.role === 'user').length
  const hasUserMessage = userMessageCount > 0
  const sessionLimitReached = userMessageCount >= MAX_SESSION_MESSAGES
  const isBlocked = loading || cooldownSec > 0 || sessionLimitReached

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open, loading])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (cooldownSec <= 0) return undefined

    const timer = window.setInterval(() => {
      setCooldownSec(prev => (prev <= 1 ? 0 : prev - 1))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [cooldownSec])

  function startCooldown(seconds = COOLDOWN_MS / 1000) {
    setCooldownSec(Math.max(1, Math.ceil(seconds)))
    lastSubmitAtRef.current = Date.now()
  }

  async function submit(text) {
    const content = text.trim()
    if (!content || isBlocked) return

    const now = Date.now()
    const elapsed = now - lastSubmitAtRef.current
    if (lastSubmitAtRef.current && elapsed < COOLDOWN_MS) {
      const waitSec = Math.ceil((COOLDOWN_MS - elapsed) / 1000)
      setError(`Vui lòng đợi ${waitSec} giây trước khi gửi câu hỏi tiếp theo.`)
      setCooldownSec(waitSec)
      return
    }

    if (sessionLimitReached) {
      setError(`Bạn đã hỏi ${MAX_SESSION_MESSAGES} câu trong phiên này. Vui lòng tải lại trang để tiếp tục.`)
      return
    }

    setError('')
    setInput('')

    const userMessage = { role: 'user', content }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setLoading(true)
    startCooldown()

    try {
      const history = nextMessages.filter(msg => msg !== WELCOME)
      const { reply } = await sendChatMessage(history)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    submit(input)
  }

  return (
    <div className={`llct-chat ${open ? 'is-open' : ''}`}>
      {open && (
        <section className="llct-chat-panel" aria-label="Hỏi đáp Chương 2 LLCT">
          <header className="llct-chat-header">
            <div>
              <p className="llct-chat-kicker">Trợ lý LLCT · Chương 2</p>
              <h3>Hỏi đáp nội dung thuyết trình</h3>
            </div>
            <button type="button" className="llct-chat-close" onClick={() => setOpen(false)} aria-label="Đóng chat">
              ×
            </button>
          </header>

          <div className="llct-chat-messages" ref={listRef}>
            {messages.map((msg, index) => (
              <article key={`${msg.role}-${index}`} className={`llct-chat-bubble ${msg.role}`}>
                <span>{msg.role === 'user' ? 'Bạn' : 'Trợ lý'}</span>
                <p>{msg.content}</p>
              </article>
            ))}
            {loading && (
              <article className="llct-chat-bubble assistant is-loading">
                <span>Trợ lý</span>
                <p>Đang suy nghĩ...</p>
              </article>
            )}
          </div>

          {error && <p className="llct-chat-error">{error}</p>}

          {!hasUserMessage && (
            <div className="llct-chat-suggestions">
              <p className="llct-chat-suggestions-label">Gợi ý câu hỏi</p>
              {SUGGESTIONS.map(suggestion => (
                <button key={suggestion} type="button" onClick={() => submit(suggestion)} disabled={isBlocked}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {sessionLimitReached && (
            <p className="llct-chat-limit">Bạn đã dùng hết {MAX_SESSION_MESSAGES} lượt hỏi trong phiên này.</p>
          )}

          <form className="llct-chat-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder={
                sessionLimitReached
                  ? 'Đã hết lượt hỏi trong phiên này'
                  : cooldownSec > 0
                    ? `Đợi ${cooldownSec}s để gửi tiếp...`
                    : 'Nhập câu hỏi của bạn...'
              }
              disabled={isBlocked}
              maxLength={500}
            />
            <button type="submit" disabled={isBlocked || !input.trim()}>
              {loading ? '...' : cooldownSec > 0 ? `${cooldownSec}s` : 'Gửi'}
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="llct-chat-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Thu gọn chat' : 'Mở chat hỏi đáp'}
      >
        {open ? '↓' : '💬'}
      </button>
    </div>
  )
}

export default ChatBox
