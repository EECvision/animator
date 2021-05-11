import styles from './logo.module.css';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

const Logo = () => {

  const [flip, setFlip] = useState(false);

  const s = useSpring({
    transform: 'rotateY(0deg)',
    opacity: 1,
    from: { transform: 'rotateY(360deg)', opacity: 1 },
    config: { duration: 1500 },
    reverse: flip,
    reset: false,
  })

  const propsTop = useSpring({
    transform: 'translateY(0) translateX(0)',
    from: { transform: 'translateY(3rem) translateX(-2rem)' },
    config: { duration: 1500 },
  })

  const propsMiddle = useSpring({
    transform: 'rotateY(0)',
    from: { transform: 'rotateX(125deg)' },
    config: { duration: 1500 },
    reverse: flip,
    reset: false,
  })

  const propsBottom = useSpring({
    transform: 'translateY(0) translateX(0)',
    from: { transform: 'translateY(-3rem) translateX(2rem)' },
    config: { duration: 1500 },
  })

  // const { h } = useSpring({
  //   h: flip ? 1 : 0,
  //   reset: false,
  //   reverse: flip,
  //   // onRest: () => setFlip(!flip),
  //   config: config.molasses,
  //   cancel: true
  // })

  return (
    <div
      onMouseOver={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      className={styles.logoContainer}
    >

      <div className={styles.topWrapper}>
        <animated.div style={propsTop} className={styles.topContainer}>
          <div className={styles.top}>
            <div className={styles.circleTop}></div>
            <div className={styles.rectTop}></div>
            <div className={styles.triRHS}></div>
            <div className={styles.triLHS}></div>
          </div>
        </animated.div>
      </div>

      <div className={styles.middleWrapper}>
        <animated.div
          style={{...propsMiddle}}
          className={styles.middleContainer}
        >
          <div className={styles.middle}>
            <div className={styles.triRHS}></div>
            <div className={styles.triLHS}></div>
          </div>
        </animated.div>
      </div>

      <div className={styles.bottomWrapper}>
        <animated.div style={propsBottom} className={styles.bottomContainer}>
          <div className={styles.bottom}>
            <div className={styles.triRHS}></div>
            <div className={styles.triLHS}></div>
            <div className={styles.circleBottom}></div>
            <div className={styles.rectBottom}></div>
          </div>
        </animated.div>
      </div>


      <div className={styles.s_wrapper}>
        <animated.div style={s} className={styles.s_container}>
          <div className={styles.s}>
            <div className={styles.triTop}></div>
            <div className={styles.triBottom}></div>
            <div className={styles.rectS}></div>
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default Logo;

