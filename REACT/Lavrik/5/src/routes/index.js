// NOTE: ROUTER ===========================
import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import page404 from "~p/error404";
import post from "~p/post";

let routes = [
  {
    name: "home",
    url: "/",
    component: Cart,
    exact: true
  },
  {
    name: "order",
    url: "/order",
    component: Order,
    exact: true
  },
  {
    name: "result",
    url: "/done",
    component: Result,
    exact: true
  },
  {
    url: "/news/:url",
    component: post,
    exact: true
  },
  {
    url: "**",
    component: page404
  }
];

let routesMap = {};
routes.forEach(route => {
  routesMap[route.name] = route.url;
});

export default routes;
export { routesMap };
