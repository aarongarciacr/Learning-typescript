// const User = {
//     name: 'John',
//     email: "a@a.io",
//     isActive: true,
// };
function createUser(user) {
    // create user
}
var user = {
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
var user2 = {
    id: 1,
    name: "John",
    email: "a.@a.io",
    isActive: true,
};
user2.id = 2; // This is invalid because id is readonly.
