import React from "react";
import styles from "../style.module.css"
import {Link} from "react-router-dom"
const Error = () => {
    return(
        <section className={`${styles.errorpage}${styles.section}`}>
          <div className={styles.errorcontainer}>
            <h1>oops! its a dead end</h1>
            <Link to='/' className={`${styles.btnprimary} ${styles.btn}`}>              back home
            </Link>
          </div>
          </section>
        )
}
export default Error