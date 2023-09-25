import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Templates/Login';
import styles from './styles.module.css';
function App() {
  return (
    <main className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
