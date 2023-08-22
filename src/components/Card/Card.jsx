import imgCard from '../../assets/cardImg1.jpg';
import Button from '../General/Button/Button';
import styles from './Card.module.css';
const Card = () => {
  return (
    <article className={styles.card__container}>
      <div className={styles.card__img}>
        <img className={styles.card__img} src={imgCard} alt="Card image" />
        <h3 className={styles.card__title}>Novo Pex Solistica</h3>
      </div>

      <p className={styles.card__description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ut,
        veritatis earum odit ipsam quis obcaecati harum natus eligendi
        necessitatibus eaque sequi, corporis quidem esse veniam delectus cum
        velit neque.
      </p>
      <div className={styles.card__description__author}>
        <h3 className={styles.card__author}>
          <span className={styles.authorDetail}>Autor: </span>Matheus Pereira
        </h3>
        <Button text={'Ler artigo'} />
      </div>
    </article>
  );
};

export default Card;
