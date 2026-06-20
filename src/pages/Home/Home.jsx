import Button from '@components/common/Button/Button'
import { APP_NAME } from '@constants'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>React + Vite Boilerplate</span>
        <h1 className={styles.title}>{APP_NAME}</h1>
        <p className={styles.subtitle}>
          Cau truc thu muc chuan cho du an Frontend React: components, pages,
          hooks, services, routes, store va styles duoc to chuc ro rang, san
          sang mo rong cho du an thuc te.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            Bat dau
          </Button>
          <Button variant="ghost" size="lg">
            Xem tai lieu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
