/* eslint-disable react-hooks/rules-of-hooks */
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID, SPREADSHEET_ID } from './config'

export const Doc = new GoogleSpreadsheet(SPREADSHEET_ID)

export const appendSpreadsheet = async (row: any) => {
  try {
    await Doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    })
    await Doc.loadInfo()

    const sheet = Doc.sheetsById[SHEET_ID]
    const result = await sheet.addRow(row)
    return result
  } catch (e) {
    console.error('Error: ', e)
  }
}

export const readSpreadsheet = async () => {
  try {
    await Doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    })
    await Doc.loadInfo()
    const sheet = Doc.sheetsById[SHEET_ID]
    return sheet
  } catch (e) {
    console.error('Error: ', e)
  }
}
