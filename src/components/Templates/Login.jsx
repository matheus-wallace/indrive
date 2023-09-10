import './Login.module.css';
import styles from './Login.module.css';
import Highlights from '../highlights/highlights';
import FormLogin from '../FormLogin/FormLogin';

const Login = () => {
  return (
    <section className={styles.login__container}>
      <Highlights />
      <div className={styles.login__separator}></div>
      <FormLogin />
    </section>
  );
};

export default Login;
