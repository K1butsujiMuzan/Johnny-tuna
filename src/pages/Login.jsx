import useHead from "@/hooks/useHead";
import LoginBlock from "@components/LoginBlock/LoginBlock"

function Login() {
  useHead({
    title: "Джонни Тунец | Авторизация",
    description: "Вход в аккаунт для возможности оформлять заказы",
    keywords: "вход, регистрация, авторизация"
  })
  return(
    <>
      <main>
        <LoginBlock/>
      </main>
    </>
  )
}

export default Login