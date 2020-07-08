import cartStore from './cart';
import productsStore from './products';
import orderStore from './order';

import * as products from '~/api/products'

class RootStore {
    constructor() {
        this.api = {
            products: products
        }

        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
    }
}

export default new RootStore();