import styles from './navbar.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDrawLine, selectLocation } from '../../state/nav/nav.selectors';
import FlashLogo from '../flashlogo/flashlogo.component';

const navlinks = [
  { to: 'work', label: 'Work', mark: 'a' },
  { to: 'about', label: 'About Me', mark: 'b' },
  { to: 'playground', label: 'Playground', mark: 'c' }
];

function Navbar({ drawLine, location }) {

  const [markA, setMarkA] = useState(0);
  const [markB, setMarkB] = useState(0);
  const [markC, setMarkC] = useState(0);
  const [drawA, setDrawA] = useState(true);
  const [drawB, setDrawB] = useState(true);
  const [drawC, setDrawC] = useState(true);

  useEffect(() => {
    if (location !== 'project') {
      handleDraw(drawLine)
    } else {
      handleDraw('')
    }
  }, [drawLine, location])

  const props = useSpring({
    a: markA,
    b: markB,
    c: markC,
    config: config.slow
  });

  const handleIn = (mId) => {
    switch (mId) {
      case 'a':
        setMarkA(100)
        break;
      case 'b':
        setMarkB(100)
        break;
      case 'c':
        setMarkC(100)
        break;
      default:
        break;
    }
  }

  const handleOut = (mId) => {
    switch (mId) {
      case 'a':
        if (!drawA) return
        setMarkA(0)
        break;
      case 'b':
        if (!drawB) return
        setMarkB(0)
        break;
      case 'c':
        if (!drawC) return
        setMarkC(0)
        break;
      default:
        break;
    }
  }

  const handleDraw = (mId) => {
    switch (mId) {
      case 'a':
        setMarkA(100)
        setDrawA(false)
        setDrawB(true)
        setMarkB(0)
        setDrawC(true)
        setMarkC(0)
        break;
      case 'b':
        setMarkB(100)
        setDrawB(false)
        setDrawA(true)
        setMarkA(0)
        setDrawC(true)
        setMarkC(0)
        break;
      case 'c':
        setMarkC(100)
        setDrawC(false)
        setDrawA(true)
        setMarkA(0)
        setDrawB(true)
        setMarkB(0)
        break;
      default:
        setDrawC(true)
        setMarkC(0)
        setDrawA(true)
        setMarkA(0)
        setDrawB(true)
        setMarkB(0)
        break;
    }
  }

  return (
    <nav className={styles.container}>
      <div className = {styles.logoContainer}>
        {
          location !== "about"
            ? <Link to="/about" className={styles.logo} ><FlashLogo >Ephraim Sopuruchukwu</FlashLogo> </Link>
            : null
        }
      </div>
      {
        navlinks.map(({ to, label, mark }) => (
          <Link key={to} to={`/${to}`} className={styles.link} >
            <div className={styles.linkText} onMouseOver={() => handleIn(mark)} onMouseLeave={() => handleOut(mark)} onClick={() => handleDraw(mark)}>{label}</div>
            <animated.div style={{ width: props[mark].to(n => `${n.toFixed(2)}%`), height: '2px', background: 'rgb(15, 51, 81)' }} />
          </Link>
        ))
      }
    </nav>
  )
}

const mapStateToProps = createStructuredSelector({
  drawLine: selectDrawLine,
  location: selectLocation
})

export default connect(mapStateToProps)(Navbar)