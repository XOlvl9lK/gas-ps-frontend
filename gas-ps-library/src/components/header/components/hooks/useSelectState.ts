import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SelectOption } from '../Select'
import { useDebounce } from '../../../../common/hooks/useDebounce'

export const useSelectState = (options: SelectOption[]) => {
  const selectRef = useRef(null)
  const inputRef = useRef(null)
  const [openSelect, setOpenSelect] = useState(false)
  const [debouncedInput, input, setInput] = useDebounce('', 2000)

  const onClickOutside = useCallback((e: any) => {
    //@ts-ignore
    selectRef.current && !selectRef.current?.contains(e.target)
    //@ts-ignore
    && inputRef.current && !inputRef.current.contains(e.target) && setOpenSelect(false)
  }, [selectRef])

  useEffect(() => {
    document.addEventListener('click', onClickOutside)

  }, [])

  const onInputFocus = useCallback(() => {
    setOpenSelect(true)
  }, [])

  const onSelect = useCallback((value: string | number) => {
    setInput(`${value}`)
  }, [])

  const onInputChange = useCallback((e) => {
    setInput(e.target.value)
  }, [])

  const filteredOptions = useMemo(() => {
    const regexp = new RegExp(debouncedInput, 'i')
    return options.filter(option => option.label.match(regexp))
  }, [debouncedInput, options])

  return {
    selectRef,
    onInputFocus,
    openSelect,
    onInputChange,
    input,
    onSelect,
    inputRef,
    filteredOptions
  }
}
