/**
 * Cac ham tien ich dung chung trong toan bo ung dung.
 */

export function formatDate(date, locale = 'vi-VN') {
  if (!date) return ''
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatCurrency(amount, currency = 'VND', locale = 'vi-VN') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

export function classNames(...args) {
  return args.filter(Boolean).join(' ')
}

export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
