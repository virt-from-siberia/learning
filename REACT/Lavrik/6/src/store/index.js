import cartStore from "./cart";
import productStore from "./products";
import orderStore from "./order";

class rootStore {
  constructor() {
    this.cart = new cartStore(this);
    this.products = new productStore(this);
    this.order = new orderStore(this);
  }
}

export default new rootStore();
