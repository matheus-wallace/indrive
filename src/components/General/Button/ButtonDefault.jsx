import styles from './ButtonDefault.module.css';

const ButtonDefault = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default ButtonDefault;
