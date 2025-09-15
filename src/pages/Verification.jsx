import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getToken} from "@/services/verification";
import {setCookie} from "@/scripts/Functions/setCookie";
import {useProfileToken} from "@/store/useProfileToken";

function Verification() {
  const {auth} = useProfileToken()
  const {token} = useParams()
  useEffect(() => {
    const fetchData = async() => {
      try{
        const data = await getToken(token)

        if(data.result) {
          console.log("Аккаунт подтверждён!")
          setCookie("auth", data.result, 30)
          auth()
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