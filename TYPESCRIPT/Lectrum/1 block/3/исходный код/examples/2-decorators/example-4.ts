{
    const enumerable = function(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.enumerable = value;
        };
    };

    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }

        @enumerable(true)
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    for (const property in Greeter.prototype) {
        console.log(property);
    }
}