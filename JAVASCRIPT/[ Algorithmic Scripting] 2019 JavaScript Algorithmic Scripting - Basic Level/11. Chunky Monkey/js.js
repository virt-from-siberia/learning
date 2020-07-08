//CASE BASIC

function chuckyArrayGroups(arr, size) {

    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) {
            temp.push(arr[a]);
        } else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) {
        result.push(temp);
        return result;
    }
}


console.log(chuckyArrayGroups(['a', 'b', 'c', 'd'], 2));
console.log(chuckyArrayGroups([1, 2, 3, 4, 5], 3));
console.log(chuckyArrayGroups([0, 2, 3, 4, 5], 2));
console.log(chuckyArrayGroups([0, 2, 3, 4], 4));

//CASE INTERMEDIATE

function chuckyArrayGroupsINTERMEDIATE(arr, size) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i += size) {
        arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}
console.log(chuckyArrayGroupsINTERMEDIATE(['a', 'b', 'c', 'd'], 2));
console.log(chuckyArrayGroupsINTERMEDIATE([1, 2, 3, 4, 5], 3));
console.log(chuckyArrayGroupsINTERMEDIATE([0, 2, 3, 4, 5], 2));
console.log(chuckyArrayGroupsINTERMEDIATE([0, 2, 3, 4], 4));

//CASE ADVANCED