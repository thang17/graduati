import React from 'react'
import styles from "../SaleOfff/SaleOfff.module.css"
import anh from "../../../asstes/images/food12.png";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LockClockIcon from "@mui/icons-material/LockClock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SaleOfff = () => {
    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: false,
      };
    const datamap = [
        {
          id: 1,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k",
        },
        {
          id: 2,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k",
        },
        {
          id: 3,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k",
        },
        {
          id: 4,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k",
        },
        {
          id: 5,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k",
        },
      ];
  return (
    <>
    <div className={styles.Companyproduct}>
          <div className={`container`}>
            
              <h3 className={`${styles.productElmenet}`}>
                Bán chạy nhất trong tuần
              </h3>
           
              <div className="row d-flex" >
            <Slider {...settings}>
                {datamap.map((e, index) => (
                  <div key={index} className={`${styles.ComCol} col-md-3`} >
                    <div
                      className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}
                    >
                      <div className={styles.productItem}>
                        <img
                          src={e.image}
                          alt=""
                          className={`${styles.productImg} `}
                        />
                      </div>
                      <div className={styles.CartBody}>
                        <h6 class="card-title pricing-card-title">{e.name}</h6>
                        <ul
                          className={`${styles.productUL} list-unstyled mt-3 d-flex`}
                        >
                          <li className={styles.productStar}>
                            <StarIcon
                              sx={{ fontSize: "20px", color: "#ffc107" }}
                            />
                            {e.start}
                          </li>
                          <li className={styles.productStar}>
                            <LocationOnIcon
                              sx={{ fontSize: "20px", color: "#adb5bd" }}
                            />{" "}
                            {e.km}
                          </li>
                          <li className={styles.productStar}>
                            <AccessTimeIcon
                              sx={{ fontSize: "20px", color: "#adb5bd" }}
                            />{" "}
                            {e.clock}
                          </li>
                        </ul>
                        <ul class="list-unstyled mb-4">
                          <li className={styles.productStar1} style={{gap: "7px"}}>
                            <LockClockIcon
                              sx={{ fontSize: "20px", color: "#adb5bd" }}
                            />{" "}
                            {e.open}
                          </li>
                        </ul>
                        <div className={styles.ProductSale}>
                          <p>{e.sale}</p>
                        </div>
                        <div className={styles.productDetail}>
                          <i className={styles.Visibi}>
                            <VisibilityIcon />
                          </i>
                        </div>
                        <div className={styles.productLove}>
                          <i>
                            <FavoriteIcon />
                          </i>
                        </div>
                      </div>

                      <div className={styles.itemfavourite}>
                        <i>
                          <CheckIcon sx={{ fontSize: "14px" }} />
                        </i>
                        <span>Yêu thích</span>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
              </div>
          </div>
        </div>
    </>
  )
}

export default SaleOfff