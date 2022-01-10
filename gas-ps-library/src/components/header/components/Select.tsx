import React, { FC } from 'react'
import styles from './select.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSelectState } from './hooks/useSelectState'

export interface SelectOption {
  label: string;
  value: string | number
}

interface SelectProps {
  options: SelectOption[]
}


const Select: FC<SelectProps> = ({ options }) => {
  const {
    openSelect,
    selectRef,
    onInputFocus,
    onInputChange,
    input,
    inputRef,
    filteredOptions
  } = useSelectState(options)

  return (
    <div className={styles.selectWrapper}>
      <p className={styles.search}>Поиск</p>
      <div className={styles.inputWrapper}>
        <input type='text' value={input} onChange={onInputChange} onFocus={onInputFocus} ref={inputRef}/>
        <FontAwesomeIcon icon={faChevronDown} className={styles.icon}/>
        {openSelect &&
          <div className={styles.optionsWrapper} ref={selectRef}>
            {filteredOptions.map(option => (
              <NavLink className={styles.option} to={`/article/${option.value}`}>
                {option.label}
              </NavLink>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Select