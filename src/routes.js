/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Compras from "views/Compras";
import Dashboard from "views/Dashboard.js";
import VR from "views/RealidadVirtual";
import Web from "views/Web.js";

var routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-laptop",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/web",
    name: "Aplicaciones Web",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-html5",
    component: Web,
    layout: "/admin",
  },
  {
    path: "/realidadVirtual",
    name: "Realidad Virtual",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-app",
    component: VR,
    layout: "/admin",
  },
  {
    path: "/Compras",
    name: "Comprar",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-cart",
    component: Compras,
    layout: "/admin",
  }
];
export default routes;
