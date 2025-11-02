import { useMemo } from 'react'

function useConvertDescription(description) {
  return useMemo(() => {
    if (description.length >= 60) {
      return `${description.slice(0, 60)}...`
    } else {
      return description
    }
  }, [description])
}

export default useConvertDescription
