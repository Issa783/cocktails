import React from "react";
import styles from "../style.module.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcenter}>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className={styles.navlinks}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
