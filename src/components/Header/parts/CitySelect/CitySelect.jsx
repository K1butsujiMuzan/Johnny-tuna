import location from "@assets/icons/Header/Location.svg"
import arrow from "@assets/icons/Header/Arrow.svg"
import styles from "./CitySelect.module.css"
import {useEffect, useState} from "react";

function CitySelect({isMobile}) {
  useEffect(() => {
    if(!localStorage.getItem("City")) {
      localStorage.setItem("City", "Калининград")
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Калининград")

  const cities = [
    { value: "kaliningrad", label: "Калининград" },
    { value: "krasnodar", label: "Краснодар" },
    { value: "moscow", label: "Москва" },
    { value: "saint-petersburg", label: "Санкт-Петербург" },
  ]

  return(
    <div className={styles.wrapper}>
      <div
        tabIndex={0}
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