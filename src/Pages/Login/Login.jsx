import React from "react";
import styles from "../Login/Login.module.css";
import FBImg from "../../asstes/images/social-icons/FBImg.png";
import GmailImg from "../../asstes/images/social-icons/GmailImg.png";
import logoMau from "../../asstes/images/logo.svg";

function Login() {
  return (
    <div className={`${styles.main} row`}>
      <div className={`${styles.sideBar} container col-5`}>
        <div className={`${styles.Login} mb-3`}>
          <a href="/" className={`${styles.logo}`}>
            <img src={logoMau} alt="" />
          </a>
          <h5 className={`${styles.title} mb-5`}>Chào mừng bạn quay trở lại !</h5>
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
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>
                <input type="checkbox" /> Nhớ tài khoản
              </span>

              <a
                href="/login"
                style={{ fontStyle: `italic`, color: `#74788d` }}
              >
                Quên mật khẩu?
              </a>
            </div>
            <button className={`${styles.btn}`}>Đăng nhập</button>
            <p style={{ textAlign: `center` }}>Đăng nhập với</p>
            <div className={`${styles.social}`}>
              <img src={FBImg} alt="" />
              <img src={GmailImg} alt="" />
            </div>
            <p style={{ textAlign: `center` }}>
              Bạn chưa có tài khoản ?
              <a href="#" className={`${styles.changeForm}`}>
                Đăng ký ngay
              </a>
            </p>
          </form> 
        </div>
      </div>
      <div className={`${styles.banner} col-7`}>
        <div className={`${styles.context}`}>
        <h1>Chào mừng bạn đến với GoFood</h1>
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

export default Login;
