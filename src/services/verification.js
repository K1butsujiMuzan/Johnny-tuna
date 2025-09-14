import {responsesTypes} from "@/constants/Request/responsesTypes";
import {api} from "@/services/api";

export const getToken = async(token) => {
    const response = await fetch(api.verification(token), {
      method: "GET"
    })
    const data = await response.json()
    if(data.error === responsesTypes.wrongToken) {
      throw new Error("Неверный токен")
    }
    return data
}