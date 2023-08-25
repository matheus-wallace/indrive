import styles from './GhostButton.module.css';

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
