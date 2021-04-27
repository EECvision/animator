import styles from './light-mode.module.css';
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

function LightMode() {

  const [flip, setFlip] = useState(true);

  const { light } = useSpring({
    light: 1,
    from: { light: 0 },
    reset: false,
    reverse: flip,
    delay: 3000,
    onRest: () => setFlip(!flip),
    config: { duration: 5000 }
  })

  return (
    <animated.div
      style={{
        background: light.to([0, 1], [100, 200]).to(n => ` repeating-linear-gradient(
        30deg,
        white 100%,
        rgb(137, 188, 218) ${n.toFixed(2)}%,
        rgb(252, 246, 165) 200%
      )`)
      }}
      className={styles.container}
    />
  )
}


export default LightMode;