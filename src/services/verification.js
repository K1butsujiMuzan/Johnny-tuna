import { responseTypes } from '@/constants/responseTypes.data'
import { getApi } from '@/services/api'

export const getToken = async token => {
  const response = await fetch(getApi.verification(token), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await response.json()
  if (data.error === responseTypes.wrongToken) {
    throw new Error('Неверный токен')
  }
  return data
}
