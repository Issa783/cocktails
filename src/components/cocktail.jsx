import React from "react";
import styles from "../style.module.css"
import { Link } from "react-router-dom";

const CockTail = ({ image, name, id, info, glass }) => {
  return (
    <article className={styles.cockTail}>
      <div className={styles.imgcontainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.cocktailfooter}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className={`${styles.btn} ${styles.btnprimary} ${styles.btndetails}`}>
          Details
        </Link>
      </div>
    </article>
  );
}

export default CockTail;
