import React from "react";
import styles from "../Header/Banner.module.css";
import Header from "./Header";
import anh from "../../asstes/images/favpng.png";
import anh2 from "../../asstes/images/bannerweb.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Banner = () => {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
   const BannerUrl = [
     {
       id: 1,
       image: anh,
       title: "Our special dish",
       text: "Spicy Noodles",
       text1: "hank you for sharing with us your",
       text2: "knowledge and making us better!"
     },
    {
      id: 2,
      image: anh2,
      title: "Our special dish",
      text: "Spaghetti",
      text1: "hank you for sharing with us your",
      text2: "knowledge and making us better!"
    }
   ]

  return (
    <>
      <Header />
    <Slider {...settings}>
    {BannerUrl.map((e, index) => (
        <section key={index} className={`${styles.mainContent} `}>
        <div  className="container">
          <div className={styles.headBanner}>
            <div className={styles.text}>
              <p className={styles.textTop}>{e.title}</p>
              <h2 className={styles.titleCarousel}>{e.text}</h2>
              <p className={styles.textDetail}>
              {e.text1} <br /> {e.text2}
                
              </p>
              <button className={styles.bannerBtn}>Oder Now</button>
            </div>
            <img className={`${styles.bannerImg}`} alt="" src={e.image} />
          </div>
        </div>
      </section>
     ))}
    </Slider>
    </>
  );
};

export default Banner;
