let score: number | string = 33;

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

let aaron: User | Admin = { name: "Aaron", age: 33 };
let jane: User | Admin = { name: "Jane", age: 33, role: "Admin" };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed();
  }
}

//Array
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["a", "b", "c", "d", "e"];
let arr3: (number | string)[] = [1, "a", 2, "b", 3, "c"];
