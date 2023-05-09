import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };
  const onSearch = () => {
    setCharacters([...characters, example]);
  };

  return (
    <div className={styles.App} style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />

      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
