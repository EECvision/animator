import { animated, useSpring, config } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { useState } from 'react';
import styles from './slide.module.css';


function Slide({aboutRef}) {

  const [slide, toggleSlide] = useState(false);
  const [flip, setFlip] = useState(true);
  const [resize, setResize] = useState(false);

  const handleSlide = () => {
    toggleSlide(true);
    if (slide) {
      aboutRef.current.scrollTo({ top: 0, left: 0 })
    } else {
      aboutRef.current.scrollTo({ top: aboutRef.current.offsetHeight - 64, left: 0 })
    }
  }

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

  const { n, display } = useSpring({
    to: async(next, cancel) => {
      await next({display: slide ? 'none' : 'flex'});
      await next({n: slide ? 1 : 0});
    },
    delay: 500,
    from: {n: 0, display: 'flex'},
    config: config.mollases,
    reverse: slide,
    reset: false,
  })

  useScroll(({ active, xy: [x, y], direction: [xDir, yDir], distance, cancel }) => {
    if (active && y === 0) {
      toggleSlide(false)
    }else if (y >= 10){
      toggleSlide(true)
    }
  }, { domTarget: aboutRef  })

  const handleResizeOver = () => {
    if(aboutRef.current.scrollWidth <= 768) return setResize(false)
    setResize(true);
  }

  const handleResizeLeave = () => {
    if(aboutRef.current.scrollWidth <= 768) return setResize(false)
    setResize(false);
  }

  return (
    <animated.div
      className={styles.arrowContainer}
      onMouseOver={handleResizeOver}
      onMouseLeave={handleResizeLeave}
      onClick={handleSlide}
      style={{
        display,

        opacity: n.to([0,1],[1,0]).to(n => n.toFixed(2)),
      }}
    >
      <div style={{ zIndex: 1 }}>HI</div>
      <animated.div style={{ 
        zIndex: 1, 
        ...fade, 
        transform: n.to([0,1],[0,180]).to(n => `rotate(${n.toFixed(2)}deg)`),
      }}>
        <i className="fas fa-arrow-down"></i>
      </animated.div>
      <animated.div
        style={{
          width: m.to([0, 1], [0, 7]).to(m => `${m.toFixed(2)}rem`),
          height: m.to([0, 1], [0, 6.5]).to(m => `${m.toFixed(2)}rem`),
        }}
        className={styles.arc}
      />
    </animated.div>
  )
}

export default Slide