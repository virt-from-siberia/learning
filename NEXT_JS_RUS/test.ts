let a: number = 4;
const b: string = "sada";
const c = true;

let d: string[] = ["asdas, 322 ,'sad"];

let e: any = 3;

function test(a: string): string | string {
  return "";
}

const test2 = (a: number): number => {
  return a * 2;
};

d = d.map((x: string) => x.toLowerCase());

function countCoordinate(coord: { lat: number; long?: number }): void {}

function printIt(id: number | string) {
  if (typeof id === "number") console.log(id.toString());
  if (typeof id === "string") id.toLowerCase();
}

function gerSum(a: number | number[]) {
  if (Array.isArray(a)) return "";
}

interface IPoint {
  x: number;
  y: number;
}
interface I3DPoint extends IPoint {
  z: number;
}

type PointType = {
  x: number;
  y: number;
};

type D3PointType = PointType & {
  z: number;
};

type StringOrNum = string | number;

const cd = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
  return d;
};

const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

function print(coords: PointType) {}
function print3(coords: StringOrNum) {}

let newC: "test" = "test";

type ActionType = "up" | "down";

function performAction(action: ActionType | ComplexAction) {
  switch (action) {
    case "down":
      return -1;
    case "up":
      return 1;
  }
}
interface ComplexAction {
  s: string;
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Decision {
  Yes = 1,
  No = calcEnum(),
}

function calcEnum() {
  return 2;
}

function runEnum(obj: { Up: string }) {}

runEnum(Direction);

enum Test {
  A,
}

let testa = Test.A;
let nameA = Test[testa];

const enum ConstEnum {
  A,
  B,
}

let newCy = ConstEnum.A;

enum Dice {
  One = 1,
  Two,
  Three,
}

//Кордеж

const an: [number, string, number] = [0, "a", 1];

//Generics

function logTime<T>(num: T): T {
  if (typeof num === "string") num.toLocaleUpperCase();
  console.log(new Date());
  return num;
}

logTime<string>("0");

interface MyInterface {
  transform: <T, F>(a: T) => F;
}

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);
  return num;
}

//JSX
