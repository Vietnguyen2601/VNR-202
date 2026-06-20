/**
 * Tap trung toan bo bien moi truong tai day.
 * Khong import.meta.env truc tiep o cac noi khac trong app,
 * de de kiem soat va thay doi sau nay.
 */
export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
}
