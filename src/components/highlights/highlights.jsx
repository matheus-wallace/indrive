import Subtitle from '../General/Subtitle/Subtitle';
import Card from '../Card/Card';
import styles from './highlights.module.css';
import Switch from '../Switch/Switch';

const Highlights = () => {
  return (
    <section className={styles.Highlights}>
      <div className={styles.high}>
        <Subtitle subtitle={'Destaques'} />
        <Switch />
      </div>
      <div className={styles.highlights__container}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Highlights;
