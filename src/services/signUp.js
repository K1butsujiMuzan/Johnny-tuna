import { postApi } from '@/services/api'

export const signUp = async (email, login, password) => {
  const response = await fetch(postApi.signUp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      login: login,
      password: password,
    }),
  })
  const data = await response.json()

  return { ok: response.ok, data }
}
