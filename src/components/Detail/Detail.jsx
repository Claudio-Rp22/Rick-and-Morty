import styles from "./Detail.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Detail = () => {
    return ( 
        <div className={styles.container}>
            <h1>Soy Detail</h1>
        </div>
     );
}
 
export default Detail;