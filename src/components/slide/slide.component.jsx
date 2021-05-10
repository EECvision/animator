import { animated, useSpring, config } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { useState } from 'react';
import styles from './slide.module.css';


function Slide({ aboutRef, ref2 }) {

  const [slide, toggleSlide] = useState(false);
  const [flip, setFlip] = useState(true);
  const [resize, setResize] = useState(false);
  const [hide, setHide] = useState(false);

  const handleSlide = () => {
    toggleSlide(!slide);
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
    n: slide ? 1 : 0,
    display: hide ? 'none' : 'flex',
    config: config.mollases,
    reverse: slide,
    reset: false,
  })

  useScroll(({ active, xy: [x, y], direction: [xDir, yDir], distance, cancel }) => {

    // console.log(y, aboutRef.current.scrollHeight, ref2.height)
    if (active) {

      if (yDir === 1) {
        toggleSlide(true)
      } else {
        toggleSlide(false)
      }

      if (y >= 10 && y <= ref2.height-10) {
        setHide(true)
      }else{
        setHide(false)
      }
    }
  }, { domTarget: aboutRef })

  const handleResizeOver = () => {
    if (aboutRef.current.scrollWidth <= 768) return setResize(false)
    setResize(true);
  }

  const handleResizeLeave = () => {
    if (aboutRef.current.scrollWidth <= 768) return setResize(false)
    setResize(false);
  }

  return (
    <animated.div
      className={styles.arrowContainer}
      onMouseOver={handleResizeOver}
      onMouseLeave={handleResizeLeave}
      onClick={handleSlide}
      style={{
        display
        // opacity: n.to([0,1],[1,0]).to(n => n.toFixed(2)),
      }}
    >
      <div style={{ zIndex: 1 }}>HI</div>
      <animated.div style={{
        zIndex: 1,
        ...fade,
        transform: n.to([0, 1], [0, 180]).to(n => `rotate(${n.toFixed(2)}deg)`),
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