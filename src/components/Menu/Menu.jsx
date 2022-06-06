import React from "react";
import styles from "../Menu/Menu.module.css";
import image12 from "../../asstes/images/image 12.png"
import image13 from "../../asstes/images/image 13.png"
import image14 from "../../asstes/images/image 14.png"
import image15 from "../../asstes/images/image 15.png"
import image16 from "../../asstes/images/image 16.png"
import image17 from "../../asstes/images/image 17.png"

const Menu = () => {
  return (
    <>
      <div className={`${styles.Menu} `}>
        <div className="container mt-5">
          <div className=" py-3 mb-4 border-bottom">
              <div className="text-center">
              <h2 className={styles.best}>BEST CATEGORIES</h2>
              </div>
           <ul className="d-flex row mt-5" style={{gap: "40px"}}>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image12} alt="" />
                <p>Burger Cola </p>
               </li>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image13} alt="" />
                <p>Chinese food </p>
               </li>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image14} alt="" />
                <p>Coffe Mug </p>
               </li>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image15} alt="" />
                <p>Cold Drink </p>
               </li>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image16} alt="" />
                <p> French Fries </p>
               </li>
               <li className={`${styles.MenuCoca} category-item col-md-2 col-lg-2 col-sm-4 text-center `}>
               <img className="category-img mt-2" src={image17} alt="" />
                <p>Pizza </p>
               </li>
           </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
