import { observable, computed, action } from "mobx";

export default class {
    @observable items = [];

    constructor(rootStore) {
        this.rootStore = rootStore;

        this.api = this.rootStore.api.products;
    }

    @computed get productsMap() {
        let map = {};

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
        });

        return map;
    }

    @action load() {
        this.api.all().then(data => {
            this.items = data
        })

    }

    getById(id) {
        let index = this.productsMap[id];

        if (index === undefined) {
            return null;
        }

        return this.items[index];
    }
}
