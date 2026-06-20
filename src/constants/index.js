export const APP_NAME = import.meta.env.VITE_APP_NAME || 'VNR'

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'vnr_access_token',
  REFRESH_TOKEN: 'vnr_refresh_token',
  USER: 'vnr_user',
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}
