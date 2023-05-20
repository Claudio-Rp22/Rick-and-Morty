import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={styles.container}>
      {/* <h1>Soy Detail</h1> */}
      <img src={character.image && character.image} alt="" />
      <h1>{character.name && character.name} </h1>
      <h3>{character.status && character.status}</h3>
      <h3>{character.gender && character.gender}</h3>
      <h3>{character.specie && character.specie}</h3>
      <h3>{character.origin?.name && character.origin?.name}</h3>{" "}
      {/* esto es conditonal chaining*/}
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Detail;
