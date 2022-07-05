import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Breadcrumbs from "../../../Pages/Site/Breadcrumbs/Breadcrumbs";
import styles from "./Details.module.css";
import comsuon from "../../../asstes/images/comsuon.jpeg";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import clsx from "clsx";
import SaleOfff from "./SaleOfff/SaleOfff";
import Footer from "../../../components/Footer/Footer"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Details = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },
    {
      href: "/product",
      title: "Sản phẩm",
      isActive: false,
    },
    {
      href: "/Details",
      title: "Chi tiết sản phẩm ",
      isActive: true,
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(0);

  const handleChange = (event) => {
    if (event.target.value === "") setQuantity(0);
    else setQuantity(Number(event.target.value));
    console.log(quantity);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <Header />
      <div className={`${styles.Details} container`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={styles.detailsRow}>
          <div className="row featurette">
            <div className="col-md-5">
              <div className={styles.detailsImg}>
                <img src={comsuon} alt="" />
              </div>
            </div>
            <div className={`${styles.heading} col-md-7`}>
              <h2 className="featurette-heading">Cơm sườn xào chua ngọt</h2>
              <p className={styles.lead}>
                <FmdGoodIcon /> 74 Ngõ 32/48 Đỗ Đức Dục, P. Mễ Trì, Nam Từ Liêm,
                Hà Nội
              </p>
              <div className={styles.DetailsThen}>
                <div className={styles.detailsStar}>
                  <StarIcon sx={{ fontSize: "20px", color: "#ffc107" }} />
                  <StarIcon sx={{ fontSize: "20px", color: "#ffc107" }} />
                  <StarIcon sx={{ fontSize: "20px", color: "#ffc107" }} />
                  <StarIcon sx={{ fontSize: "20px", color: "#ffc107" }} />
                  <StarIcon sx={{ fontSize: "20px", color: "#ffc107" }} />
                </div>
                <span>10+</span>
                <p>Đánh giá trên GoFood</p>
              </div>
              <div className={styles.detailsOpen}>
                <p>
                  <AccessTimeIcon sx={{ fontSize: "20px", color: "#a3a3a3" }} />{" "}
                  Đang mở cửa
                </p>
                <span>09:00 - 22:00</span>
              </div>
              <div className={styles.price}>
                  <h6>
                  <AttachMoneyIcon
                    sx={{ fontSize: "20px", color: "#a3a3a3" }}
                  />{" "}
                    40.000 <span>đ</span>
                  </h6>
                <p>
                  45.000 <span>đ</span>
                </p>
              </div>
              <div className={styles.productOption}>
                <div className={styles.quantity}>
                  <button onClick={() => decreaseQuantity()}>-</button>
                  <input
                    type="text"
                    className={styles.productQuantity}
                    value={quantity}
                    onChange={(e) => handleChange(e)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  <button onClick={() => increaseQuantity()}>+</button>
                </div>
                <button className={styles.addToCart}>Add to cart</button>
                <button className={styles.addToCart}>
                  <FavoriteBorderIcon />
                </button>
              </div>
              <div className={styles.share}>
                <p>Share: </p>
              <div className={styles.FooterShare}>
                 <a href="#"><FacebookIcon sx={{fontSize: '1.5rem'}}/></a>
                 <a href="#"><TwitterIcon sx={{fontSize: '1.5rem'}}/></a>
                 <a href="#"><InstagramIcon sx={{fontSize: '1.5rem'}}/></a>
                 <a href="#"><LinkedInIcon sx={{fontSize: '1.5rem'}}/></a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productDesc}>
          <div className={styles.descCategory}>
            <ul className={`${styles.descCategoryMenu}`}>
              <li
                onClick={() => setActive(0)}
                className={clsx({ [styles.active]: active === 0 })}
              >
                Mô tả
              </li>
              <li
                onClick={() => setActive(1)}
                className={clsx({ [styles.active]: active === 1 })}
              >
                Đánh giá
              </li>
              <li
                onClick={() => setActive(1)}
                className={clsx({ [styles.active]: active === 2 })}
              >
                Thông tin
              </li>
            </ul>
          </div>
          <div className={styles.descDetail}>
            <div className={styles.descDetailTitle}>Products Infomation</div>
            <div className={styles.descDetailContent}>
              <p>
                ShopeeFood.vn luôn sẵn sàng hợp tác với các nhà hàng, quán ăn,
                cafe... để mở rộng kinh doanh cũng như gia tăng khách hàng. Hãy
                kết nối vào hệ thống đặt và giao hàng để giảm bớt chi phí quản
                lý, vận hành, marketing, công nghệ...
              </p>
            </div>
          </div>
        </div>
      </div>
        <SaleOfff />
        <Footer />
    </>
  );
};

export default Details;
