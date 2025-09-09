import styles from "./DeliveryContainer.module.css"
import PageLink from "@components/UI/PageLink/PageLink";
import TextBlock from "@components/UI/TextBlock/TextBlock";

function DeliveryContainer() {
  return(
    <section className={"container pageContainer"}>
      <PageLink to={"/delivery"} text={"Доставка"}/>
      <TextBlock>
        <h1 className={"pageTitle"}>Доставка — «Джонни Тунец»</h1>
      </TextBlock>
    </section>
  )
}

export default DeliveryContainer