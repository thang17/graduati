import React from "react";
import styles from "../Company/Company.module.css";
import RoomIcon from "@mui/icons-material/Room";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BusinessIcon from "@mui/icons-material/Business";
import anh from "../../asstes/images/food12.png";
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

const changeValue = () => {
  const counters = document.querySelectorAll(".counter");
  for (let n of counters) {
    const updateCount = () => {
      const target = +n.getAttribute("data-target");
      const count = +n.innerText;
      const speed = 10000;
      const inc = target / speed;
      if (count < target) {
        n.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        n.innerText = target;
      }
    };
    updateCount();
  }
};
const resetVal = () => {
  const counters = document.querySelectorAll(".counter");
  for (let n of counters) {
    const resetCount = () => {
      n.innerText = 0;
    };
    resetCount();
  }
};

var scrollval = 3500;
window.addEventListener("scroll", () => {
  if (scrollval > window.scrollY) {
    resetVal();
  } else {
    changeValue();
  }
});

const Company = () => {
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
      cart: "Giao hàng tiêu chuẩn",
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
      cart: "Giao hàng tiêu chuẩn",
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
      cart: "Giao hàng tiêu chuẩn",
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
      cart: "Giao hàng tiêu chuẩn",
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
      cart: "Giao hàng tiêu chuẩn",
      open: "Giờ mở cửa 12:00 - 23:00",
      sale: "Mã giảm 25k",
    },
  ];
  return (
    <>
      <div className={styles.Company}>
        <div className={styles.CompanyBackground}>
          <div className="pricing-header p-4 mt-0 mb-1 mx-auto text-center">
            <h2>ĐỐI TÁC CHIẾN LƯỢC</h2>
          </div>
          <div className="container">
            <div className={styles.CompanyContainer}>
              <div className="row row-cols-1">
                <div className={`${styles.Row} col-3 d-flex align-items-start`}>
                  <RoomIcon className={styles.RoomIcon}></RoomIcon>
                  <div className={styles.CompanyRoom}>
                    <div className={styles.CompanyMB}>
                      <h4 data-target="3000" className="counter">
                        100
                      </h4>
                      <p>+</p>
                    </div>
                    <p>Quốc gia</p>
                  </div>
                </div>
                <div className={`${styles.Row} col-3 d-flex align-items-start`}>
                  <BusinessIcon
                    style={{ marginLeft: "-25px" }}
                    className={styles.RoomIcon}
                  ></BusinessIcon>
                  <div className={styles.CompanyRoom} id="a">
                    <div className={styles.CompanyMB}>
                      <h4 data-target="4000" className="counter">
                        100
                      </h4>
                      <p>+</p>
                    </div>

                    <p>Cửa hàng đang sử dụng</p>
                  </div>
                </div>
                <div className={`${styles.Row} col-3 d-flex align-items-start`}>
                  <FavoriteBorderIcon
                    className={styles.RoomIcon}
                  ></FavoriteBorderIcon>
                  <div className={styles.CompanyRoom}>
                    <div className={styles.CompanyMB}>
                      <h4 data-target="2000" className="counter">
                        100
                      </h4>
                      <p>+</p>
                    </div>

                    <p>Giải pháp</p>
                  </div>
                </div>
                <div className={`${styles.Row} col-3 d-flex align-items-start`}>
                  <PersonOutlineIcon
                    className={styles.RoomIcon}
                  ></PersonOutlineIcon>
                  <div className={styles.CompanyRoom}>
                    <div className={styles.CompanyMB}>
                      <h4 data-target="5000" className="counter">
                        1000
                      </h4>
                      <p>+</p>
                    </div>

                    <p>Khách hàng Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Companyproduct}>
          <div className={`container`}>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className={`${styles.productElmenet} display-4 fw-normal`}>
                Bán chạy nhất trong tuần
              </h1>
            </div>
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
                      <div class="card-body">
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
                          <li className={styles.productStar}>
                            <TwoWheelerIcon
                              sx={{ fontSize: "20px", color: "#adb5bd" }}
                            />{" "}
                            {e.cart}
                          </li>
                          <li className={styles.productStar}>
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
      </div>
    </>
  );
};

export default Company;
