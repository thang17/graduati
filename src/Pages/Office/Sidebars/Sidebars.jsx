import React, { useEffect, useState } from "react";
import styles from "../../Admin/Sidebars/Sidebars.module.css";
import "./Sidebars.css";
import logo from "../../../asstes/images/logo.svg";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toSlug } from "../../../extensions/ToSlug";
import { NavLink } from "react-router-dom";
import { getToken, getName } from "../../../Utils/Common";

const Sidebars = () => {
  const nameUser = getName();
  const token = getToken();
  const page = window.location.href.split("/")[3];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    const spans = document.querySelectorAll(`.${styles.accordionContent}>span`);
    for (let i = 0; i < spans.length; i++) {
      if (toSlug(spans[i].innerHTML) === page) {
        Object.assign(spans[i].style, {
          fontWeight: "bold",
          color: `#1A358F`,
        });
      }
    }
  }, [page]);
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.head}`}>
          <div className={`${styles.headContent}`}>
            {/* <Link to="/" > */}
            <img src={logo} alt="" className={styles.logoImg} />
            {/* </Link>  */}
          </div>
          <p
            style={{
              fontSize: `12px`,
              marginTop: `8px`,
              color: "#1d1d1d",
              fontWeight: "bold",
              fontFamily: "Heebo",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Hệ thống quản lý GoFood
          </p>
        </div>
        <div className={`${styles.content}`}>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary>
              <Typography className={`${styles.accordionCaption}`}>
                <EmailIcon className={`${styles.accordionIcon}`} />
                <span>Xác thực</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link to='/office/Xac-thuc-dang-ky'>
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>Xác thực đăng ký</span>
                </Typography>
              </Link>
              <Link to={`/${toSlug(`Yêu cầu 2`)}`}>
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>Yêu cầu 2</span>
                </Typography>
              </Link>
              <Link to={`/${toSlug(`Yêu cầu 3`)}`}>
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>Yêu cầu 3</span>
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
          <AccordionSummary>
            <Typography>
              <SettingsIcon className={`${styles.accordionIcon}`} />
              <span>Xử lý khiếu nại</span>
            </Typography>
          </AccordionSummary>
        </div>
        <div className={`${styles.account}`}>
          <div className={`${styles.accountImg}`}>
            <AccountCircleIcon />
          </div>
          <div className={`${styles.accountContent}`}>
            {token ? (
              <>
                <p className={`${styles.accountName}`}>{nameUser}</p>
                <div className={`${styles.accountBtn}`}>
                  <Link to="/thong-tin-ca-nhan">Thông tin cá nhân</Link>
                </div>
              </>
            ) : (
              <>
                <p className={`${styles.accountName}`}>Tên đăng nhập</p>
                <div className={`${styles.accountBtn}`}>
                  <Link to="/dang-nhap">Đăng nhập</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
