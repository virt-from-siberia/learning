import { observable, computed, action } from "mobx";

class Cart {
  @observable products = getProducts();

  // NOTE: REDUCER
  @computed get total() {
    return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
  }

  @action change(i, cnt) {
    this.products[i].current = cnt;
  }
  @action remove(i) {
    this.products.splice(i, 1).current = cnt;
  }
}

export default new Cart();

//TODO: SERVER API
function getProducts() {
  console.log("get");
  return [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10,
      current: 1
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5,
      current: 2
    },
    {
      id: 103,
      title: "Nokia 3310",
      price: 5000,
      rest: 2,
      current: 1
    },
    {
      id: 105,
      title: "Huawei ZZ",
      price: 15000,
      rest: 8,
      current: 1
    }
  ];
}
