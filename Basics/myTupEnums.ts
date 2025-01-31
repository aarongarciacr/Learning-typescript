const user: [string, number] = ["John", 30]; // this is a tuple type with two elements of type string and number respectively
// user = [30, 'John']; // Error: Type 'number' is not assignable to type 'string'
console.log(user[0]); // John
console.log(user[1]); // 30
