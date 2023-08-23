import styles from './Title.module.css';
const Title = ({ text, size }) => {
  return (
    <h1 className={styles.title} style={{ fontSize: `${size}rem` }}>
      {text}
    </h1>
  );
};

export default Title;
