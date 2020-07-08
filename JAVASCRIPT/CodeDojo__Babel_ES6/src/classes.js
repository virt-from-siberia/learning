console.log('=============== CLASSES ===============');

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('creating');
    }
    complited() {
        this.done = 1;
        console.log(`missin ${this.title} Its have been done`);
    }

    static getDefaultTitle() {
        return 'Задача';
    }


    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error(' E R R O R');
        }
    }
}


Task.count = 0;

let task = new Task('delite command');
let task2 = new Task('buy products');
let task3 = new Task();

console.log(typeof task);
console.log(task instanceof Task);
console.log(task.title);
console.log(task2.title);


console.log(task instanceof Task);
console.log(task !== task2);
console.log(Task.count);
console.log(task3.title);

task2.complited();


console.log(task.done, task._done);