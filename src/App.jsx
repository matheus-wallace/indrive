import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Templates/Login';
import styles from './styles.module.css';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={styles.app} data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
