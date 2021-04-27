import {useState} from 'react';
import styles from './dark-mode.module.css';
import { animated, useSpring } from 'react-spring';

const waves = Array(50).fill(null)

function DarkMode() {

  const [flip, setFlip] = useState(false);

  const { scroll, n } = useSpring({
    scroll: (waves.length -1 ) * 40,
    n: 0.4,
    from: {scroll: 0, n: 1},
    reset: true,
    reverse: flip,
    config: {duration: 2500 },
    onRest: ()=>setFlip(!flip)
  })

  return (
    <animated.div 
      style={{  opacity: n.to(n => n.toFixed(2)) }} 
      scrollLeft={scroll} 
      className={styles.waveContainer}
    >
      {
        waves.map((wave, idx)=>(
          <div key={idx} className={styles.wave}/>
        ))
      }
    </animated.div>
  )
}

export default DarkMode;