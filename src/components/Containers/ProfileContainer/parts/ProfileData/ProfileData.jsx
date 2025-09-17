import styles from "./ProfileData.module.css"
import {useNavigate} from "react-router-dom";
import {useProfileToken} from "@/store/useProfileToken";
import CitySelect
  from "@components/Containers/Header/parts/CitySelect/CitySelect";

function ProfileData() {
  const {exit, profileData} = useProfileToken()
  const navigate = useNavigate()
  const exitFromAccount = () => {
    exit()
    navigate("/")
  }
  return(
    <div className={styles.profileData}>
      <div className={styles.profileDataUp}>
        <span className={styles.profileDataUpBlock}>
          <h2 className={styles.profileSmallTitle}>Данные аккаунта</h2>
          <button
            className={styles.profileChangeButton}
            type={"button"}
            aria-label={"Редактировать профиль"}
          >
            <svg
              aria-hidden={true}
              width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={styles.profileChangeIcon}
            >
              <path d="M3.75 14.3392V15.8334C3.75 15.9439 3.7939 16.0499 3.87204 16.128C3.95018 16.2061 4.05616 16.25 4.16667 16.25H5.66083C5.77113 16.25 5.87691 16.2063 5.955 16.1284L13.0383 9.04504L10.955 6.9617L3.87167 14.045C3.79378 14.1231 3.75002 14.2289 3.75 14.3392ZM12.575 5.3417L14.6583 7.42504L15.6608 6.42254C15.8171 6.26626 15.9048 6.05434 15.9048 5.83337C15.9048 5.6124 15.8171 5.40048 15.6608 5.2442L14.7558 4.3392C14.5996 4.18298 14.3876 4.09521 14.1667 4.09521C13.9457 4.09521 13.7338 4.18298 13.5775 4.3392L12.575 5.3417Z" stroke="black" strokeWidth="1.5"/>
            </svg>
          </button>
        </span>
        <button
          type={"button"}
          className={styles.profileExit}
          onClick={exitFromAccount}
        >
          выйти
        </button>
      </div>
      <form className={styles.profileDataDown}>
        <div className={styles.profileDataDownBlock}>
          <h3>Почта</h3>
          <span className={styles.profileSpan}>{profileData.email}</span>
        </div>
        <div className={styles.profileDataDownBlock}>
          <h3>Логин</h3>
          <span className={styles.profileSpan}>{profileData.login}</span>
        </div>
        <div className={styles.profileDataDownBlock}>
          <h3>Город</h3>
          <CitySelect noPadding/>
        </div>
      </form>
    </div>
  )
}

export default ProfileData