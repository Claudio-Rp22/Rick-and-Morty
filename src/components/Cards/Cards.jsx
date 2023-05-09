import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = (props) => {
  const { characters } = props;
  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => alert("Emulamos que se cierra el Card")}
          />
        );
      })}
    </div>
  );
};
export default Cards;
