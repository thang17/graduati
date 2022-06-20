import React from "react";
import styles from "../../Pages/Contact/Contact.module.css";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../Pages/Breadcrumbs/Breadcrumbs";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Footer from "../../components/Footer/Footer";
import map from "../../asstes/images/map.jpg";

const Contact = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/Contact",
      title: "Trợ giúp",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.Contact}>
        <div className={` container mt-5 `}>
          <Breadcrumbs breadItem={breadcrumItem} />

          <div className={styles.ContactItem}>
            <div className="align-items-center mt-4 p-3 my-3 text-white bg-purple rounded Larger shadow">
              <div className={`${styles.title} mt-2 mb-5`}>
                <p>Liên hệ với chúng tôi</p>
                <h2>Liên Hệ Với Chúng Tôi</h2>
              </div>
              <div className="">
                <form className="row g-3 mb-4">
                  <div className="col-md-6 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Tên"
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <input
                      type="Email"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="E-Email"
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Điện thoại"
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Tên cửa hàng"
                    />
                  </div>

                  <div class="mb-3 mt-4">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tin nhắn của bạn"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="gridCheck"
                        style={{ color: "#333" }}
                      >
                        Tôi đồng ý với các điều khoản và chính sách bảo mật
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className={styles.btn}>
                      Gửi tin nhắn <ArrowRightIcon sx={{ fontSize: "40px" }} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.map} Larger shadow`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.973536417997!2d105.77400551538915!3d20.99369789434913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345349877de467%3A0x8f9320394b437894!2zNDUgUC4gxJDhuqFpIExpbmgsIFRydW5nIFbEg24sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655187655522!5m2!1svi!2s"
                width="600"
                height="450"
                style={{border: 0, width: "100%"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
