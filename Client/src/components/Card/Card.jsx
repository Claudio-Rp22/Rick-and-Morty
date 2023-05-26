import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, species, gender, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.contendorLike}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
        <div className={styles.contenedorClose}>
          <button
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
        </div>
      </div>

      {/* <div className={styles.imgContainer}> */}
      <img src={image} alt={name} />
      {/* </div> */}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
