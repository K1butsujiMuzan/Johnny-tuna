import styles from './Slider.module.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { sliderImages } from '@/pages/Main/Slider/Slider.data'
import { AnimatePresence, motion } from 'framer-motion'
import { sliderVariables } from '@/constants/variantsAnimation.data'
import SliderIndicator from '@/pages/Main/Slider/SliderIndicator'
import SliderArrow from '@/pages/Main/Slider/SliderArrow'

function Slider() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(1)
  const currentImageRef = useRef(0)
  const indicatorButtonsRef = useRef([])
  const intervalRef = useRef(null)

  const startSlideInterval = useCallback(() => {
    clearSlideInterval()
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentImage(prevImage => {
        const newIndex =
          prevImage === sliderImages.length - 1 ? 0 : prevImage + 1
        currentImageRef.current = newIndex
        return newIndex
      })
    }, 5000)
  }, [currentImage])

  const clearSlideInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const moveForward = useCallback(() => {
    setCurrentImage(prevImage => {
      const newIndex = prevImage === sliderImages.length - 1 ? 0 : prevImage + 1
      currentImageRef.current = newIndex
      return newIndex
    })
    setDirection(1)
    startSlideInterval()
  }, [currentImage])

  const moveBack = useCallback(() => {
    setCurrentImage(prevState => {
      const newIndex = prevState === 0 ? sliderImages.length - 1 : prevState - 1
      currentImageRef.current = newIndex
      return newIndex
    })
    setDirection(-1)
    startSlideInterval()
  }, [currentImage])

  const onIndicatorClick = useCallback(
    index => {
      currentImageRef.current = index
      setCurrentImage(index)
      setDirection(currentImage > index ? -1 : 1)
      startSlideInterval()
    },
    [currentImage],
  )

  const keyCheck = useCallback(
    event => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        const newIndex =
          currentImageRef.current === sliderImages.length - 1
            ? 0
            : currentImageRef.current + 1
        setCurrentImage(newIndex)
        currentImageRef.current = newIndex
        indicatorButtonsRef.current[newIndex]?.focus()
        setDirection(1)
        startSlideInterval()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        const newIndex =
          currentImageRef.current === 0
            ? sliderImages.length - 1
            : currentImageRef.current - 1
        setCurrentImage(newIndex)
        currentImageRef.current = newIndex
        indicatorButtonsRef.current[newIndex]?.focus()
        setDirection(-1)
        startSlideInterval()
      }
    },
    [startSlideInterval],
  )

  useEffect(() => {
    startSlideInterval()

    return () => clearSlideInterval()
  }, [])

  return (
    <section>
      <div
        className={styles.sliderInner}
        role={'region'}
        aria-label={'Слайдер с акциями пиццерии.'}
        aria-roledescription={'carousel'}
      >
        <SliderArrow isLeft={true} onClick={moveBack} />

        <div className={styles.containerForPicture}>
          <AnimatePresence mode={'wait'} custom={direction}>
            <motion.picture
              custom={direction}
              key={sliderImages[currentImage].src}
              variants={sliderVariables}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {sliderImages[currentImage].sources.map((source, index) => (
                <source key={index} srcSet={source.srcSet} type={source.type} />
              ))}
              <motion.img
                loading={currentImage === 0 ? 'eager' : 'lazy'}
                className={styles.sliderImage}
                src={sliderImages[currentImage].src}
                alt={sliderImages[currentImage].alt}
                height={400}
                width={1480}
              />
            </motion.picture>
          </AnimatePresence>
        </div>

        <SliderArrow onClick={moveForward} />
      </div>
      <div className={styles.sliderCircles} onKeyDown={keyCheck}>
        {sliderImages.map((image, index) => (
          <SliderIndicator
            isActive={index === currentImage}
            onClick={() => onIndicatorClick(index)}
            key={sliderImages[index].src}
            imageAlt={sliderImages[index].alt}
            ref={button => {
              indicatorButtonsRef.current[index] = button

              return () => {
                indicatorButtonsRef.current[index] = null
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider
