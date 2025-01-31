// string
let greetings: string = "Hello Aaron"; // Explicit typed as string

// Number
let num: number = 5; // Explicitly typed as number

let myNum = 6; // Implicit typed as number

//boolean
let isTrue: boolean = true; // Explicitly typed as boolean

//Any

let hero;

function getHero() {
  return "Batman";
}

hero = getHero();
// we want to avoid using any explicity or implicitly,
// we should use the compiler flag noImplicitAny (tsconfig.json) to flag any implicit "any" as an error

export {}; // This tells the compiler that this file is a module and not a script. This is needed to avoid variable conflicts with other files.
