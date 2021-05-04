import React from 'react';
import styles from './about.module.css';
import myImage from '../../assets/sop.jpg';
import TreeTab from '../../components/tree-tab/tree-tab.component';

function About() {

  return (
    <div className={styles.container}>

      <div className={styles.leftTriangleContainer}>

        <div className={styles.triangle_Left}>
          <div className={styles.triangleLeft} />
        </div>
        
        <div className={styles.triangleLeft} />
        <div className={styles.barLeft} />
      </div>

      <div className={styles.rightTriangleContainer}>

        <div className={styles.triangle_Right}>
          <div className={styles.triangleRight} />
        </div>

        <div className={styles.triangleRight} />
        <div className={styles.barRight} />
      </div>



      <div className={styles.aboutSection}>
        <div className={styles.info}>
          <div className={styles.mainText}>
            I am a user experience designer with a passion for designing interactive,
            useful, and enjoyable digital experiences to stir involvement on
            the "Next Billion User", while equally ensuring delightful
            solutions that are user-centered for all users.
            </div>
          <div className={styles.subText}>
            I am looking for an entry-level position as a user experience designer with a focus on interaction design.
           </div>
        </div>

        <div className={styles.contact}>
          <img className={styles.image} src={myImage} alt="icon" />
          <TreeTab />
          {/* <div className={styles.contact}/> */}
          <div className={styles.links}>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-dribbble"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="far fa-envelope"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-linkedin-in"></i></div>
            <div className={styles.link}><div className={styles.linkBg} /><i className="fab fa-instagram"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;