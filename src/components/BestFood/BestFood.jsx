import React from "react";
import styles from "../BestFood/BestFood.module.css";
import fav from "../../asstes/images/favpng.png";
import Rectangle from "../../asstes/images/Rectangle 27.png";
import image  from "../../asstes/images/image 18.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const BestFood = () => {
  return (
    <>
      <div className="container marketing mb-5">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <p className={styles.TextPrimary}>Our us</p>
          <h2 className={`${styles.BestFoodText} display-4 fw-normal`}>
            WHY CHOOSE US
          </h2>
        </div>
        <div className="row featurette mb-5">
          <div className={`${styles.BestFoodIteam} col-md-6`}>
            <img className="rounded-circle" alt="" src={fav} />
            <div className={styles.scaleImg}></div>
          </div>
          <div className={`${styles.BestFoodOUR} col-md-6`}>
            <h3> Best Food In The Country</h3>
            <p>
              Food is associated with substance consumed to produce organic
              process support for an organism. it's sometimes of plant or animal
              origin, and contains essential nutrients, like carbohydrates,
              fats, proteins, vitamins, or minerals.
            </p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className={styles.OurBtn}>
                  <LocalShippingIcon
                    sx={{
                      fontSize: "1.6rem",
                      marginRight: "5px",
                      color: "#1A9D5D",
                      fontWeight: "900",
                    }}
                  />{" "}
                  Free Ship
                </button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className={styles.OurBtn}>
                  <RestaurantIcon
                    sx={{
                      fontSize: "1.6rem",
                      marginRight: "5px",
                      color: "#1A9D5D",
                      fontWeight: "900",
                    }}
                  />{" "}
                  Delicious
                </button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className={styles.OurBtn}>
                  <HeadsetMicIcon
                    sx={{
                      fontSize: "1.6rem",
                      marginRight: "5px",
                      color: "#1A9D5D",
                      fontWeight: "900",
                    }}
                  />{" "}
                  24/7
                </button>
              </div>
            </div>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
        <section className={`${styles.ads} row`}>
          <article className={`${styles.adsfirst} col-lg-6`}>
            <img className={styles.adsimg} src={Rectangle} alt />
            <div className={styles.saleddescription}>
              <p className={styles.sale}>30% Discount</p>
              <h4 className={styles.saledesc}>Discount Different Flavours Pizza</h4>
              <button className={`${styles.salebtn} ${styles.readMore}`}>Order Now</button>
            </div>
          </article>
          <article className={`${styles.adsfirst} col-lg-6`}>
            <img className={styles.adsimg} src={image} alt />
            <div className={styles.saleddescription}>
              <p className={styles.sale}>40% Discount</p>
              <h4 className={styles.saledesc}>Healthy Food Collection</h4>
              <button className={`${styles.salebtn} ${styles.readMore}`}>Order Now</button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default BestFood;
