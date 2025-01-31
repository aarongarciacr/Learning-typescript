// Arrays
// 1. Create an array of strings
let myArray: string[] = ["Hello", "World"];
console.log(myArray);

// 2. Create an array of numbers
let myArray2: number[] = [1, 2, 3];
console.log(myArray2);

// 3. Create an array of booleans
let myArray3: boolean[] = [true, false];
console.log(myArray3);

// 4. Create an array of any type
let myArray4: any[] = [1, "Hello", true];
console.log(myArray4);

// 5. Create an array of objects
let myArray5: object[] = [{ name: "John" }, { name: "Doe" }];
console.log(myArray5);

// 6. Create an array of arrays
let myArray6: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(myArray6);

// 7. Create an array of tuples
let myArray7: [string, number] = ["Hello", 1];
console.log(myArray7);

// 8. Create an array of enums
enum Colors {
  Red,
  Green,
  Blue,
}

let myArray8: Colors[] = [Colors.Red, Colors.Green, Colors.Blue];
console.log(myArray8);

// 9. Create an array of functions
let myArray9: Function[] = [
  function () {
    console.log("Hello");
  },
];
console.log(myArray9);

// 10. Create an array of classes
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let myArray10: Person[] = [new Person("John"), new Person("Doe")];
console.log(myArray10);

// 11. Create an array of interfaces
interface PersonInterface {
  name: string;
}

let myArray11: PersonInterface[] = [{ name: "John" }, { name: "Doe" }];
console.log(myArray11);

// 12. Create an array of type alias
type PersonType = {
  name: string;
};

let myArray12: PersonType[] = [{ name: "John" }, { name: "Doe" }];
console.log(myArray12);

// 13. Create an array of generics
let myArray13: Array<string> = ["Hello", "World"];
console.log(myArray13);

// 14. Create an array of unknown
let myArray14: unknown[] = [1, "Hello", true];
console.log(myArray14);

// 15. Create an array of never
let myArray15: never[] = [];
console.log(myArray15);

// 16. Create an array of null
let myArray16: null[] = [null];
console.log(myArray16);

// 17. Create an array of undefined
let myArray17: undefined[] = [undefined];
console.log(myArray17);

// 18. Create an array of void
let myArray18: void[] = [];
console.log(myArray18);
