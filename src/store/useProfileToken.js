import {create} from "zustand";
import {checkProfile} from "@/services/profile";

export const useProfileToken = create((set) => ({
  isVerify: false,
  auth: async() => {
    try {
      const status = await checkProfile()
      set({isVerify: status})
      return status
    } catch(error) {
      console.error(error)
    }
  }
}))