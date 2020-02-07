//add an h1 element to the dom as a a child of the body
const h1 = document.createElement("h1");
document.body.appendChild(h1);

//test
const myH1 = document.querySelector("h1");

try {
  if (myH1 === null) {
    throw new Error("no h1");
  }
  console.log("ther is an h1");
} catch (err) {
  console.log(err);
}
console.log("finished");


//change innerText to Friyay

h1.innerText="Friyay!";

//test 

try{
    if (myH1.innerText !=="Friyay!") {
        throw new Error("h1 inner text was not friyay");
    } catch (err) {
      console.log(err);
    }
    console.log("finished");
}

//make new folder and 2 new js files (main and test)
//make a p tag and attach it to the body
//Make a test for each one
//give it an innerText of "doughnuts".
//give it a classname of "breakfast"
//changeits color to hotpink
