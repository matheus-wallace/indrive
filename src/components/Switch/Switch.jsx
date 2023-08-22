import { useState } from 'react';
import { ReactComponent as Sun } from '../../assets/login/sun-desktop.svg';
import { ReactComponent as Moon } from '../../assets/login/moon-desktop.svg';
import styles from './Switch.module.css';

const Switch = () => {
  const [theme, setTheme] = useState(false);

  const toogleTheme = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <div className={styles.switch} onClick={toogleTheme}>
      {theme ? <Sun /> : <Moon />}
    </div>
  );
};

export default Switch;
