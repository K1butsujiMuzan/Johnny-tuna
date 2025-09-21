import { getCookie } from '@/scripts/Functions/getCookie'
import { errorsTypes } from '@/constants/Request/errorsTypes'

export const updateData = async (api, newValue) => {
  const token = getCookie('auth')
  const response = await fetch(api, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      new_value: newValue,
    }),
  })
  if (!response) {
    throw new Error(errorsTypes.serverConnect)
  }
  const data = await response.json()
  return data.error
}
