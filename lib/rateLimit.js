const MIN_INTERVAL_MS = 4000
const MAX_REQUESTS_PER_MINUTE = 5
const MAX_REQUESTS_PER_HOUR = 20
const HOUR_MS = 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

const buckets = new Map()

function getBucket(ip) {
  const now = Date.now()
  let bucket = buckets.get(ip)

  if (!bucket) {
    bucket = { timestamps: [], lastRequestAt: 0 }
    buckets.set(ip, bucket)
  }

  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < HOUR_MS)
  return bucket
}

function cleanupBuckets() {
  if (buckets.size <= 500) return

  const now = Date.now()
  for (const [ip, bucket] of buckets) {
    const recent = bucket.timestamps.some(ts => now - ts < HOUR_MS)
    if (!recent) buckets.delete(ip)
  }
}

export function checkRateLimit(clientIp) {
  const ip = clientIp || 'unknown'
  const now = Date.now()
  const bucket = getBucket(ip)

  if (bucket.lastRequestAt && now - bucket.lastRequestAt < MIN_INTERVAL_MS) {
    const retryAfterSec = Math.ceil((MIN_INTERVAL_MS - (now - bucket.lastRequestAt)) / 1000)
    return {
      allowed: false,
      retryAfterSec,
      message: `Bạn gửi câu hỏi quá nhanh. Vui lòng đợi ${retryAfterSec} giây.`,
    }
  }

  const lastMinute = bucket.timestamps.filter(ts => now - ts < MINUTE_MS)
  if (lastMinute.length >= MAX_REQUESTS_PER_MINUTE) {
    const oldest = lastMinute[0]
    const retryAfterSec = Math.max(1, Math.ceil((MINUTE_MS - (now - oldest)) / 1000))
    return {
      allowed: false,
      retryAfterSec,
      message: `Bạn đã gửi quá nhiều câu hỏi (${MAX_REQUESTS_PER_MINUTE}/phút). Thử lại sau ${retryAfterSec} giây.`,
    }
  }

  if (bucket.timestamps.length >= MAX_REQUESTS_PER_HOUR) {
    const oldest = bucket.timestamps[0]
    const retryAfterSec = Math.max(1, Math.ceil((HOUR_MS - (now - oldest)) / 1000))
    const retryAfterMin = Math.ceil(retryAfterSec / 60)
    return {
      allowed: false,
      retryAfterSec,
      message: `Bạn đã dùng hết lượt hỏi trong giờ này (${MAX_REQUESTS_PER_HOUR}/giờ). Thử lại sau khoảng ${retryAfterMin} phút.`,
    }
  }

  bucket.timestamps.push(now)
  bucket.lastRequestAt = now
  cleanupBuckets()

  return { allowed: true }
}

export function getClientIpFromRequest(req) {
  const forwarded = req.headers?.['x-forwarded-for'] || req.headers?.['X-Forwarded-For']
  if (forwarded) {
    return String(forwarded).split(',')[0].trim()
  }

  return req.headers?.['x-real-ip'] || req.socket?.remoteAddress || 'unknown'
}
