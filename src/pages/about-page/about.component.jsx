import styles from './about.module.css';
import myImage from '../../assets/sop.jpg';
import TreeTab from '../../components/tree-tab/tree-tab.component';
import Arrow from '../../components/arrow/arrow.component';
import Slide from '../../components/slide/slide.component';
import LinkItem from '../../components/link/link.component';
import { useRef, useEffect } from 'react';
import Tab from '../../components/tab/tab.component';
import { setDraw, setLocation } from '../../state/nav/nav.actions';
import useMeasure from 'react-use-measure';
import Logo from '../../components/logo/logo.component';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navbar.component';

function About({ setDraw, setLocation }) {
  const [ref2, pr2] = useMeasure();
  const aboutRef = useRef(null);

  useEffect(() => {
    setLocation('about')
    setDraw('b')
  }, [setDraw, setLocation])

  return (
    <div id="about" ref={aboutRef} className={styles.container}>
      <div className={styles.navbar}> <Navbar /> </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div ref={ref2} className={styles.aboutSection}>
        <div className={styles.info}>
          <div className={styles.name}>Ephraim Sopuruchukwu</div>

          <div className={styles.imageContainer}>
            <img className={styles.imageTop} src={myImage} alt="icon" />
          </div>

          <div className={styles.text}>
            I am a user experience designer with a passion for designing interactive,
            useful, and enjoyable digital experiences to stir involvement on
            the "Next Billion User", while equally ensuring delightful
            solutions that are user-centered for all users.
            </div>
          <div className={styles.text}>
            I am looking for an entry-level position as a user experience designer with a focus on interaction design.
           </div>
        </div>

        <div className={styles.contact}>
          <img className={styles.imageBottom} src={myImage} alt="icon" />
          <TreeTab />
          <Tab />
          <LinkItem />
        </div>
      </div>

      <Arrow />
      <Slide aboutRef={aboutRef} ref2={pr2} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setDraw: value => dispatch(setDraw(value)),
  setLocation: loc => dispatch(setLocation(loc))
})

export default connect(null, mapDispatchToProps)(About);