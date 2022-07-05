import React from "react";
import styles from "../confirm/Restaurant.module.css";
import office from "../../asstes/images/office.svg";

const Restaurant = () => {
  return (
    <>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <img alt="Image" src={office} className="img-fluid" />
              <ul className={`${styles.circles}`}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3 className={`${styles.Office} mb-4 text-center`}>
                     XÁC NHẬN VĂN PHÒNG
                    </h3>
                    <form>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Mã OTP
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputPassword1"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Mã Số Kinh Doanh
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputPassword1"
                          required
                        />
                      </div>
                      <button className={`${styles.btn} mt-3`}>Xác nhận</button>
                    </form>
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

export default Restaurant;
