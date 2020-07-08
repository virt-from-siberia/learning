var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";
for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}
console.log(urlFriendly);

const names = ["aleks", "iven", "tatyana", "michail"];

const newNames = names.map(newName => ({ name: newName }));
console.log(newNames);

const schools = {
  Yorktown: 10,
  "Washington & Lee": 2,
  Wakefield: 5
};

const schoolArray = Object.keys(schools).map(key => ({
  name: key,
  wins: schools[key]
}));

console.log(schoolArray);

const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
  console.log("==========  MAX " + max, "age" + age);
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);
console.log("maxAge", maxAge);

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized"

const userLogs = userName => message =>
  console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

// getFakeMembers(20).then(
//   members => log(`successfully loaded ${members.length} members`),
//   error => log("encountered an error loading members")
// );

// grandpa23 -> попытка загрузки 20 мнимых сотрудников
// grandpa23 -> успешно загружены 20 сотрудников
// grandpa23 -> попытка загрузки 20 мнимых сотрудников
// grandpa23 -> при загрузке сотрудников возникла ошибкаs

// TODO: КАРРИРОВАНИЕ

function volume(l) {
  return w => {
    return h => {
      return l + " " + w + " " + h;
    };
  };
}
let x = volume("aleskye")("2asdasd0")("90");

console.log(x);
