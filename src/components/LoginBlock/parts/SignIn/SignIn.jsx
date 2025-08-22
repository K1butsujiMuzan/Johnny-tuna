import styles from "../Parts.module.css"
import {useCallback, useState} from "react";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import {setCookie} from "@/scripts/setCookie"

function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState("")
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })

  const navigate = useNavigate()

  const submitData = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setErrors("")

    try{
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          login_or_email: formData.login,
          password: formData.password
        })
      })

      if(!response.ok) {
        throw new Error(`Ошибка: ${response.status}`)
      }

      const data = await response.json()

      if(data.error === "wrong password") {
        setErrors("Неверный пароль")
        return
      }

      if(data.error === "user not found") {
        setErrors("Пользователь не найден")
        return
      }

      if(data.result && !data.error) {
        setCookie("auth", data.result, 30)
        navigate("/", {replace: true})
      }

    } catch (error) {
      console.error(error)
      setErrors("Ошибка соединения с сервером, повторите попытку позже")
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = useCallback((event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }, [])

  return(
    <form
      onSubmit={submitData}
      className={styles.mainForm}
      noValidate
    >
      <div className={styles.mainFormUp}>
        <LoginInput
          type={"text"}
          minLength={3}
          maxLength={50}
          placeholder={"Логин или почта"}
          name={"login"}
          value={formData.login}
          onChange={handleChange}
        />
        <PasswordInput
          minLength={8}
          maxLength={20}
          placeholder={"Пароль"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
        />
        <Link
          className={styles.linkToRecover}
          to={"/recover"}
        >
          Не помню пароль
        </Link>
      </div>
      <div
        className={styles.mainFormDown}
      >
        <SubmitButton
          disabled={(formData.password.length < 8) || (formData.login.length < 3)}
        >
          Войти
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn