import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Templates/Login';
import styles from './styles.module.css';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <main className={styles.app} data-theme={theme}>
      <button onClick={switchTheme}>Mudar</button>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
