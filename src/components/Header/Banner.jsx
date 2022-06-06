import React from "react";
import styles from "../Header/Banner.module.css";
import Header from "./Header";
import anh from "../../asstes/images/favpng.png";

const Banner = () => {
  return (
    <>
      <Header />
      <section className={`${styles.mainContent} `}>
        <div className="container">
          <div className={styles.headBanner}>
            <div className={styles.text}>
              <p className={styles.textTop}>Our special dish</p>
              <h2 className={styles.titleCarousel}>Spicy Noodles</h2>
              <p className={styles.textDetail}>
                hank you for sharing with us your <br /> knowledge and making us
                better!
              </p>
              <button className={styles.bannerBtn}>Oder Now</button>
            </div>
            <img className={`${styles.bannerImg}`} alt="Image" src={anh} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
