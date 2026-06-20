import styles from './Loader.module.css'

function Loader({ label = 'Dang tai...' }) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default Loader
