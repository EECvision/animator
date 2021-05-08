import React, { useState } from 'react';
import styles from './flashbar.module.css';
import { animated, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';

function FlashBar({ children }) {

  const [state, setState] = useState(false);

  const { justifyContent, n } = useSpring({
    to: async (next, cancel) => {
      await next({ justifyContent: 'flex-start', n: 1 })
      await next({ justifyContent: 'flex-end', n: 0 })
    },
    from: { justifyContent: 'flex-start', n: 0 },
    config: { duration: 300 },
    reverse: state,
    reset: false,
    // onRest: ()=>setState(!state)
  });

  return (
    <animated.div onMouseOver={()=> setState(true)} onMouseLeave={()=> setState(false)} style={{ justifyContent }} className={styles.flashBar}>
      {children}
      <Waypoint bottomOffset="0%" topOffset="-30%" onEnter={() => setState(!state)} />
      <animated.div style={{
        width: n.to([0, 1], [0, 100]).to(n => `${n.toFixed(2)}%`),
        height: '1rem',
        position: 'absolute',
        background: 'rgb(240, 181, 55)'
      }} />
    </animated.div>
  )
}


export default FlashBar;