import location from "@assets/icons/Header/Location.svg"
import arrow from "@assets/icons/Header/Arrow.svg"
import styles from "./CitySelect.module.css"
import { useState } from "react";

function CitySelect({isMobile}) {
  const cityFromStorage = localStorage.getItem("City")

  function setCityInStorage() {
    if(cityFromStorage) {
      return
    }
    localStorage.setItem("City", "Калининград")
  }

  setCityInStorage()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState(cityFromStorage)

  const cities = [
    { value: "kaliningrad", label: "Калининград" },
    { value: "krasnodar", label: "Краснодар" },
    { value: "moscow", label: "Москва" },
    { value: "saint-petersburg", label: "Санкт-Петербург" },
  ]

  return(
    <div className={styles.wrapper}>
      <div
        className={`${styles.selectTrigger} ${isMobile ? styles.selectTriggerMobile : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={"Открыть список городов"}
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
        <div className={`${styles.selectList} ${isMobile ? styles.selectListMobile : ""}`}>
          {cities.map((city) => (
            <div
              key={city.value}
              className={styles.selectOption}
              onClick={() => {
                setSelectedCity(city.label)
                setIsOpen(false)
                localStorage.setItem("City", city.label)
              }}
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