{
    const format = function () {
        return function (target: any, propertyKey: string): any {
            return {
                value: 'default'
            }
        }
    };

    class Greeter {
        @format()
        greeting: string;

        constructor(message: string) {
            console.log(this.greeting);
            // this.greeting = message;
        }
    }

    console.log(new Greeter('test'))
}