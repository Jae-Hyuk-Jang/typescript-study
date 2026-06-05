// 배열
let number: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true];

let multiArr: (number | string)[] = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// tuple -> 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
