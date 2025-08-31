import PageLink from "@components/UI/PageLink/PageLink";
import styles from "./InformationContainer.module.css"
import TextBlock from "@components/UI/TextBlock/TextBlock";
import {informationText} from "@components/InformationContainer/informationText";

function InformationContainer() {
  return(
    <section className={`${styles.informationContainer} container`}>
      <PageLink to={"/information"} text={"Правовая информация"}/>
      <TextBlock>
        <h1 className={"pageTitle"}>Правовая информация - «Джонни Тунец»</h1>
      </TextBlock>
      <div className={styles.textBlock}>
        {informationText.map((text, index) => (
          <p
            key={index}
            className={styles.text}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default InformationContainer