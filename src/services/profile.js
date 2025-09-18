import {getCookie} from "@/scripts/Functions/getCookie";
import {errorsTypes} from "@/constants/Request/errorsTypes";

export const checkProfile = async(api) => {
  try{
    const token = getCookie("auth")
    const response = await fetch(api, {
      headers: {"Authorization": `Bearer ${token}`},
    })
    if(!response) {
      throw new Error(errorsTypes.serverConnect)
    }
    const data = await response.json()
    return data.result
  } catch (error) {
    console.error(error)
  }
}