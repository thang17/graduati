import React from "react";
import styles from "../Product/Product.module.css";
import anh from "../../asstes/images/food12.png"
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LockClockIcon from '@mui/icons-material/LockClock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = () => {
  return (
    <>
      <div className={styles.Product}>
        <div className="container">
          <div class="d-flex flex-column flex-md-row align-items-center pt-3 mt-5 pb-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex align-items-center  text-decoration-none"
            >
              <span className={`${styles.productSpan} fs-4`}>POPULAR Dish</span>
            </a>

            <nav className={`${styles.productNAV} d-inline-flex mt-2 mt-md-0 ms-md-auto`}>
              <a class="me-3 py-2  text-decoration-none" href="#">
                Tất cả
              </a>
              <a class="me-3 py-2  text-decoration-none" href="#">
                Đồ ăn
              </a>
              <a class="me-3 py-2  text-decoration-none" href="#">
                Đồ uống
              </a>
              <a class="py-2  text-decoration-none" href="#">
                Đồ chay
              </a>
            </nav>
          </div>

          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <p className={styles.productElmenetP}>Our Menu</p>
            <h1 className={`${styles.productElmenet} display-4 fw-normal`}>TODAY'S SPECIALITY</h1>
          </div>
          <div className="row d-flex  row-cols-1 row-cols-md-3 mb-3 ">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                  <div className={styles.productDetail}>
                    <i className={styles.Visibi}><VisibilityIcon /></i>
                  </div>
                  <div className={styles.productLove}>
                    <i><FavoriteIcon /></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex  row-cols-1 row-cols-md-3 mb-3 ">
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.productCard} card mb-4 rounded-3 shadow-sm`}>
                <div className={styles.productItem}>
                    <img src={anh} alt="" className={`${styles.productImg} `} />
                </div>
                <div class="card-body">
                  <h6 class="card-title pricing-card-title">
                    Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
                  </h6>
                  <ul className= {`${styles.productUL} list-unstyled mt-3 d-flex`}>
                    <li className={styles.productStar}><StarIcon sx={{fontSize: "20px", color: "#ffc107"}} />4.4</li>
                    <li className={styles.productStar}><LocationOnIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 2.5km</li>
                    <li className={styles.productStar}><AccessTimeIcon sx={{fontSize: "20px", color: "#adb5bd"}} /> 22min</li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                     
                     <li className={styles.productStar}><LockClockIcon sx={{fontSize: "20px", color: "#adb5bd"}}/> Giờ mở cửa    12:00 - 23:00 </li>
                  </ul>
                  <div className={styles.ProductSale}>
                      <p>Mã giảm 35k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
