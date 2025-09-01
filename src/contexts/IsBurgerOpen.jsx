import {createContext, useContext, useState} from "react";

const BurgerContext = createContext(undefined)

export const IsBurgerOpen = ({children}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  return(
    <BurgerContext.Provider value={{isBurgerOpen, setIsBurgerOpen}}>
      {children}
    </BurgerContext.Provider>
  )
}

export const useBurger = () => {
  const context = useContext(BurgerContext)
  if(!context) {
    throw new Error("Context didn't found")
  }
  return context
}