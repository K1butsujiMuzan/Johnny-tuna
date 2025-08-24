import {useEffect, useState} from "react";

function useVisible(delay = 50) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay]);

  return isVisible
}

export default useVisible