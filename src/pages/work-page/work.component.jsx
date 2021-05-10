import Project from '../../components/project/project.component';
import DATA from '../../state/data';
import styles from './work.module.css';
import { useState, useEffect, useContext } from 'react';
import { config, useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import React from 'react';
import FlashBar from '../../components/flashbar/flashbar.component';
import { Link } from 'react-router-dom';
import { DrawContext } from '../../state/context/draw.context';
import { setDraw } from '../../state/context/draw.actions';

function WorkPage() {

  const { dispatch } = useContext(DrawContext);

  const [viewId, setViewId] = useState('');
  const [translA, setTranslA] = useState(0);
  const [translB, setTranslB] = useState(0);
  const [translC, setTranslC] = useState(0);
  const [translD, setTranslD] = useState(0);

  useEffect(() => {
    window.sessionStorage.setItem("link",
      JSON.stringify({
        work: 100,
        about: 0,
        playground: 0,
      }))
      dispatch(setDraw({
        label: "work",
        mId: 'a'
      }))
  }, [dispatch]);
  

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
        <Link to="/about" className={styles.logo}><FlashBar>Ephraim Sopuruchukwu</FlashBar> </Link>

        <animated.main style={transl} className={styles.main}>
          <header className={styles.header}> My Projects </header>
          <p className={styles.text}>
            As a designer, lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis at earum reiciendis porro reprehenderit doloremque aperiam ex
            repudiandae totam alias quam quo, eligendi nesciunt quaerat provident saepe est doloribus. Fuga!
          </p>

          <div
            className={styles.projectContainer}
          >
            <div className={styles.projectImage}>Project views</div>
            <div className={styles.projectText}>
              <h1>Project views</h1>
              <p> Dedicated and passionate about designing cool projects just for your maximum satisfaction</p>
            </div>
          </div>

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
            <div className={styles.text}>
              As a designer, lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis at earum reiciendis porro reprehenderit doloremque aperiam ex
            repudiandae totam alias quam quo, eligendi nesciunt quaerat provident <FlashBar>your awesome designer!</FlashBar>  saepe est doloribus. Fuga!
          </div>
          </section>

          <section className={styles.offSet} />

        </animated.main>
      </div>
    </div>
  )
}

export default WorkPage;