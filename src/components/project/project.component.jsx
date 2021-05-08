import styles from './project.module.css';
import { animated } from 'react-spring';

function Project({ id, name, description, image, props, viewId }) {

  return (
    <animated.div
      className={styles.container}
      style={{ position: 'relative', bottom: props[id].to(i => `${i.toFixed(2)}rem`), marginBottom: id === 'd' ? 0 : null }}
    >
      <div style={{ background: image }} className={styles.image}>{name}</div>
      <div className={styles.text}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </ animated.div>
  )
}

export default Project;