// const User = {
//     name: 'John',
//     email: "a@a.io",
//     isActive: true,
// };

// function createUser({name, email, isActive}: {name: string, email: string, isActive?: boolean}) {} // This is a function that
// // takes an object with the same properties as User, but isActive is optional.

type User = {
  name: string;
  email: string;
  isActive?: boolean;
};

function createUser(user: User) {
  // create user
}

const user: User = {
  name: "John",
  email: "a.@a.io",
  isActive: true,
};

createUser(user); // This is valid
createUser({ name: "John", email: "a.@a.io" }); // This is valid
createUser({ name: "John", email: "a.@a.io", isActive: false }); // This is valid

createUser({ name: "John", email: "a.@a.io", isActive: false, age: 20 });
// This is invalid because age is not a property of User.

createUser({ name: "John", email: "a.@a.io" }); // This is valid because isActive is optional.

createUser({ name: "John", email: "a.@a.io", isActive: "false" }); // This is invalid because isActive is a boolean.

// Readonly properties
type User2 = {
  readonly id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const user2: User2 = {
  id: 1,
  name: "John",
  email: "a.@a.io",
  isActive: true,
};

user2.id = 2; // This is invalid because id is readonly.

// Mix
type User3 = {
  name: string;
  email: string;
  isActive: boolean;
  credCardNum?: number;
};

type cardNumber = {
  credCardNum: number;
};

type cardDate = {
  expDate: string;
};

type cardDetails = cardNumber & cardDate;
