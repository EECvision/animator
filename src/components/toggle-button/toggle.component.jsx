import styles from './toggle.module.css';
import { animated, useSpring, config } from 'react-spring';
import { useState } from 'react';

function Toggle({handleMode}) {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(true);

  const cookie = useSpring({
    o: 1,
    background: 'white',
    border: '4px solid rgb(226, 226, 14)',
    color: 'yellow',
    transform: 'translateX(1.4rem)',
    from: {
      o: 0,
      background: 'white',
      border: '4px solid rgb(221, 197, 197)',
      color: 'rgb(201, 197, 197)',
      transform: 'translateX(-1.4rem)'
    },
    reset: false,
    immediate: count,
    reverse: toggle,
    config: config.stiff
  });

  const darkmode = useSpring({
    background: 'transparent',
    border: '4px solid rgb(137, 188, 218)',
    from: {
      background: 'rgb(43, 42, 42)',
      border: '4px solid black'
    },
    reset: false,
    immediate: count,
    reverse: toggle,
    config: config.stiff
  })

  const handleClick = () => { 
    setToggle(!toggle); 
    setCount(false); 
    handleMode(toggle) 
  }

  return (
    <div className={styles.container}>
      <animated.div style={darkmode} onClick={handleClick} className={styles.darkmode}>
        <animated.div
          style={{ opacity: cookie.o.to(o => o.toFixed(2)) }}
          className={styles.cloud}>
          <i className="fas fa-cloud"></i>
        </animated.div>

        <animated.div style={{ ...cookie }} className={styles.cookie}>
          <i className="fas fa-cookie"></i>
        </animated.div>

        <animated.div style={{ opacity: cookie.o.to([0, 1], [1, 0]).to(o => o.toFixed(2)) }} className={styles.stars}>
          <div className={styles.starA} />
          <div className={styles.starB} />
          <div className={styles.starC} />
          <div className={styles.starD} />
          <div className={styles.starE} />
          <div className={styles.starF} />
          <div className={styles.starG} />
        </animated.div>
      </animated.div>
    </div>
  )
}


export default Toggle;