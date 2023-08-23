import styles from './Input.module.css';

const Input = ({ type, id }) => {
  return <input type={type} id={id} className={styles.input} />;
};

export default Input;
