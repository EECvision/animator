import LightMode from '../../components/light-mode/light-mode.component';
import DarkMode from '../../components/dark-mode/dark-mode.component';
import PopUp from '../../components/pop-up/pop-up.component';
import Toggle from '../../components/toggle-button/toggle.component';
import styles from './playground.module.css';
import { useState, useEffect, useContext } from 'react';
import { DrawContext } from '../../state/draw/draw.context';
import { setDraw } from '../../state/draw/draw.actions';
// import Navbar from '../../components/navbar/navbar.component';

function Playground() {

  const { dispatch } = useContext(DrawContext);

  const [mode, setMode] = useState(false);
  
  useEffect(() => {
    window.sessionStorage.setItem("link",
      JSON.stringify({
        work: 0,
        about: 0,
        playground: 100,
      }));
      dispatch(setDraw({
        label: 'playground',
        mId: 'c'
      }))
  }, [dispatch])

  return (
    <div className={styles.container}>
      {/* <Navbar/> */}
      <Toggle handleMode={ mode =>setMode(mode)} />
      {
        mode ? <LightMode /> : <DarkMode/>
      }
      <PopUp />
    </div>
  )
}


export default Playground;