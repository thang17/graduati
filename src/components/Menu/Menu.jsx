import React from "react";
import styles from "../Menu/Menu.module.css";
import image12 from "../../asstes/images/image 12.png";
import image13 from "../../asstes/images/image 13.png";
import image14 from "../../asstes/images/image 14.png";
import image15 from "../../asstes/images/image 15.png";
import image16 from "../../asstes/images/image 16.png";
import image17 from "../../asstes/images/image 17.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Menu = () => {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: false,
  };
  const Menuapi = [
    {
      id: 1,
      img: image12,
      text: "Burger Cola",
    },
    {
      id: 2,
      img: image13,
      text: "Chinese food",
    },
    {
      id: 3,
      img: image14,
      text: "Coffe Mug",
    },
    {
      id: 4,
      img: image15,
      text: "Cold Drink",
    },
    {
      id: 5,
      img: image16,
      text: "French Fries",
    },
    {
      id: 6,
      img: image17,
      text: "Pizza",
    },
    {
      id: 7,
      img: image12,
      text: "Burger Cola",
    },
  ];
  return (
    <>
      <div className={`${styles.Menu} mb-5`}>
        <div className="container mt-5">
          <div className=" py-3 mb-5 border-bottom">
            <div className="text-center">
              <h2 className={styles.best}>BEST CATEGORIES</h2>
            </div>
            <Slider {...settings}>
              {Menuapi.map((e,index) => (
                <ul key={index} className="d-flex row mt-5" style={{ gap: "40px" }}>
                  <li
                    className={`${styles.MenuCoca} category-item col-md-2  col-lg-2 col-sm-4 text-center `}
                  >
                    <img className={`${styles.categoryimg} mt-2 mb-3`} src={e.img} alt="" />
                    <p>{e.text} </p>
                  </li>
                </ul>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
