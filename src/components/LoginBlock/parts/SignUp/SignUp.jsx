import styles from "../Parts.module.css"
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useState} from "react";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import CheckBox from "@components/UI/LoginComponents/CheckBox";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    login: "",
    mail: "",
    password: "",
    passwordRepeat: "",
    agreement: false
  })

  const handleChange = ((event) => {
    const {name, value, checked, type} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }))
  })

  return(
    <form
      className={styles.mainForm}
      noValidate
      autoComplete={"off"}
    >
      <div className={styles.mainFormUp}>
        <div className={styles.errorBlock}>
          <p className={styles.error}></p>
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={20}
            placeholder={"Логин"}
            name={"login"}
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}></p>
          <LoginInput
            type={"mail"}
            minLength={3}
            maxLength={100}
            placeholder={"Почта"}
            name={"mail"}
            value={formData.mail}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={ styles.error}></p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <PasswordInput
          minLength={8}
          maxLength={20}
          placeholder={"Пароль (ещё раз)"}
          name={"passwordRepeat"}
          value={formData.passwordRepeat}
          onChange={handleChange}
        />
      </div>
      <div className={styles.mainFormDown}>
        <CheckBox
          text={"Я ознакомлен(а) с политикой конфиденциальности и даю согласие на "}
          link={"обработку своих персональных данных"}
          name={"agreement"}
          onChange={handleChange}
          checked={formData.agreement}
          value={"согласен"}
        />
        <SubmitButton
          isLoading={isLoading}
        >
          {isLoading ? "Загрузка...": "Отправить"}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignUp