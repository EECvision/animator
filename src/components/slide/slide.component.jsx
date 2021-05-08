import { animated, useSpring, config } from 'react-spring';
import { useState } from 'react';
import styles from './slide.module.css';


function Slide({clickHandler, scrollWidth}) {

  const [slide, toggleSlide] = useState(false);
  const [flip, setFlip] = useState(true);
  const [resize, setResize] = useState(false);

  const handleSlide = () => {
    toggleSlide(!slide);
    clickHandler(slide)
  }

  // useScroll(({ active, offset: [mx, my], direction: [xDir, yDir], distance, cancel }) => {
  //   if (active) {
  //     if (yDir > 0) {
  //       setSlide(false)

  //     } else if (yDir < 0) {
  //       setSlide(true)
  //     }
  //   }
  // }, { domTarget: window })

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

  const rotate = useSpring({
    transform: 'rotate(0deg)',
    from: {transform: 'rotate(180deg)'},
    config: config.slow,
    reverse: slide,
    reset: false,
  })

  const handleResizeOver = () => {
    if(scrollWidth <= 768) return setResize(false)
    setResize(true);
  }

  const handleResizeLeave = () => {
    if(scrollWidth <= 768) return setResize(false)
    setResize(false);
  }

  return (
    <div
      className={styles.arrowContainer}
      onMouseOver={handleResizeOver}
      onMouseLeave={handleResizeLeave}
      onClick={handleSlide}
    >
      <div style={{ zIndex: 1 }}>HI</div>
      <animated.div style={{ zIndex: 1, ...fade, ...rotate }}><i className="fas fa-arrow-down"></i></animated.div>
      <animated.div
        style={{
          width: m.to([0, 1], [0, 7]).to(m => `${m.toFixed(2)}rem`),
          height: m.to([0, 1], [0, 6.5]).to(m => `${m.toFixed(2)}rem`),
        }}
        className={styles.arc}
      />
    </div>
  )
}

export default Slide