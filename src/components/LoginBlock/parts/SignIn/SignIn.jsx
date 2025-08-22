import styles from "../Parts.module.css"
import {useCallback, useState} from "react";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import {Link} from "react-router";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import CheckBox from "@components/UI/LoginComponents/CheckBox";

function SignIn() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    agree: false,
  })

  const handleChange = useCallback((event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }))
  }, [])

  return(
    <form
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
        <CheckBox
          text={"Я ознакомлен(а) с политикой конфиденциальности и даю согласие "}
          link={"на обработку своих персональных данных"}
          checked={formData.agree}
          onChange={handleChange}
          name={"agree"}
          value={"agreement"}
        />
        <SubmitButton>
          Войти
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn