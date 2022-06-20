import React, { useEffect, useState } from "react";
import styles from "../../Admin/Sidebars/Sidebars.module.css";
import "./Sidebars.css";
import logo from "../../asstes/images/logo.svg";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { toSlug } from "../../extensions/ToSlug";
import { NavLink } from "react-router-dom";
import { getToken, getName } from "../../Utils/Common";
import GroupIcon from '@mui/icons-material/Group';

const Sidebars = () => {
  const [showNoti, setShowNoti] = useState(false);
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
              justifyContent: "center"
            }}
          >
            Hệ thống quản lý GoFood
          </p>
        </div>
        <div className={`${styles.content}`}>
            <AccordionSummary>
              <NavLink to="/admin">
                <Typography className={`${styles.accordionCaption}`}>
                  <HomeIcon className={`${styles.accordionIcon}`} />
                  <span>Dashboard</span>
                </Typography>
              </NavLink>
            </AccordionSummary>
            <AccordionSummary>
              <NavLink to="/admin/quan-ly-san-pham">
                <Typography className={`${styles.accordionCaption}`}>
                  <TvIcon className={`${styles.accordionIcon}`} />
                  <span> Sản phẩm </span>
                </Typography>
              </NavLink>
            </AccordionSummary>
          <AccordionSummary>
            <NavLink to="/admin/quan-ly-don-hang">
              <Typography className={`${styles.accordionCaption}`}>
                <LocalShippingIcon className={`${styles.accordionIcon}`} />
                <span>Đơn Hàng</span>
              </Typography>
            </NavLink>
          </AccordionSummary>
          <AccordionSummary>
            <NavLink to="/admin/quan-ly-nguoi-dung">
              <Typography className={`${styles.accordionCaption}`}>
                <GroupIcon className={`${styles.accordionIcon}`} />
                <span>Người dùng</span>
              </Typography>
            </NavLink>
          </AccordionSummary>

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
              <Link to={`/${toSlug(`Yêu cầu 1`)}`}>
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>Yêu cầu 1</span>
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

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary>
              <Typography>
                <SettingsIcon className={`${styles.accordionIcon}`} />
                <span>Quản lý</span>
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <NavLink to="/admin/quan-ly-cua-hang">
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>
                    Quản lý danh sách nhà hàng
                  </span>
                </Typography>
              </NavLink>
              <Link to="/admin/quan-ly-nhan-vien">
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>
                    Quản lý danh sách nhân viên
                  </span>
                </Typography>
              </Link>
              <Link to="/admin/quan-ly-van-phong">
                <Typography className={`${styles.accordionContent}`}>
                  <span style={{ cursor: `pointer` }}>
                    Quản lý thông tin văn phòng
                  </span>
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
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
