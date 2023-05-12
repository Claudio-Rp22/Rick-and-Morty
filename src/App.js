import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id){
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
      if(data.name){
        setCharacters((oldChars)=> [...oldChars, data]);
      } else {
        window.alert("No hay personajes con este ID!")
      }
    })
  }
   const onClose = (id)=>{
      setCharacters(
        characters.filter((char) =>{
          return char.id !== Number(id);
        })
      )
   }

  return (
    <div className={styles.App} style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route  path="/about" element={<About/>} />      
        <Route  path="/detail/:id" element={<Detail/>} />      
      </Routes>
      
    </div>
  );
}

export default App;
