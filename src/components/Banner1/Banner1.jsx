import React from "react";
import styles from "../Banner1/Banner1.module.css";
import step1 from "../../asstes/images/step-1.jpg";
import step2 from "../../asstes/images/step-2.jpg";
import step3 from "../../asstes/images/step-3.jpg";
import step4 from "../../asstes/images/step-4.jpg";

const Banner1 = () => {
  return (
    <>
      <div className="mt-5">
      <div className="container text-center">
        <div className={`${styles.BannerText}`}>
          <div className="pricing-header p-4 mt-0 mb-1 mx-auto text-center mb-5">
            <h6 style={{color: "#1A9D5D"}}>Đặt hàng ngay bây giờ!</h6>
            <h2 style={{color: "#142850", textShadow: "0px 2px 3px rgb(173 173 173)"}}>Làm thế nào nó hoạt động</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.Banner1}>
                <img src={step1} alt="" className={styles.Banner1Img} />
                <span>01 STEP</span>
                <div className={styles.thumbarrow}></div>
              </div>
              <h2 className={styles.Banner1Choose}>Chọn món bạn yêu thích</h2>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-3">
              <div className={styles.Banner1}>
                <img src={step2} alt="" className={styles.Banner1Img} />
                <span>02 STEP</span>
                <div className={styles.thumbarrow1}></div>
              </div>
              <h2 className={styles.Banner1Choose}>Chúng tôi sẽ giao hàng tận nơi</h2>
            </div>

            <div className="col-lg-3">
              <div className={styles.Banner1}>
                <img src={step3} alt="" className={styles.Banner1Img} />
                <span>03 STEP</span>
                <div className={styles.thumbarrow2}></div>
              </div>
              <h2 className={styles.Banner1Choose}>Thanh toán khi giao hàng</h2>
            </div>
            <div className="col-lg-3">
              <div className={styles.Banner1}>
                <img src={step4} alt="" className={styles.Banner1Img} />
                <span>04 STEP</span>
              </div>
              <h2 className={styles.Banner1Choose}>Thưởng thức đồ ăn</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner1;
