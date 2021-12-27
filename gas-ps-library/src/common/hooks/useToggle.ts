import { SyntheticEvent, useCallback, useState } from 'react'

export const useToggle = (initialState: boolean): [boolean, (event: SyntheticEvent) => void] => {
  const [state, setState] = useState(initialState)

  const onToggle = useCallback((event: SyntheticEvent) => {
    setState(!state)
  }, [state])

  return [state, onToggle]
}