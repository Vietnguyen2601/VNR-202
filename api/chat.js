import { handleChatRequest } from '../lib/chatHandler.js'
import { getClientIpFromRequest } from '../lib/rateLimit.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = await handleChatRequest(req.body, { clientIp: getClientIpFromRequest(req) })
    return res.status(200).json(result)
  } catch (error) {
    const status = error.statusCode || 500
    if (error.retryAfterSec) {
      res.setHeader('Retry-After', String(error.retryAfterSec))
    }
    return res.status(status).json({ error: error.message || 'Lỗi server.' })
  }
}
