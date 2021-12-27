import React, { FC } from 'react'
import styles from './button.module.scss'

type ButtonThemes = 'primary' | 'danger' | 'accept' | 'primaryOutlined' | 'dangerOutlined' | 'acceptOutlined'

interface ButtonProps {
  theme: ButtonThemes,
  onClick?: (...args: any[]) => void,
  label: string,
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  theme,
  label,
  onClick,
  disabled = false
}) => {
  return (
    <button disabled={disabled} className={styles[`${theme}Button`]} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button