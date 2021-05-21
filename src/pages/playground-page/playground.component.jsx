import LightMode from '../../components/light-mode/light-mode.component';
import DarkMode from '../../components/dark-mode/dark-mode.component';
import PopUp from '../../components/pop-up/pop-up.component';
import Toggle from '../../components/toggle-button/toggle.component';
import styles from './playground.module.css';
import Navbar from '../../components/navbar/navbar.component';
import { useState, useEffect } from 'react';
import { setDraw, setLocation } from '../../state/nav/nav.actions';
import { connect } from 'react-redux';


function Playground({ setDraw, setLocation }) {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    setLocation('playground');
    setDraw('c');
  }, [setDraw, setLocation])

  return (
    <div className={styles.container}>
      <div className={styles.navbar}> <Navbar /> </div>
      <Toggle handleMode={mode => setMode(mode)} />
      {
        mode ? <LightMode /> : <DarkMode />
      }
      <PopUp />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setDraw: value => dispatch(setDraw(value)),
  setLocation: loc => dispatch(setLocation(loc))
});

export default connect(null, mapDispatchToProps)(Playground);