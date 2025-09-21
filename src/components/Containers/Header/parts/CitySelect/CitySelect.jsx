import arrow from "@assets/icons/Header/Arrow.svg"
import styles from "./CitySelect.module.css"
import {useCallback, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {useCity} from "@/store/useCity";
import {cityVariants, cityContainerVariants} from "@/constants/Data/variantsAnimation";
import {cities} from "@/constants/Data/cities";

function CitySelect({isMobile}) {
  const {cityValue, setCity} = useCity()
  const [isOpen, setIsOpen] = useState(false)
  const cityBlock = useRef(null)

  useEffect(() => {
    if(!isOpen) {
      return
    }
    const closeCity = (event) => {
      if(cityBlock.current && !cityBlock.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener("click", closeCity)
    return () => window.removeEventListener("click", closeCity)
  }, [isOpen])

  const cityEnter = useCallback((event) => {
    if (event.key === "Enter") {
      setIsOpen(prev => !prev)
    }
  }, [])

  const citySelectEnter = useCallback((city) => {
    setCity(city.label)
    setIsOpen(false)
  }, [setCity])

  return (
    <div className={styles.wrapper} ref={cityBlock}>
      <div
        aria-expanded={isOpen}
        role={"combobox"}
        tabIndex={0}
        className={`${styles.selectTrigger} ${isMobile ? styles.selectTriggerMobile : ""}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={"Выбрать город"}
        onKeyDown={(event) => cityEnter(event)}
      >
        <span className={styles.selectValue}>{cityValue}</span>
        {!isMobile && (
          <img
            className={`${styles.selectArrow} ${isOpen ? styles.selectArrowRotate : ""}`}
            src={arrow}
            alt={"location"}
            aria-hidden={true}
          />
        )}
        {isMobile && !isOpen && (
          <p className={styles.selectChangeText}>Изменить</p>
        )}

      </div>
        {isOpen && (
          <motion.div
            role={"list"}
            className={styles.selectList}
            variants={cityContainerVariants}
            initial={"enter"}
            animate={"center"}
          >
            {cities.map((city) => (
              <motion.div
                role={"option"}
                key={city.value}
                className={styles.selectOption}
                onClick={() => citySelectEnter(city)}
                variants={cityVariants}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    citySelectEnter(city)
                  }
                }}
                tabIndex={0}
              >
                {city.label}
              </motion.div>
            ))}
          </motion.div>
        )}
    </div>
  )
}

export default CitySelect