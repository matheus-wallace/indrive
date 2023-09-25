import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeContext.Provider value={(theme, toogleTheme)}>{children}</ThemeContext.Provider>;
};
