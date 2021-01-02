// Class Decorators
{
    const sealed = function(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log('Hello from Decorator');
    };

    @sealed
    class Greeter {
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
            console.log(`Hello ${this.greeting} from Constructor`);
        }
    }

    new Greeter('User');
}