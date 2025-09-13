import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getToken} from "@/Services/verification";
import {setCookie} from "@/scripts/Functions/setCookie";

function Verification() {
  const {token} = useParams()
  useEffect(() => {
    const fetchData = async() => {
      try{
        const data = await getToken(token)

        if(data.result) {
          console.log("Аккаунт подтверждён!")
          setCookie("auth", data.result, 30)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, []);

  return(
    <></>
  )
}

export default Verification