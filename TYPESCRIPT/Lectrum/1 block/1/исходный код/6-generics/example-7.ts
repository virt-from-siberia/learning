{
    const readLength = function <T>(arg: Array<T>): Array<T> {
        console.log(arg.length);
        return arg;
    };
    readLength<number>([1,2,3]);
}