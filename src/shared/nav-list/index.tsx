import { HEADER_DATA, THEADER_DATA } from '../../app/constants/header-data'
import styles from './styles.module.css'

const NavList = () => {
  return (
    <nav className={styles.navContainer}>
        <ul className={styles.linksContainer}>
          {HEADER_DATA.map((headerElement: THEADER_DATA) => 
          <li className={styles.linkContainer}>
            <a className={styles.link} href={headerElement.url}>
              {headerElement.title}
            </a>
          </li>)}
        </ul>
      </nav>
  )
}

export default NavList