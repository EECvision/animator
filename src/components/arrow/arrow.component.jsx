import { Link } from 'react-router-dom';
import styles from './arrow.module.css';

function Arrow() {
  return (
    <div>
      <Link to="/work" className={styles.leftTriangleContainer}>
        <div className={styles.triangle_Left}>
          <div className={styles.triangleLeft} />
        </div>
        <div className={styles.triangleLeft} />
        <div className={styles.barLeft} />
      </Link>

      <Link to="/playground" className={styles.rightTriangleContainer}>
        <div className={styles.triangle_Right}>
          <div className={styles.triangleRight} />
        </div>
        <div className={styles.triangleRight} />
        <div className={styles.barRight} />
      </Link>
    </div>
  )
}

export default Arrow;