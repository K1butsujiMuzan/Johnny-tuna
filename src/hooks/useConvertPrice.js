import { useMemo } from 'react'

function useConvertPrice(price) {
  return useMemo(() => {
    const firstPart = Math.floor(price / 1000)
    const lastPart = price % 1000
    if (firstPart > 0) {
      return `${firstPart} ${lastPart.toString().padStart(3, '0')} ₽`
    } else {
      return `${lastPart} ₽`
    }
  }, [price])
}

export default useConvertPrice
