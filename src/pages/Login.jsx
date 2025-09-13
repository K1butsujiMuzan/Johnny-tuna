import useHead from "@/hooks/useHead";
import LoginContainer from "@components/Containers/LoginContainer&RecoverContainer/LoginContainer/LoginContainer"

function Login() {
  useHead({
    title: "Джонни Тунец | Авторизация",
    description: "Вход в аккаунт для возможности оформлять заказы",
    keywords: "вход, регистрация, авторизация"
  })
  return(
    <main>
      <LoginContainer/>
    </main>
  )
}

export default Login