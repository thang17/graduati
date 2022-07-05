import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebars from "../../Pages/Office/Sidebars/Sidebars";
import RegistrationVerification from "../../Pages/Office/Pages/RegistrationVerification/RegistrationVerification";

const OficeLayout = () => {
  return (
    <>
      <div style={{ display: `flex` }}>
        <BrowserRouter>
         <Sidebars />
         <Route exact path="/office/Xac-thuc-dang-ky" component={RegistrationVerification} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default OficeLayout;
