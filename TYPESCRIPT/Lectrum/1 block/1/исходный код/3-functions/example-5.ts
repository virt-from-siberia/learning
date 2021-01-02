type someType = number[]
type customType = string |number | someType

function buildLetters(firstLetter: string, ...restOfLetters: customType[]) {
  return firstLetter + ' ' + restOfLetters.join(' ');
}

let letters = buildLetters('a', 'b', 'c', 'd', 12);

console.log(letters);
