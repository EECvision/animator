import React, { useState } from 'react';
import styles from './about.module.css';
import myImage from '../../assets/sop.jpg';
import TreeTab from '../../components/tree-tab/tree-tab.component';
import { useScroll } from 'react-use-gesture'
import { animated, useSpring, config } from 'react-spring';
import { Link } from 'react-router-dom';

function About() {
  const [slide, setSlide] = useState(true);
  const [flip, setFlip] = useState(true);
  const [resize, setResize] = useState(false);

  const handleSlideDown = () => {
    window.scrollTo({ top: 1400, left: 0 })
    setSlide(false)
  }

  const handleSlideUp = () => {

    window.scrollTo({ top: 0, left: 0 })
    setSlide(true)
  }

  useScroll(({ active, offset: [mx, my], direction: [xDir, yDir], distance, cancel }) => {
    if (active) {
      if (yDir > 0) {
        setSlide(false)

      } else if (yDir < 0) {
        setSlide(true)
      }
    }

  }, { domTarget: window })

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



  return (
    <div className={styles.container}>
      <div className={styles.welcomeSection}>
        welcome
        {
          slide
            ?
            <div
              onMouseOver={() => setResize(true)}
              onMouseLeave={() => setResize(false)}
              onClick={handleSlideDown} className={styles.arrowDownContainer}>
              <div style={{zIndex: 1}}>HI</div>
              <animated.div style={{zIndex: 1,...fade}}><i className="fas fa-arrow-down"></i></animated.div>
              <animated.div
                style={{
                  width: m.to([0, 1], [0, 7]).to(m => `${m.toFixed(2)}rem`),
                  height: m.to([0, 1], [0, 6.5]).to(m => `${m.toFixed(2)}rem`),
                }}
                className={styles.arc}
              />
            </div>
            : null
        }
      </div>

      <Link to="/work" className={styles.leftTriangleContainer}>
        <div className={styles.triangle_Left}>
          <div className={styles.triangleLeft} />
        </div>
        <div className={styles.triangleLeft} />
        <div className={styles.barLeft} />
      </Link>

      <Link to="/playground" className={styles.rightTriangleContainer}>
        <div className={styles.triangle_Right}>
          <div className={styles.triangleRight} />
        </div>
        <div className={styles.triangleRight} />
        <div className={styles.barRight} />
      </Link>

      <div className={styles.aboutSection}>
        <div className={styles.info}>
          <div className={styles.mainText}>
            I am a user experience designer with a passion for designing interactive,
            useful, and enjoyable digital experiences to stir involvement on
            the "Next Billion User", while equally ensuring delightful
            solutions that are user-centered for all users.
            </div>
          <div className={styles.subText}>
            I am looking for an entry-level position as a user experience designer with a focus on interaction design.
           </div>
        </div>

        <div className={styles.contact}>
          <img className={styles.image} src={myImage} alt="icon" />
          <TreeTab />
          <div className={styles.links}>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-dribbble"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="far fa-envelope"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-linkedin-in"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-instagram"></i></div>
          </div>
        </div>

        {
          !slide
            ?
            <div
              onMouseOver={() => setResize(true)}
              onMouseLeave={() => setResize(false)}
              onClick={handleSlideUp} className={styles.arrowUpContainer}>
              <div style={{zIndex: 1}}>HI</div>
              <animated.div style={{zIndex: 1,...fade}}><i className="fas fa-arrow-up"></i></animated.div>
              <animated.div
                style={{
                  width: m.to([0, 1], [0, 7]).to(m => `${m.toFixed(2)}rem`),
                  height: m.to([0, 1], [0, 6.5]).to(m => `${m.toFixed(2)}rem`),
                }}
                className={styles.arc}
              />
            </div>
            : null
        }
      </div>
    </div>
  )
}

export default About;