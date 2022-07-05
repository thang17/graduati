import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "./BreadCrumb.module.css";
import SettingsIcon from "@mui/icons-material/Settings";

function BreadCrumb({ breadItem }) {
  return (
    <div className={`${styles.main}`}>
      <Breadcrumb>
        <SettingsIcon className={`${styles.settingIcon}`} />
        {breadItem.map((breadItem, index) => (
          <Breadcrumb.Item
            key={index}
            href={breadItem.href}
            active={breadItem.isActive}
            className={
              breadItem.isActive
                ? `${styles.breadLink_active}`
                : `${styles.breadLink}`
            }
          >
            {breadItem.title}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
