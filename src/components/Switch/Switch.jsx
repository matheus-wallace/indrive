import { ReactComponent as Sun } from '../../assets/login/sun-desktop.svg';
import { ReactComponent as Moon } from '../../assets/login/moon-desktop.svg';
import styles from './Switch.module.css';
import useLocalStorage from 'use-local-storage';
import { createContext } from 'react';

const ThemeContext = createContext();

const Switch = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toogleTheme = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.switch} onClick={toogleTheme}>
        {theme ? <Moon /> : <Sun />}
      </div>
    </ThemeContext.Provider>
  );
};

export { Switch, ThemeContext };
