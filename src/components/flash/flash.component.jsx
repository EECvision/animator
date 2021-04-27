import { animated, useSpring } from 'react-spring';
import styles from "./flash.module.css";

function Flash() {

  const props = useSpring({
    to: {
      width: '0',
      height: '0',
      borderRadius: '50%',
      n: 0
    },
    from: {
      width: '3000px',
      height: '3000px',
      background: 'rgb(247, 247, 159)',
      borderRadius: '50%',
      n: 10
    },
    delay: 1500,
    config: { duration: 700 }
  })

  return (
    <animated.div style ={{ zIndex: props.n.to(n=>parseInt(n)) }} className={styles.container}>
      <animated.div style={{ position: 'fixed', ...props }} />
    </animated.div>
  )
}

export default Flash;