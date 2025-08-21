import styles from "./LoginBlock.module.css"
import {useEffect, useState} from "react";
import Logo from "@components/UI/Logo/Logo";
import {Link} from "react-router";
import SignIn from "@components/LoginBlock/parts/SignIn/SignIn";

function LoginBlock() {
  const [isOpen, setIsOpen] = useState("login")

  useEffect(() => {
    document.body.classList.add(styles.loginBody)

    return () => document.body.classList.remove(styles.loginBody)
  }, [])

  return(
    <div className={styles.loginBlock}>
      <div className={styles.changeBlock}>
        <button
          className={`${styles.changeButton} ${isOpen === "registration" ? styles.activeButton : ""}`}
          onClick={() => setIsOpen("registration")}
        >
          регистрация
        </button>
        <button
          className={`${styles.changeButton} ${isOpen === "login" ? styles.activeButton : ""}`}
          onClick={() => setIsOpen("login")}
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
      </div>
    </div>
  )
}

export default LoginBlock