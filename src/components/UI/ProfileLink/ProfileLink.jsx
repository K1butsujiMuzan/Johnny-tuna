import { Link } from 'react-router'
import styles from './ProfileLink.module.css'
import { useNavigate } from 'react-router-dom'
import { useProfileToken } from '@/store/useProfileToken'
import { useBurgerOpen } from '@/store/useBurgerOpen'

function ProfileLink() {
  const navigate = useNavigate()
  const { auth, profileData } = useProfileToken()
  const { isOpen, closeBurger } = useBurgerOpen()

  const handleClick = async event => {
    event.preventDefault()
    isOpen ? closeBurger() : undefined
    const isVerify = await auth()
    navigate(`${isVerify ? '/profile' : '/login'}`)
  }

  return (
    <Link
      className={`${styles.profileLink} headerIconLink`}
      aria-label={'Профиль'}
      to={'#'}
      onClick={handleClick}
    >
      <svg
        className={styles.profileIcon}
        aria-hidden={true}
        width="24"
        height="26"
        viewBox="0 0 24 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.988 10.9759C14.7428 10.9759 16.9759 8.74275 16.9759 5.98797C16.9759 3.23319 14.7428 1 11.988 1C9.23319 1 7 3.23319 7 5.98797C7 8.74275 9.23319 10.9759 11.988 10.9759Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 25V22.1041C1 18.7225 3.82373 16 7.29083 16H16.7092C20.1941 16 23 18.7399 23 22.1041V25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className={styles.points}>
        <span className={styles.pointsText} aria-label={'Баллы'}>
          {profileData.Points.value}
        </span>
        <svg
          aria-hidden={true}
          className={styles.pointsIcon}
          height="17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polygon
            className="st0"
            points="386.415,193.208 287.481,193.208 359.434,0 161.566,0 125.585,280.151 206.528,280.151 170.557,512"
          />
        </svg>
      </div>
    </Link>
  )
}

export default ProfileLink
