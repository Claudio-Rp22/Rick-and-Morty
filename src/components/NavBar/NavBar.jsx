import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";
const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default Nav;
