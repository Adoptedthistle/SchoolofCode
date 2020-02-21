let string = "the dog sat on the log because he could not see though the fog";

function OgEnding(str) {
  let myRegex = /[a-zA-Z]og/gi;
  console.log(str.match(myRegex));
}

OgEnding(string);

console.log(myRegex.test(myString));
console.log(myString.match(myRegex));

//\w means alpha, \W means everything not
// \d means digit true (0-9)
// \s searches for a space, uppercase not for space
//match with everything you find (see below)
let myRegex = /./gi;
let myRegex = /\./gi;
// ? shows options eg. Ben or Benjamin
let myRegex = /?/gi;
let myRegex = /ben(jamin)?/gi;

//Add extra letters/characters (example)
let myString="banwooo"
let myRegex = /banwo+/gi

//Check what * asterik means 

//Matching and patterns

let myString="04.04.1993 07:00"
let myRegex = /\d\d\.\d\d\.\d\d\d\d\.\d\d\:\d\d\/gi


let myRegex =/\d{2}.\d{2}\.\d{4}\.\d{2}:\d{2}/gi
