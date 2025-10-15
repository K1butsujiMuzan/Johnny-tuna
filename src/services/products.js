import { api } from '@/services/api'
import { errorTypes } from '@/constants/errorTypes.data'

export const products = async () => {
  try {
    const response = await fetch(api.products, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    if (data.error) {
      return errorTypes.somethingWentWrong
    }
    return data.result
  } catch (error) {
    console.error('Ошибка сети: ', error)
  }
}
