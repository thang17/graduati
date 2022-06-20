import React from "react";
import styles from "../ShopProducts/ShopProducts.module.css"
import anh from "../../../asstes/images/food12.png";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LockClockIcon from "@mui/icons-material/LockClock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const ShopProducts = () => {
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
            sale: "Mã giảm 25k"
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
          sale: "Mã giảm 25k"
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
          sale: "Mã giảm 25k"
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
          sale: "Mã giảm 25k"
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
          sale: "Mã giảm 25k"
      },
      {
          id: 6,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 7,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 8,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 9,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 10,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 11,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
      {
          id: 12,
          image: anh,
          name: "Cơm Ngon 435 - Cơm Văn Phòng - Thanh Bình",
          start: "4.4",
          km: "2.5km",
          clock: "25min",
          cart: "Giao hàng tiêu chuẩn",
          open: "Giờ mở cửa 12:00 - 23:00",
          sale: "Mã giảm 25k"
      },
    ]
  return (
    <>
      <div className={` ${styles.shopProduct}`}>
        <div className={`d-flex justify-content-between ${styles.shopFilter}`}>
          <div
            className={`d-flex justify-content-around ${styles.productSort}`}
          >
            <p>Sắp xếp</p>
            <div className={` ${styles.productSortOptions}`}>
              <select>
                <option value="">Xếp theo</option>
                <option value="sortDescend">Theo Giá Giảm Dần</option>
                <option value="sortPrice">Theo Giá Tăng dần</option>
              </select>
            </div>
          </div>
          <div className={styles.productFounded}>
            <h4 className={styles.title}>
              Tìm thấy 50 sản phẩm
            </h4>
          </div>
        </div>
        <div className="row d-flex  row-cols-1 row-cols-md-3 mb-3 ">
        {datamap.map((e, index) => (
                  <div key={index} className={`${styles.ComCol} col-md-4`} >
                    <Link to="/thong-tin-cua-hang">
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
                    </div>
                    </Link>
                  </div>
                ))}
          </div>
      </div>
    </>
  );
};

export default ShopProducts;
