"use strict";
// class User {
//     public email: string;
//     name: string;
//     private readonly city: string = "Monterrey";
//     constructor(email: string, name: string) {
//       this.email = email;
//       this.name = name;
//     }
//   }
class User2 {
    constructor(email, name, useId) {
        this.email = email;
        this.useId = useId;
        //   private _courseCount = 1; // Accessible only within this class
        this._courseCount = 1; // accessible within this class and any other class that extends from this one
        this.city = "monterrey";
    }
    deleteToke() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const aaron = new User2("a@a.io", "aaron");
aaron.city;
