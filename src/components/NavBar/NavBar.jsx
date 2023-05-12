import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link  to="/home" >
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Nav;
