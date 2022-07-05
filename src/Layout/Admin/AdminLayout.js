import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditProduct from '../../Pages/Admin/Pages/ProductManagement/EditProduct/EditProduct'
import OrderManager from '../../Pages/Admin/Pages/OrderManager/OrderManager' 
import OrderDetail  from "../../Pages/Admin/Pages/OrderManager/OrderDetail/OrderDetail"
import UserManager from '../../Pages/Admin/Pages/UserManager/UserManager'
import UserDetail from '../../Pages/Admin/Pages/UserManager/UserDetail/UserDetail'
import Dashboard from '../../Pages/Admin/Pages/Dashboard/Dashboard'
import Sidebars from "../../Pages/Admin/Sidebars/Sidebars"
import StoreList from "../../Pages/Admin/Pages/StoreList/StoreList";
import ProductManagement from "../../Pages/Admin/Pages/ProductManagement/ProductManagement"
import AddProducts from "../../Pages/Admin/Pages/ProductManagement/AddProducts/AddProducts"
import EmployeeManager from "../../Pages/Admin/Pages/EmployeeManager/EmployeeManager"
import OfficeManager from "../../Pages/Admin/Pages/OfficeManager/OfficeManager"
const AdminLayout = () => {
  return (
    <div style={{ display: `flex` }}>
      <BrowserRouter>
        <Sidebars />
        <Switch>
           <Route exact path="/admin/dashboard" component={Dashboard} />
           <Route exact path="/admin/quan-ly-cua-hang" component={StoreList} />
           <Route
             exact
             path="/admin/quan-ly-san-pham"
             component={ProductManagement}
           />
           <Route
             exact
             path="/admin/quan-ly-nhan-vien"
             component={EmployeeManager}
           />
           <Route path="/admin/quan-ly-van-phong" component={OfficeManager} />
           <Route path="/admin/them-san-pham" component={AddProducts} />
           <Route path="/admin/sua-san-pham" component={EditProduct} />
           <Route
             exact
             path="/admin/quan-ly-don-hang"
             component={OrderManager}
           />
           <Route
             exact
             path="/admin/chi-tiet-don-hang"
             component={OrderDetail}
           />
           <Route
             exact
             path="/admin/quan-ly-nguoi-dung"
             component={UserManager}
           />
           <Route
             exact
             path="/admin/chi-tiet-nguoi-dung"
             component={UserDetail}
           />
        </Switch>
      </BrowserRouter>
        
    </div>
  );
};

export default AdminLayout;
