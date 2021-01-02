interface StringContainer {
    split(): string[];
}

interface NumberContainer {
    round(): number;
}

type Item<T> = {
    id: T,
    container: T extends string ? StringContainer : NumberContainer;
};

const item: Item<number> = {
    id: 1,
    container: {
        round() {
            return 1;
        }
    }
}