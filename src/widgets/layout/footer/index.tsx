import Button from '../../../shared/button'
import Logo from '../../../shared/logo'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <div>
            <Logo classNameForWrapper={styles.imageWrapper} />
            <p>2016–2022 © СПА-салон «Сияние»</p>
          </div>
          <div>
            {
            /* TODO 2 equal components for footer links and
                usefull information
            */
            }
          </div>
        </div>
        <div>
            <Button>
              Scroll up
            </Button>
            <p>
              Политика конфиденциальности
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer