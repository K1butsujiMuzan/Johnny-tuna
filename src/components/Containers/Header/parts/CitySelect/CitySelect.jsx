import arrow from "@assets/icons/Header/Arrow.svg"
import styles from "./CitySelect.module.css"
import {useCallback, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

function CitySelect({isMobile}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem("City") || "Калининград")
  const cityBlock = useRef(null)

  useEffect(() => {
    if (!localStorage.getItem("City")) {
      localStorage.setItem("City", "Калининград")
    }
  }, []);

  useEffect(() => {
    const closeCity = (event) => {
      if(isOpen && cityBlock.current && !cityBlock.current.contains(event.target)) {
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
    setSelectedCity(city.label)
    setIsOpen(false)
    localStorage.setItem("City", city.label)
  }, [])

  const cities = [
    {value: "kaliningrad", label: "Калининград"},
    {value: "krasnodar", label: "Краснодар"},
    {value: "moscow", label: "Москва"},
    {value: "saint-petersburg", label: "Санкт-Петербург"},
  ]

  const cityContainerVariants = {
    enter: {
      opacity: 0,
      y: -10
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        duration: 0.2
      }
    }
  }

  const cityVariants = {
    enter: {opacity: 0},
    center: {opacity: 1}
  }

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
        <span className={styles.selectValue}>{selectedCity}</span>
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
            className={`
            ${styles.selectList} 
            ${isMobile ? styles.selectListMobile : ""}
          `}
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