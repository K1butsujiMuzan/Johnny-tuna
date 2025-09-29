import { errorTypes } from '@/constants/errorTypes'
import Cookies from 'js-cookie'

export const updateData = async (api, newValue) => {
  const token = Cookies.get('auth')
  const response = await fetch(api, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      new_value: newValue,
    }),
  })
  if (!response) {
    throw new Error(errorTypes.serverConnect)
  }
  const data = await response.json()
  return data.error
}
