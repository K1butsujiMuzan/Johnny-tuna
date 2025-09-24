import { api } from '@/services/api'

export const checkEmailData = async (email) => {
  const response = await fetch(api.recoverEmail, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email
    })
  })
  const data = await response.json()
  return data.error === null
}