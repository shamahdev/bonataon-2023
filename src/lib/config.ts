export const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || ''
export const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || ''
export const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL || ''
export const PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\n/g, '\n') || ''
