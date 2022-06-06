import React from "react";
import styles from "../Banner1/Banner1.module.css";
import chef1 from "../../asstes/images/WebBanner.jpg";

const Banner1 = () => {
  return (
    <>
      <div className="container">
        <div className={`${styles.Banner1} mt-5 mb-5 `}>
          <img alt="" src={chef1} />
        </div>
      </div>
    </>
  );
};

export default Banner1;
