import { create } from 'zustand'
import { checkProfile } from '@/services/profile'
import { getApi } from '@/services/api'
import Cookies from 'js-cookie'

const useProfileTokenStore = create((set, get) => ({
  isVerify: false,
  initialProfileData: {
    points: { value: 0 },
    email: '',
    id: '',
    login: '',
    orders: null,
  },
  profileData: {
    points: { value: 0 },
    email: '',
    id: '',
    login: '',
    orders: null,
  },
  authProfile: async () => {
    try {
      const status = await checkProfile(getApi.checkProfile)

      if (status === 'ok') {
        const data = await get().getData()
        if (!data.error) {
          set({ isVerify: true, profileData: data })
        }
      } else {
        set(state => ({
          isVerify: false,
          profileData: state.initialProfileData,
        }))
      }
      return status
    } catch (error) {
      console.error(error)
    }
  },
  getData: async () => {
    return await checkProfile(getApi.getProfileData)
  },
  exit: () => {
    Cookies.remove('auth')
  },
}))

export const useProfileData = () =>
  useProfileTokenStore(state => state.profileData)
export const authProfile = () => useProfileTokenStore.getState().authProfile()
export const exit = () => useProfileTokenStore.getState().exit()
