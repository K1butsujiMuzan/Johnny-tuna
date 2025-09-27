import { getCookie } from '@/utils/functions/getCookie'
import { errorTypes } from '@/constants/errorTypes'

export const checkProfile = async api => {
  try {
    const token = getCookie('auth')
    const response = await fetch(api, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response) {
      throw new Error(errorTypes.serverConnect)
    }
    const data = await response.json()
    return data.result
  } catch (error) {
    console.error(error)
  }
}
