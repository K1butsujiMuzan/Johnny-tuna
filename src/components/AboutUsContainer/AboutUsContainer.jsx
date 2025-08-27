import styles from "./AboutUsContainer.module.css"
import FoodAboutCard from "@components/AboutUsContainer/parts/FoodAboutCard/FoodAboutCard";

import sushi from "@/assets/images/AboutUs/Cards/Sushi.svg"
import pizza from "@/assets/images/AboutUs/Cards/Pizza.svg"
import noodles from "@/assets/images/AboutUs/Cards/Noodles.svg"
import salad from "@/assets/images/AboutUs/Cards/Salad.svg"
import iceCream from "@/assets/images/AboutUs/Cards/IceCream.svg"
import cola from "@/assets/images/AboutUs/Cards/Cola.svg"

import rollsImage from "@/assets/images/AboutUs/Galery/1.png"
import drinkImage from "@/assets/images/AboutUs/Galery/2.png"
import pizzaImage from "@/assets/images/AboutUs/Galery/3.png"
import noodlesImage from "@/assets/images/AboutUs/Galery/4.png"
import dessertImage from "@/assets/images/AboutUs/Galery/5.png"
import sushiImage from "@/assets/images/AboutUs/Galery/6.png"

function AboutUsContainer() {
  const cards = [
    {
      text: "Роллы и суши из лучших ингредиентов",
      image: sushi,
    },
    {
      text: "Ароматные пиццы с хрустящей корочкой",
      image: pizza,
    },
    {
      text: "Сытные воки с яркими азиатскими соусами",
      image: noodles,
    },
    {
      text: "Лёгкие салаты и закуски для компании",
      image: salad,
    },
    {
      text: "Нежные и изысканные десерты",
      image: iceCream,
    },
    {
      text: "Освежающие и согревающие напитки",
      image: cola,
    }
  ]

  return(
    <div className={`${styles.AboutUsInner} container`}>
      <div className={styles.textCard}>
        <h1 className={styles.AboutTitle}>О нас — «Джонни Тунец»</h1>
        <p className={styles.AboutParagraph}>Добро пожаловать в «Джонни Тунец» — кафе, где встречаются вкус, уют и дружеская атмосфера.</p>
      </div>
      <div className={styles.textCard}>
        <p className={`${styles.AboutParagraph} ${styles.AboutParagraphBlack}`}>Мы верим, что еда должна приносить радость, поэтому собрали в одном меню любимые блюда для любого настроения:</p>
      </div>
      <div className={styles.AboutGallery}>
        <ul className={styles.AboutGalleryCards}>
          {cards.map((card, index) => (
            <FoodAboutCard
              key={card.image}
              text={card.text}
              image={card.image}
            />
          ))}
        </ul>
        <div className={styles.AboutGalleryImages}>
          <div className={styles.galleryRow}>
            <img src={rollsImage}/>
            <img src={drinkImage}/>
          </div>
          <div className={styles.galleryRow}>
            <img src={pizzaImage}/>
            <img src={noodlesImage}/>
          </div>
          <div className={styles.galleryRow}>
            <img src={dessertImage}/>
            <img src={sushiImage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer