import styles from './link.module.css';


function LinkItem() {
  return (
    <div className={styles.links}>
      <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-dribbble"></i></div>
      <div className={styles.link}><div className={styles.linkBg} /><i className="far fa-envelope"></i></div>
      <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-linkedin-in"></i></div>
      <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-instagram"></i></div>
    </div>
  )
}

export default LinkItem;