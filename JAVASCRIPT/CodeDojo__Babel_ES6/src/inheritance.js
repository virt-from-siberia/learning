console.log('=============== INHERITANCE ===============');

class InheritanceTask {
    constructor(title) {
        this._title = title;
        this.done = false;
        console.log('Creating mission');
        InheritanceTask.count = 1;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
    complite() {
        this.done = true;
        console.log(`Задача ${this.title}  выполнена`);
    }
    static getDefaultTitle() {
        return 'Задача';
    }
}

InheritanceTask.count = 0;

class SubInheritanceTask extends InheritanceTask {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }

    //ПЕРЕОПРЕДЕЛЕНИЕ РОДИТЕЛЬСКОГО МЕТОДА
    complite() {
        super.complite();
        console.log(`Подзадача ${this.title}  выполнена`);
    }
}


console.log(SubInheritanceTask.getDefaultTitle());
console.log(SubInheritanceTask.count);

let inheritanceTask = new InheritanceTask('Изучить java-script');
let subInheritanceTask = new SubInheritanceTask('Изучить ES6', inheritanceTask);

console.log(inheritanceTask);
console.log(subInheritanceTask);

console.log(subInheritanceTask instanceof SubInheritanceTask);
console.log(subInheritanceTask instanceof InheritanceTask);

inheritanceTask.complite();
subInheritanceTask.complite();