import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken } from '@/services/verification'
import { setCookie } from '@/scripts/Functions/setCookie'
import { useProfileToken } from '@/store/useProfileToken'
import Logo from '@components/UI/Logo/Logo'

function Verification() {
  const [isVerify, setIsVerify] = useState('Аккаунт не подтверждён :(')
  const { auth } = useProfileToken()
  const { token } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToken(token)

        if (data.result) {
          setIsVerify('Аккаунт подтверждён!')
          setCookie('auth', data.result, 30)
          await auth()
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className={'verifyPage'}>
      <Logo />
      <h1>{isVerify}</h1>
    </section>
  )
}

export default Verification
