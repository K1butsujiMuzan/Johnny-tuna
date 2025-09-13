import styles from "../LoginAndRecoverContainers.module.css"
import {useEffect, useState} from "react";
import Logo from "@components/UI/Logo/Logo";
import {Link} from "react-router-dom";
import SignIn from "@components/Containers/LoginContainer&RecoverContainer/LoginContainer/parts/SignIn";
import SignUp from "@components/Containers/LoginContainer&RecoverContainer/LoginContainer/parts/SignUp";
import {motion} from "framer-motion";
import {loginFromTop} from "@/constants/Data/variantsAnimation";

function LoginContainer() {
  const [isOpen, setIsOpen] = useState("login")

  useEffect(() => {
    document.body.classList.add(styles.loginBody)
    return () => {
      document.body.classList.remove(styles.loginBody)
    }
  }, [])

  return(
    <motion.div
      className={styles.loginBlock}
      variants={loginFromTop}
      initial={"enter"}
      animate={"center"}
      transition={{duration: 1}}
    >
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
    </motion.div>
  )
}

export default LoginContainer