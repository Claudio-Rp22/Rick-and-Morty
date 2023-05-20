import styles from "./Form.module.css";
import validation from "../validation";

import { useState } from "react";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form className={styles.formContainer}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        {errors.p1 ? (
          <p>{errors.p1}</p>
        ) : errors.p2 ? (
          <p>{errors.p2}</p>
        ) : (
          <p>{errors.p3}</p>
        )}
        <br />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
