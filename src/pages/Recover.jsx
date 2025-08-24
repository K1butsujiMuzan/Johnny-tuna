import useHead from "@/hooks/useHead";
import RecoverContainer from "@components/LoginContainer&RecoverContainer/RecoverContainer/RecoverContainer";

function Recover() {
  useHead({
    title: "Джонни Тунец | Восстановление",
    description: "Восстановление аккаунта через вашу почту",
    keywords: "пароль, почта, восстановление аккаунта"
  })
  return(
    <main>
      <RecoverContainer/>
    </main>
  )
}

export default Recover