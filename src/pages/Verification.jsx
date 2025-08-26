import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {responsesTypes} from "@/constants/responsesTypes";
import {setCookie} from "@/scripts/setCookie";

function Verification() {
  const {token} = useParams()

  const getToken = async() => {
    try{
      const response = await fetch(`http://localhost:8080/api/v1/auth/verify?token=${token}`, {
        method: "GET"
      })
      const data = await response.json()
      if(data.error === responsesTypes.wrongToken) {
        throw new Error("Неверный токен")
      }
      if(data.result) {
        console.log("Аккаунт подтверждён!")
        setCookie("auth", data.result, 30)
      }

    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getToken()
  }, []);

  return(
    <>

    </>
  )
}

export default Verification