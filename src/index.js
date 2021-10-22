/*
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Creado por creative TIM, Modificado por Rodolfo Delgado (KuiraSoft SAS de CV)

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";


import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";



ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <HashRouter>
        <Switch>
          //<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </HashRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
