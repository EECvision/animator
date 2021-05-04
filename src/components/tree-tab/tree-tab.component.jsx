import styles from './tree-tab.module.css';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
function TreeTab() {
  
  const [hide, setHide] = useState(true);
  const [draw, setDraw] = useState(false);
  const [mouse, setMouse] = useState(true);
  const [ref, a] = useMeasure();
  const [ref2, b] = useMeasure();
  const [ref3, c] = useMeasure();

  const {wd, vs, wd2, vs2, wd3, vs3} = useSpring({
    to: async (next,_) => {
      await next({wd: draw ? a.width : 10,});
      await next({vs: hide ? 'hidden' : 'visible'})
      await next({wd2: draw ? b.width : 10,});
      await next({vs2: hide ? 'hidden' : 'visible'})
      await next({wd3: draw ? c.width : 10,});
      await next({vs3: hide ? 'hidden' : 'visible'})
    },
    config: {duration: 50},
    onRest: ()=>{ setDraw(false); }
  })

  return (
    <div className={styles.container}>
      <div className={styles.mouse} onMouseLeave={()=>{ setMouse(true); setDraw(true); setHide(!hide)}} onMouseOver={()=>{ if(!mouse) return; setMouse(false); setHide(!hide); setDraw(true)}}>
      <animated.div className={styles.main}>
        <animated.div style={{width: wd}} className={styles.tab}/>
        <animated.div ref={ref} style={{visibility: vs }} className={styles.text}>Check Out My Work</animated.div>
      </animated.div>

      <animated.div className={styles.main}>
        <animated.div style={{width: wd2}} className={styles.tab}/>
        <animated.div ref={ref2} style={{visibility: vs2}} className={styles.text}>Download Resume</animated.div>
      </animated.div>

      <animated.div className={styles.main}>
        <animated.div style={{width: wd3}} className={styles.tab}/>
        <animated.div ref={ref3} style={{visibility: vs3}} className={styles.text}>Have some fun!</animated.div>
      </animated.div>

      </div>
    </div>
  )
}

export default TreeTab;