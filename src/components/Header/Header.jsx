import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../asstes/image/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


let myWindow;
const Header = () => {
  // function open() {
  //     const input = document.getElementById("searchBox");
  //     input.classList.add('searchActive')

  //   }
  const [active,setActive] = useState(true)
  function closeWin() {
    myWindow.close();
  }
  return (
    <>
      <div className={`${styles.HeaderRegular} Regular shadow`}>
        <div className="container ">
          <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 ">
            <a
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img
                alt="Image"
                width={500}
                height={50}
                src={logo}
                style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              />
            </a>
            <ul className="nav col-5 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-4 link-secondary">
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="nav-link px-4 link-dark">
                  GIỚI THIỆU
                </Link>
              </li>
              <li>
                <Link to="/cua-hang" className="nav-link px-4 link-dark">
                  CỬA HÀNG
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="nav-link px-4 link-dark">
                  LIÊN HỆ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link px-4 link-dark">
                  BLOG
                </Link>
              </li>
            </ul>
            <div className="col-md-3" style={{ display: "flex" }}>
              <div className={styles.navIcon}>
                <div className={styles.search}>
                <i onClick={(e) => setActive(!active)}><SearchIcon sx={{ fontSize: "35px",cursor: "pointer" }}  /></i>
                  <div className={
                    active ?
                    `${styles.searchBox} ${styles.searchActive} `
                    :`${styles.searchBox} `
                  } id="searchBox">
                    <div className="container ">
                      <div className={`${styles.containerSearch} d-flex`}>
                        <input
                          className={styles.searchBoxInput}
                          type="text"
                          placeholder="Search"
                        />
                        <button className={styles.searchBoxBtn}>Submit</button>
                        <div onClick={(e) => setActive(active)} className={styles.closeInput}>
                          <CloseIcon />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className={styles.logins}>
                <PersonIcon sx={{ fontSize: "35px" }} />
                <ul className={styles.containerLogin}>
                  <li className={styles.loginItem}>
                    <Link to="/Login" className={styles.loginLink}>
                      Login
                    </Link>
                  </li>
                  <li className={styles.register}>
                    <Link to="/register" className={styles.loginLink}>
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.cart}>
                <a href="#" className={styles.cartLink}>
                  <ShoppingCartIcon sx={{ fontSize: "35px" }} />
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
