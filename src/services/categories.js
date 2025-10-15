import { api } from '@/services/api'
import { errorTypes } from '@/constants/errorTypes.data'

export const categories = async () => {
  try {
    const response = await fetch(api.categories, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    if (data.error) {
      return errorTypes.somethingWentWrong
    }

    if (!data.error) return data.result
  } catch (error) {
    console.error('Ошибка сети: ', error)
  }
}
