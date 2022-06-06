import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../asstes/image/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <div className={`${styles.HeaderRegular} Regular shadow`}>
      <div className="container ">
        <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 ">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img alt="Image" width={500} height={50} src={logo} style={{filter: "drop-shadow(2px 4px 6px black)"}}/>
          </a>
          <ul className="nav col-5 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-4 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-4 link-dark">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-4 link-dark">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-4 link-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-4 link-dark">
                About
              </a>
            </li>
          </ul>
          <div className="col-md-3" style={{ display: "flex" }}>
            <div className={styles.navIcon}>
              <div className={styles.search}>              
                  <SearchIcon sx={{fontSize: "35px"}}/>
              </div>
            </div>
            <div className={styles.logins}>       
                <PersonIcon sx={{fontSize: "35px"}}/>
              <ul className={styles.containerLogin}>
                <li className={styles.loginItem}>
                  <a href="#" className={styles.loginLink}>
                    Login
                  </a>
                </li>
                <li className={styles.register}>
                  <a href="#" className={styles.loginLink}>
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.cart}>
              <a href="#" className={styles.cartLink}>
                <ShoppingCartIcon sx={{fontSize: "35px"}}/>
              </a>
            </div>
          </div>
        </header>
      </div>
      </div>
    </>
  );
};

export default Header;
