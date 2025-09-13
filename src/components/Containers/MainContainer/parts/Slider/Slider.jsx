import styles from "./Slider.module.css"
import {useEffect, useRef, useState} from "react";
import {images} from "@/constants/Data/sliderImages";
import {AnimatePresence, motion} from "framer-motion";

function Slider() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(1)

  const sliderVariables = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  }

  const intervalRef = useRef(null)

  const startSlideInterval = () => {
    clearSlideInterval()
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentImage(prevImage => (
        prevImage === images.length - 1 ? 0 : prevImage + 1
      ))
    }, 5000)
  }

  const clearSlideInterval = () => {
    if(intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const moveForward = () => {
    setCurrentImage(prevImage => (
      prevImage === images.length - 1 ? 0 : prevImage + 1
    ))
    setDirection(1)
    startSlideInterval()
  }

  const moveBack = () => {
    setCurrentImage(prevState => (
      prevState === 0 ? images.length - 1 : prevState - 1
    ))
    setDirection(-1)
    startSlideInterval()
  }

  useEffect(() => {
    startSlideInterval()

    return () => clearSlideInterval()
  }, []);

  return(
    <>
      <div
        className={styles.sliderInner}
        role={"region"}
        aria-label={"Слайдер с акциями пиццерии."}
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

        <div className={styles.containerForPicture}>
          <AnimatePresence mode={"wait"} custom={direction}>
            <motion.picture
              custom={direction}
              key={images[currentImage].src}
              variants={sliderVariables}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{duration: 0.3}}
            >
              {images[currentImage].sources.map((source, index) => (
                <source
                  key={index}
                  srcSet={source.srcSet}
                  type={source.type}
                />
              ))}
              <motion.img
                loading={currentImage === 0 ? "eager" : "lazy"}
                className={styles.sliderImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                height={400}
                width={1480}
              />
            </motion.picture>
          </AnimatePresence>
        </div>

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
            aria-label={`Перейти к слайду: ${images[index].alt}`}
            aria-current={index === currentImage ? true : undefined}
            key={images[index].src}
            onClick={() => {
              setCurrentImage(index)
              setDirection((currentImage > index ? -1 : 1))
              startSlideInterval()
            }}
            className={`${styles.sliderCircle} ${index === currentImage ? styles.sliderCircleActive : ""}`}
          ></button>
        ))}
      </div>
    </>
  )
}

export default Slider