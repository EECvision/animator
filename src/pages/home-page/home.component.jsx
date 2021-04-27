import styles from './home.module.css';
import { animated, config, useSpring } from 'react-spring';
import { useState } from 'react';


function Home() {

  const [scale, setScale] = useState(0);
  const [rotate, setRotate] = useState(false);
  const [resize, setResize] = useState(false);
  const [flip, setFlip] = useState(true);

  const { n } = useSpring({
    n: scale ? 1 : 0,
    config: config.slow
  });

  const fade = useSpring({
    opacity: 1,
    from: {opacity: 0},
    reset: false,
    reverse: flip,
    onRest: () => setFlip(!flip)
  })

  const { m } = useSpring({
    m: resize ? 1 : 0,
    config: config.mollases
  });

  const { i } = useSpring({
    i: 1,
    from: { i: 0 },
    reset: false,
    reverse: rotate,
    delay: 3000,
    onRest: () => setRotate(!rotate),
    config: config.slow
  })

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.flipCard}>
          <animated.div
            style={{ transform: i.to([0, 0.35, 0.6, 0.9, 1], [0, 45, 0, 45, 0]).to(x => `rotateX(${x}deg)`) }}
            onMouseOver={() => setScale(1)}
            onMouseLeave={() => setScale(0)}
            className={styles.flipCardInner}
          >
            <animated.div
              style={{ transform: n.to([0, 1], [1, 1.3]).to(n => `scale(${n.toFixed(2)})`) }}
              className={styles.bird}
            />
          </animated.div>
        </div>


        <div className={styles.buttonContainer}>
          <div
            onMouseOver={() => setResize(1)}
            onMouseLeave={() => setResize(0)}
            className={styles.button} onClick={() => window.scrollTo({ top: 768, left: 0, behavior: 'smooth' })}>
              <div>HI</div>
              <animated.div style={fade}><i className="fas fa-arrow-down"></i></animated.div>
            </div>
          <animated.div
            style={{
              width: m.to([0, 1], [0, 100]).to(m => `${m.toFixed(2)}%`),
              height: m.to([0, 1], [0, 100]).to(m => `${m.toFixed(2)}%`),
            }}
            className={styles.buttonBackground}
          />
        </div>

      </div>
      <div className={styles.about}>
        hello {window.scrollHeight}
      </div>
    </div>
  )
}

export default Home;