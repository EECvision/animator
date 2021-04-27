import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { animated, useSpring, config } from 'react-spring';

const navlinks = [
  {to: 'work', label: 'Work', mark: 'a'},
  {to: 'home', label: 'Home', mark: 'b'},
  {to: 'playground', label: 'Playground', mark: 'c'}
];

function Navbar() {
  const [ markA, setMarkA ] = useState(0);
  const [ markB, setMarkB ] = useState(0);
  const [ markC, setMarkC ] = useState(0);
  const [ drawA, setDrawA ] = useState(true);
  const [ drawB, setDrawB ] = useState(true);
  const [ drawC, setDrawC ] = useState(true);

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
        if(!drawA) return 
        setMarkA(0)
        break;
      case 'b':
        if(!drawB) return
        setMarkB(0)
        break;
      case 'c':
        if(!drawC) return
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
        break;
    }
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        {
          navlinks.map(({to, label, mark})=>(
            <Link key={to} to={`/${to}`} className={styles.link} >
              <div onMouseOver={()=>handleIn(mark)} onMouseLeave={()=>handleOut(mark)} onClick={()=>handleDraw(mark)}>{label}</div>
              <animated.div style={{width: props[mark].to(n=>`${n.toFixed(2)}%`) , height: '2px', background: 'black'}} />
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default Navbar