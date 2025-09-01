import styles from "./ContactsForm.module.css"
import Logo from "@components/UI/Logo/Logo";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useState} from "react";
import {motion} from "framer-motion";
import Radio from "@components/UI/LoginComponents/Radio/Radio";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton/SubmitButton";
import {textVariants} from "@/constants/variantsAnimation";
import {checkContacts} from "@/scripts/Contacts/checkContacts";
import {errorsTypes} from "@/constants/errorsTypes";

function ContactsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    theme: "",
    message: "",
    reason: 0
  })
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    themeError: "",
    messageError: "",
    serverError: ""
  })

  const radioNames = [
    {
      value: 0,
      label: "Отзыв или предложение"
    },
    {
      value: 1,
      label: "Вопрос"
    },
    {
      value: 2,
      label: "Проблема"
    },
    {
      value: 3,
      label: "Бронирование"
    }
  ]

  const formSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const validationErrors = checkContacts(
      formData.name,
      formData.email,
      formData.theme,
      formData.message
    )
    setErrors(validationErrors)
    if(Object.values(validationErrors).some(error => error !== "")) {
      setIsLoading(false)
      return
    }

    try{
      const response = await fetch("http://localhost:8080/api/v1/appeal", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          name: formData.name,
          theme: formData.theme
        })
      })
      const data = await response.json()

      if(data.error) {
        setErrors(prevState => ({
          ...prevState,
          serverError: errorsTypes.emailNotFound(formData.email)
        }))
      }
    } catch(error) {
      console.log("Ошибка сети: ", error)
      setErrors(prevState => ({
        ...prevState,
        serverError: errorsTypes.serverError
      }))
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (event) => {
    const {name, value, type} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "radio" ? +value : value
    }))
  }
  return(
    <motion.form
      variants={textVariants}
      initial={"enter"}
      animate={"center"}
      transition={{duration: 1}}
      onSubmit={formSubmit}
      noValidate
      className={`${styles.formInner} gradientBorder`}
    >
      <Logo/>
      <div className={styles.formInputs}>
        <div className={styles.formText}>
          <div className={styles.errorBlock}>
            <p className={styles.error}>{errors.nameError}</p>
            <LoginInput
              type={"text"}
              minLength={3}
              maxLength={20}
              placeholder={"Имя"}
              name={"name"}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.errorBlock}>
            <p className={styles.error}>{errors.emailError}</p>
            <LoginInput
              type={"email"}
              minLength={10}
              maxLength={50}
              placeholder={"Почта"}
              name={"email"}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.errorBlock}>
            <p className={styles.error}>{errors.themeError}</p>
            <LoginInput
              type={"text"}
              minLength={3}
              maxLength={50}
              placeholder={"Тема"}
              name={"theme"}
              value={formData.theme}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formReason}>
          <fieldset className={styles.radioList}>
            <legend className={styles.formLegend}>У вас есть вопросы или предложения? Напишите нам!</legend>
            <div className={styles.formRadios}>
              {radioNames.map((radio, _) => (
                <div
                  key={radio.value}
                  className={styles.radioItem}
                >
                  <Radio
                    value={radio.value}
                    name={"reason"}
                    label={radio.label}
                    onChange={handleChange}
                    checked={radio.value === formData.reason}
                  />
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
      <div className={styles.errorBlock}>
        <p className={styles.error}>{errors.messageError}</p>
        <textarea
          className={styles.formTextArea}
          name={"message"}
          value={formData.message}
          onChange={handleChange}
          placeholder={"Обращение"}
          minLength={30}
          maxLength={500}
        />
      </div>
      <SubmitButton
        type={"submit"}
      >
        {isLoading ? "Отправка..." : "Отправить"}
      </SubmitButton>
    </motion.form>
  )
}

export default ContactsForm