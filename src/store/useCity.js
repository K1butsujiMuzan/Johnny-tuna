import {create} from "zustand";

export const useCity = create((set) => ({
  cityValue: localStorage.getItem("City") || "Калининград",
  setCity: (newCity) => {
    set({cityValue: newCity})
    localStorage.setItem("City", newCity)
  }
}))