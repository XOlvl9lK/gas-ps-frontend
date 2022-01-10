import React, { useEffect, useState } from 'react'

export function useDebounce<T>(
  initialValue: T,
  delay: number
): [T, T, React.Dispatch<T>] {
  const [value, setValue] = useState<T>(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value)
    })

    return () => clearTimeout(debounce)
  }, [value, delay])

  return [debouncedValue, value, setValue]
}