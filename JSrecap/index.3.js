//Friday recap

var person = name;

function greeter(name) {
  return `Hello ${name}`;
}

greeter("Sarah");
let hello = greeter("Sarah");
console.log(hello);

//Create a new array of names and greetings

const arrayNames = ["Agnes", "Angus", "Hector", "Mortimor", "Tegan"];

//Example 1

let greetedNames = arrayNames.map(greeter);

//Or alternatively use an inline function

const greetingNames = arrayNames.map(function(names) {
  return `hello  + ${name}`;
});

//or
//Note: Fat arrows with implicit return (no body = no curly brackets!)

let greetedNames = arrayOfNames.map(name => `fat arrow ${name}`);

//fat arrows with explicit return

let greetedNames = arrayOfNames.map(name => {
  return `fat arrow ${name}`;
});
