import React from "react";
import styles from "./RegistrationVerification.module.css";
import Breadcrumbs from "../../components/BreadCrumb/BreadCrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import anh from "../../../../asstes/images/food12.png";

const RegistrationVerification = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },

    {
      href: "/Xac-thuc-dang-ky",
      title: "Xác thực đăng ký",
      isActive: true,
    },
  ];
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.Verification}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.leftSide}`}>
          <p className={`${styles.title}`}>
            <ArrowBackIcon />
            Xác thực đăng ký
          </p>
        </div>
        <div className="container">
          <div class="row mt-5 mb-3 ">
            <div class="col-6">
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className={styles.formlabel}>
                  Tên cửa hàng
                </label>
                <input
                  type="text"
                  name="subTitle"
                  className={styles.formcontrol}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className={styles.formlabel}>
                  Mã kinh doanh
                </label>
                <input
                  type="text"
                  name="subTitle"
                  className={styles.formcontrol}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className={styles.formlabel}>
                  Danh sách món ăn
                </label>
                <textarea
                  type="text"
                  name="subTitle"
                  className={styles.formcontrol}
                />
              </div>
            </div>
            <div class="col-6">
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className={styles.formlabel}>
                  Email
                </label>
                <input
                  type="text"
                  name="subTitle"
                  className={styles.formcontrol}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className={styles.formlabel}>
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="subTitle"
                  className={styles.formcontrol}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.formRow} `}>
            <div className={`${styles.formLeft} `}></div>
            <div className={`${styles.formRight} `}>
              <div className={`${styles.buttonSection}`}>
                <button type="button" className={`${styles.btnAdd}`}>
                  Phê duyệt
                </button>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className={`${styles.btnCancel}`}
                >
                  Từ chối
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationVerification;
