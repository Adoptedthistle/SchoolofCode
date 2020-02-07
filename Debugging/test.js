const myp = document.querySelector("p");

try {
  if (myp === null) {
    throw new Error("no paragraph tag");
  }
  console.log("there is a paragraph");
} catch (err) {
  console.log(err);
}

//Test for doughnuts
try {
  if (myp.innerText === null) {
    throw new Error("no innerText");
  }
  console.log("there is content");
} catch (err) {
  console.log(err);
}

//Test for breakfast

try {
  if (myp.classlist === null) {
    throw new Error("no class defined");
  }
  console.log("there is a class defined");
} catch (err) {
  console.log(err);
}

//Test for hot pink
try {
  if (myp.style.color !== "hotpink") {
    throw new Error("no pink");
  }
  console.log("in the pink");
} catch (err) {
  console.log(err);
}
