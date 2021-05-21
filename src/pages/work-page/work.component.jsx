import Project from '../../components/project/project.component';
import DATA from '../../state/data';
import { useState, useEffect } from 'react';
import { config, useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { setDraw, setLocation } from '../../state/nav/nav.actions';
import { connect } from 'react-redux';
import { useScroll } from 'react-use-gesture';
import FlashBar from '../../components/flashbar/flashbar.component';
import styles from './work.module.css';
import Navbar from '../../components/navbar/navbar.component';

function WorkPage({ setDraw, setLocation }) {

  const [viewId, setViewId] = useState('');
  const [translA, setTranslA] = useState(0);
  const [translB, setTranslB] = useState(0);
  const [translC, setTranslC] = useState(0);
  const [translD, setTranslD] = useState(0);
  const [top, setTop] = useState(0);
  const [navOpacity, setNavOpacity] = useState(false);

  useScroll(({ active }) => {
    if (active) {
      setNavOpacity(true)
    } else {
      setNavOpacity(false)
    }
  }, { domTarget: window })

  const { np } = useSpring({
    np: navOpacity ? 0.7 : 1,
    config: config.slow
  })

  useEffect(() => {
    setLocation('work');
    setDraw('a');

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop("0");
      } else {
        setTop("-100px");
      }
      prevScrollpos = currentScrollPos;
    }

  }, [setDraw, setLocation]);

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
    <div className={styles.container}>
      <animated.div
        style={{
          background: np.to(np => `rgba(255, 255, 255, ${np.toFixed(2)})`),
          top: top
        }}
        className={styles.navbar}>
        <Navbar />
      </animated.div>
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
              <div className={styles.project} key={data.id}>
                <Waypoint bottomOffset="0%" topOffset="-30%" onEnter={({ previousPosition }) => handleEnter(data.id, previousPosition)} />
                <Project {...data} props={props} viewId={viewId} />
              </div>
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
  )
}

const mapDispatchToProps = dispatch => ({
  setDraw: value => dispatch(setDraw(value)),
  setLocation: loc => dispatch(setLocation(loc))
});

export default connect(null, mapDispatchToProps)(WorkPage);