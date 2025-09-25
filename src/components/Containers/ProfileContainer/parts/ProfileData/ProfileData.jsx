import styles from './ProfileData.module.css'
import { useNavigate } from 'react-router-dom'
import { useProfileToken } from '@/store/useProfileToken'
import CitySelect from '@components/Containers/Header/parts/CitySelect/CitySelect'
import { useEffect, useRef, useState } from 'react'
import SubmitButton from '@components/UI/LoginComponents/SubmitButton/SubmitButton'
import { checkNewProfileData } from '@/scripts/CheckData/checkNewProfileData'
import { api } from '@/services/api'
import { updateData } from '@/services/updateData'
import { errorTypes } from '@/constants/errorTypes'
import { AnimatePresence } from 'framer-motion'
import ModalText from '@components/Modals/ModalText/ModalText'

function ProfileData() {
  const { exit, profileData, auth } = useProfileToken()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [newData, setNewData] = useState({
    email: '',
    login: '',
  })
  const [errors, setErrors] = useState({
    emailError: '',
    loginError: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const emailRef = useRef(null)
  const loginRef = useRef(null)

  useEffect(() => {
    setNewData({
      email: profileData.email,
      login: profileData.login,
    })
  }, [profileData])

  const navigate = useNavigate()

  const exitFromAccount = () => {
    exit()
    navigate('/')
  }

  const toggleEdit = () => {
    setIsDisabled(prevState => !prevState)
    if (errors.loginError || errors.emailError) {
      setErrors({
        emailError: '',
        loginError: '',
      })
    }
    if (!isDisabled) {
      setNewData({
        email: profileData.email,
        login: profileData.login,
      })
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    if (errors[`${name}Error`]) {
      setErrors(prevState => ({
        ...prevState,
        [`${name}Error`]: '',
      }))
    }
    setNewData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const submitData = async event => {
    event.preventDefault()
    const validationErrors = checkNewProfileData(newData.email, newData.login)
    setErrors(validationErrors)

    if (Object.values(validationErrors).some(error => error !== '')) {
      setIsLoading(false)
      if (validationErrors.loginError) {
        return loginRef.current.focus()
      } else if (validationErrors.emailError) {
        return emailRef.current.focus()
      }
      return
    }
    setIsLoading(true)
    try {
      let hasChanges = false

      if (profileData.email !== newData.email) {
        const error = await updateData(api.updateEmail, newData.email)
        if (!error) {
          hasChanges = true
        }
      }
      if (profileData.login !== newData.login) {
        const error = await updateData(api.updateLogin, newData.login)
        if (!error) {
          hasChanges = true
        }
      }

      if (hasChanges) {
        await auth()
        setIsDisabled(true)
        setIsOpenModal(true)
      }
    } catch (error) {
      console.error(error)
      setErrors(prevState => ({
        ...prevState,
        loginError: errorTypes.serverConnect,
      }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={styles.profileData}>
        <div className={styles.profileDataUp}>
          <span className={styles.profileDataUpBlock}>
            <h2 className={styles.profileSmallTitle}>Данные аккаунта</h2>
            <button
              onClick={toggleEdit}
              className={styles.profileChangeButton}
              type={'button'}
              aria-label={'Редактировать профиль'}
            >
              {isDisabled ? (
                <svg
                  aria-hidden={true}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.profileChangeIcon}
                >
                  <path
                    d="M3.75 14.3392V15.8334C3.75 15.9439 3.7939 16.0499 3.87204 16.128C3.95018 16.2061 4.05616 16.25 4.16667 16.25H5.66083C5.77113 16.25 5.87691 16.2063 5.955 16.1284L13.0383 9.04504L10.955 6.9617L3.87167 14.045C3.79378 14.1231 3.75002 14.2289 3.75 14.3392ZM12.575 5.3417L14.6583 7.42504L15.6608 6.42254C15.8171 6.26626 15.9048 6.05434 15.9048 5.83337C15.9048 5.6124 15.8171 5.40048 15.6608 5.2442L14.7558 4.3392C14.5996 4.18298 14.3876 4.09521 14.1667 4.09521C13.9457 4.09521 13.7338 4.18298 13.5775 4.3392L12.575 5.3417Z"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.profileCloseIcon}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 4.41082C4.73651 4.08539 5.26414 4.08539 5.58958 4.41082L10.0003 8.82158L14.4111 4.41082C14.7365 4.08539 15.2642 4.08539 15.5896 4.41082C15.915 4.73626 15.915 5.2639 15.5896 5.58934L11.1788 10.0001L15.5896 14.4108C15.915 14.7362 15.915 15.2639 15.5896 15.5893C15.2642 15.9147 14.7365 15.9147 14.4111 15.5893L10.0003 11.1786L5.58958 15.5893C5.26414 15.9147 4.73651 15.9147 4.41107 15.5893C4.08563 15.2639 4.08563 14.7362 4.41107 14.4108L8.82183 10.0001L4.41107 5.58934C4.08563 5.2639 4.08563 4.73626 4.41107 4.41082Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
          </span>
          <button
            type={'button'}
            className={styles.profileExit}
            onClick={exitFromAccount}
          >
            выйти
          </button>
        </div>
        <form
          onSubmit={submitData}
          noValidate
          className={styles.profileDataDown}
        >
          <div className={styles.profileDataDownBlock}>
            <h3>Город</h3>
            <CitySelect />
          </div>
          <div className={styles.profileDataDownBlock}>
            <h3>Логин</h3>
            <div className={styles.errorBlock}>
              <p className={styles.error}>{errors.loginError}</p>
              <input
                className={`${styles.profileInput} ${errors.loginError ? styles.profileInputError : ''}`}
                value={newData.login}
                disabled={isDisabled}
                name={'login'}
                onChange={handleChange}
                type={'text'}
                minLength={3}
                maxLength={20}
                placeholder={'Логин'}
                ref={loginRef}
              />
            </div>
          </div>
          <div className={styles.profileDataDownBlock}>
            <h3>Почта</h3>
            <div className={styles.errorBlock}>
              <p className={styles.error}>{errors.emailError}</p>
              <input
                className={`${styles.profileInput} ${errors.emailError ? styles.profileInputError : ''}`}
                disabled={isDisabled}
                value={newData.email}
                name={'email'}
                onChange={handleChange}
                minLength={10}
                maxLength={50}
                placeholder={'Почта'}
                type={'email'}
                ref={emailRef}
              />
            </div>
          </div>
          {!isDisabled && (
            <SubmitButton
              type={'submit'}
              disabled={
                isLoading ||
                (profileData.email === newData.email &&
                  profileData.login === newData.login)
              }
            >
              {isLoading ? 'Сохранение...' : 'Сохранить'}
            </SubmitButton>
          )}
        </form>
      </div>
      <AnimatePresence>
        {isOpenModal && (
          <ModalText
            setIsOpenModal={setIsOpenModal}
            text={'Данные сохранены!'}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ProfileData
