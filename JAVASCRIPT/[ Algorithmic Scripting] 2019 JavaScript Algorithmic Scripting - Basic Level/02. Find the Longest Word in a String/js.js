//GET LONGEST BASIC
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLengh = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLengh) {
            maxLengh = words[i].length;
        }
    }
    return maxLengh;
}

let article = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam hic officiis accusamus velit excepturi';
let article2 = 'ex molestiae. Inventore illum, quis repellendus sit ullam illo, enim ipsam ipsum perspiciatis quas exercitationem?';


console.log(findLongestWord(article));
console.log(findLongestWord(article2));



//GET LONGEST INTERMEDIATE
function findLongestWordIntermediate(str) {
    return str.split(' ').reduce(function (x, y) {
        return Math.max(x, y.length);
    }, 0);
}

console.log(findLongestWordIntermediate(article));
console.log(findLongestWordIntermediate(article2));

//GET LONGEST ADVANCED
function findLongestWordAvdanced(str) {
    str = str.split(' ');
    if (str.length == 1) {
        return str[0].length;
    }
    if (str[0].length >= str[1].length) {
        str.splice(1, 1);
        return findLongestWordAvdanced(str.join(' '));
    }
    if (str[0].length <= str[1].length) {
        return findLongestWordAvdanced(str.slice(1, str.length).join(' '));
    }
    return str.length;
}

console.log(findLongestWordAvdanced(article));
console.log(findLongestWordAvdanced(article2));