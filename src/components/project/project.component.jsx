import styles from './project.module.css';
import { animated, useSpring, config } from 'react-spring';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Project({ id, name, description, image, props, viewId, url }) {
  const [flip, setFlip] = useState(false);

  const { o } = useSpring({
    o: flip ? 1 : 0,
    config: config.mollases,
  });

  return (
    <Link to={`/${url}`}>
      <animated.div
        className={styles.container}
        style={{ position: 'relative', bottom: props[id].to(i => `${i.toFixed(2)}rem`), marginBottom: id === 'd' ? 0 : null }}
      >
        <div
          onMouseOver={() => { setFlip(true) }}
          onMouseLeave={() => { setFlip(false) }}
          className={styles.imageContainer}
        >
          <animated.div style={{ opacity: o.to([0, 1], [1, 0]).to(o => o.toFixed(2)), background: image }} className={styles.image}>{name}</animated.div>
          <animated.div style={{ opacity: o.to([0, 1], [0, 1]).to(o => o.toFixed(2)) }} className={styles.imageOverlay}>{description}</animated.div>
        </div>
        <div className={styles.text}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </ animated.div>
    </Link>
  )
}

export default Project;