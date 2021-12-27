import {useCallback, useState } from 'react'

export function useOnChange<T = any>(initialState: T): [T, (event: any) => void] {
  const [state, setState] = useState<T>(initialState)

  const onChange = useCallback((event) => {
    setState(event.target.value)
  }, [])

  return [state, onChange];
}