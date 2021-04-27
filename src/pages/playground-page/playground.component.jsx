import LightMode from '../../components/light-mode/light-mode.component';
import DarkMode from '../../components/dark-mode/dark-mode.component';
import PopUp from '../../components/pop-up/pop-up.component';
import Toggle from '../../components/toggle-button/toggle.component';
import styles from './playground.module.css';
import { useState } from 'react';

function Playground() {
  const [mode, setMode] = useState(false);

  return (
    <div className={styles.container}>
      <Toggle handleMode={ mode =>setMode(mode)} />
      {
        mode ? <LightMode /> : <DarkMode/>
      }
      <PopUp />
    </div>
  )
}


export default Playground;