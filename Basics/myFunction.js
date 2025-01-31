"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5);
addTwo("5");
function addTwoTS(num) {
    num.toUpperCase();
    return num + 2;
}
addTwoTS(5);
addTwoTS("5");
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(5); // No error when passing a number
function getUpperTS(val) {
    return val.toUpperCase();
}
getUpperTS(5);
function signUpUser(name, email, isPaid) {
    // Sign up user
}
signUpUser(1, 2, 3);
signUpUser("aaron", 2, 3);
signUpUser("aaron", "mail@io", 3);
signUpUser("aaron", "mail@.io", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // Default value for isPaid so it is optional
loginUser("h", "a@a");
