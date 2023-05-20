import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  // const [accsess, setAccess] = useState(false);
  // const EMAIL = "clperalta513@gmail.com";
  // const PASSWORD = "1234claudio";

  // const login = (userData) => {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //   }
  // };
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "clperalta513@gmail.com";
  const PASSWORD = "1234clau";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con este ID!");
        }
      }
    );
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className={styles.App} style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
