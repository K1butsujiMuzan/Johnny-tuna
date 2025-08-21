import useHead from "@/hooks/useHead";

function Login() {
  useHead({
    title: "Джонни Тунец | Авторизация",
    description: "Вход в аккаунт для возможности оформлять заказы",
    keywords: "вход, регистрация, авторизация"
  })
  return(
    <>
      <h1>Логин</h1>
    </>
  )
}

export default Login