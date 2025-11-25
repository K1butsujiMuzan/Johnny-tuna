import { errorTypes } from '@/constants/errorTypes.data'

export const getCategoryData = async api => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error || errorTypes.somethingWentWrong)
    }
    return data.result
  } catch (error) {
    console.error(`Ошибка загрузки данных: ${error}`)
    throw error
  }
}
