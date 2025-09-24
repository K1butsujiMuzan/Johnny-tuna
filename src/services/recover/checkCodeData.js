import { api } from '@/services/api'

export const checkCodeData = async (email, code) => {
  const response = await fetch(api.recoverCode, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      otp_code: +code
    })
  })
  const data = await response.json()
  return data.error === null
}