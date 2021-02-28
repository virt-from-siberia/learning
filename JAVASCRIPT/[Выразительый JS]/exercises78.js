function returnMinor(a, b) {
  a < b ? console.log(a) : console.log(b);
}

function countBs(string) {
  let findedUnicode = 1042;
  let conut = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === findedUnicode) {
      conut = conut + 1;
    }
  }
  // var n = string.charCodeAt(0);
  console.log(conut);
}

function countPrinterCharts(string, findChart) {
  let find = findChart.toString().charCodeAt(0);
  let conut = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === find) {
      conut = conut + 1;
    }
  }
  // var n = string.charCodeAt(0);
  console.log(conut);
}

returnMinor(21, 19);
countBs("234ddВВ234234");
countPrinterCharts("234ddВВ234234", 2);
