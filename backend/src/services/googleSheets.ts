import { google } from 'googleapis'
import path from 'path'
import { JWT } from 'google-auth-library'
import fs from 'fs'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const credentialsPath = path.join(__dirname, '../../credentials/credentials.json')

const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'))

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES
})

const sheets = google.sheets({ version: 'v4', auth })

const SPREADSHEET_ID = 'TU_ID_AQUÍ'

export async function appendLeadToSheet(name: string, phone: string, source: string) {
  const now = new Date().toLocaleString()

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'A1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, phone, now, source]]
    }
  })
}

