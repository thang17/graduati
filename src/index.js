import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../src/Pages/Login/Login"
import SignUp from './Pages/SignUp/SignUp';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Details from './Pages/Details/Details';
import Introduce from './Pages/Introduce/Introduce';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import Contact from './Pages/Contact/Contact';
import Sidebars from "./Admin/Sidebars/Sidebars"
import StoreList from "./Admin/Pages/StoreList/StoreList";
import ProductManagement from "./Admin/Pages/ProductManagement/ProductManagement"
import AddProducts from "./Admin/Pages/ProductManagement/AddProducts/AddProducts"
import EmployeeManager from "./Admin/Pages/EmployeeManager/EmployeeManager"
import OfficeManager from "./Admin/Pages/OfficeManager/OfficeManager"
import Checkout from './Pages/Checkout/Checkout';
import EditProduct from "./Admin/Pages/ProductManagement/EditProduct/EditProduct"
import OrderManager from "./Admin/Pages/OrderManager/OrderManager"
import OrderDetail from "./Admin/Pages/OrderManager/OrderDetail/OrderDetail"
import UserManager from './Admin/Pages/UserManager/UserManager'
import UserDetail from './Admin/Pages/UserManager/UserDetail/UserDetail'
import Dashboard from './Admin/Pages/Dashboard/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <div style={{display: "flex"}}>
  <Sidebars /> */}
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/thong-tin-cua-hang" component={ProductDetails} />
      <Route exact path="/chi-tiet-san-pham" component={Details} />
      <Route exact path="/gioi-thieu" component={Introduce} />
      <Route exact path="/cua-hang" component={ShoppingCart} />
      <Route exact path="/lien-he" component={Contact} />
      <Route exact path="/thanh-toan" component={Checkout} />
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/quan-ly-cua-hang" component={StoreList} />
      <Route exact path="/admin/quan-ly-san-pham" component={ProductManagement} />
      <Route exact path="/admin/quan-ly-nhan-vien" component={EmployeeManager} />
      <Route path="/admin/quan-ly-van-phong" component={OfficeManager} />
      <Route path="/admin/them-san-pham" component={AddProducts} />
      <Route path="/admin/sua-san-pham" component={EditProduct} />
      <Route exact path="/admin/quan-ly-don-hang" component={OrderManager} />
      <Route exact path="/admin/chi-tiet-don-hang" component={OrderDetail} />
      <Route exact path="/admin/quan-ly-nguoi-dung" component={UserManager} />
      <Route exact path="/admin/chi-tiet-nguoi-dung" component={UserDetail} />
    </Switch>
  {/* </div> */}
  </BrowserRouter>
);                    
reportWebVitals();
