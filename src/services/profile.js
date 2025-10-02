import { errorTypes } from '@/constants/errorTypes.data'
import Cookies from 'js-cookie'

export const checkProfile = async api => {
  try {
    const token = Cookies.get('auth')
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
