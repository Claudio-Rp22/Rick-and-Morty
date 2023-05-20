import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ id, name, species, gender, image, onClose }) => {
  ma;

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      </div>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.imgsola} />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.nameContainer}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>

        <div className={styles.dataItems}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
