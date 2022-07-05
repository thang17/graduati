import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Breadcrumbs from "../../../Pages/Site/Breadcrumbs/Breadcrumbs";
import styles from "./ProductDetails.module.css";
import SearchIcon from "@mui/icons-material/Search";
import burger from "../../../asstes/images/burger.png";
import Footer from "../../../components/Footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import MyBo from "../../../asstes/images/MYbO.jpeg";
import Comsuon from "../../../asstes/images/comsuon.jpeg";
import Comrang from "../../../asstes/images/Comrang.jpeg";
import Coca from "../../../asstes/images/coca.jfif";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
 import clsx from "clsx";
 import SaleOfff from "../Details/SaleOfff/SaleOfff";

const ProductDetails = () => {
 const [active, setActive] = useState(0);
  
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/thong-tin-san-pham",
      title: "Sản Phẩm ",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <div className={`${styles.main} container`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={styles.ProductDetails}>
          <h2 className={styles.title}>
            Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình
          </h2>

          <div class="row mb-2">
            <div class="col-md-4">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <h5 class="pb-3 mb-1 text-center border-bottom">Thực đơn</h5>
                  <ul className={styles.shopfilterslist}>
                    <li className={styles.shopfiltersItem}>
                      <img src={burger} alt="" />
                      <span>MỲ NGON</span>
                    </li>
                    <li className={styles.shopfiltersItem}>
                      <img src={burger} alt="" />
                      <span>CƠM NGON</span>
                    </li>
                    <li className={styles.shopfiltersItem}>
                      <img src={burger} alt="" />
                      <span>CƠM RANG NGON</span>
                    </li>
                    <li className={styles.shopfiltersItem}>
                      <img src={burger} alt="" />
                      <span>ĐỒ UỐNG</span>
                    </li>
                  </ul>

                  <div className={`sidebarPrice ${styles.sidebarPrice}`}>
                    <h3 className={styles.Text}>Giá sản phẩm</h3>
                    <Box sx={{ width: "90%" }}>
                      <Slider
                        getAriaLabel={() => "Price range"}
                        min={0}
                        step={1000}
                        max={2000000}
                        // value={value}
                        // onChange={handleChange}
                        // valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                      />
                    </Box>
                    {/* {`${value[0]} VNĐ - ${value[1]} VNĐ`} */}0 VNĐ - 100.000
                    VNĐ
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div
                className={`d-flex justify-content-flex-start ${styles.productSort}`}
              >
                <p>Sắp xếp</p>
                <div className={` ${styles.productSortOptions}`}>
                  <select>
                    <option value="">Xếp theo</option>
                    <option value="sortDescend">Theo Giá Giảm Dần</option>
                    <option value="sortPrice">Theo Giá Tăng dần</option>
                  </select>
                </div>
                <div className={styles.productFounded}>
                  <h4 className={styles.TextName}>Tìm thấy 50 sản phẩm</h4>
                </div>
              </div>
              <div className={`${styles.shophandle} mb-3`}>
                <form className={styles.shophandlesearch}>
                  <input placeholder="Search your product" />
                  <button className={styles.shopbtn}>
                    <SearchIcon />
                  </button>
                </form>
              </div>

              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <Link to="/thuc-don-hang-ngay">
                  <div className="my-3 p-3 bg-body">
                    <h6 className="pb-2 mb-0">MỲ NGON ^^</h6>
                    <div className="d-flex text-muted pt-3 border-bottom">
                      <div className={styles.productItem}>
                        <img
                          src={MyBo}
                          alt=""
                          className={`${styles.productImg} `}
                        />
                      </div>
                      <div
                        className={`${styles.border} mb-3 justify-content-between w-100`}
                      >
                        <h6 class="card-title pricing-card-title ">
                          Mỳ Xào Cải Bò
                        </h6>
                        <div
                          className="row"
                          style={{ float: "right", flexWrap: "nowrap" }}
                        >
                          <div className={`${styles.DetailsPrice} col-auto`}>
                            <h5>
                              40.000 <span>đ</span>
                            </h5>
                          </div>
                          <div className="col-6">
                            <div className={styles.btnadding}>+</div>
                          </div>
                        </div>
                        <ul
                          className={`${styles.productDetailUL} list-unstyled mt-1 d-flex`}
                        >
                          <li className={styles.productStar}>
                            <StarIcon
                              sx={{ fontSize: "20px", color: "#ffc107" }}
                            />
                            4.4
                          </li>
                        </ul>
                        <p className={styles.Details}>
                          Đã được đặt{" "}
                          <span
                            style={{
                              color: "#333",
                              fontWeight: "600",
                              padding: "0 3px",
                            }}
                          >
                            100+
                          </span>{" "}
                          lần | 10 thích
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/*  */}
                <div className=" p-3 bg-body">
                  <h6 className="pb-1 mb-0">CƠM NGON ^^</h6>
                  <div className="d-flex text-muted pt-3 border-bottom">
                    <div className={styles.productItem}>
                      <img
                        src={Comsuon}
                        alt=""
                        className={`${styles.productImg} `}
                      />
                    </div>
                    <div
                      className={`${styles.border} mb-3 justify-content-between w-100`}
                    >
                      <h6 class="card-title pricing-card-title ">
                        Cơm sườn xào chua ngọt
                      </h6>
                      <div
                        className="row"
                        style={{ float: "right", flexWrap: "nowrap" }}
                      >
                        <div className={`${styles.DetailsPrice} col-auto`}>
                          <h5>
                            40.000 <span>đ</span>
                          </h5>
                        </div>
                        <div className="col-6">
                          <div className={styles.btnadding}>+</div>
                        </div>
                      </div>
                      <ul
                        className={`${styles.productDetailUL} list-unstyled mt-1 d-flex`}
                      >
                        <li className={styles.productStar}>
                          <StarIcon
                            sx={{ fontSize: "20px", color: "#ffc107" }}
                          />
                          4.4
                        </li>
                      </ul>
                      <p className={styles.Details}>
                        Đã được đặt{" "}
                        <span
                          style={{
                            color: "#333",
                            fontWeight: "600",
                            padding: "0 3px",
                          }}
                        >
                          100+
                        </span>{" "}
                        lần | 10 thích
                      </p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" p-3 bg-body">
                  <h6 className="pb-1 mb-0">CƠM RANG NGON ^^</h6>
                  <div className="d-flex text-muted pt-3 border-bottom">
                    <div className={styles.productItem}>
                      <img
                        src={Comrang}
                        alt=""
                        className={`${styles.productImg} `}
                      />
                    </div>
                    <div
                      className={`${styles.border} mb-3 justify-content-between w-100`}
                    >
                      <h6 class="card-title pricing-card-title ">
                        Cơm Rang Dưa bò
                      </h6>
                      <div
                        className="row"
                        style={{ float: "right", flexWrap: "nowrap" }}
                      >
                        <div className={`${styles.DetailsPrice} col-auto`}>
                          <h5>
                            40.000 <span>đ</span>
                          </h5>
                        </div>
                        <div className="col-6">
                          <div className={styles.btnadding}>+</div>
                        </div>
                      </div>
                      <ul
                        className={`${styles.productDetailUL} list-unstyled mt-1 d-flex`}
                      >
                        <li className={styles.productStar}>
                          <StarIcon
                            sx={{ fontSize: "20px", color: "#ffc107" }}
                          />
                          4.4
                        </li>
                      </ul>
                      <p className={styles.Details}>
                        Đã được đặt{" "}
                        <span
                          style={{
                            color: "#333",
                            fontWeight: "600",
                            padding: "0 3px",
                          }}
                        >
                          50+
                        </span>{" "}
                        lần | 10 thích
                      </p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" p-3 bg-body">
                  <h6 className="pb-1 mb-0">ĐỒ UỐNG ^^</h6>
                  <div className="d-flex text-muted pt-3 border-bottom">
                    <div className={styles.productItem}>
                      <img
                        src={Coca}
                        alt=""
                        className={`${styles.productImg} `}
                      />
                    </div>
                    <div
                      className={`${styles.border} mb-3 justify-content-between w-100`}
                    >
                      <h6 class="card-title pricing-card-title ">CacaCola</h6>
                      <div
                        className="row"
                        style={{ float: "right", flexWrap: "nowrap" }}
                      >
                        <div className={`${styles.DetailsPrice} col-auto`}>
                          <h5>
                            10.000 <span>đ</span>
                          </h5>
                        </div>
                        <div className="col-6">
                          <div className={styles.btnadding}>+</div>
                        </div>
                      </div>
                      <ul
                        className={`${styles.productDetailUL} list-unstyled mt-1 d-flex`}
                      >
                        <li className={styles.productStar}>
                          <StarIcon
                            sx={{ fontSize: "20px", color: "#ffc107" }}
                          />
                          4.4
                        </li>
                      </ul>
                      <p className={styles.Details}>
                        Đã được đặt{" "}
                        <span
                          style={{
                            color: "#333",
                            fontWeight: "600",
                            padding: "0 3px",
                          }}
                        >
                          50+
                        </span>{" "}
                        lần | 10 thích
                      </p>
                    </div>
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
                onClick={() => setActive(2)}
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
      </div>
      <SaleOfff />
      <Footer />
    </>
  );
};

export default ProductDetails;
