import React from "react";
import styles from "../Sidebar/Sidebar.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
  //     const { data, action } = React.useContext("")
  //     const { renderProduct, setRenderProduct } = action
  //     function valuetext(value) {
  //         return `${value} VNĐ`;
  //       }
  //       const [value, setValue] = React.useState([0, 500000]);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //     setRenderProduct({type:"price",payload:value})
  //   };
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarCategory}>
          <h3 className={styles.sidebarCategoryTitle}>Danh mục sản phẩm</h3>
          <ul className={styles.sidebarMenu}>
            <li className={styles.sidebarMenuItem}>
              <a
                className={`${styles.sidebarMenuLink} text-decoration-none`}
                href=""
              >
                Tất cả
              </a>
            </li>
            <li className={styles.sidebarMenuItem}>
              <a
                className={`${styles.sidebarMenuLink} text-decoration-none`}
                href=""
              >
                Đồ ăn mặn
              </a>
            </li>
            <li className={styles.sidebarMenuItem}>
              <a
                className={`${styles.sidebarMenuLink} text-decoration-none`}
                href=""
              >
                Đồ chay
              </a>
            </li>
            <li className={styles.sidebarMenuItem}>
              <a
                className={`${styles.sidebarMenuLink} text-decoration-none`}
                href=""
              >
                Đồ uống
              </a>
            </li>
          </ul>
        </div>

        <div className={`sidebarPrice ${styles.sidebarPrice}`}>
          <h3 className={styles.title}>Giá sản phẩm</h3>
          <Box sx={{ width: "90%" }}>
            <Slider
              getAriaLabel={() => "Price range"}
              min={0}
              step={1000}
              max={2000000}
              // value={value}
              // onChange={handleChange}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
            />
          </Box>
          {/* {`${value[0]} VNĐ - ${value[1]} VNĐ`} */}0 VNĐ - 100.000 VNĐ
        </div>
      </div>
    </>
  );
};

export default Sidebar;
