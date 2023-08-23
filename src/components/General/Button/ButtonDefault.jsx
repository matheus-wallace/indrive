import styles from './ButtonDefault.module.css';

const ButtonDefault = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonDefault;
