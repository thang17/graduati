import React, { useState } from "react";
import styles from "../SignUp/SignUp.module.css";
// import FBImg from "../../assets/images/social-icons/FBImg.png";
// import GmailImg from "../../assets/images/social-icons/GmailImg.png";
import logoMau from "../../asstes/images/logo.svg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function SignUp() {
  function detectBlank(e) {
    const ele = e.target;
    const eleParent = ele.parentNode;
    if (!ele.value) {
      eleParent.style.color = `red`;
      ele.style.border = `1px solid red`;
      ele.placeholder = "Không được để trống...";
    }
  }

  function backToNormal(e) {
    const ele = e.target;
    const eleParent = ele.parentNode;

    eleParent.style.color = `#000`;
    ele.style.border = `1px solid #ddd `;
    ele.placeholder = "";
  }
  function checkEmail(e) {}

  return (
    <div className={`${styles.main} row`}>
      <div className={`${styles.sideBar} col-5`}>
        <div className="container">
        <div className={`${styles.signUp}`}>
          {/* <a href="/" className={`${styles.logo}`}>
            <img src={logoMau} alt="" />
          </a> */}

          <h4 className={`${styles.title} mb-5`}>Đăng ký tài khoản</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tên tài khoản
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tên nhà hàng
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Chọn quyền
              </label>
            <select class="form-select" aria-label="Default select example">
             <option value="1">admin</option>
             <option value="2">Register</option>
           </select>
            </div>
            <button className={`${styles.btn}`}>Đăng Ký</button>
            <p style={{ textAlign: `center` }}>
              Bạn đã có tài khoản ?
              <Link to="/Login" className={`${styles.changeForm}`}>
                Đăng nhập ngay
              </Link>
            </p>
          </form>
        </div>
        </div>
      </div>
      <div className={`${styles.banner} col-7`}>
        <div className={`${styles.context} text-center`}>
          <h2>Hãy đăng ký để trở thành viên GoFood</h2>
        </div>

        <div className={`${styles.area}`}>
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
      </div>
    </div>
  );
}

export default SignUp;
