import Cart from "~p/Cart";
import Order from "~p/Order";
import Result from "~p/Result";
import Page404 from "~p/error404";
import ProductsList from "~p/products/list";
import ProductsItem from "~p/products/item";

let routes = [
  {
    name: "home",
    url: "/",
    component: ProductsList,
    exact: true
  },
  {
    name: "product",
    url: "/products/:id",
    component: ProductsItem,
    exact: true
  },
  {
    name: "cart",
    url: "/cart",
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
    url: "**",
    component: Page404
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url;
  }
});

let urlBuilder = function(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name]; // news/:id

  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }

  return url;
};

export default routes;
export { routesMap, urlBuilder };
