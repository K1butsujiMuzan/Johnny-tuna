import {create} from "zustand";
import {checkProfile} from "@/services/profile";
import {api} from "@/services/api";

export const useProfileToken = create((set, get) => ({
  isVerify: false,
  profileData: {Points: {value: 0}, email: "", id: "", login: ""},
  auth: async() => {
    try {
      const status = await checkProfile(api.checkProfile)
      set({isVerify: status === "ok"})
      if(status === "ok") {
        const data = await get().getData()
        set({profileData: data})
      } else{
        set({profileData: {Points: {value: 0}, email: "", id: "", login: ""}})
      }
      return status
    } catch(error) {
      console.error(error)
    }
  },
  getData: async() => {
    return await checkProfile(api.getProfileData)
  },
  exit: () => {
    document.cookie = "auth=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    set({isVerify: false, profileData: {Points: {value: 0}, email: "", id: "", login: ""}})
  }
}))