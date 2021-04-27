import styles from './project.module.css';
import { animated } from 'react-spring';

function Project({ id, name, description, image, props, viewId }) {

  return (
    <animated.div
      className={styles.container}
      style={{ position: 'relative', bottom: props[id].to(i => `${i.toFixed(2)}rem`), marginBottom: id === 'd' ? 0 : null }}
    >
      {/* <animated.div>{props[id].to(i => `${i.toFixed(2)}` )}</animated.div> */}

      <div style={{ background: image }} className={styles.image}>
        {name}
      </div>
      <div className={styles.text}>
        <h1>{name}</h1>
        {
          description.map((t, idx) => (
            <p key={idx}>{t}</p>
          ))
        }
      </div>
    </ animated.div>
  )
}

export default Project;