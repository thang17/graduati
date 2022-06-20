import React from 'react'
import styles from "../../Pages/Introduce/Introduce.module.css";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../Pages/Breadcrumbs/Breadcrumbs";

const Introduce = () => {
    const breadcrumItem = [
        {
          href: "/",
          title: "Trang chủ",
          isActive: false,
        },
    
        {
          href: "/Introduce",
          title: "Giới thiệu",
          isActive: true,
        },
      ];
  return (
    <>
     <Header />
     <div className={`${styles.Introduce} container mt-5`}>
     <Breadcrumbs breadItem={breadcrumItem} />
     </div>
    </>
  )
}

export default Introduce