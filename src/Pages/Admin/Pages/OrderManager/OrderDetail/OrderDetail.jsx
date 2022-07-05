import React, { useState } from "react";
import styles from "../../OrderManager/OrderDetail/OrderDetail.module.css";
import Breadcrumbs from "../../../../Admin/components/BreadCrumb/BreadCrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import anh from "../../../../../asstes/images/Comrang.jpeg"

const OrderDetail = () => {
  const [img, setImg] = useState("");
  const [status, setStatus] = useState(true);
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/admin/quan-ly-don-hang",
      title: "Quản lý đơn hàng",
      isActive: false,
    },
    {
      href: "/admin/chi-tiet-don-hang",
      title: "Chi tiết đơn hàng",
      isActive: true,
    },
  ];

  function getImg(e) {
    const urlImg = URL.createObjectURL(e.target.files[0]);
    setImg(urlImg);
  }
  return (
    <>
      <div className={styles.OrderDetail}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.DetailsMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Chi tiết hóa đơn
            </p>
          </div>
        </div>
        <div className={`${styles.Details} row mt-5`}>
          <div className={`${styles.formRow} col-md-6`}>
          <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Mã đơn hàng
              </label>
              <input
                type="text"
                id="User"
                value="#123456789"
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
               Tên đơn hàng
              </label>
              <input
                type="text"
                id="User"
                value="Thích Anh Tú"
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Email
              </label>
              <input
                type="text"
                id="User"
                value="abc@gmail.com"
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className={styles.formlabel}>
                Địa chỉ
              </label>
              <input
                type="text"
                id="Address"
                value="Ngõ 50 Ngõ 22,Nguyễn Khánh Toàn,Cầu giấy,Hà Nội"
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className={styles.formlabel}>
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                value="0399785221"
                disabled
                className={styles.formcontrol}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.Describe}>
              <h2>Mô tả chi tiết đơn hàng</h2>
              <div className={styles.DescribText}>
                <div className="row d-flex border-bottom">
                  <div className={`${styles.DescribeOder} col-md-6 `}>
                    <ul>
                      <li>
                        Mã đơn hàng: <p>#123456789</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className={styles.unpaid}>Chưa thanh toán</h6>
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  <div className="col-md-7 d-flex">
                    <div className={styles.DescribeImg}>
                      <img src={anh} alt="" />
                    </div>
                    <div className={`${styles.fruit}`}>
                      <ul>
                        <li>Cà chua</li>
                        <li>
                          Phân loại: <p>Củ quả</p>
                        </li>
                        <li>x1</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.fruit1} col-md-5`}>
                    <span>12/06/2022</span>
                    <p>50.000 VNĐ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.from}`}></div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
