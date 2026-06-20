import styles from './About.module.css'

function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Gioi thieu</h1>
        <p className={styles.text}>
          Day la trang vi du minh hoa cach to chuc page rieng trong thu muc
          src/pages. Moi page co the chua component, style va logic rieng cua
          no.
        </p>
      </div>
    </section>
  )
}

export default About
