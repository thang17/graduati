import React from "react";
import styles from "../Footer/Footer.module.css";
import logo from "../../asstes/image/logo.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import  payment  from "../../asstes/images/payment.png"

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className={`${styles.FooterBox} col align-items-start`}>
            <a
            href="/"
            className=" align-items-center col-md-3 mb-5 "
          >
            <img alt="Image" width={100} height={50} src={logo} style={{filter: "drop-shadow(2px 4px 6px black)"}}/>
          </a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.
              </p>
              <div className={styles.FooterShare}>
                 <a href="#"><FacebookIcon sx={{fontSize: '2rem'}}/></a>
                 <a href="#"><TwitterIcon sx={{fontSize: '2rem'}}/></a>
                 <a href="#"><InstagramIcon sx={{fontSize: '2rem'}}/></a>
                 <a href="#"><LinkedInIcon sx={{fontSize: '2rem'}}/></a>
              </div>
          </div>
          <div className={`${styles.FooterBox} col align-items-start`}>
            
              <h4 className="fw-bold mb-0">Thông tin liên hệ</h4>
              <a href="#" className={styles.FooterLinks}><i><LocalPhoneIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}} /></i> +199663358</a>
              <a href="#" className={styles.FooterLinks}><i><LocalPhoneIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> +199663358</a>
              <a href="#" className={styles.FooterLinks}><i><EmailIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> abc@gmail.com</a>
              <a href="#" className={styles.FooterLinks}><i><MapIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> Ha Dong, Nam Tu Liem, Ha Noi</a>
            
          </div>
          <div className={`${styles.FooterBox} col align-items-start`}>
            
              <h4 className="fw-bold mb-0">Quick Links</h4>
              <a href="#" className={styles.FooterLinks}><i><ArrowForwardIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> Trang chủ</a>
              <a href="#" className={styles.FooterLinks}><i><ArrowForwardIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> Giới thiệu</a>
              <a href="#" className={styles.FooterLinks}><i><ArrowForwardIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> Sản Phẩm</a>
              <a href="#" className={styles.FooterLinks}><i><ArrowForwardIcon sx={{color: "#ff7800", paddingRight: "0.5rem", fontSize: "2rem"}}/></i> Trợ Giups</a>
           
          </div>
          <div className={`${styles.FooterBox} col align-items-start`}>
            
              <h4 className="fw-bold mb-0">Bản tin</h4>
              <div className={`${styles.map} Larger shadow`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.973536417997!2d105.77400551538915!3d20.99369789434913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345349877de467%3A0x8f9320394b437894!2zNDUgUC4gxJDhuqFpIExpbmgsIFRydW5nIFbEg24sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655187655522!5m2!1svi!2s"
                width="600"
                height="200"
                style={{border: 0, width: "100%"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
              <img alt="" src={payment} className={styles.paymentImg}/>
            
          </div>
        </div>
          <div className="pb-2 border-bottom"></div>
      </div>
      </div>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
         <p className={styles.copyright}>@Copyright GoFood</p>
      </div>
    </>
  );
};

export default Footer;
