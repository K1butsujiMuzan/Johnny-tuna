import Cookies from 'js-cookie'

export const checkProfile = async api => {
  try {
    const token = Cookies.get('auth')
    const response = await fetch(api, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!response) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return data.result
  } catch (error) {
    console.error(`Ошибка загрузки данных: ${error}`)
    throw error
  }
}
