import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../asstes/image/logo.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.screenY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={
          navbar
         ? `${styles.header} ${styles.active}`
          : `${styles.header}` }>
        <div href="#" className={styles.logo}>
          <img src={logo} />
        </div>
        <ul className={styles.navigation}>
          <li>
            <a href="#">TRANG CHU</a>
          </li>
          <li>
            <a href="#">GIOI THIEU</a>
          </li>
          <li>
            <a href="#">ODER ONLINE</a>
          </li>
          <li>
            <a href="#">TRO GIUP</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
