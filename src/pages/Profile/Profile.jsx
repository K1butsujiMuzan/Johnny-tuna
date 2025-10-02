import useHead from '@/hooks/useHead'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import ProfileData from '@/pages/Profile/ProfileData/ProfileData'

function Profile() {
  useHead({
    title: 'Джонни Тунец | Профиль',
    description: 'Страница с информацией о вашем профиле',
    keywords: 'профиль, информация, история заказов',
  })
  return (
    <section className={'container pageContainer'}>
      <TextBlock>
        <h1 className={'pageTitle'}>Профиль — «Джонни Тунец»</h1>
      </TextBlock>
      <ProfileData />
    </section>
  )
}

export default Profile
