import arrow from "@assets/icons/Header/Arrow.svg"
import styles from "./CitySelect.module.css"
import {useCallback, useEffect, useState} from "react";

function CitySelect({isMobile}) {
  useEffect(() => {
    if (!localStorage.getItem("City")) {
      localStorage.setItem("City", "Калининград")
    }
  }, []);

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

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem("City") || "Калининград")

  const cities = [
    {value: "kaliningrad", label: "Калининград"},
    {value: "krasnodar", label: "Краснодар"},
    {value: "moscow", label: "Москва"},
    {value: "saint-petersburg", label: "Санкт-Петербург"},
  ]

  return (
    <div className={styles.wrapper}>
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
          />
        )}
        {isMobile && !isOpen && (
          <p className={styles.selectChangeText}>Изменить</p>
        )}

      </div>
      {isOpen && (
        <div
          role={"list"}
          className={`
            ${styles.selectList} 
            ${isMobile ? styles.selectListMobile : ""}
          `}
        >
          {cities.map((city) => (
            <div
              role={"option"}
              key={city.value}
              className={styles.selectOption}
              onClick={() => citySelectEnter(city)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  citySelectEnter(city)
                }
              }}
              tabIndex={0}
            >
              {city.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CitySelect