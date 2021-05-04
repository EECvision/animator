import styles from './home.module.css';
import { animated, config, useSpring } from 'react-spring';
import { useState } from 'react';
import myImage from '../../assets/sop.jpg';
import TreeTab from '../../components/tree-tab/tree-tab.component';

function Home() {

  const [scale, setScale] = useState(0);
  const [rotate, setRotate] = useState(false);
  const [resize, setResize] = useState(false);
  const [flip, setFlip] = useState(true);
  const [hover, setHover] = useState(false);

  const { n } = useSpring({
    n: scale ? 1 : 0,
    config: config.slow
  });

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
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

  const { h } = useSpring({
    h: hover ? 1 : 0,
    // from: {h: 0},
    // reset: false,
    // reverse: hover,
    // onRest: ()=> setHover(!hover),
    // config: {duration: 5000}
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
        <div className={styles.dataSection}>
          <div className={styles.name}>Ephraim Sopuruchukwu</div>
          <div className={styles.body}>
            <p >
              I am a user experience designer with a passion for designing interactive,
              useful, and enjoyable digital experiences to stir involvement on
              the "Next Billion User", while equally ensuring delightful
              solutions that are user-centered for all users.
            </p>
            <p>
              I am looking for an entry-level position as a user experience designer with a focus on interaction design.   
           </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={myImage} alt="icon" />
          <div className={styles.links}>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}><i className="fab fa-dribbble"></i></div>
            <div className={styles.contact}><i className="far fa-envelope"></i></div>
            <div className={styles.contact}><i className="fab fa-linkedin-in"></i></div>
            <div className={styles.contact}><i className="fab fa-instagram"></i></div>
          </div>
        </div>
      </div>
      <div onClick={()=> console.log('clicked')}>click me</div>

    </div>
  )
}

export default Home;