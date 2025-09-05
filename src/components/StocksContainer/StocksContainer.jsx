import styles from "./StocksContainer.module.css"
import PageLink from "@components/UI/PageLink/PageLink";

function StocksContainer() {
  return(
    <section className={"container pageContainer"}>
      <PageLink to={"/stocks"} text={"Акции"}/>
    </section>
  )
}

export default StocksContainer