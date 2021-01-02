'use strict';
{
    const configurable = function(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.configurable = value;
        };
    };

    class Point {
        private _x: number;
        constructor(x: number) {
            this._x = x;
        }

        @configurable(false)
        readX() {
            return this._x;
        }
    }

    delete Point.prototype.readX
}