import React from "react";
import styles from "../../Pages/ShoppingCart/ShoppingCart.module.css";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../Pages/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../ShoppingCart/Sidebar/Sidebar"
import SaleOff from "../ShoppingCart/SaleOff/SaleOff"
import ShopProducts from "../ShoppingCart/ShopProducts/ShopProducts"

const ShoppingCart = () => {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/ShoppingCart",
      title: "Cửa hàng",
      isActive: true,
    },
  ];
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
      <div className={styles.ShoppingCart}>
      <Breadcrumbs breadItem={breadcrumItem}/>
      </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <SaleOff />
            <ShopProducts />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
