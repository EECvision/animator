import styles from './pop-up.module.css';
import { animated, useSpring, config } from 'react-spring';
import { useState } from 'react';

function PopUp() {

  const [hide, setHide] = useState(true);

  const { pop } = useSpring({
    pop: hide ? 0 : 1,
    from: { pop: 18 },
    config: config.slow
  })

  return (
    <animated.div
      className={styles.popUp}
      style={{
        bottom: pop.to([0, 1], [4, -18]).to(m => ` ${m.toFixed(2)}rem `)
      }}
    >
      <div className={styles.buttonContainer}>
        <button onClick={() => setHide(!hide)} ><i className="fas fa-times"></i></button>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis in,
        aperiam facilis repudiandae corrupti eveniet dolorem voluptatem
        ea non alias suscipit maxime ducimus illum dicta,
        amet officiis voluptatibus laudantium saepe.
      </div>
    </animated.div>
  )
}


export default PopUp;