import { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';
import { DrawContext } from '../../../state/context/draw.context';
import styles from './navbar.module.css';

const navlinks = [
  {to: 'work', label: 'Work', mark: 'a'},
  {to: 'about', label: 'About', mark: 'b'},
  {to: 'playground', label: 'Playground', mark: 'c'}
];

function Navbar() {

  const navRef = useRef(null);
  const { drawLine } = useContext(DrawContext);
  
  const [ markA, setMarkA ] = useState(0);
  const [ markB, setMarkB ] = useState(0);
  const [ markC, setMarkC ] = useState(0);
  const [ drawA, setDrawA ] = useState(true);
  const [ drawB, setDrawB ] = useState(true);
  const [ drawC, setDrawC ] = useState(true);

  // useEffect(() => {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     let currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       navRef.current.style.top = "0";
  //     } else {
  //       navRef.current.style.top = "-100px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // })

  const draw = () => {
    let link = window.sessionStorage.getItem("link");
    link = JSON.parse(link);
    if(!link) return
    if(link.work) setDrawA(false)
      setMarkA(link.work);

    if(link.about) setDrawB(false)
    setMarkB(link.about);

    if(link.playground) setDrawC(false)
    setMarkC(link.playground);
  }

  useEffect(()=>{
    draw();
    handleDraw(drawLine)
  },[drawLine])

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

  const handleDraw = (props) => {
    const {mId, label} = props

    let link = window.sessionStorage.getItem("link");
    link = JSON.parse(link);
    for( const key in link){
      if(key === label){
        link[key]=100
      }else{
        link[key]=0
      }
    }
    window.sessionStorage.setItem("link",JSON.stringify(link))

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
    <div ref={navRef} className={styles.wrapper}>
      <nav className={styles.container}>
        {
          navlinks.map(({to, label, mark})=>(
            <Link key={to} to={`/${to}`} className={styles.link} >
              <div onMouseOver={()=>handleIn(mark)} onMouseLeave={()=>handleOut(mark)} onClick={()=>handleDraw({mId: mark, label: to})}>{label}</div>
              <animated.div style={{width: props[mark].to(n=>`${n.toFixed(2)}%`) , height: '2px', background: 'rgb(15, 51, 81)'}} />
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default Navbar