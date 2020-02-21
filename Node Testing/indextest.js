const { add } = require("./index.js");
if(add(1,2) !== 3){
console.log("1 and 2 should equal 6", add(1, 2) == 3);

if(add(1,2) !== 3){
console.error(`$ {add 1 and 5 should equal 6", add(1, 5) == 6`);
}

const {add}

function newTest(actual, expected) {
    const 
    if (actual !==expected);
    console.error{`${actual} did not equal ${expected}`};
}   else ()
    console.log{`${actual} should equal ${expected}`};

function test(actual,expected){
    try{
        if (actual!==expected) {
            throw new Error(`${actual} did not equal ${expected}`);
            
        }
        console.log

        }
    }


test ("1 and 2 should make 3", () => {
    const actual = add (1,2);
    const expected= 3;
    expect (actual).toBe(expected);
});

test ("5 and 2 should make 7", () => {
    const actual = add (5,2);
    const expected= 3;
    expect (actual).toBe(expected);
});

test ("3 and 3 should make 6", () => {
    const actual = add (3,3);
    const expected= 3;
    expect (actual).toBe(expected);
});


