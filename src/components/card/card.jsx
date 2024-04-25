import styles from "./card.module.css";
// eslint-disable-next-line react/prop-types
function CardCompetention({ image, title }) {
  return <img src={image} alt={title} className={styles.imageItem} />;
}

export default CardCompetention;
