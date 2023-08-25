import imgCard from '../../assets/cardImg1.jpg';
import GhostButton from '../General/Button/GhostButton';
import styles from './Card.module.css';
const Card = () => {
  return (
    <article className={styles.card__container}>
      <img className={styles.card__img} src={imgCard} alt="Card image" />
      <h3 className={styles.card__title}>Novo Pex Solistica</h3>
      <p className={styles.card__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className={styles.card__description__author}>
        <h3 className={styles.card__author}>
          <span className={styles.authorDetail}>Autor: </span>Matheus Pereira
        </h3>
        <GhostButton>Ler artigo</GhostButton>
      </div>
    </article>
  );
};

export default Card;
