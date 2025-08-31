import styles from "./ContactsForm.module.css"
import Logo from "@components/UI/Logo/Logo";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useState} from "react";
import {motion} from "framer-motion";
import Radio from "@components/UI/LoginComponents/Radio/Radio";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton/SubmitButton";
import {textVariants} from "@/constants/variantsAnimation";

function ContactsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    theme: "",
    message: "",
    reason: ""
  })

  const radioNames = [
    {
      value: "review",
      name: "reason",
      label: "Отзыв или предложение"
    },
    {
      value: "question",
      name: "reason",
      label: "Вопрос"
    },
    {
      value: "problem",
      name: "reason",
      label: "Проблема"
    },
    {
      value: "reservation",
      name: "reason",
      label: "Бронирование"
    }
  ]

  const formSubmit = async (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={20}
            placeholder={"Имя"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
          <LoginInput
            type={"email"}
            minLength={10}
            maxLength={40}
            placeholder={"Почта"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={20}
            placeholder={"Тема"}
            name={"theme"}
            value={formData.theme}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formReason}>
          <fieldset className={styles.radioList}>
            <legend className={styles.formLegend}>У вас есть вопросы или предложения? Напишите нам!</legend>
            {radioNames.map((radio, index) => (
              <div
                key={radio.value}
                className={styles.radioItem}
              >
                <Radio
                  value={radio.value}
                  name={radio.name}
                  label={radio.label}
                  onChange={handleChange}
                  checked={radio.value === formData.reason}
                />
              </div>
            ))}
          </fieldset>
        </div>
      </div>
      <textarea
        className={styles.formTextArea}
        name={"message"}
        value={formData.message}
        onChange={handleChange}
        placeholder={"Обращение"}
        minLength={10}
        maxLength={500}
      />
      <SubmitButton
        type={"submit"}
      >
        Отправить
      </SubmitButton>
    </motion.form>
  )
}

export default ContactsForm