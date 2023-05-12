import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = (props) => {
  const { characters, onClose } = props;
  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, gender, image}) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};
export default Cards;
