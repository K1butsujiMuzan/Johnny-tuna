import styles from "./MainContainer.module.css"
import Slider from "@components/MainContainer/parts/Slider/Slider";

function MainContainer() {
  return(
    <div className={styles.mainContainer}>
      <div>
        <Slider/>
      </div>
      <div className={"container"}>

      </div>
    </div>
  )
}

export default MainContainer