import styles from './ProfileContainer.module.css'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import ProfileData from '@components/features/ProfileContainer/parts/ProfileData/ProfileData'

function ProfileContainer() {
  return (
    <section className={'container pageContainer'}>
      <TextBlock>
        <h1 className={'pageTitle'}>Профиль — «Джонни Тунец»</h1>
      </TextBlock>
      <ProfileData />
    </section>
  )
}

export default ProfileContainer
