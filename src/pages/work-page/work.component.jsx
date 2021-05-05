import Project from '../../components/project/project.component';
import DATA from '../../state/data';
import styles from './work.module.css';
import { useState } from 'react';
import { config, useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import React from 'react';
import FlashBar from '../../components/flashbar/flashbar.component';

function WorkPage() {

  const [viewId, setViewId] = useState('')
  const [translA, setTranslA] = useState(0);
  const [translB, setTranslB] = useState(0);
  const [translC, setTranslC] = useState(0);
  const [translD, setTranslD] = useState(0);

  const props = useSpring({
    a: translA,
    b: translB,
    c: translC,
    d: translD,
    config: config.slow
  });

  const transl = useSpring({
    transform: "translateY(-2rem)",
    from: { transform: "translateY(0rem)" },
    config: config.slow
  });


  const handleEnter = (id, dir) => {
    setViewId(id)
    switch (id) {
      case "a":
        if (dir === "above") { if (!translB) return setTranslA(0) }
        setTranslA(8);
        break;
      case "b":
        if (dir === "above") { if (!translC) return setTranslB(0) }
        if (translA) return setTranslB(8);
        break;
      case "c":
        if (dir === "above") { if (!translD) return setTranslC(0) }
        if (translB) return setTranslC(8);
        break;
      case "d":
        if (dir === "above") return setTranslD(0)
        if (translC) return setTranslD(8);
        break;
      default:
        break;
    }
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.logo}>Sopuruchukwu Ephraim</div>

        <animated.main style={transl} className={styles.main}>
          <header className={styles.header}> Selected Projects </header>
          <p className={styles.text}>
            As a designer, lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis at earum reiciendis porro reprehenderit doloremque aperiam ex
            repudiandae totam alias quam quo, eligendi nesciunt quaerat provident saepe est doloribus. Fuga!
          </p>
          <section className={styles.test} />

          <section className={styles.projects}>
            {
              DATA.map(data => (
                <React.Fragment key={data.id}>
                  <Waypoint bottomOffset="0%" topOffset="-30%" onEnter={({ previousPosition }) => handleEnter(data.id, previousPosition)} />
                  <Project {...data} props={props} viewId={viewId} />
                </React.Fragment>
              ))
            }
          </section>

          <section>
            <header className={styles.header}> I was also an engineer. Well, I still am. </header>
            <p className={styles.text}>
              As a designer, lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis at earum reiciendis porro reprehenderit doloremque aperiam ex
            repudiandae totam alias quam quo, eligendi nesciunt quaerat provident <FlashBar />  saepe est doloribus. Fuga!
          </p>
          </section>

          <section className={styles.test} />

        </animated.main>
      </div>
    </div>
  )
}

export default WorkPage;