import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.infoContainer}>
        <img src="/images/myPhoto.jpg" alt="Фотография" className={styles.image} />
        <div className={styles.description}>
          <h1 className={styles.title}>Пророкова Иулия</h1>
          <p className={styles.subtitle}>frontend-developer</p>
          <p className={styles.subtitle}>Moscow</p>
        </div>
      </div>
  );
}

export default Info;