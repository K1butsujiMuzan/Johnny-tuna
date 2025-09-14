import {api} from "@/services/api";
import {getCookie} from "@/scripts/Functions/getCookie";
import {errorsTypes} from "@/constants/Request/errorsTypes";

export const checkProfile = async() => {
  try{
    const token = getCookie("auth")
    const response = await fetch(api.profile, {
      headers: {"Authorization": `Bearer ${token}`}
    })
    if(!response) {
      throw new Error(errorsTypes.serverConnect)
    }
    const data = await response.json()
    return data.result === "ok"
  } catch (error) {
    console.error(error)
  }
}