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

function ChatBox() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([WELCOME])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const hasUserMessage = messages.some(msg => msg.role === 'user')

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

  async function submit(text) {
    const content = text.trim()
    if (!content || loading) return

    setError('')
    setInput('')

    const userMessage = { role: 'user', content }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setLoading(true)

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
                <button key={suggestion} type="button" onClick={() => submit(suggestion)} disabled={loading}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form className="llct-chat-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              disabled={loading}
              maxLength={500}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              Gửi
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
