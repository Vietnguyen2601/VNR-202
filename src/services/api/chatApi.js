export async function sendChatMessage(messages) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Không thể gửi tin nhắn.')
  }

  return data
}
