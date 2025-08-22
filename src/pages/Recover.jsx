import useHead from "@/hooks/useHead";
import RecoverBlock from "@components/RecoverBlock/RecoverBlock";

function Recover() {
  useHead({
    title: "Джонни Тунец | Восстановление",
    description: "Восстановление аккаунта через вашу почту",
    keywords: "пароль, почта, восстановление аккаунта"
  })
  return(
    <main>
      <RecoverBlock/>
    </main>
  )
}

export default Recover