import React from "react";
import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import { observable, computed, action } from "mobx";

class Router {
  routes = {
    cart: () => <Cart />,
    order: () => <Order />,
    result: () => <Result />
    //404 error
  };
  @observable activeRoute = "cart";

  @computed get component() {
    return this.routes[this.activeRoute]();
  }

  @action moveTo(route) {
    //404 error
    this.activeRoute = route;
  }
}
export default new Router();
