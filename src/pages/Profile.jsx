import ProfileContainer from '@components/Containers/ProfileContainer/ProfileContainer'
import useHead from '@/hooks/useHead'

function Profile() {
  useHead({
    title: 'Джонни Тунец | Профиль',
    description: 'Страница с информацией о вашем профиле',
    keywords: 'профиль, информация, история заказов',
  })
  return (
    <>
      <ProfileContainer />
    </>
  )
}

export default Profile
