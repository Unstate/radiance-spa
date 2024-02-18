import { FC } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

export type TLogo = {
  classNameForWrapper?:string,
  classNameForImage?:string,
}

const Logo:FC<TLogo> =  ({ classNameForImage,classNameForWrapper}) => {
  return (
    <div className={clsx(styles.wrapper, classNameForWrapper)}>
      <img className={clsx(styles.image, classNameForImage)} src='/logo/logo.svg'/>
    </div>
  )
}

export default Logo