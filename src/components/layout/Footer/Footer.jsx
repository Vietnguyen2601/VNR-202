import { APP_NAME } from '@constants'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {year} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
