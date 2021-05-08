import styles from './about.module.css';
import myImage from '../../assets/sop.jpg';
import TreeTab from '../../components/tree-tab/tree-tab.component';
import Arrow from '../../components/arrow/arrow.component';
import Slide from '../../components/slide/slide.component';
import LinkItem from '../../components/link/link.component';
import { useRef } from 'react';
import useMeasure from 'react-use-measure';
import Tab from '../../components/tab/tab.component';

function About() {
  const aboutRef = useRef(null);
  const [ref, { height, width }] = useMeasure();
  // const [aboutWidth, setWidth] = useState(width);

  // useEffect(()=> {
  //   setWidth(width)
  // }, [width]);

  const handleScroll = (slide) => {
    if (slide) {
      aboutRef.current.scrollTo({ top: 0, left: 0 })
    } else {
      aboutRef.current.scrollTo({ top: height, left: 0 })
    }
  }


  return (
    <div ref={aboutRef} className={styles.container}>
      <div ref={ref} className={styles.welcomeSection}>welcome</div>

      <div className={styles.aboutSection}>
        <div className={styles.info}>
          <div className={styles.name}>Sopuruchukwu Ephraim</div>

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
      <Slide clickHandler={handleScroll} scrollWidth={width} aboutRef={aboutRef} />
    </div>
  )
}

export default About;