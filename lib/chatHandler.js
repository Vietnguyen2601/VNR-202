import { buildSystemPrompt } from './chatKnowledge.js'

const ALLOWED_MODELS = ['gpt-4o', 'gpt-5-mini']
const DEFAULT_MODEL = 'gpt-4o'

function resolveModel() {
  const model = process.env.OPENAI_MODEL || DEFAULT_MODEL
  if (!ALLOWED_MODELS.includes(model)) {
    return DEFAULT_MODEL
  }
  return model
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('Danh sách tin nhắn không hợp lệ.')
  }

  const sanitized = messages
    .filter(msg => msg && typeof msg.content === 'string' && msg.content.trim())
    .slice(-12)
    .map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content.trim().slice(0, 2000),
    }))

  if (sanitized.length === 0) {
    throw new Error('Tin nhắn trống.')
  }

  return sanitized
}

export async function handleChatRequest(body) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    const error = new Error('OPENAI_API_KEY chưa được cấu hình trên server.')
    error.statusCode = 500
    throw error
  }

  const messages = validateMessages(body?.messages)
  const model = resolveModel()

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: buildSystemPrompt() }, ...messages],
      temperature: 0.4,
      max_tokens: 800,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    const message = data?.error?.message || 'Không thể kết nối OpenAI.'
    const error = new Error(message)
    error.statusCode = response.status >= 500 ? 502 : 400
    throw error
  }

  const reply = data.choices?.[0]?.message?.content?.trim()
  if (!reply) {
    const error = new Error('OpenAI không trả về nội dung.')
    error.statusCode = 502
    throw error
  }

  return { reply, model }
}
