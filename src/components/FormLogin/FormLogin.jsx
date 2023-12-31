import styles from './formLogin.module.css';
import Title from '../General/Title/Title';
import Input from '../General/Input/Input';
import GhostButton from '../General/Button/GhostButton';
import ButtonDefault from '../General/Button/ButtonDefault';

const FormLogin = () => {
  return (
    <section className={styles.form__container}>
      <Title size={5} text="Indrive" />
      <p className={styles.form__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s
      </p>
      <form className={styles.form__login}>
        <label htmlFor="Email" className={styles.form__email}>
          Email
        </label>
        <Input type="Email" id="Email" />
        <div className={styles.password__container}>
          <label htmlFor="password" className={styles.form__password}>
            Senha
          </label>
          <a href="#" className={styles.form__lostPassword}>
            Esqueceu sua senha?
          </a>
        </div>
        <Input type="password" id="password" />
        <div className={styles.form__button}>
          <GhostButton>Login</GhostButton>
          <ButtonDefault>Cadastrar</ButtonDefault>
        </div>
        <p className={styles.form__other}>ou</p>

        <p className={styles.form__signup}>
          Você quer criar uma <a href="#">Conta?</a>
        </p>
      </form>
    </section>
  );
};

export default FormLogin;
