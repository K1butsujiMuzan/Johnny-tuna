import { api } from '@/services/api'

export const signIn = async (login, password) => {
  try {
    const response = await fetch(api.signIn, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login_or_email: login,
        password: password,
      }),
    })

    let data
    try {
      data = await response.json()
    } catch (_) {
      data = {}
    }
    return { ok: response.ok, data }
  } catch (error) {
    console.error('Ошибка сети: ', error)
    return { ok: false, data: { error: 'networkError' } }
  }
}
