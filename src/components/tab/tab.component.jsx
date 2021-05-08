import { Link } from 'react-router-dom';
import styles from './tab.module.css';

function Tab() {
  return (
    <div className={styles.tabContainer}>
      <Link to="/work">
          <div className={styles.text}>Check Out My Work</div>
      </Link>

        <div className={styles.text}>Download Resume</div>

      <Link to="/playground">
          <div className={styles.text}>Have some fun!</div>
      </Link>
    </div>
  )
}

export default Tab