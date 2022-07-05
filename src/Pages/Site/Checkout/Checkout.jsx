import React from "react";
import styles from "./Checkout.module.css";
import Header from "../../../components/Header/Header";
import Breadcrumbs from "../../../Pages/Site/Breadcrumbs/Breadcrumbs";
import Footer from "../../../components/Footer/Footer"
import {Link } from "react-router-dom"
function Checkout() {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/thanh-toán",
      title: "Sản Phẩm ",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumbs breadItem={breadcrumItem} />
      <div className={`container mb-5 ${styles.checkoutWrapper}`}>
        <div className="row mt-5">
          <h3 className="col-12 fw-bold">Thông tin thanh toán</h3>
          <form className={`col-8 ${styles.checkoutForm}`}>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.checkoutFormWrapper}`}
            >
              <div>
                <label htmlFor="name" className={styles.label_name}>Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập tên người nhận"
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div>
                <label htmlFor="phone" className={styles.label_name}>Số điện thoại</label>
                <input
                  type="phone"
                  placeholder="Nhập số điện thoại người nhận"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <label htmlFor="email">Tỉnh/ Thành phố</label>
            <input
              type="email"
              placeholder="Nhập email"
              name="email"
              id="email"
            />
            <label htmlFor="city">Tỉnh/ Thành phố</label>
            <input
              type="text"
              placeholder="Nhập tỉnh/ thành phố"
              name="city"
              id="city"
            />
            <label htmlFor="district">Quận/ Huyện</label>
            <input
              type="text"
              placeholder="Nhập quận/ huyện"
              name="district"
              id="district"
            />
            <label htmlFor="wards">Phường/ Xã</label>
            <input
              type="text"
              placeholder="Nhập phường/ xã"
              name="wards"
              id="wards"
            />
            <label htmlFor="number">Số nhà, thôn, xóm</label>
            <input
              type="text"
              placeholder="Nhập tên người nhận"
              name="number"
              id="number"
            />
          </form>
          <div className={`col-4 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ${styles.checkoutBox}`}>
            <h3 className={`fw-bold ${styles.orderTitle}`}>Đơn hàng của bạn</h3>
            <div className={`d-flex justify-content-between align-items-center`}>
              <h5>Sản phẩm</h5>
              <h5>Giá thành</h5>
            </div>
            <div className={`d-flex justify-content-between align-items-center`}>
              <p>Cơm gà </p>
              <p>50.000 VNĐ</p>
            </div>
            <div className={`d-flex justify-content-between align-items-center`}>
              <p>Cơm rang dưa bò</p>
              <p>50.000 VNĐ</p>
            </div>
            <div className={`d-flex justify-content-between align-items-center`}>
              <h5>Phí vận chuyển</h5>
              <h5>30.000 VNĐ</h5>
            </div>

            <div className={`d-flex justify-content-between align-items-center`}>
              <h5>Tổng </h5>
              <h5>130.000 VNĐ</h5>
            </div>
            <div className={`d-flex justify-content-between align-items-center`}>
              <p>Mã giảm giá áp dụng</p>
              <p className={`text-decoration-line-through ${styles.discount}`}>- 500.000 VNĐ</p>
            </div>
            <div className={`d-flex justify-content-between align-items-center ${styles.total}`}>
              <h5>Tổng thanh toán</h5>
              <h5>130.000 VNĐ</h5>
            </div>
            <div className={styles.checkoutBtn}>
              <Link to="/xác-nhan-thanh-toan" className="text-decoration-none">Thanh toán</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
