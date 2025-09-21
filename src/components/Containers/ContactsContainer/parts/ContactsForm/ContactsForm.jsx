import styles from "./ContactsForm.module.css"
import Logo from "@components/UI/Logo/Logo";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Radio from "@components/UI/LoginComponents/Radio/Radio";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton/SubmitButton";
import {checkContacts} from "@/scripts/CheckData/checkContacts";
import {errorsTypes} from "@/constants/Request/errorsTypes";
import ModalText from "@components/Modals/ModalText/ModalText";
import {contactsForm} from "@/services/contactsForm";

function ContactsForm() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const themeRef = useRef(null)
  const messageRef = useRef(null)

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
  const [isOpenModal, setIsOpenModal] = useState(false)

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
      if(validationErrors.nameError) {
        nameRef.current.focus()
        return
      } else if(validationErrors.emailError){
        emailRef.current.focus()
        return
      } else if(validationErrors.themeError) {
        themeRef.current.focus()
        return
      } else if(validationErrors.messageError) {
        messageRef.current.focus()
        return
      }
      return
    }

    try{
      const data = await contactsForm(
        formData.email,
        formData.message,
        formData.name,
        formData.theme
      )

      if(data.error) {
        setErrors(prevState => ({
          ...prevState,
          emailError: errorsTypes.emailNotFound(formData.email)
        }))
        emailRef.current.focus()
      }
      if(!data.error) {
        setIsOpenModal(true)
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
    if(errors[`${name}Error`]) {
      setErrors(prevState => ({
        ...prevState,
        [`${name}Error`]: ""
      }))
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "radio" ? +value : value
    }))
  }
  return(
    <>
      <form
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
                ref={nameRef}
                isRed={errors.nameError}
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
                ref={emailRef}
                isRed={errors.emailError}
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
                ref={themeRef}
                isRed={errors.themeError}
                noAutoComplete
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
          <p className={styles.error}>{errors.messageError ? errors.messageError : errors.serverError}</p>
          <textarea
            className={`${styles.formTextArea} ${errors.messageError ? styles.isRed : ""}`}
            name={"message"}
            value={formData.message}
            onChange={handleChange}
            placeholder={"Обращение"}
            minLength={30}
            maxLength={500}
            ref={messageRef}
          />
        </div>
        <SubmitButton
          disabled={isLoading}
          type={"submit"}
        >
          {isLoading ? "Отправка..." : "Отправить"}
        </SubmitButton>
      </form>
      <AnimatePresence>
        {isOpenModal && <ModalText text={`Письмо успешно отправлено! Ответ придёт на ${formData.email}.`} setIsOpenModal={setIsOpenModal} setFormData={setFormData}/>}
      </AnimatePresence>
    </>
  )
}

export default ContactsForm