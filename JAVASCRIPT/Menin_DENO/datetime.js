import {
    parseDate,
    parseDateTime,
    dayOfYear,
    currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2019-03-11T03:24:00")));
console.log(currentDayOfYear()); // output: 70 // output: ** depends on when you run it :) **
