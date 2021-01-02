{
    const readLength = function <T>(arg: T): T {
        if(arg instanceof String){
            console.log(arg.length);  // Error: T doesn't have .length
        }
        return arg;
    };
    readLength<number>(1)
}