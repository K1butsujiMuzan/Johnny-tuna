import styles from './Verification.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken } from '@/services/verification'
import Logo from '@components/ui/Logo/Logo'
import { authProfile } from '@/store/useProfileToken'
import Cookies from 'js-cookie'
import useHead from '@/hooks/useHead'

function Verification() {
  useHead({
    title: 'Джонни Тунец | Подтверждение аккаунта',
    description: 'Подтверждение аккаунта через почту',
    keywords: 'аккаунт, подтверждение, почта',
  })

  const { token } = useParams()
  const [isVerify, setIsVerify] = useState('Что-то пошло не так :(')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToken(token)

        if (data.result) {
          setIsVerify('Аккаунт подтверждён!')
          Cookies.set('auth', data.result, {
            expires: 30,
            path: '/',
            secure: true,
            sameSite: 'strict',
          })
          await authProfile()
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className={styles.verifyPage}>
      <Logo />
      <h1>{isVerify}</h1>
    </section>
  )
}

export default Verification
