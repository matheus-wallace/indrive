import { ReactComponent as Sun } from '../../assets/login/sun-desktop.svg';
import { ReactComponent as Moon } from '../../assets/login/moon-desktop.svg';
import styles from './Switch.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Switch = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.switch} onClick={toogleTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </div>
  );
};

export { Switch, ThemeContext };
