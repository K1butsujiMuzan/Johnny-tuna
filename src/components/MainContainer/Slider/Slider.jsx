import styles from "./Slider.module.css"
import slide1 from "@/assets/images/Slider/SliderImage1.png"
import slide2 from "@/assets/images/Slider/SliderImage2.png"
import slide3 from "@/assets/images/Slider/SliderImage3.png"
import {useEffect, useState} from "react";

function Slider() {
  const images = [
    slide1,
    slide2,
    slide3
  ]

  const alts = [
    "Пицца в подарок по промокоду LETO25",
    "Закажи в пиццерии две пиццы - третью получи бесплатно",
    "День пиццы: только в пятницу каждая третья пицца бесплатно"
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const moveForward = () => {
    setCurrentImage(prevImage => (
      prevImage === images.length - 1 ? 0 : prevImage + 1
    ))
  }

  const moveBack = () => {
    setCurrentImage(prevState => (
      prevState === 0 ? images.length - 1 : prevState - 1
    ))
  }

  useEffect(() => {
    const changeImage = setInterval(() => {
      moveForward()
    }, 5000)

    return () => clearInterval(changeImage)
  }, [moveForward]);

  useEffect(() => {
  }, [currentImage]);

  return(
    <>
      <div
        className={styles.sliderInner}
        role={"region"}
        aria-label={"Слайдер с акциями пиццерии"}
        aria-roledescription={"carousel"}
      >
        <button
          className={`${styles.sliderArrowButton} ${styles.sliderArrowButtonLeft}`}
          type={"button"}
          aria-label={"Назад"}
          onClick={moveBack}
        >
          <svg
            aria-hidden={true}
            className={styles.sliderArrow}
            width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16.5L1 9L8 1.5" stroke="#35ADE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <img
          className={styles.sliderImage}
          src={images[currentImage]}
          alt={alts[currentImage]}
          height={400}
          width={1480}
        />

        <button
          className={`${styles.sliderArrowButton} ${styles.sliderArrowButtonRight}`}
          type={"button"}
          aria-label={"Вперёд"}
          onClick={moveForward}
        >
          <svg
            aria-hidden={true}
            className={styles.sliderArrow}
            width="9" height="18" viewBox="0 0 9 18" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1.5L8 9L1 16.5" stroke="#35ADE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className={styles.sliderCircles}>
        {images.map((image, index) => (
          <button
            type={"button"}
            aria-label={`Перейти к слайду: ${alts[index]}`}
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`${styles.sliderCircle} ${index === currentImage ? styles.sliderCircleActive : ""}`}
          ></button>
        ))}
      </div>
    </>
  )
}

export default Slider