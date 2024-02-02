import React from "react";
import styles from "../style.module.css"
const About = () => {
  return(
    <section className={`${styles.section} ${styles.aboutsection}`}>
        <h1 className={styles.sectiontitle}>About us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Saepe suscipit impedit consectetur odit est dignissimos mollitia tempora qui voluptate modi temporibus laborum necessitatibus nostrum at eos perferendis, 
        expedita optio asperiores.</p>
    </section>

  )
}
export default About