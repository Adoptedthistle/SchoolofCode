console.warn("warning");

/*try {
  console.log("hello1");
  throw new Error("you messed up!");
} catch {
  console.log("id don't care what the error was");
}

console.log("hello2");

fetch("url").then(response);

//throw our own error and watch code die
//use try/catch block to catch our error
//try using .catch with fetch
//try using .catch on our setPromisyInterval*/

try {
  console.log("Yo hello");
  throw new Error("not a goer!");
} catch {
  console.log("hmm what was your mistake");
}

console.log("Yo hello2");

fetch("url")
  .then(response => response.json())
  .catch(function(error) {
    console.log(error);
  });
