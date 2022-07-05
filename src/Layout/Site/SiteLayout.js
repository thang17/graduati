import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../../Pages/Site/Login/Login"
import SignUp from '../../Pages/Site/SignUp/SignUp';
import ProductDetails from '../../Pages/Site/ProductDetails/ProductDetails';
import Details from '../../Pages/Site/Details/Details';
import Introduce from '../../Pages/Site/Introduce/Introduce';
import ShoppingCart from '../../Pages/Site/ShoppingCart/ShoppingCart';
import Contact from '../../Pages/Site/Contact/Contact';
import Blog from '../../Pages/Site/Blog/Blog'
import DailyMenu from '../../Pages/Site/DailyMenu/DailyMenu';
import Checkout from '../../Pages/Site/Checkout/Checkout';
import ConfirmBill from '../../Pages/Site/ConfirmBill/ConfirmBill';
import Home from "../../Pages/Site/Home/Home"

const SiteLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/thong-tin-cua-hang" component={ProductDetails} />
        <Route exact path="/chi-tiet-san-pham" component={Details} />
        <Route exact path="/gioi-thieu" component={Introduce} />
        <Route exact path="/cua-hang" component={ShoppingCart} />
        <Route exact path="/lien-he" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/thanh-toan" component={Checkout} />
        <Route exact path="/xác-nhan-thanh-toan" component={ConfirmBill} />
        <Route exact path="/thuc-don-hang-ngay" component={DailyMenu} />
      </Switch>
    </>
  );
};

export default SiteLayout;
