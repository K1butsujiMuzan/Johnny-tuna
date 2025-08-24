import styles from "../LoginAndRecoverContainers.module.css"
import {useEffect, useState} from "react";
import Logo from "@components/UI/Logo/Logo";
import {Link} from "react-router-dom";
import SignIn from "@components/LoginContainer&RecoverContainer/LoginContainer/parts/SignIn";
import SignUp from "@components/LoginContainer&RecoverContainer/LoginContainer/parts/SignUp";
import useVisible from "@/hooks/useVisible";

function LoginContainer() {
  const [isOpen, setIsOpen] = useState("login")

  const isVisible = useVisible(50)

  useEffect(() => {
    document.body.classList.add(styles.loginBody)
    return () => {
      document.body.classList.remove(styles.loginBody)
    }
  }, [])

  return(
    <div className={`${styles.loginBlock} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.changeBlock}>
        <button
          className={`${styles.changeButton} ${isOpen === "registration" ? styles.activeButton : ""}`}
          onClick={() => {
            setIsOpen("registration")
          }}
          aria-pressed={isOpen === "registration"}
        >
          регистрация
        </button>
        <button
          className={`${styles.changeButton} ${isOpen === "login" ? styles.activeButton : ""}`}
          onClick={() => setIsOpen("login")}
          aria-pressed={isOpen === "login"}
        >
          вход
        </button>
      </div>
      <div className={styles.loginInner}>
        <div className={styles.loginInnerUp}>
          <span className={styles.logo}>
            <Logo/>
          </span>
          <Link className={styles.mainLink} to={"/"}>На главную</Link>
        </div>
        {isOpen === "login" && <SignIn/>}
        {isOpen === "registration" && <SignUp/>}
      </div>
    </div>
  )
}

export default LoginContainer