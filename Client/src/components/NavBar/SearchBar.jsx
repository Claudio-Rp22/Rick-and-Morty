import styles from "./SearchBar.module.css";
import { useState } from "react";
export default function SearchBar({ onSearch, logOut }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
