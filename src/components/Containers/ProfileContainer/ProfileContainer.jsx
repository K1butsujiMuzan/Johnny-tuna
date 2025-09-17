import styles from "./ProfileContainer.module.css"
import TextBlock from "@components/UI/TextBlock/TextBlock";
import ProfileData
  from "@components/Containers/ProfileContainer/parts/ProfileData/ProfileData";

function ProfileContainer() {
  return(
    <section className={"container pageContainer"}>
      <TextBlock>
        <h1 className={"pageTitle"}>Профиль — «Джонни Тунец»</h1>
      </TextBlock>
      <ProfileData/>
    </section>
  )
}

export default ProfileContainer