import { FC } from 'react'
import Button from '../../../shared/button'
import Logo from '../../../shared/logo'
import NavList from '../../../shared/nav-list'
import styles from './styles.module.css'
import clsx from 'clsx'

export type THeader = {
  className?:string,
}

const Header:FC<THeader> = ({className}) => {
  return (
    <header className={clsx(styles.wrapper,className)}>
      <Logo classNameForWrapper={styles.imageWrapper} />
      <NavList />
      <Button>Оставить заявку</Button>
    </header>
  )
}

export default Header