{
    // type guards
    const isNumber = function(x: any): x is number {
        return typeof x === "number";
    };

    const f = function (a:string, b: number | string): number {
        const length = a.length;
        const value = isNumber(b) ? b : b.length;

        return length + value;
    }
}