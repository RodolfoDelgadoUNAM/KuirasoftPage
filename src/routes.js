/*
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Creado por creative TIM, Modificado por Rodolfo Delgado (KuiraSoft SAS de CV)

*/
import Compras from "views/Compras";
import Dashboard from "views/Dashboard.js";
import Historia from "views/Historia";
import VR from "views/RealidadVirtual";
import Web from "views/Web.js";
import Contacto from "views/Contacto.js";
import Juegos from "views/Videojuegos";

var routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "NA",
    icon: "tim-icons icon-laptop",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/web",
    name: "Aplicaciones Web",
    rtlName: "NA",
    icon: "tim-icons icon-html5",
    component: Web,
    layout: "/admin",
  },
  {
    path: "/realidadVirtual",
    name: "Realidad Virtual",
    rtlName: "NA",
    icon: "tim-icons icon-app",
    component: VR,
    layout: "/admin",
  },
  {
    path: "/Videojuegos",
    name: "Videojuegos",
    rtlName: "NA",
    icon: "tim-icons icon-controller",
    component: Juegos,
    layout: "/admin",
  },
  {
    path: "/Tienda",
    name: "Tienda",
    rtlName: "NA",
    icon: "tim-icons icon-cart",
    component: Compras,
    layout: "/admin",
  },
  {
    path: "/Historia",
    name: "Historia",
    rtlName: "NA",
    icon: "tim-icons icon-book-bookmark",
    component: Historia,
    layout: "/admin",
  },
  {
    path: "/Contacto",
    name: "Contacto",
    rtlName: "NA",
    icon: "tim-icons icon-email-85",
    component: Contacto,
    layout: "/admin",
  }
];
export default routes;
