import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.section}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Khong tim thay trang ban yeu cau.</p>
      <Link to="/" className={styles.link}>
        Quay ve trang chu
      </Link>
    </section>
  )
}

export default NotFound
