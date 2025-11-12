import { getApi } from '@/services/api'

export const getSearchProducts = async textSearch => {
  try {
    const url = `${getApi.getSearchProducts}?name=${encodeURIComponent(textSearch)}`
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
    const data = await response.json()
    if (!data.error && data.result.length !== 0) {
      return data.result
    } else {
      return ['Ничего не найдено']
    }
  } catch (error) {
    console.error('Ошибка сети: ', error)
  }
}
