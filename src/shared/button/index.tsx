import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string,
  children: ReactNode,
}


const Button:FC<TButton> = ({children, className}) => {
  return (
    <button className={clsx(styles.customButton,className)}>
      {children}
    </button>
  )
}

export default Button